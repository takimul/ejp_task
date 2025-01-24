import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import { connectDb } from "@/services/connectDB";
// import { connectDb } from "@/Services/connectDb";

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 60 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        // const user = await verifyUser(credentials);
        // console.log(user);
        const { email, password } = credentials;
        // console.log(email, password);
        // console.log(email, password);
        if (!email || !password) {
          return null;
        }
        const db = await connectDb();
        const currentUser = await db
          .collection("usersCollection")
          .findOne({ email });
        console.log(currentUser);
        if (!currentUser) {
          return null;
        }
        
        const matchedPassword = password === currentUser.password;
        if (!matchedPassword) {
          return null;
        }

        return { ...currentUser, role: currentUser.role || "client" };
      },
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
  
    
  ],
  

  callbacks: {
    async signIn({ user, account, profile, email }) {
      if (
        account.provider === "google"
      ) {
        const { email } = user;
        try {
          const db = await connectDb();
          const userCollection = db.collection("usersCollection");

          // Check if the user already exists
          const existingUser = await userCollection.findOne({ email });
          if (!existingUser) {
            // If the user does not exist, insert them into the database with a default role
            await userCollection.insertOne({
              ...user,
              role: "client",  // Assign default role
            });
            user.role = "client";  // Set role for the current session
          } else {
            // If the user exists, get their role
            user.role = existingUser.role || "client";  // Set role for the current session
          }

          return true; // Proceed with sign in
        } catch (error) {
          console.log("Error in signIn callback:", error);
          return false; // Reject sign in
        }
      }

      return true; // Proceed with sign in for credentials provider
    },
    
    async jwt({ token, user }) {
      // If a user object exists (i.e., the user just logged in), assign the role
      if (user) {
        token.role = user.role;
      }
      return token;
    },

    async session({ session, token }) {
      // Attach role to session from the token
      if (token) {
        session.user.role = token.role;
      }
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };