"use client"
import { useSession } from "next-auth/react";

const useLoggedUser = () => {
  const { data: session, status } = useSession();

  return {
    user: session?.user,
    
    status,
  };
};

export default useLoggedUser;