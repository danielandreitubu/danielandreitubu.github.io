import React, { useState, useEffect } from "react";
import TopNav from "./components/topnav";
import HeadLine from "./components/headline";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Footer from "./components/footer";
import Mastery from "./components/mastery";
import HashLoader from "react-spinners/HashLoader";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    handleLoading();
  }, []);

  const handleLoading = async () => {
    // const resp = await fetch('https://api.sampleapis.com/beers/');
    // const json = await resp.json();

    // if(json){
    //   setData(json)
    // }

    // console.log(data)
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <div className="App">
      {loading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <HashLoader
            color={"#ffffff"}
            loading={loading}
            size={300}
            aria-label="Loading Spinner"
            data-testid="loader"
            cssOverride={{}}
          />
        </div>
      ) : (
        <>
          <TopNav />
          <HeadLine />
          <Mastery />
          <About />
          <Projects />
          <Skills />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
