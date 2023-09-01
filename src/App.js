import "./bootstrap.min.css";
import "./App.css";
import { Pages } from "./components/pages/Pages";
// import Aos from "aos";
import { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";
// import { createTheme } from "@mui/material";
// import { ThemeProvider } from "@emotion/react";

// import "aos/dist/aos.css";

function App() {
  // useEffect(() => {
  //   Aos.init();
  //   Aos.refresh();
  // }, []);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return <>{loading ? <LoadingPage /> : <Pages />}</>;
}

export default App;
