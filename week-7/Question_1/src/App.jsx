import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Icons from "./components/Icons";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function App() {
  return (
    <div>
      <NavBar />
      <img
        src="https://avatars.githubusercontent.com/u/138798481?v=4"
        alt="Icon"
      />
      <Hero />
      <RecoilRoot>
        <Icons />
      </RecoilRoot>
    </div>
  );
}

export default App;
