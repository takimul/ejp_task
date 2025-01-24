// "use client"
// import { useSession } from "next-auth/react";

// const useLoggedUser = () => {
//   const { data: session, status } = useSession();

//   return {
//     user: session?.user,
    
//     status,
//   };
// };

// export default useLoggedUser;

//fix for not going to profile in vercel

"use client";  // Ensures this runs on the client-side only

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const useLoggedUser = () => {
  const { data: session, status } = useSession();
  const [isClient, setIsClient] = useState(false);  // Track if we're on the client-side

  useEffect(() => {
    setIsClient(true);  // This will be true after component mounts on the client
  }, []);

  if (!isClient) {
    return { user: null, status: "loading" };  // Avoid rendering on the server
  }

  return {
    user: session?.user,
    status,
  };
};

export default useLoggedUser;
