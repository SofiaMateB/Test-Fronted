export async function loginUser(email, password) {
  const res = await fetch(`http://localhost:3001/users?email=${email}&password=${password}`);
  const users = await res.json();
  if (users.length > 0) {
    const fakeToken = "FAKE-TOKEN-12345";
    localStorage.setItem("token", fakeToken);
    return { token: fakeToken, user: users[0] };
  } else {
        return { message: "Credenciales Invalidas"};

  }
}
export function logout() {
  localStorage.removeItem("token");
}

export function isAuthenticated() {
  return !!localStorage.getItem("token");
}
