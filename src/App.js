import logo from "./logo.svg";
import "./App.css";
import { Pages } from "./components/pages/Pages";
import Aos from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <>
      <Pages />
    </>
  );
}

export default App;
