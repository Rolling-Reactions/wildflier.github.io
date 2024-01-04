import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/Homepage";
import Header from "./pages/Header";
import About from "./pages/About";
import Team from "./pages/Team";

function App() {
  return (
    <div className="flex flex-col font-mono">
      <Header />
      <div className="flex flex-col ">
        <Homepage />
        <About/>
        <Team/> 
      </div>
    </div>
  );
}

export default App;