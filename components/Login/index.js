import { signIn, signOut, useSession } from "next-auth/react"


export default function Login(){
  const { data: session, status } = useSession()
  const loading = status === "loading"

  if(session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        User name is {session.user.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }


  return (
    <>
    Not signed in <br />
    <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
