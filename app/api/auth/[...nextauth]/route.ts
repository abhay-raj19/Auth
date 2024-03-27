import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"


const handler = NextAuth({
    providers:[
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                Username:{label:"Email",type:"email",placeholder:"Jhondoe@gmail.com",required:"true"},
                Password:{label:"Password",type:"password",placeholder:"Jhon@1234",required:"true"}
            },
            async authorize(credentials:any) {
                
                return {
                    id:"User is signed up"
                } // Replace void with null
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET , handler as POST }