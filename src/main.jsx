import React from 'react'
import ReactDOM from 'react-dom/client'

//Components
import App from './App'

//Context
import { FormProvider } from './context/FormContext'
import { PlanProvider } from './context/PlanContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormProvider>
      <PlanProvider>
        <App />
      </PlanProvider>
    </FormProvider>
  </React.StrictMode>
)

