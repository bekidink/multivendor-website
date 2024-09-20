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
import { Plus, X } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const NewStaff = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState(["tag1","tag2","tag3"]);
  
  const categories = [
    {
      id: 1,
      title: "Category 1",
    },
    {
      id: 2,
      title: "Category 2",
    },
    {
      id: 3,
      title: "Category 3",
    },
    {
      id: 4,
      title: "Category 4",
    },
    {
      id: 5,
      title: "Category 5",
    },
  ];
  const Staffs = [
    {
      id: 1,
      title: "Staff 1",
    },
    {
      id: 2,
      title: "Staff 2",
    },
    {
      id: 3,
      title: "Staff 3",
    },
    {
      id: 4,
      title: "Staff 4",
    },
    {
      id: 5,
      title: "Staff 5",
    },
  ];
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      isActive: true,
    },
  });
  const isActive = watch("isActive");
  async function onSubmit(data) {
    setLoading(true);
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.tags=tags;
    makePostRequest(setLoading, "api/staffs", data, "Staff ", reset);
    console.log(data);
  }
  return (
    <div>
      <FormHeader title={"New Staff"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="w-full max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label={"Staff's Full Name"}
            name={"name"}
            errors={errors}
            register={register}
          />
           <TextInput
            label={"NIN (Id Number)"}
            name={"nin"}
            errors={errors}
            register={register}
          />
            <TextInput
            label={"Date of Birth"}
            name={"dob"}
            type="date"
            errors={errors}
            register={register}
          />
           <TextInput
            label={"Password"}
            name={"password"}
            type="password"
            errors={errors}
            register={register}
          />
          <TextInput
            label={"Staff's Phone"}
            name={"phone"}
            type="tel"
            errors={errors}
            register={register}
            className="w-full"
          />
          <TextInput
            label={"Staff's Email Address"}
            name={"email"}
            type="email"
            errors={errors}
            register={register}
            className="w-full"
          />
          <TextInput
            label={"Staff's Physical Address"}
            name={"physicalAddress"}
            errors={errors}
            register={register}
            className="w-full"
          />
         
          <TextareaInput
            label={"Notes"}
            name={"notes"}
            register={register}
            errors={errors}
            className="w-full"
          />
         
        
          <ToggleInput
  label=" Staff Status"
   name={isActive}
   trueTitle="Active"
   falseTitle="Draft"
   register={register}
  />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle={"Create Staff"}
          loadingButtonTitle={"Creating Staff please wait..."}
        />
      </form>
    </div>
  );
};

export default NewStaff;
