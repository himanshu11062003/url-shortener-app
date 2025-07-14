// src/utils/auth.js

const users = [
  { username: "Himanshu kumar", password: "1106" }
];

export const isAuthenticated = () => {
  return localStorage.getItem("user") !== null;
};

export const loginUser = (username, password) => {
  const matchedUser = users.find(
    (user) => user.username === username && user.password === password
  );
  if (matchedUser) {
    localStorage.setItem("user", username);
    return true;
  }
  return false;
};

export const logoutUser = () => {
  localStorage.removeItem("user");
};
