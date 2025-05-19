//Images
import logotipo from '../../../assets/images/common/Logo-header.svg'

//Routing
import {Link} from 'react-router-dom'

const Header = () =>{
  return(
    <header className="header">
      <div className="header__container main-wrapper-container">
        <div className="header__content">
          <Link to="/" className="header__logotipo">
            <img src={logotipo} alt="RIMAC Seguros y Reaseguros" className="header__logotipo-img"/>
          </Link>
          <div className="header__details">
            <div className="header__details-text">
              ¡Compra por este medio!
            </div>
            <a href="tel:(01) 411 6001" className="header__details-phone">
              (01) 411 6001
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header