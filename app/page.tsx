"use client";
import React, { Suspense, useEffect } from "react";
import classNames from "classnames";
import styles from "./page.module.css";
import {
  GithubProviderButton,
  GoogleProviderButton,
} from "./Components/Auth/ButtonProvider/ButtonProvider";
import { Toaster, toast } from "sonner";
import { useSearchParams } from "next/navigation";

const Page = () => {
  return (
    <Suspense>
      <PageContent />
    </Suspense>
  );
};

export default Page;

const PageContent = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("error") === "unauthenticated") {
      toast.error("Vous devez vous connecter pour accéder à cette page");
    }
  });
  return (
    <>
      <Toaster position="top-center" richColors closeButton />
      <div className={classNames(styles.container)}>
        <section className={classNames(styles.loginSection)}>
          <GoogleProviderButton />
          <GithubProviderButton />
        </section>
      </div>
    </>
  );
};
