// "use client";
// import { signIn, useSession } from "next-auth/react";
// import { useSearchParams, useRouter } from "next/navigation";
// import React from "react";
// import { FaGoogle } from "react-icons/fa";

// const SocialLogin = () => {
//   const session = useSession();
//   const searchParams = useSearchParams();
//   const path = searchParams.get("redirect");
//   const router = useRouter();
//   const handleSocialLogin = (provider) => {
//     const resp = signIn(provider, {
//       redirect: false,
//       callbackUrl: path ? path : "/",
//     });
//   };
//   if (session.status === "authenticated") {
//     router.push("/");
//   }
//   return (
//     <div className="flex justify-center gap-6 my-6 text-3xl">
//       <div
//         onClick={() => handleSocialLogin("google")}
//         className="btn text-2xl btn-circle"
//       >
//         <FaGoogle />
//       </div>
     
     
//     </div>
//   );
// };

// export default SocialLogin;

"use client";
import { signIn, useSession } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const session = useSession();
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect");
  const router = useRouter();

  const handleSocialLogin = (provider) => {
    signIn(provider, {
      redirect: false,
      callbackUrl: path ? path : "/",
    });
  };

  // Using useEffect to avoid the direct update within the render
  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/");
    }
  }, [session.status, router]);

  return (
    <div className="flex justify-center gap-6 my-6 text-3xl">
      <div
        onClick={() => handleSocialLogin("google")}
        className="btn text-2xl btn-circle"
      >
        <FaGoogle />
      </div>
    </div>
  );
};

export default SocialLogin;
