import './footer.css';
import Connect from '../../reusables/connect/Connect';

const Footer = () => {
  return (
    <footer className='footer d-flex flex-column flex-md-row justify-content-between'>
      <Connect />
      <div className='linkage d-flex flex-column flex-md-row justify-content-between'>
        <div className='col border products mt-3 mt-md-0'>
            <ul className='contents m-0 p-0'>
                <p className='text-light'><b>Products</b></p>
                <li className='content'><a href='#' className='body-sm'>Features</a></li>
                <li className='content'><a href='#' className='body-sm'>Integrations</a></li>
                <li className='content'><a href='#' className='body-sm'>Updates</a></li>
                <li className='content'><a href='#' className='body-sm'>FAQ</a></li>
                <li className='content'><a href='#' className='body-sm'>Pricing</a></li>
            </ul>
        </div>
        <div className='col border company border mt-3 mt-md-0'>
        <ul className='contents m-0 p-0'>
                <p className='text-light'><b>Company</b></p>
                <li className='content'><a href='#' className='body-sm p-0'>About</a></li>
                <li className='content'><a href='#' className='body-sm'>Blog</a></li>
                <li className='content'><a href='#' className='body-sm'>Careers</a></li>
                <li className='content'><a href='#' className='body-sm'>Manifesto</a></li>
                <li className='content'><a href='#' className='body-sm'>Press</a></li>
                <li className='content'><a href='#' className='body-sm'>Contact</a></li>
            </ul>
        </div>
        <div className='col border resources mt-3 mt-md-0'>
        <ul className='contents m-0 p-0'>
                <p className='text-light'><b>Resources</b></p>
                <li className='content'><a href='#' className='body-sm'>Examples</a></li>
                <li className='content'><a href='#' className='body-sm'>Community</a></li>
                <li className='content'><a href='#' className='body-sm'>Guides</a></li>
                <li className='content'><a href='#' className='body-sm'>Docs</a></li>
            </ul>
        </div>
        <div className='col border legal mt-3 mt-md-0'>
        <ul className='contents m-0 p-0'>
                <p className='text-light'><b>Legal</b></p>
                <li className='content'><a href='#' className='body-sm'>Privacy</a></li>
                <li className='content'><a href='#' className='body-sm'>Terms</a></li>
                <li className='content'><a href='#' className='body-sm'>Security</a></li>
            </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
