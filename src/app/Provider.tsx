/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useLayout } from "@/hooks/zustand/layout";
import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export function Provider({ children }: { children: React.ReactNode }) {
  const {
    isLoading,
    isError,
    setError,
    isSuccess,
    setIsSuccess,
    isMessage,
    // setPermissions,
  } = useLayout();
  useEffect(() => {
    if (isSuccess && isMessage) {
      toast.success(isMessage);
      setIsSuccess(false, "");
    }
    if (isError && isMessage) {
      toast.error(isMessage);
      setError(false, "");
    }
    //  if (token) {
    //    getMe();
    //  }
  }, [isSuccess, isError, isLoading]);
  return (
    <>
      <Toaster />
      {children}
    </>
  );
}
