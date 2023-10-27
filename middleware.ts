export { default } from "next-auth/middleware";

export const config = {
  // *: zero or more parameters
  // +: one or more parameters
  // ?: zero or one
  // We always need to add the / at the beginning of the paths
  matcher: ["/users/:id*"], // Our middleware function will execute only if the url is in this array of strings
};
