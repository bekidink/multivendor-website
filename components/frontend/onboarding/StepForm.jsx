"use client"
import React from 'react'

import { useSelector } from 'react-redux'
import BasicInformation from './stepForms/BasicInformation'
import FarmDetails from './stepForms/FarmDetails'
import AdditionalInformation from './stepForms/AdditionalInformationForm'
import Summary from './stepForms/Summary'

export default function StepForm({farmerId}) {
    const currentStep=useSelector((store)=>store.onboarding.currentStep)
   console.log(currentStep)
    function renderFormByStep(step){
        if(step===1){
            return <BasicInformation/>
        }
        else if(step===2){
            return <FarmDetails/>
        }else if(step===3){
            return <AdditionalInformation/>
        } else if(step===4){
            return <Summary farmerId={farmerId}/>
        }
    }
  return (
    <div>
     {renderFormByStep(currentStep)} 
    </div>
  )
}
