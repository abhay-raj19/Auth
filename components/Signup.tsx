"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Signup = () => {
    const router = useRouter();

  return (
    <div className="flex flex-row">
      <div className="w-full md:w-2/5 bg-black flex justify-center items-center h-screen max-sm:hidden max-md:hidden">
        <div className="text-4xl flex font-bold justify-center text-white h-screen items-center">
          AuthO
        </div>
      </div>
      <div className="w-full h-screen md:w-3/5 bg-gray-900 flex justify-center items-center">
        <div className="bg-white py-12 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="font-normal text-2xl text-gray-900">Welcome</p>
            <p className="font-light text-sm text-gray-600">
              Log in to continue at AuthO
            </p>
            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 py-2 px-3 border-black border rounded font-light text-sm text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2"
            >
              <Image
                width={25}
                height={25}
                src={"https://img.icons8.com/color/48/google-logo.png"}
                alt="google-logo"
              />
              Continue with Google
            </button>

            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 py-2 px-3 border-black border rounded font-light text-sm text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2"
            >
              <Image
                width={25}
                height={25}
                src={"https://img.icons8.com/ios-glyphs/30/github.png"}
                alt="github-logo"
              />
              Continue with Github
            </button>

            <button
                type="submit"
                onClick={() => router.push("/api/auth/signin")}
                className="w-full flex justify-center items-center gap-2 py-2 px-3 border-black border rounded font-light text-sm text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2"
            >
                <Image
                    width={25}
                    height={25}
                    src={
                        "https://img.icons8.com/ios/50/login-rounded-right--v1.png"
                    }
                    alt="credentials-logo"
                />
                Continue with Credentials
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
