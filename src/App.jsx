import Header from "./components/Header"
import Home from "./components/Home"
import Skills from "./components/Skills"
import Port from "./components/Port"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import './i18n';
import '@fortawesome/fontawesome-svg-core/styles.css';


function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Skills/>
      <Port/>
      <Contact/>
      <Footer/>  
    </>
  )
}

export default App
