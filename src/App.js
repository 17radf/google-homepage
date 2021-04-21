import logo from './img/github.png'
import google from './img/googlelogo_color_272x92dp.png'

function App() {
  return (
      <div className="container font-sans">

      <nav>
        <div className="flex justify-end text-sm">
          <a href="#asu" className="my-4 mx-2 hover:underline">Gmail</a>
          <a href="#asu" className="my-4 mx-2 hover:underline">Images</a>
          <a href="#asu" className="mx-2">
            <img src={logo} alt="profile pic" className="w-8 rounded-full my-3 mx-2"></img>
          </a>
        </div>
      </nav>

      <main>
          <div className="flex justify-center mt-28 mb-6">
              <img src={google} alt="google logo"></img>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col">
              <form className="flex flex-row w-max border-solid border border-gray rounded-full p-2 hover:shadow-md">
                <div className="mx-2">
                  <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        style={{fill: "rgb(154, 160, 166)", width: 20, height: 20}}>
                        <path
                            d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                        </path>
                    </svg>
                </div>
                <input type="text" className="outline-none md:w-96 ml-2 mr-36"></input>
              </form>
            </div>
          </div>

          <div className="flex flex-row justify-center mt-9">
            <div className="space-x-3">
            <button className="bg-gray-50 rounded p-2 px-4 text-sm font-semibold text-gray-500">Google Search</button>
            <button className="bg-gray-50 rounded p-2 px-4 text-sm font-semibold text-gray-500">I'm Feeling Lucky</button>
            </div>
          </div>

          <div className="flex justify-center text-xs mt-6">
            <span>Google offered in : <a href="#indonesia" className="text-blue-700 pr-3 pl-1">Indonesia</a> <a href="#bali" className="text-blue-700">Basa Bali</a></span>
          </div>
      </main>

      <footer className="bg-gray-100 fixed bottom-0 w-full text-sm font-semibold">
        <div className="flex flex-row p-4 px-6 text-gray-500">
          <p>Indonesia</p>
        </div>
        <hr></hr>
        <div className="flex flex-wrap p-4 px-6 justify-between text-gray-500 space-x-6">
          <div className="flex flex-row space-x-6 xs:justify-center">
            <p>About</p>
            <p>Advertising</p>
            <p>Business</p>
            <p>How Search works</p>
          </div>
          <div className="flex flex-row space-x-6 xs:justify-center">
            <p>Privacy</p>
            <p>Terms</p>
            <p>Settings</p>
          </div>
        </div>
      </footer>

      </div>
  );
}

export default App;
