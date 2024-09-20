import NewFarmerForm from "@/components/backoffice/NewFarmerForm";
import OnBoardingSteps from "@/components/frontend/onboarding/OnBoardingSteps";
import StepForm from "@/components/frontend/onboarding/StepForm";
import { getData } from "@/lib/getData";
import React from "react";

const page = async ({ params: { id } }) => {
  const user = await getData(`users/${id}`);
  const steps = [
    {
      number: 1,
      title: "Basic Information",
    },
    {
      number: 2,
      title: "Farm Details",
    },
    {
      number: 3,
      title: "Additional Information",
    },
    {
      number: 4,
      title: "Summary",
    },
  ];
  return (
    // <div className='flex flex-col gap-6 p-16'>
    //     <div className="max-w-4xl p-4 mx-auto">
    //     <h2> Hello {user?.name} Tell More About Your</h2>

    //     </div>
    //     <NewFarmerForm user={user}/>

    // </div>
    <div className="bg-slate-200 dark:bg-slate-900 min-h-screen">
      <div className="max-w-3xl p-6 my-6 mx-auto border border-slate-300  rounded-lg">
        <OnBoardingSteps steps={steps} />
        <div className="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          {/* <CartBanner/> */}
    <StepForm farmerId={id}/>
        </div>
      </div>
    </div>
  );
};

export default page;
