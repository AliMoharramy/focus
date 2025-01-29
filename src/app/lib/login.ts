"use server";
import * as jose from "jose";
import fs from "fs";
var privateKey = fs.readFileSync("privateKey.pem");
var publicKey = fs.readFileSync("publicKey.pem");

const expirationDate = new Date();
expirationDate.setMonth(expirationDate.getMonth() + 3);

export async function createJWT(id: number) {
  const jwt = await new jose.SignJWT({ id: id })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer("")
    .setAudience("")
    .setExpirationTime(expirationDate)
    .sign(privateKey);
  return jwt;
}

export async function verifyJWT(jwt: string) {
  const { payload, protectedHeader } = await jose.jwtVerify(jwt, privateKey, {
    issuer: "",
    audience: "",
  });
  return payload;
}
