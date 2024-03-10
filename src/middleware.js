import { NextResponse } from "next/server";
import { BASE_API_URL } from "../utils/constants";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("middleware executed!");
  // return NextResponse.redirect(new URL("/home", request.url));
  const cookie = request.cookies.get("__Secure-next-auth.session-token");
  let url = request.url;

  console.log(url);

  let condition1 = !cookie && url.includes("/user_dashboard");
  let condition2 = !cookie && url.includes("/addProduct");
  let condition3 = !cookie && url.includes("/editProduct/");
  let condition4 = cookie && url.includes("/user_login");

  if (condition1 || condition2 || condition3) {
    return NextResponse.redirect(`${BASE_API_URL}/user_login`);
  } else if (condition4) {
    return NextResponse.redirect(`${BASE_API_URL}/user_dashboard`);
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/user_dashboard",
    "/addProduct",
    "/editProduct/:path*",
    "/user_login",
  ],
};
