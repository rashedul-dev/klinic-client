"use server";

import z from "zod";

const registerValidationZodSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(100, { message: "Password must be at most 100 characters long" }),
});
export const registerPatinet = async (_currentState: any, formData: FormData): Promise<any> => {
  try {
    const validatedData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    
    const validatedFields = registerValidationZodSchema.safeParse(validatedData);

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

    const registerData = {
      password: formData.get("password"),
      patient: {
        name: formData.get("name"),
        email: formData.get("email"),
      },
    };

    // Create FormData and append the stringified data
    const newFormData = new FormData();
    newFormData.append("data", JSON.stringify(registerData));

    const res = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/user/create-patient`, {
      method: "POST",
      body: newFormData,
    });

    const data = await res.json();
    console.log(data, "res");
    return data;
  } catch (error) {
    console.log("Patient Registering Error", error);
    return {
      error: "Patient Registering Failed",
    };
  }
};
