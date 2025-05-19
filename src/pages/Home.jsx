//Images
import imageHome  from "../assets/images/home/home-img.png"
import imageHomeMobile  from "../assets/images/home/home-img-mobile.png"

//Components
import FormHome from "../components/form/forms/FormHome"

const Home = () =>{
  return(
    <div className="home">
      <div className="home__container main-wrapper-container">
        <div className="home__content">
          <figure className="home__content-image">
            <img src={imageHome} alt="RIMAC Seguros y Reaseguros" className="home__content-image-img"/>
          </figure>
          <div className="home__content-form">
            <div className="home__content-form-top">
              <div className="home__content-form-titles">
                <div className="home__content-form-subtitle">
                  Seguro Salud Flexible
                </div>
                <div className="home__content-form-title">
                  <h1 className="home__content-form-title-text">
                    Creado para ti y tu familia
                  </h1>
                </div>
              </div>
              <figure className="home__content-form-image">
                <img src={imageHomeMobile} alt="Rimac Seguros y Reaseguros" className="home__content-form-img" />
              </figure>
            </div>              
            <div className="home__content-form-text">
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.
            </div>
            <div className="home__content-form-form">
              <FormHome/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home