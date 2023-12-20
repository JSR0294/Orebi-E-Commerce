import React from "react";
import InputField from "./layouts/InputField";
import Btn from './layouts/Btn'

const ContactForm = () => {
  return (
    <>
      <h3 className=" text-primaryColor font-bold text-4xl">Fill up a Form</h3>
      <div className="mt-10">
        <InputField
          label={"Name"}
          placeholder={"Your name here"}
          type={"text"}
          className={"border-b border-[#F0F0F0] w-[750px]"}
          inputClassName={"mt-3 mb-4"}
          labelClassName={"text-primaryColor font-bold text-base"}
        ></InputField>
        <InputField
          label={"Email"}
          placeholder={"Your email here"}
          type={"email"}
          className={"border-b border-[#F0F0F0] w-[750px]"}
          inputClassName={"mt-3 mb-4"}
          labelClassName={"text-primaryColor font-bold text-base mt-6"}
        ></InputField>
        <InputField
          label={"Massage"}
          placeholder={"Massage type here"}
          type={"text"}
          className={"border-b border-[#F0F0F0] w-[750px]"}
          inputClassName={"mt-3 mb-4"}
          labelClassName={"text-primaryColor font-bold text-base mt-6"}
        ><textarea className=" resize-none h-[115px] w-full" ></textarea></InputField>
      </div>
      <Btn btnName={'Post'} className={"py-4 px-20 bg-primaryColor text-white font-bold text-sm "} btnClassName={'mt-8'} link={''}/>
    </>
  );
};

export default ContactForm;
