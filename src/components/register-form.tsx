"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import { CardContent, CardFooter } from "./ui/card";
import { Field, FieldLabel } from "./ui/field";
import { useActionState } from "react";
import Link from "next/link";
import { registerPatinet } from "@/services/auth/registerPatient";
import { error } from "console";

const RegisterForm = () => {
  const [state, formAction, isPending] = useActionState(registerPatinet, null);
  console.log("state:", state);

  const getFieldError = (fieldName: string) => {
    if (state && state.errors) {
      const fieldError = state.errors.find((error: any) => error.field === fieldName);
      if (fieldError) {
        return fieldError.message;
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

  return (
    <div>
      <form action={formAction}>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline">
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </Button>
            <Button variant="outline">
              <Github className="mr-2 h-4 w-4" /> Github
            </Button>
          </div>
          <div className="relative my-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <div className="grid gap-2">
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input id="name" name="name" type="text" placeholder="John Doe" />
              {getFieldError("name") && <p className="text-sm text-red-500 mt-1">{getFieldError("name")}</p>}
            </Field>
          </div>
          <div className="grid gap-2">
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input id="email" name="email" type="email" placeholder="user@example.com" />
              {getFieldError("email") && <p className="text-sm text-red-500 mt-1">{getFieldError("email")}</p>}
            </Field>
          </div>
          <div className="grid gap-2">
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input id="password" name="password" type="password" placeholder="Enter Your Password" />
              {getFieldError("password") && <p className="text-sm text-red-500 mt-1">{getFieldError("password")}</p>}
            </Field>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 mt-4">
          <Field>
            <Button
              type="submit"
              disabled={isPending}
              className="w-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
            >
              {isPending ? "Creating Account..." : "Create Account"}
            </Button>
          </Field>
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 underline font-medium">
              Login
            </Link>
          </p>
        </CardFooter>
      </form>
    </div>
  );
};

export default RegisterForm;
