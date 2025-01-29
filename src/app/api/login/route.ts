import { createJWT } from "@/app/lib/login";
import { comparePass, findLoginUser, hashPass } from "../../lib/db";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  const formData = await req.formData();
  const hashedPass = await hashPass(formData.get("password").toString());

  try {
    const data = await findLoginUser(formData.get("username"));
    if (data[0] && data[0].password_hash) {
      const checkPass = await comparePass(
        formData.get("password"),
        data[0].password_hash,
      );
      if (checkPass) {
        const jwtToken = await createJWT(data[0].id);
        return NextResponse.json({ hash: jwtToken });
      }
      return NextResponse.json(checkPass);
    }
    return NextResponse.json(data);
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { message: error.message, success: false },
      { status: 401 },
    );
  }
}
