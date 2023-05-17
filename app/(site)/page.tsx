import { getServerSession } from "next-auth";
import Image from "next/image"
import AuthForm from "./components/AuthForm"
import { redirect } from 'next/navigation';

export default async function Home(context: any) {

  const session = await getServerSession();

  if ( session ) {
    return redirect("/users")
  }

  return (
    <div
      className="
        flex
        min-h-full
        flex-col
        justify-center
        py-12
        sm:px-6
        lg:px-8
        bg-gray-100
      "
    >
      <div
        className="
          sm: mx-auto
          sm: w-full
          sm: max-w-md
        "
      >
        <Image 
          alt="Logo"
          height="48"
          width="48"
          className="mx-auto w-auto"
          src="/images/logo.png"
        />
        <h2
          className="
            mt-6
            text-center
            text-3xl
            font-bold
            tracking-tigth
            text-gray-900
          "
        >
          Sign in to your account
        </h2>
        <AuthForm />
      </div>
    </div>
  )
}
