import logotipo from '../../../assets/images/common/Logo-footer.svg'

import {Link} from 'react-router-dom'

const Footer = () =>{
  const currentYear = new Date().getFullYear();
  return(
    <footer className="footer">
      <div className="footer__container main-wrapper-container">
        <div className="footer__content">
          <Link to="/" className="footer__logotipo">
            <img src={logotipo} alt="RIMAC Seguros y Reaseguros" className="header__logotipo-img"/>
          </Link>
          <div className="footer__copyright">
            © {currentYear} RIMAC Seguros y Reaseguros.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer