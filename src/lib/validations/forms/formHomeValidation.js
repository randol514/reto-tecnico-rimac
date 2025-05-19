//Validations
import { isValidTelephone, onlyNumbers } from '../../../lib/validations/validationRules'
import {ERROR_MESSAGES} from '../../../lib/validations/errorMessages'

export const formHomeValidation = (form) =>{
  let errors = {}

  if(!form.typeDocument.trim()){
    errors.typeDocument =  ERROR_MESSAGES.required
  }

  if(!form.document.trim()){
    errors.document =  ERROR_MESSAGES.required
  }else if(!onlyNumbers(form.document)){
    errors.document = ERROR_MESSAGES.invalidNumeric
  }

  if(!form.telephone.trim()){
    errors.telephone = ERROR_MESSAGES.required
  } else if(!isValidTelephone(form.telephone)){
    errors.telephone = ERROR_MESSAGES.invalidTelephone
  }


  if(!form.politiesPrivacy){
    errors.politiesPrivacy = ERROR_MESSAGES.requiredCheckbox
  }

    if(!form.politiesCommunications){
    errors.politiesCommunications = ERROR_MESSAGES.requiredCheckbox
  }

  return errors
}