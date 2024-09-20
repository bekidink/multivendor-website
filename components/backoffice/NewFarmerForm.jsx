"use client";
import ImageInput from "@/components/Forminputs/ImageInput";
import ItemsInput from "@/components/Forminputs/ItemsInput";
import SelectInput from "@/components/Forminputs/SelectInput";
import SubmitButton from "@/components/Forminputs/SubmitButton";
import TextareaInput from "@/components/Forminputs/TextArea";
import TextInput from "@/components/Forminputs/TextInput";
import ToggleInput from "@/components/Forminputs/ToggleInput";
import FormHeader from "@/components/backoffice/FormHeader";
import { makePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import generateUserCode from "@/lib/generateUserCode";
import { Plus, X } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const NewFarmerForm = ({user}) => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [crops,setCrops]=useState([])
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      isActive: true,
      ...user
    },
  });
  const isActive = watch("isActive");
  async function onSubmit(data) {
    setLoading(true);
    const code = generateUserCode("bcc",data.name);
    data.code = code;
    data.userId=user.id;
    data.products=crops
    data.profileImageUrl = imageUrl;
    makePostRequest(setLoading, "api/farmers", data, "Farmer ", reset);
    console.log(data);
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="w-full max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label={"Farmer's Full Name"}
            name={"name"}
            errors={errors}
            register={register}
            className="w-full"
          />
          <TextInput
            label={"Farmer's Phone"}
            name={"phone"}
            type="tel"
            errors={errors}
            register={register}
            className="w-full"
          />
          <TextInput
            label={"Farmer's Email Address"}
            name={"email"}
            type="email"
            errors={errors}
            register={register}
            className="w-full"
          />
          <TextInput
            label={"Farmer's Physical Address"}
            name={"physicalAddress"}
            errors={errors}
            register={register}
            className="w-full"
          />
          <TextInput
            label={"What is the size of Your Lands in Accres"}
            name={"landSize"}
            errors={errors}
            register={register}
            type="number"
            className="w-full"
          />
           <TextInput
            label={"What is your main Crop that you Cultivate"}
            name={"mainCrop"}
            errors={errors}
            register={register}
            className="w-full"
          />
          <ItemsInput setItems={setCrops} items={crops} itemTitle={"Product"}/>
           <TextInput
            label={"Farmer's Contact Person Phone"}
            name={"contactPersonPhone"}
            errors={errors}
            type="tel"
            register={register}
            className="w-full"
          />
         
         
          
          <TextareaInput
            label={"Farmer's Payment Terms"}
            name={"terms"}
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextareaInput
            label={"Notes"}
            name={"notes"}
            register={register}
            errors={errors}
            className="w-full"
          />
          <ImageInput label={"Farmer Profile"} imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint='farmerImageUploader' />
        
          <ToggleInput
  label=" Farmer Status"
   name={isActive}
   trueTitle="Active"
   falseTitle="Draft"
   register={register}
  />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle={"Create Farmer"}
          loadingButtonTitle={"Creating Farmer please wait..."}
        />
      </form>
    </div>
  );
};

export default NewFarmerForm;
