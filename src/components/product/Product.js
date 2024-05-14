import Frame from '../../reusables/frame/Frame';
import productImage from '../../assets/images/Product Image.png';
import fullTorus from '../../assets/images/full-torus.png';
import pyramid from '../../assets/images/pyramid 1.png';
import './product.css';
import Grid from '../../reusables/grid/Grid';

const Product = () => {
  return (
    <div className="product">
      <Frame
        tag="Boost your productivity"
        h2="A more effective way to track progress"
        body="Effortlessly turn your ideas into afully functional, responsive, no code SaaS website in just minutes with the set of free components from Framer"
      />
      <div className='product-img p-0 position-relative'>
        <img src={productImage} alt='' className='product-img-main' />
        <img src={pyramid} alt='' className='pyramid position-absolute d-none d-md-block' />
        <img src={fullTorus} alt='' className='full-torus position-absolute d-none d-md-block' />
      </div>
      <Grid />
    </div>
  )
}

export default Product
