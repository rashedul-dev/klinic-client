"use server";

import { parse } from "cookie";
import { cookies } from "next/headers";
import z from "zod";
import { fi } from "zod/locales";

const loginValidationZodSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(100, { message: "Password must be at most 100 characters long" }),
});

export const loginUser = async (_currentState: any, formData: FormData): Promise<any> => {
  let accessTokenObject: null | any = null;
  let refreshTokenObject: null | any = null;

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
    });

    // JSON response body - contain user data and tokens
    const result = await res.json();

    const setCookieHeaders = res.headers.getSetCookie();
    if (setCookieHeaders && setCookieHeaders.length > 0) {
      setCookieHeaders.forEach((cookie: string) => {
        const parsedCookie = parse(cookie);

        if (parsedCookie["accessToken"]) {
          accessTokenObject = parsedCookie;
        }
        if (parsedCookie["refreshToken"]) {
          refreshTokenObject = parsedCookie;
        }
      });
    } else {
      // No Cookie on Headres
      throw new Error("No set-cookie header found");
    }

    // Check both token exist
    if (!accessTokenObject && !refreshTokenObject) {
      throw new Error("Token not Found");
    }

    const cookieStore = await cookies();

    cookieStore.set("accessToken", accessTokenObject.accessToken, {
      httpOnly: true,
      maxAge: parseInt(accessTokenObject.maxAge) || 1000 * 60 * 60,
      path: accessTokenObject.path || "/",
      secure: true,
      sameSite: accessTokenObject.sameSite || "none",
    });

    // Set access token on the server side cookie store
    cookieStore.set("refreshToken", refreshTokenObject.refreshToken, {
      httpOnly: true,
      maxAge: parseInt(refreshTokenObject.maxAge) || 1000 * 60 * 60 * 24 * 90,
      path: refreshTokenObject.path || "/",
      secure: true,
      sameSite: refreshTokenObject.sameSite || "none",
    });

    console.log({ res, result });

    // return the JSON response so that req can handle redirection or other logic
    return result;
  } catch (error) {
    console.log("Login Error", error);
    return {
      error: "Login Failed",
    };
  }
};
