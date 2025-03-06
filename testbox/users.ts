// Like enums
type User = {
  id: number;
  username: string;
  // role can be of either "admin", "member", or "contributor"
  role: "admin" | "member" | "contributor";
};
type UserRole = User["role"];

const users: User[] = [
  { id: 1, username: "john_doe", role: "member" },
  { id: 2, username: "jane_smith", role: "contributor" },
  { id: 3, username: "alice_jones", role: "admin" },
  { id: 4, username: "charlie_brown", role: "member" },
];

// here fetchUserDetails function is expected to return a User object
function fetchUserDetails(username: string): User {
  const user = users.find((user) => user.username === username);
  if (!user) {
    throw new Error(`User ${username} not found`);
  }
  return user;
}

// Partial is a utility type, that makes all properties of the given type
// optional. This means that when you pass an object to updateUser, you can
// provide only some of the properties of the User type, and the rest will be
// left unchanged.
function updateUser(id: number, updates: Partial<User>): void {
  let foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    throw new Error(`User with the id${id} not found`);
  }
  // We use Object.assign to update the user object with
  // the provided updates in place
  Object.assign(foundUser, updates);
}

updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });

console.log(users);
