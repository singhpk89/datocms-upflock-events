import NextAuth from "next-auth"
import Providers from "next-auth/providers"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options

const options = {
  site: process.env.NEXTAUTH_URL,
  providers: [
      Providers.Credentials(
          {
              name: 'Email and Password',
              credentials: {
              username: { label: "Email", type: "text", placeholder: "Enter Email" },
              password: {  label: "Password", type: "password" }
            },

            authorize: async (credentials) => {
                 const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                  if (user) {
                       return Promise.resolve(user)
                  }else{
                        return Promise.resolve(null)
                  }
            }
          }
      ),
  ]
}

export default (req, res) => NextAuth(req, res, options)


// export default NextAuth({
//   // Configure one or more authentication providers
//   providers: [
//     Providers.GitHub({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET
//     }),
//     // ...add more providers here
//   ],

//   // A database is optional, but required to persist accounts in a database
//   database: process.env.DATABASE_URL,
// })
