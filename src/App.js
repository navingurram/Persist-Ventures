import Header from "./components/Navbar/Header";
import HeroSection from './components/HeroSection/HeroSection.jsx'
import './App.css'
import Features from "./components/Features/Features.jsx";
import Dietplans from "./components/Dietplans/Dietplans.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import FAQs from "./components/FAQs/FAQs.jsx";
import ContactUs from "./components/ContactUs/Contactus.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Button from "./Dummy Data/Button.js";

function App() {
  return (
   <>
   <Header/>
   <HeroSection/>
   <Button/>
   <Features/>
   <Dietplans/>
   <Blogs/>
   <ContactUs/>
   <FAQs/>
   <Footer/>
   </>
  );
}

export default App;
