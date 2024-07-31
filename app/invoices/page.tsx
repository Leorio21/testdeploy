import React from "react";
import Invoices from "../Components/Invoices/Invoices";
import { auth } from "@/lib/auth";

const page = async () => {
  const session = await auth();
  console.log(session?.user);
  console.log(process.env.API_URL);
  return <Invoices />;
};

export default page;
