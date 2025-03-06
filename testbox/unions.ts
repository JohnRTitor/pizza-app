// Like enums
type User = {
  username: string;
  role: "admin" | "member" | "guest";
};
type UserRole = User["role"];

let maintainer: UserRole = "admin";
let contributor: UserRole = "member";
let newContributor: UserRole = "guest";
