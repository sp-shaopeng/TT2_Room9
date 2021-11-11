export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    console.log(user, user.accessToken)
    return { "authorization" : user.accessToken };
  } else {
    return {};
  }
}