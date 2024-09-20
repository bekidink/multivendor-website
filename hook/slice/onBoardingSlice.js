const {createSlice, current} =require("@reduxjs/toolkit")
const initialState={
    currentStep:1,
   onBoardingFormData:{}
}
const onboardingSlice=createSlice({
    name:"onboarding",
    initialState,
    reducers:{
        setCurrentStep:(state,action)=>{
            state.currentStep=action.payload
        },
        updateonBoardingFormDataFormData:(state,action)=>{
            state.onBoardingFormData={
                ...state.onBoardingFormData,
                ...action.payload
            }
        }
    }
})
export const {setCurrentStep,updateonBoardingFormDataFormData}=onboardingSlice.actions
export default onboardingSlice.reducer