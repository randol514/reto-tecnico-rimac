//Components
import Button from "../ui/Button/Button"

//Images
import imagePlanHome from "../../assets/images/plans/plan-home.svg"
import imagePlanHomeClinical from "../../assets/images/plans/plan-home-clinical.svg"

//Context
import {usePlanContext} from "../../context/PlanContext"

//Routing
import { useNavigate } from "react-router-dom"

const PlanCard = ({plan}) =>{
  const { setSelectPlan } = usePlanContext();
  const navigate = useNavigate();

  const handleSelectPlan = () => {
    setSelectPlan(plan);
    navigate("/resumen");
  }

  return(
    <div className="plan__card">
      <div className="plan__card-top-bottom">
        <div className="plan__card-top">
          <div className="plan__card-details">
            <div className="plan__card-title">
              <h3 className="plan__card-title-text">
                {plan.name} 
              </h3>
            </div>
            <div className="plan__card-cost">
              <div className="plan__card-cost-label">Costo del plan</div>
              <div className="plan__card-cost-amount">${plan.price} al mes</div>
            </div>
          </div>
          <div className="plan__card-icon">
            {plan.name === "Plan en Casa y Clínica" ? (
              <img src={imagePlanHomeClinical} alt={plan.name} className="plan__card-icon-img" />
            ) : (
              <img src={imagePlanHome} alt={plan.name} className="plan__card-icon-img" />
            )}
          </div>
        </div>
        <div className="plan__card-bottom">
          <div className="plan__card-description">
            <ul className="plan__card-description-list">
              {plan.description.map((item, index) => (
                <li key={index} className="plan__card-description-list-item">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="plan__card-button">
        <Button variant="secondary" onClick={handleSelectPlan}>Seleccionar Plan</Button>
      </div>
    </div>
  )
}

export default PlanCard