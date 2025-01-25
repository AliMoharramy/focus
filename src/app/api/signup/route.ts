import { hashPass, signupUser } from "../../lib/db";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  const formData = await req.formData();
  const hashedPass = await hashPass(formData.get("password").toString());

  try {
    const data = await signupUser(
      formData.get("name"),
      formData.get("username"),
      formData.get("email"),
      hashedPass,
    );
    console.log(data);
    return NextResponse.json(data);
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { message: error.message, success: false },
      { status: 401 },
    );
  }
}
