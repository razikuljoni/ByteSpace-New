"use client";

import { useState } from "react";
import Link from "next/link";

interface AuthCardProps {
  mode: "login" | "register";
}

export function AuthCard({ mode }: AuthCardProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isLogin = mode === "login";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="xs:p-7 w-full max-w-[480px] rounded-2xl bg-white p-5 shadow-2xl ring-1 ring-black/5 sm:rounded-[36px] sm:p-10 md:p-11">
      {/* Category Tag */}
      <span className="font-sans text-xs font-semibold tracking-normal text-[#003BE2] sm:text-sm">
        {isLogin ? "Sign In" : "Create an Account"}
      </span>

      {/* Main Heading */}
      <h2 className="font-heading xs:text-3xl mt-2 mb-6 text-2xl font-bold tracking-tight text-neutral-950 sm:mb-7 sm:text-4xl">
        {isLogin ? "Welcome Back" : "Welcome to ByteSpace"}
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Full Name Field (Register only) */}
        {!isLogin && (
          <div>
            <label
              htmlFor="fullName"
              className="mb-2 block font-sans text-sm font-medium text-neutral-800"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Jamie Davis"
              required
              className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 font-sans text-sm text-neutral-900 transition-all placeholder:text-neutral-400 focus:border-transparent focus:ring-2 focus:ring-[#003BE2] focus:outline-none"
            />
          </div>
        )}

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block font-sans text-sm font-medium text-neutral-800"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="designer@example.com"
            required
            className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 font-sans text-sm text-neutral-900 transition-all placeholder:text-neutral-400 focus:border-transparent focus:ring-2 focus:ring-[#003BE2] focus:outline-none"
          />
        </div>

        {/* Password Field */}
        <div>
          <label
            htmlFor="password"
            className="mb-2 block font-sans text-sm font-medium text-neutral-800"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
            className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 font-sans text-sm text-neutral-900 transition-all placeholder:text-neutral-400 focus:border-transparent focus:ring-2 focus:ring-[#003BE2] focus:outline-none"
          />
        </div>

        {/* Right-Aligned Action Button */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="rounded-full bg-[#CBFC01] px-8 py-3 font-sans text-sm font-semibold text-neutral-950 shadow-xs transition-all hover:bg-[#CBFC01]/90 active:scale-95"
          >
            {isLogin ? "Sign In" : "Continue"}
          </button>
        </div>
      </form>

      {/* Social Logins (Login only) */}
      {isLogin && (
        <>
          <div className="relative my-7 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-200" />
            </div>
            <span className="relative bg-white px-4 font-sans text-xs font-normal text-neutral-400">
              or
            </span>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Sign in with Facebook"
              className="flex h-13 w-13 cursor-pointer items-center justify-center rounded-2xl border border-neutral-200 bg-white text-neutral-900 transition-colors hover:border-neutral-300 hover:bg-neutral-50"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Sign in with Google"
              className="flex h-13 w-13 cursor-pointer items-center justify-center rounded-2xl border border-neutral-200 bg-white text-neutral-900 transition-colors hover:border-neutral-300 hover:bg-neutral-50"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.053 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
              </svg>
            </button>
          </div>
        </>
      )}

      {/* Switch Link */}
      <div
        className={`${isLogin ? "mt-8" : "mt-10"} text-center font-sans text-xs text-neutral-600 sm:text-sm`}
      >
        <span>{isLogin ? "New user? " : "Already have an account? "}</span>
        <Link
          href={isLogin ? "/register" : "/login"}
          className="font-medium text-[#003BE2] transition-colors hover:underline"
        >
          {isLogin ? "Create an account" : "Login"}
        </Link>
      </div>
    </div>
  );
}
