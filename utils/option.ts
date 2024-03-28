import CredentialsProvider from "next-auth/providers/credentials"


export const providers:(any[]) = [
    CredentialsProvider({
        name:"Credentials",
        credentials:{
            Username:{label:"Email",type:"email",placeholder:"Jhondoe@gmail.com",required:"true"},
            Password:{label:"Password",type:"password",placeholder:"Jhon@1234",required:"true"}
        },
        async authorize(credentials:any) {
            console.log(credentials);
            return {
                id:"User is signed up",
                name:credentials.Username,
                password:credentials.password
            } 
        },

    })
]
// pages:{
//     signIn: "/signin"
// },