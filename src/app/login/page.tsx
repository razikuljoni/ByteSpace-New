import { Metadata } from "next";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthCard } from "@/components/auth/AuthCard";

export const metadata: Metadata = {
  title: "Sign In - ByteSpace",
  description:
    "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
};

export default function LoginPage() {
  return (
    <AuthLayout
      title="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <AuthCard mode="login" />
    </AuthLayout>
  );
}
