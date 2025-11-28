"use server";

import { getCookie } from "@/services/auth/tokenhandler";
import { UserInfo } from "@/types/user.interface";
import jwt, { JwtPayload } from "jsonwebtoken";

export const getUserinfo = async (): Promise<UserInfo | null> => {
  try {
    const accessToken = await getCookie("accessToken");

    if (!accessToken) {
      return null;
    }

    const verifiedToken = jwt.verify(accessToken, process.env.JWT_SECRET as string) as JwtPayload;

    if (!verifiedToken) {
      return null;
    }
    const userInfo: UserInfo = {
      name: (verifiedToken as any).name || "Unknown User",
      email: (verifiedToken as any).email,
      role: (verifiedToken as any).role,
    };
    return userInfo;
  } catch (error: any) {
    console.log(error);
    return null;
  }
};
