import { NavLink, Link, useLocation  } from 'react-router-dom'

import IconPrev2 from '../../../assets/images/icons/icon-prev2.svg'
import IconProgress from '../../../assets/images/icons/icon-progress.svg'

const Menu = () =>{
  const location = useLocation()
  
  const links = [
    { to: '/planes', label: 'Planes y coberturas', index: 1 },
    { to: '/resumen', label: 'Resumen', index: 2 },
  ];
  return (
    <div className="menu__header">
      <div className="menu__header-desktop">
        <div className="menu__header-links">
          {links.map(({ to, label, index }) => 
          location.pathname === to ? (
            <NavLink
              key={index}
              to={to}
              data-index={index}
              className="menu__header-link current--page"
            >
              {label}
              <img className="menu__header-line" src={IconProgress} alt="" />
            </NavLink>
          ) : (
            <span
              key={index}
              to={to}
              data-index={index}
              className="menu__header-link"
            >
              {label}
              <img className="menu__header-line" src={IconProgress} alt="" />
            </span>
          )
           
          )}
        </div>
      </div>
      <div className="menu__header-mobile">
        <Link to="/" className="menu__header-back">
          <img src={IconPrev2} alt="" />
        </Link>
        <div className="menu__header-steps">
          Paso 1 de 2
        </div>
        <div className="menu__header-progress"></div>
      </div>
    </div>
  );
}
export default Menu