import React, {useState, useEffect} from "react";
import TopNav from "./components/topnav"
import HeadLine from "./components/headline"
import About from "./components/about"
import Skills from "./components/skills"
import Footer from "./components/footer"
import Mastery from "./components/mastery"
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  return (
    <div className="App">
      {
      
      loading ?
      <ClimbingBoxLoader
      color={"#ffffff"}
      loading={loading}
      size={40}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
      :
    
      <><TopNav /><HeadLine /><About /><Skills /><Mastery /><Footer />
      </>
      }
    </div>
  )
}