"use client";
import { SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

const AuthWrapper = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthWrapper;
