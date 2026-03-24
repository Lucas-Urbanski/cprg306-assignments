"use client"

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";
 
export default function Page() {

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
 
 
 
    const handleLogin = async () => {
        try {
            await gitHubSignIn();
        } catch (err) {
           
        }
       
 
    }
 
    const handleLogout = async () => {
        try {
            await firebaseSignOut();
        } catch (err) {
           
        }
    }
 
    return (
    <main className="flex justify-center items-center min-h-screen bg-zinc-900">
      <div className="border p-6 rounded-sm flex flex-col gap-4 text-center bg-zinc-800">
        <h1 className="text-2xl font-bold">Shopping List App</h1>
 
        {user ? (
          <>
            <p>
              Welcome, {user.displayName} ({user.email})
            </p>
 
            <Link
              href="/week-10/shopping-list"
              className="border rounded-sm p-2 bg-green-500"
            >
              Go to Shopping List
            </Link>
 
            <button
              onClick={handleLogout}
              className="border rounded-sm p-2 bg-red-500"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={handleLogin}
            className="border rounded-sm p-2 bg-blue-400"
          >
            Login with GitHub
          </button>
        )}
      </div>
    </main>
  );
}

