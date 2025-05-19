import { createContext, useState, useContext } from "react"

const PlanContext = createContext()
export const PlanProvider = ({children}) =>{
  const [selectPlan, setSelectPlan] = useState(null)
  return(
    <PlanContext.Provider value={{ selectPlan, setSelectPlan }}>
      {children}
    </PlanContext.Provider>
  )
}

export const usePlanContext = () => useContext(PlanContext)