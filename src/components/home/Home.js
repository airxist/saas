import Hero from '../hero/Hero';
import Logo from '../logo/Logo';
import Visual from '../visual/Visual';
import Navbar from './../navbar/Navbar';
import './home.css';
import arrow from '../../assets/light-arrow.svg';
import Toggler from '../toggler/Toggler';


const Home = () => {
  return (
    <div className="home mx-auto">
      <div className='bar d-flex align-items-center justify-content-center'>
        <p className='bar-info m-0'>
          This page is included in a free SaaS Website Kit.
        </p>
        <button className='text-light ms-2'>
          View the complete kit <img src={arrow} alt='' />
        </button>
      </div>
      <div className='bar-nav d-flex align-items-center justify-content-between'>
        <Logo />
        <Navbar />
        <Toggler />
      </div>
      <div className='home-info d-flex align-items-center flex-column flex-sm-row justify-content-between'>
        <Hero />
        <Visual />
      </div>
    </div>
  )
}

export default Home
