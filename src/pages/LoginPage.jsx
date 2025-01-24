// "use client";
// // import MainLayout from "@/Layout/MainLayout";
// import React, { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import useLoggedUser from "@/Hooks/useLoggedUser";
// // import SocialLogin from "@/components/SocialLogin/SocialLogin";
// // import SocialLogin from "@/Components/SocialLogin/SocialLogin";

// const LoginPage = () => {
//   const { register, handleSubmit } = useForm();
//   const router = useRouter();
//   const { user, status } = useLoggedUser();
//   console.log(user, status);
//   const authenticated = status === "authenticated";

//   if (authenticated) {
//     router.push("/");
//   }

//   const onSubmit = (data) => {
//     const email = data.email;
//     const password = data.password;

//     const res = signIn("credentials", {
//       email,
//       password,
//       redirect: false,
//     });
//   };
//   return (
//     <>
//       <div className="min-h-screen flex justify-center flex-col items-center">
//         <h1 className={"text-2xl font-bold py-12"}>Please Login</h1>
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className=" lg:w-1/3 w-[80%] shadow-lg p-8 rounded-xl backdrop-blur-lg"
//         >
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text text-white">Email</span>
//             </label>
//             <input
//               {...register("email", { required: true })}
//               type="email"
//               placeholder="email"
//               className="input input-bordered text-black"
//             />
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text text-white">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="password"
//               className="input input-bordered text-black"
//               {...register("password", { required: true })}
//             />
//             <label className="label">
//               <a href="#" className="label-text-alt link link-hover text-white">
//                 Forgot password?
//               </a>
//             </label>
//           </div>
//           <div className="form-control mt-6">
//             <button className="btn btn-primary">Login</button>
//           </div>
//         </form>
//         <div className={"divider w-1/4 mx-auto"}>Or Login With</div>
//         {/* <SocialLogin></SocialLogin> */}
//       </div>
//     </>
//   );
// };

// export default LoginPage;

// "use client";  // Add this to make sure the component is client-side

// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import useLoggedUser from "@/Hooks/useLoggedUser";

// const LoginPage = () => {
//   const { register, handleSubmit } = useForm();
//   const router = useRouter();
//   const [isClient, setIsClient] = useState(false);  // State to track if we are on the client side
//   const [isSubmitting, setIsSubmitting] = useState(false);  // Track the form submission state
//   const [errorMessage, setErrorMessage] = useState("");  // Track login errors

//   const { user, status } = useLoggedUser();  // Get user info and authentication status

//   // Ensure useSession is only called on the client side
//   useEffect(() => {
//     setIsClient(true);  // Set to true once the component is mounted on the client side
//   }, []);

//   const authenticated = status === "authenticated";

//   // Redirect to home if already authenticated
//   useEffect(() => {
//     if (authenticated) {
//       router.push("/");  // Redirect to homepage if authenticated
//     }
//   }, [authenticated, router]);

//   const onSubmit = async (data) => {
//     setIsSubmitting(true);  // Start submitting
//     setErrorMessage("");  // Reset error message
//     const { email, password } = data;

//     const res = await signIn("credentials", {
//       email,
//       password,
//       redirect: false,
//     });

//     if (res?.error) {
//       setErrorMessage(res.error);  // Set error message if login fails
//     } else {
//       router.push("/");  // Redirect to homepage on successful login
//     }
//     setIsSubmitting(false);  // Stop submitting
//   };

//   // Prevent rendering until client side is ready
//   if (!isClient) {
//     return null;  // Optionally render a loading spinner or a skeleton loader
//   }

//   return (
//     <div className="min-h-screen flex justify-center flex-col items-center">
//       <h1 className="text-2xl font-bold py-12">Please Login</h1>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="lg:w-1/3 w-[80%] shadow-lg p-8 rounded-xl backdrop-blur-lg"
//       >
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text text-white">Email</span>
//           </label>
//           <input
//             {...register("email", { required: true })}
//             type="email"
//             placeholder="email"
//             className="input input-bordered text-black"
//           />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text text-white">Password</span>
//           </label>
//           <input
//             type="password"
//             placeholder="password"
//             className="input input-bordered text-black"
//             {...register("password", { required: true })}
//           />
//           <label className="label">
//             <a href="#" className="label-text-alt link link-hover text-white">
//               Forgot password?
//             </a>
//           </label>
//         </div>
//         {errorMessage && (
//           <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
//         )}
//         <div className="form-control mt-6">
//           <button className="btn btn-primary" disabled={isSubmitting}>
//             {isSubmitting ? "Logging in..." : "Login"}
//           </button>
//         </div>
//       </form>
//       <div className="divider w-1/4 mx-auto">Or Login With</div>
//       {/* Add your SocialLogin component here */}
//     </div>
//   );
// };

// export default LoginPage;


// "use client"; // Ensure that the component is only rendered on the client

// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import useLoggedUser from "@/Hooks/useLoggedUser"; // Custom hook to manage user session

// const LoginPage = () => {
//   const { register, handleSubmit } = useForm();
//   const router = useRouter();
//   const [isClient, setIsClient] = useState(false); // Track if we're on the client side
//   const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission state
//   const [errorMessage, setErrorMessage] = useState(""); // Track login errors

//   const { user, status } = useLoggedUser(); // Get user info and authentication status

//   // Set isClient to true once the component is mounted on the client side
//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   // Ensure that we don’t try to access the session before the component is mounted
//   const authenticated = status === "authenticated";

//   // Redirect to home if already authenticated
//   useEffect(() => {
//     if (authenticated) {
//       router.push("/"); // Redirect to homepage if authenticated
//     }
//   }, [authenticated, router]);

//   const onSubmit = async (data) => {
//     setIsSubmitting(true); // Start submitting the form
//     setErrorMessage(""); // Reset error message
//     const { email, password } = data;

//     const res = await signIn("credentials", {
//       email,
//       password,
//       redirect: false,
//     });

//     if (res?.error) {
//       setErrorMessage(res.error); // Set error message if login fails
//     } else {
//       router.push("/"); // Redirect to homepage on successful login
//     }
//     setIsSubmitting(false); // Stop submitting
//   };

//   // Prevent rendering until client-side is ready
//   if (!isClient) {
//     return null; // Optionally render a loading spinner or skeleton loader
//   }

//   return (
//     <div className="min-h-screen flex justify-center flex-col items-center">
//       <h1 className="text-2xl font-bold py-12">Please Login</h1>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="lg:w-1/3 w-[80%] shadow-lg p-8 rounded-xl backdrop-blur-lg"
//       >
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text text-white">Email</span>
//           </label>
//           <input
//             {...register("email", { required: true })}
//             type="email"
//             placeholder="email"
//             className="input input-bordered text-black"
//           />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text text-white">Password</span>
//           </label>
//           <input
//             type="password"
//             placeholder="password"
//             className="input input-bordered text-black"
//             {...register("password", { required: true })}
//           />
//           <label className="label">
//             <a href="#" className="label-text-alt link link-hover text-white">
//               Forgot password?
//             </a>
//           </label>
//         </div>

//         {errorMessage && (
//           <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
//         )}
//         <div className="form-control mt-6">
//           <button className="btn btn-primary" disabled={isSubmitting}>
//             {isSubmitting ? "Logging in..." : "Login"}
//           </button>
//         </div>
//       </form>

//       <div className="divider w-1/4 mx-auto">Or Login With</div>
//       {/* Add your SocialLogin component here */}
//     </div>
//   );
// };

// export default LoginPage;

//last try

"use client";  // Explicitly mark this as a client-side component

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import useLoggedUser from "@/Hooks/useLoggedUser";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false); // State to track if the component has mounted
  const { user, status } = useLoggedUser();  // Only use `useLoggedUser` once the component is client-side
  const [isSubmitting, setIsSubmitting] = useState(false);  // Track submission state
  const [errorMessage, setErrorMessage] = useState("");  // Track error messages

  useEffect(() => {
    setIsClient(true);  // Set to true once the component is mounted (client-side)
  }, []);

  const authenticated = status === "authenticated";

  useEffect(() => {
    if (authenticated) {
      router.push("/"); // Redirect to homepage if authenticated
    }
  }, [authenticated, router]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setErrorMessage(""); // Reset errors before submission

    const { email, password } = data;
    const res = await signIn("credentials", { email, password, redirect: false });

    if (res?.error) {
      setErrorMessage(res.error);  // Handle login error
    } else {
      router.push("/"); // Redirect to homepage on successful login
    }
    setIsSubmitting(false);
  };

  // Ensure we only render once we're client-side
  if (!isClient) {
    return null; // Optionally show a loading spinner or skeleton loader
  }

  return (
    <div className="min-h-screen flex justify-center flex-col items-center">
      <h1 className="text-2xl font-bold py-12">Please Login</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:w-1/3 w-[80%] shadow-lg p-8 rounded-xl backdrop-blur-lg"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="email"
            className="input input-bordered text-black"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered text-black"
            {...register("password", { required: true })}
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-white">
              Forgot password?
            </a>
          </label>
        </div>
        {errorMessage && <div className="text-red-500 text-sm mt-2">{errorMessage}</div>}
        <div className="form-control mt-6">
          <button className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>
      <div className="divider w-1/4 mx-auto">Or Login With</div>
    </div>
  );
};

export default LoginPage;


