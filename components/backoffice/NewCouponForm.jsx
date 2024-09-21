"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import TextInput from '@/components/Forminputs/TextInput';
import SubmitButton from '@/components/Forminputs/SubmitButton';
import ToggleInput from '@/components/Forminputs/ToggleInput';
import { makePostRequest, makePutRequest } from '@/lib/apiRequest';
import { convertIsoDateToNormal } from '@/lib/convertIsoDateToNormal';
import generateCouponCode from '@/lib/generateCouponCode';
import { generateIsoFormattedDate } from '@/lib/generateIsoFormattedDate';

const NewCouponForm = ({ updateData = {} }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const expiryDateNormal = convertIsoDateToNormal(updateData.expiryDate);
  const initialImageUrl = updateData?.imageUrl ?? "";
  const Id = updateData?.id ?? "";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      isActive: true,
      ...updateData,
    },
  });

  const isActive = watch("isActive") || false;

  if (status === "loading") {
    return null;
  }
  if (status === "unauthenticated") {
    return null;
  }

  const vendorId = session?.user?.id;

  async function onSubmit(data) {
    setLoading(true);
    data.vendorId = vendorId;
    const couponCode = generateCouponCode(data.title, data.expiryDate);
    const isoFormattedDate = generateIsoFormattedDate(data.expiryDate);
    data.couponCode = couponCode;
    data.expiryDate = isoFormattedDate;

    if (Id) {
      data.id = Id;
      await makePutRequest(setLoading, `api/coupons/${Id}`, data, 'Coupon', () => router.push("/dashboard/coupons"));
    } else {
      await makePostRequest(setLoading, 'api/coupons', data, 'Coupon', reset, () => router.push("/dashboard/coupons"));
    }

    setLoading(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput label={"Coupon Title"} name={"title"} errors={errors} register={register} />
          <TextInput label={"Expiry Date"} name={"expiryDate"} errors={errors} register={register} type='date' className='w-full' />
          <ToggleInput label="Publish your Coupon" name={"isActive"} trueTitle="Active" falseTitle="Draft" register={register} />
        </div>
        <SubmitButton isLoading={loading} buttonTitle={Id ? "Update Coupon" : "Create Coupon"} loadingButtonTitle={Id ? "Updating Coupon please wait..." : "Creating Coupon please wait..."} />
      </form>
    </div>
  );
}

export default NewCouponForm;
