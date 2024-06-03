import mongoose from "mongoose";
import { NextResponse, NextRequest } from "next/server";
import { User } from "../../../../models/userModel";
import bcryptjs from "bcryptjs";
import {connectDB} from "../../../../lib/database/mongoose";


connectDB();

export async function POST(req : NextRequest){
    try {
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}