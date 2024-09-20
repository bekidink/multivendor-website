import React from 'react'
import PersonalDetail from './stepForms/PersonalDetail'
import ShippingDetail from './stepForms/ShippingDetail'
import PaymentMethod from './stepForms/PaymentMethod'
import OrderSummary from './stepForms/OrderSummary'
import { useSelector } from 'react-redux'

export default function StepForm() {
    const currentStep=useSelector((store)=>store.checkout.currentStep)
    function renderFormByStep(step){
        if(step===1){
            return <PersonalDetail/>
        }
        else if(step===2){
            return <ShippingDetail/>
        }else if(step===3){
            return <PaymentMethod/>
        } else if(step===4){
            return <OrderSummary/>
        }
    }
  return (
    <div>
     {renderFormByStep(currentStep)} 
    </div>
  )
}
