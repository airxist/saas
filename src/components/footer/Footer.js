import './footer.css';
import Connect from '../../reusables/connect/Connect';

const Footer = () => {
  return (
    <footer className='footer d-flex flex-column flex-md-row justify-content-between'>
      <Connect />
      <div className='linkage d-flex flex-column flex-md-row justify-content-between'>
        <div className='col products mt-3 mt-md-0'>
            <ul className='contents m-0 p-0'>
                <p className='text-light body-sm-bold'><b>Products</b></p>
                <li className='content'><a href='#' className='body-sm text-secondary'>Features</a></li>
                <li className='content'><a href='#' className='body-sm text-secondary'>Integrations</a></li>
                <li className='content'><a href='#' className='body-sm text-secondary'>Updates</a></li>
                <li className='content'><a href='#' className='body-sm text-secondary'>FAQ</a></li>
                <li className='content'><a href='#' className='body-sm text-secondary'>Pricing</a></li>
            </ul>
        </div>
        <div className='col company mt-3 mt-md-0'>
        <ul className='contents m-0 p-0'>
                <p className='text-light body-sm-bold'><b>Company</b></p>
                <li className='content'><a href='#' className='body-sm text-secondary'>About</a></li>
                <li className='content'><a href='#' className='body-sm text-secondary'>Blog</a></li>
                <li className='content'><a href='#' className='body-sm text-secondary'>Careers</a></li>
                <li className='content'><a href='#' className='body-sm text-secondary'>Manifesto</a></li>
                <li className='content'><a href='#' className='body-sm text-secondary'>Press</a></li>
                <li className='content'><a href='#' className='body-sm text-secondary'>Contact</a></li>
            </ul>
        </div>
        <div className='col resources mt-3 mt-md-0'>
        <ul className='contents m-0 p-0'>
                <p className='text-light body-sm-bold'><b>Resources</b></p>
                <li className='content'><a href='#' className='body-sm text-secondary'>Examples</a></li>
                <li className='content'><a href='#' className='body-sm text-secondary'>Community</a></li>
                <li className='content'><a href='#' className='body-sm text-secondary'>Guides</a></li>
                <li className='content'><a href='#' className='body-sm text-secondary'>Docs</a></li>
            </ul>
        </div>
        <div className='col legal mt-3 mt-md-0'>
        <ul className='contents m-0 p-0'>
                <p className='text-light body-sm-bold'><b>Legal</b></p>
                <li className='content'><a href='#' className='body-sm text-secondary'>Privacy</a></li>
                <li className='content'><a href='#' className='body-sm text-secondary'>Terms</a></li>
                <li className='content'><a href='#' className='body-sm text-secondary'>Security</a></li>
            </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
