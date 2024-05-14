import './App.css';
import Everything from './components/everything/Everything';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Pricing from './components/pricing/Pricing';
import Product from './components/product/Product';
import Sign from './components/sign/Sign';
import Testimonials from './components/testimonials/Testimonials';
import Ticker from './components/ticker/Ticker';

function App() {
  return (
    <div className='App container-fluid px-0'>
      <Home />
      <Ticker />
      <Product />
      <Everything />
      <Pricing />
      <Testimonials />
      <Sign />
      <Footer />
    </div>
  );
}

export default App;
