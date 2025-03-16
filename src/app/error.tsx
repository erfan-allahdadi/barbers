"use client";

import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();

  useEffect(() => {
    console.error("خطای سرور:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white shadow-md rounded-lg max-w-lg w-full">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          خطای داخلی سرور
        </h1>
        <p className="text-lg mb-6">
          متاسفانه مشکلی پیش آمده است. لطفاً دوباره تلاش کنید.
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
        >
          تلاش مجدد
        </button>
        <button
          onClick={() => router.push("/")}
          className="mt-4 px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none"
        >
          بازگشت به صفحه اصلی
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
