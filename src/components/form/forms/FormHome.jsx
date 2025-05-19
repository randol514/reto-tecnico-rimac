import Button from "../../ui/Button/Button"

//Hooks
import { useEffect } from "react"
import useForm from "../../../hooks/useForm"

//Form
import FormField from "../fields/FormField"
import {formHomeValidation} from "../../../lib/validations/forms/formHomeValidation"
import styles from '../../../styles/modules/form.module.sass'

//Context
import {useFormContext } from "../../../context/FormContext"

//Router
import { useNavigate } from "react-router-dom"

const FormHome = () =>{
  const navigate = useNavigate()

  const onSubmit = async (form) => {
    setFormData(form)
    navigate("/planes")
  }
  
  const {formData, setFormData} = useFormContext()

  const initialValues = {...formData}

  const {form, errors, loading, handleChange, handleBlur, handleSubmit} = useForm(initialValues,formHomeValidation, onSubmit)

  useEffect(() => {
    setFormData(form);
  }, [form]);


  const rows = `${styles["form-rows"]}`
  const rowsOne = `${styles["form-row"]} ${styles["row-one"]}`
  const rowsTwoInline = `${styles["form-row"]} ${styles["row-two-inline"]}`

  return(
    <>
      <form onSubmit={handleSubmit} className={`${styles.form}`}>
        <ul className={rows}>
          <li className={rowsTwoInline}>
            <FormField
              type="select"
              id="typeDocument"
              name="typeDocument"
              value={form.typeDocument}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.typeDocument}
              className="left-inline"
              options={[
                { label: "Doc.", value: "" },
                { label: "DNI", value: "DNI" },
                { label: "RUC", value: "RUC" },
                { label: "Pasaporte", value: "Pasaporte" },
              ]}
            />
            <FormField
              type="text"
              id="document"
              name="document"
              label="Nro. de documento"
              value={form.document}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.document}
              className="right-inline"
            />
          </li>
          <li className={rowsOne}>
            <FormField
              type="text"
              id="telephone"
              name="telephone"
              label="Celular"
              value={form.telephone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.telephone}
            />
          </li>
        </ul>
        <div className={`${styles["form-checkboxs"]}`}>
          <div className={`${styles["form-checkbox"]}`}>
            <FormField
              type="checkbox"
              id="politiesPrivacy"
              name="politiesPrivacy"
              placeholder="Acepto lo Política de Privacidad"
              checked={form.politiesPrivacy}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.politiesPrivacy}
            />
          </div>
          <div className={`${styles["form-checkbox"]}`}>
            <FormField
              type="checkbox"
              id="politiesCommunications"
              name="politiesCommunications"
              placeholder="Acepto la Política Comunicaciones Comerciales"
              checked={form.politiesCommunications}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.politiesCommunications}
            />
          </div>
        </div>
        <div className={`${styles["form-terms"]}`}>
          Aplican Términos y Condiciones.
        </div>
        <div className={`${styles["form-button"]}`}>
          <Button 
            tag="button" 
            variant="primary" 
            type="submit"
            disabled={loading}
            status={loading}
            >
             {loading ? "Cotizando..." : "Cotiza aquí"}
          </Button>
        </div>
      </form>
    </>
  )
}

export default FormHome