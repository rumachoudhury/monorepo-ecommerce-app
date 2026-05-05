// export { auth as middleware } from "@/lib/auth";

// export const config = {
//   matcher: ["/dashboard/:path*"],
// };
// --------------

import { NextResponse } from "next/server";

export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
