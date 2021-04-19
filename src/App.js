import logo from './img/github.png'

function App() {
  return (
    <div className="App">
      <div className="container font-sans">
        <div className="flex justify-end text-sm">
          <a href="#asu" className="my-4 mx-2 hover:underline">Gmail</a>
          <a href="#asu" className="my-4 mx-2 hover:underline">Images</a>
          <a href="#asu" className="mx-2">
            <img src={logo} className="w-8 rounded-full my-3 mx-2"></img>
          </a>
          
        </div>
      </div>
    </div>
  );
}

export default App;
