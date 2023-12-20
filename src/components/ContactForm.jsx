import React from "react";
import InputField from "./layouts/InputField";

const ContactForm = () => {
  return (
    <>
      <h3 className=" text-primaryColor font-bold text-4xl">Fill up a Form</h3>
      <form className="mt-10">
        <InputField
          label={"Name"}
          placeholder={"Your name here"}
          type={"text"}
          id={'full name'}
          className={"border-b border-[#F0F0F0] w-[750px]"}
          inputClassName={"mt-3 mb-4"}
          labelClassName={"text-primaryColor font-bold text-base"}
        ></InputField>
        <InputField
          label={"Email"}
          placeholder={"Your email here"}
          type={"email"}
          id={'email'}
          className={"border-b border-[#F0F0F0] w-[750px]"}
          inputClassName={"mt-3 mb-4"}
          labelClassName={"text-primaryColor font-bold text-base mt-6"}
        ></InputField>
        <InputField
          label={"Massage"}
          placeholder={"Massage type here"}
          type={"text"}
          id={'message'}
          className={"border-b border-[#F0F0F0] w-[750px]"}
          inputClassName={"mt-3 mb-4"}
          labelClassName={"text-primaryColor font-bold text-base mt-6"}
        ><textarea className=" resize-none h-[115px] w-full" ></textarea></InputField>
      <InputField type={'submit'} value={'Post'} className={"py-4 px-20 bg-primaryColor text-white font-bold text-sm mt-8 w-[200px] cursor-pointer"} inputClassName={'cursor-pointer'}></InputField>
      </form>
    </>
  );
};

export default ContactForm;
