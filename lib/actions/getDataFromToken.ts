import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const gettokenData = (request : NextRequest)=>{
    try {
        const token = request.cookies.get('token')?.value || '';
        const data : any = jwt.verify(token, process.env.TOKEN_SECRET!);
        return data.id;
    } catch (error:any) {
        throw new Error(error.message);
    }
}

// import jwt from "jsonwebtoken";

// export async function gettokenData(request: NextRequest) {
//   try {
//     const token = request.cookies.get("token")?.value;

//     if (!token) {
//       throw new Error("Token not found");
//     }

//     const decoded : any = jwt.verify(token, process.env.TOKEN_SECRET!);

//     return decoded.userId; // Assuming the token contains the userId
//   } catch (error) {
//     console.error("Error verifying token:", error);
//     return null;
//   }
// }
