//Components
import Menu from "../components/layout/Header/Menu"
import Back from "../components/ui/Back/Back"
import Loading from "../components/ui/Loading/Loading"

//Context
import { useFormContext } from "../context/FormContext"
import { usePlanContext } from "../context/PlanContext"

//Services
import {useUsers} from "../services/api"

const Summary = () =>{

  const { formData } = useFormContext()
  const { selectPlan } = usePlanContext();

  const { data, loading, error } = useUsers()
  if (loading) return <Loading />
  if (error) return <div>Error: {error.message}</div>

  const fullName = `${data.name} ${data.lastName}`
  const formattedPrice = 
  selectPlan && typeof selectPlan.price === "number"
    ? `$${selectPlan.price.toFixed(2)}`
    : "No disponible";

  return(
    <div className="summary">
      <div className="summary__container main-wrapper-container">
        <Menu />
        <div className="summary__content">
          <Back to={"/planes"} label={"Volver"} />
          <div className="summary__title">
            <h1 className="summary__title-text">
              Resumen del seguro 
            </h1>
          </div>
          <article className="summary__card">
            <div className="summary__card-top">
              <div className="summary__card-title">
                <h2 className="summary__card-title-text">
                  Precios calculados para:
                </h2>
                </div>
              <div className="summary__card-user">{fullName}</div>
            </div>
            <div className="summary__card-bottom">
              <div className="summary__card-item">
                <div className="summary__card-subtitle">
                  <h3 className="summary__card-subtitle-text">
                    Responsable de pago
                  </h3>
                </div>
                <div className="summary__card-item-details">
                  <div className="summary__card-item-text">{formData.typeDocument}: {formData.document}</div>
                  <div className="summary__card-item-text">Celular: {formData.telephone}</div>
                </div>
              </div>
              <div className="summary__card-plan">
                <div className="summary__card-subtitle">
                  <h3 className="summary__card-subtitle-text">
                    Plan elegido
                  </h3>
                </div>
                <div className="summary__card-item-details">
                  <div className="summary__card-item-text">
                    {selectPlan?.name || "No se escogió ningun plan"}
                  </div>
                  <div className="summary__card-item-text">Costo del Plan: {formattedPrice} al mes</div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
export default Summary