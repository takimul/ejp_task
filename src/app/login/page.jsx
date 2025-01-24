// "use client";
// // import MainLayout from "@/Layout/MainLayout";
// import React, { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { signIn, useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import SocialLogin from "@/components/SocialLogin/SocialLogin";
// // import useLoggedUser from "@/Hooks/useLoggedUser";
// // import SocialLogin from "@/components/SocialLogin/SocialLogin";
// // import SocialLogin from "@/Components/Shared/SocialLogin/SocialLogin";

// const LoginPage = () => {
//   const { register, handleSubmit } = useForm();
//   const router = useRouter();
// //   const { user, isAdmin, status } = useLoggedUser();
// // //   console.log(user, isAdmin, status);
// // //   const authenticated = status === "authenticated";

// // //   if (authenticated) {
// // //     router.push("/");
// // //   }

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
//         <SocialLogin></SocialLogin>
//       </div>
//     </>
//   );
// };

// export default LoginPage;

    // "use client";  // Explicitly mark this as client-side

    // import React, { useEffect, useState } from "react";
    // import { useForm } from "react-hook-form";
    // import { signIn } from "next-auth/react";
    // import { useRouter } from "next/navigation";

    // // Custom hook for handling authentication
    // const useLoggedUser = () => {
    // const [isClient, setIsClient] = useState(false); // Track client-side rendering
    // const [user, setUser] = useState(null);  // Track the user state
    // const [status, setStatus] = useState("loading"); // Track the status of authentication

    // // useEffect to ensure this code runs only on the client side
    // useEffect(() => {
    //     setIsClient(true); // Set client-side flag
    //     // Simulate a check for user session here
    //     const checkUserSession = async () => {
    //     const session = await fetch("/api/auth/session").then(res => res.json()); // Fetch session info from API
    //     if (session?.user) {
    //         setUser(session.user);
    //         setStatus("authenticated");
    //     } else {
    //         setStatus("unauthenticated");
    //     }
    //     };
    //     checkUserSession();
    // }, []);

    // return { user, status };
    // };

    // const LoginPage = () => {
    // const { register, handleSubmit } = useForm();
    // const router = useRouter();
    // const [isSubmitting, setIsSubmitting] = useState(false);
    // const [errorMessage, setErrorMessage] = useState("");

    // const { user, status } = useLoggedUser();  // Get user status

    // useEffect(() => {
    //     if (status === "authenticated") {
    //     router.push("/"); // Redirect to home if authenticated
    //     }
    // }, [status, router]);

    // const onSubmit = async (data) => {
    //     setIsSubmitting(true);
    //     setErrorMessage(""); // Reset error message

    //     const { email, password } = data;
    //     const res = await signIn("credentials", { email, password, redirect: false });

    //     if (res?.error) {
    //     setErrorMessage(res.error);  // Handle login error
    //     } else {
    //     router.push("/"); // Redirect to homepage on successful login
    //     }
    //     setIsSubmitting(false);
    // };

    // // Ensure that the page only renders on the client side
    // if (status === "loading") {
    //     return null; // Optionally show a loading spinner or skeleton loader
    // }

    // return (
    //     <div className="min-h-screen flex justify-center flex-col items-center">
    //     <h1 className="text-2xl font-bold py-12">Please Login</h1>
    //     <form
    //         onSubmit={handleSubmit(onSubmit)}
    //         className="lg:w-1/3 w-[80%] shadow-lg p-8 rounded-xl backdrop-blur-lg"
    //     >
    //         <div className="form-control">
    //         <label className="label">
    //             <span className="label-text text-white">Email</span>
    //         </label>
    //         <input
    //             {...register("email", { required: true })}
    //             type="email"
    //             placeholder="email"
    //             className="input input-bordered text-black"
    //         />
    //         </div>
    //         <div className="form-control">
    //         <label className="label">
    //             <span className="label-text text-white">Password</span>
    //         </label>
    //         <input
    //             type="password"
    //             placeholder="password"
    //             className="input input-bordered text-black"
    //             {...register("password", { required: true })}
    //         />
    //         <label className="label">
    //             <a href="#" className="label-text-alt link link-hover text-white">
    //             Forgot password?
    //             </a>
    //         </label>
    //         </div>
    //         {errorMessage && <div className="text-red-500 text-sm mt-2">{errorMessage}</div>}
    //         <div className="form-control mt-6">
    //         <button className="btn btn-primary" disabled={isSubmitting}>
    //             {isSubmitting ? "Logging in..." : "Login"}
    //         </button>
    //         </div>
    //     </form>
    //     <div className="divider w-1/4 mx-auto">Or Login With</div>
    //     </div>
    // );
    // };

    // export default LoginPage;

    "use client";  // Explicitly mark this as client-side

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

// Custom hook for handling authentication
import { useSession } from "next-auth/react";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { data: session, status } = useSession();  // Use built-in useSession

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/"); // Redirect to home if authenticated
    }
  }, [status, router]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setErrorMessage(""); // Reset error message

    const { email, password } = data;
    const res = await signIn("credentials", { email, password, redirect: false });

    if (res?.error) {
      setErrorMessage(res.error);  // Handle login error
    } else {
      router.push("/"); // Redirect to homepage on successful login
    }
    setIsSubmitting(false);
  };

  // Ensure that the page only renders on the client side
  if (status === "loading") {
    return <div>Loading...</div>; // Optionally show a loading spinner or skeleton loader
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
