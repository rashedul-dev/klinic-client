"use server";

import z from "zod";

const loginValidationZodSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(100, { message: "Password must be at most 100 characters long" }),
});

export const loginUser = async (_currentState: any, formData: FormData): Promise<any> => {
  try {
    const loginData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const validatedFields = loginValidationZodSchema.safeParse(loginData);
    if (!validatedFields.success) {
      return {
        success: false,
        errors: validatedFields.error.issues.map((issue) => {
          return {
            field: issue.path[0],
            message: issue.message,
          };
        }),
      };
    }

    console.log("Sending login data:", loginData);

    const res = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Send as JSON
      },
      body: JSON.stringify(loginData), // Stringify the object
    }).then((res) => res.json());
    return res;
  } catch (error) {
    console.log("Login Error", error);
    return {
      error: "Login Failed",
    };
  }
};
