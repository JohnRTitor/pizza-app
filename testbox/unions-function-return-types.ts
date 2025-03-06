// Like enums
type User = {
  username: string;
  // role can be of either "admin", "member", or "guest"
  role: "admin" | "member" | "guest";
};
type UserRole = User["role"];

let maintainer: UserRole = "admin";
let contributor: UserRole = "member";
let newContributor: UserRole = "guest";

const users: User[] = [
  { username: "john_doe", role: "member" },
  { username: "jane_doe", role: "admin" },
  { username: "guest_user", role: "guest" },
];

// here fetchUserDetails function is expected to return a User object
function fetchUserDetails(username: string): User {
  const user = users.find((user) => user.username === username);
  if (!user) {
    throw new Error(`User ${username} not found`);
  }
  return user;
}
