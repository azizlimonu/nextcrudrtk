import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "username"
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "password"
        }
      },
      async authorize(credentials: any) {
        // Soon connect with the prisma 
        const user = { id: "24", name: "John", password: "123456" }

        if (credentials?.username === user.name && credentials?.password === user.password) {
          return user
        } else {
          return null
        }
      }
    })
  ],
}