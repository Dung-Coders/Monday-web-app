import React from 'react'

function SignUp() {
  return (
    <div className="grid h-screen grid-flow-col md:grid-cols-2">
      <div className="flex flex-col">
        <div className="flex-1 text-center w-[25rem] mx-auto flex items-center justify-center flex-col">
          <span className="block mb-2 text-[32px] bg-clip-text text-transparent 
          bg-gradient-to-r from-blue-600 to-purple-600">
            Welcome to monday.com
          </span>
          <span className="block mb-12 leading-[30px] font-normal">
            Get started - it's free. No credit card needed.
          </span>
          <div className="px-[.5625rem] space-y-4 w-full">
            <button className="flex items-center justify-center w-full h-10 space-x-2">
              <img
                src="https://dapulse-res.cloudinary.com/image/upload/remote_logos/995426/google-icon.svg"
                alt="google icon"
                className="inline-block w-4 p-0 m-0 text-base aspect-square"
              />
              <span className="">Continue with Google</span>
            </button>
            <div className="flex flex-row items-center gap-2">
              <div className="h-1/2 border border-t-[#d0d4e4] w-full"></div>
              Or
              <div className="h-1/2 border border-t-[#d0d4e4] w-full"></div>
            </div>
            <input className="border-[1px] hover:scale-110 border-blue-400 rounded-[9px] h-10 w-full p-2 cursor-pointer" placeholder="name@company.com" />
            <button type="primary" className="w-full bg-[#0073ea] h-10">
              Continue
            </button>
            <div>
              <span>By proceeding, you agree to the</span>
              <div>
                <a href="#!" className="text-[#5e9cd3] hover:underline">
                  Terms of Service
                </a>
                <span className="px-1">and</span>
                <a href="#!" className="text-[#5e9cd3] hover:underline">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-block mb-16 text-center">
          <span className="px-1">Already have an account?</span>
          <a href="#!" className="text-[#5e9cd3] hover:underline">
            Log in
          </a>
        </div>
      </div>
      <div className="flex overflow-hidden w-full ml-[120px]">
        <img
          src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/welcome-to-monday.png"
          alt=""
          className="object-cover w-full h-full p-0 m-0"
        />
      </div>
    </div>
  );
}

export default SignUp