// Like enums
type User = {
  id: number;
  username: string;
  // role can be of either "admin", "member", or "contributor"
  role: "admin" | "member" | "contributor";
};
type UserRole = User["role"];

let nextUserId: number = 1;

const users: User[] = [
  { id: nextUserId++, username: "john_doe", role: "member" },
  { id: nextUserId++, username: "jane_smith", role: "contributor" },
  { id: nextUserId++, username: "alice_jones", role: "admin" },
  { id: nextUserId++, username: "charlie_brown", role: "member" },
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
// https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
function updateUser(id: number, updates: Partial<User>): void {
  let foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    throw new Error(`User with the id${id} not found`);
  }
  // We use Object.assign to update the user object with
  // the provided updates in place
  Object.assign(foundUser, updates);
}

// Omit takes in a type AND a string (or union of strings)
// indicating property names, and returns a new type with
// those properties removed, here we are omitting the id property
// https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys
// Example: Omit<User, "id" | "role">
function addNewUser(newUser: Omit<User, "id">): User {
  const user: User = {
    id: nextUserId++,
    // spread newUser properties
    // basically means concatenating the properties of the newUser object
    // with the default properties of the user variable
    ...newUser,
  };
  users.push(user);
  return user;
}

updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });
addNewUser({ username: "joe_schmoe", role: "member" });

console.log(users);
