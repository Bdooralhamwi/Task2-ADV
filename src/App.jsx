import Animation from "./components/animation/Animation";
import Appartment from "./components/Appartment/Appartment";
import Beast from "./components/Beast deal/Beast";
import Closer from "./components/Closer view/Closer";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/products/Products";

const App = () => {
  return (
    <div className="APP">
      <Animation />
      <Header />
      <Hero />
      <Appartment />
      <Closer />
      <Beast />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
