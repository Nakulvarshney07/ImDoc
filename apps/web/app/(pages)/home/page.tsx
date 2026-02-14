import { UserButton, useUser } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-black">Welcome to ImDoc!</h1>
        <p className="text-gray-600 mb-6">You are now logged in securely.</p>
       
        <div className="flex justify-center mb-6">
          <UserButton afterSignOutUrl="/"/>
        </div>

        <div className="p-4 bg-blue-50 text-blue-700 rounded-md">
           This is your new Dashboard at <strong>/home</strong>
        </div>
      </div>
    </div>
  );
}