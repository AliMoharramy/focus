import postgres from "postgres";

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const bcrypt = require("bcrypt");

const conn = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: "require",
});

export function hashPass(password) {
  return bcrypt.hash(password, 10).then(function (hash) {
    return hash;
  });
}
export function comparePass(password, hash) {
  return bcrypt.compare(password, hash).then(function (result) {
    return result;
  });
}
export function checkusername(username) {
  const invalidPattern = /^[^\s\d](?!.*\s)[^\s]*.{2,}$/;
  if (!invalidPattern.test(username)) return [""];
  const userName = username.split("")[0] === "@" ? username.slice(1) : username;
  return conn`
    SELECT 1
    FROM users
    WHERE username = ${userName}
    LIMIT 1;
 `;
}
export function signupUser(name, username, email, password_hash) {
  return conn`
    INSERT INTO users (name, username, email, password_hash)
    VALUES (${name}, ${username}, ${email}, ${password_hash});
  `;
}
export function findLoginUser(username) {
  return conn`
    SELECT id, password_hash FROM users WHERE username = ${username};
  `;
}
