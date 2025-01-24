// import { cookies } from "next/headers";
// import { NextResponse } from "next/server";

// // This function can be marked `async` if using `await` inside
// export const middleware = async (request) => {
//   const token = cookies(request).get("next-auth.session-token");
//   const pathname = request.nextUrl.pathname;
//   console.log(token);

//   if (pathname.includes("api")) {
//     return NextResponse.next();
//   }
//   if (!token) {
//     return NextResponse.redirect(
//       new URL(`/login?redirect=${pathname}`, request.url)
//     );
//   }
//   return NextResponse.next();
// };

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: ["/profile"],
// };

//for profile

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// This function can be marked `async` to handle async operations inside
export const middleware = async (request) => {
  // Await the cookies call for Edge runtime
  const cookieStore = await cookies();  // `await` here to fix the error
  const token = cookieStore.get("next-auth.session-token");
  const pathname = request.nextUrl.pathname;

  console.log(token);

  // Skip API requests
  if (pathname.includes("api")) {
    return NextResponse.next();
  }

  // If there's no token, redirect to the login page
  if (!token) {
    return NextResponse.redirect(
      new URL(`/login?redirect=${pathname}`, request.url)
    );
  }

  // Proceed to the requested path
  return NextResponse.next();
};

// Define paths where the middleware should be applied
export const config = {
  matcher: ["/profile"],  // Apply to specific pages like /profile
};


