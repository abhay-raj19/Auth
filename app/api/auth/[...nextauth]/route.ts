import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"


const handler = NextAuth({
    providers:[
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                Username:{label:"Username",type:"text",placeholder:"Email"},
                Password:{label:"Password",type:"password",placeholder:"Password"}
            },
            async authorize(credentials:any) {
                
                return {
                    id:"user1 is    signed up"
                } // Replace void with null
            },
        })
    ]
})

export { handler as GET , handler as POST }