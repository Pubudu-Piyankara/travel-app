import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/database/mongoose";
import User from "@/models/userModel";
import { gettokenData } from "@/lib/actions/getDataFromToken";

connectDB();

export async function GET(request: NextRequest) {
  try {
    const userId = await gettokenData(request);
    const user = await User.findOne({ _id: userId }).select("-password");
    if (!user) {
      return NextResponse.json({ error: "User not found" });
    }
    return NextResponse.json({
      message: "User found",
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
