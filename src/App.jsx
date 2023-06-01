import "typeface-poppins";

function App() {
  return (
    <div className="grid lg:grid-cols-2 min-h-screen overflow-hidden">
      <div className="lg:flex">
        <div className="col-1 flex justify-start items-start text-white flex-col p-5 bg-[url('src/assets/Rectangle15.png')] sm:max-w-full bg-no-repeat h-full w-full lg:ml-10 lg:mt-20">
          <img src="/logo.png" alt="logo" className="mb-20" />
          <div className="mt-40 mb-20 text-4xl font-poppins">
            <h1 className="font-bold">100% Uptime😎</h1>
            <div className="text-gray-400">
              <p>Zero Infrastructure</p>
              <p>Management</p>
            </div>
          </div>
          <div className="mt-5 flex">
            <a href="https://aesthisia.com/" className="mr-4 lg:mr-80">
              <h10>aesthisia.com</h10>
            </a>
            <img
              src="https://www.freeiconspng.com/thumbs/linkedin-logo-png/displaying-19-gallery-images-for-linkedin-logo-png-25.png"
              className="h-5"
            />
            <img
              src="https://e7.pngegg.com/pngimages/277/569/png-clipart-facebook-computer-icons-layout-rectangle-logo.png"
              className="h-5 ml-2"
            />
            <img
              src="data:image/png;base64,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"
              className="h-5 ml-2"
            ></img>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center col-2">
        <div className="flex flex-col justify-center items-center mb-5">
          <img src="/petals.png" className="h-[3rem]" alt="petals" />
          <h1 className="self-center text-4xl font-bold">
            Welcome <span className="text-[#08a593]">Back!</span>
          </h1>
          <h6 className="mt-2 text-gray-500">Glad to see you, Again!</h6>
        </div>
        <form className="flex flex-col justify-center items-center mb-20">
          <input
            type="email"
            className="outline-none border border-gray-400 w-full lg:w-[50rem] max-w-[25rem] mb-[1rem] p-4 rounded-md"
            placeholder="Enter your email"
          />
          <input
            type="password"
            className="outline-none border border-gray-400 w-full max-w-[25rem] mb-[1rem] p-4 rounded-md"
            placeholder="Enter your password"
          />
          <div className="self-end text-gray-400">
            <h8>forgot password?</h8>
          </div>
          <button className="w-full max-w-[25rem] p-3 bg-black text-white rounded-lg shadow-button transform translate-y-8 outline-none">
            Log in
          </button>
        </form>
        <div className="text-gray-400">
          <h8>
            Don't have an account?
            <span className="text-[#08a593]"> Sign up</span>
          </h8>
        </div>
      </div>
    </div>
  );
}

export default App;
