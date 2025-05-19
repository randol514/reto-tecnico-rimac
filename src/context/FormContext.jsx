import { createContext, useState, useContext } from "react"

const FormContext = createContext()
export const FormProvider = ({children}) =>{
  const [formData, setFormData] = useState({
    typeDocument: '',
    document: '',
    telephone: '',
    politiesPrivacy: false,
    politiesCommunications: false
  })
  return(
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  )
}

export const useFormContext = () => useContext(FormContext)