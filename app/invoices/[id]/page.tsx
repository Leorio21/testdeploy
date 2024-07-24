"use client";
import React from "react";
import InvoiceDetail from "@/app/Components/InvoiceDetail/InvoiceDetail";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams<{ id: string }>();
  return <InvoiceDetail id={params.id} />;
};

export default Page;
