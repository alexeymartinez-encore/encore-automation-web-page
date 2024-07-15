import { redirect } from "react-router-dom";

function getAuthToken() {
  const token = localStorage.getItem("authToken");
  return token;
}

function checkAuthToken() {
  const token = getAuthToken();
  if (!token) {
    redirect("/");
  }
  return token;
}
