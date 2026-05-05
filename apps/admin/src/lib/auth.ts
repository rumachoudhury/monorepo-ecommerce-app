import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "Admin Login",
      credentials: {
        email: {},
        password: {},
      },
      authorize(credentials) {
        // SIMPLE demo login (replace with DB later)
        if (
          credentials?.email === "admin@test.com" &&
          credentials?.password === "123456"
        ) {
          return { id: "1", name: "Admin" };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
