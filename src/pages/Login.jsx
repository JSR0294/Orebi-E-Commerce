import React from "react";
import Container from "../components/layouts/Container";
import Breadcrumb from "../components/layouts/Breadcrumb";
import Flex from "../components/layouts/Flex";
import InputField from "../components/layouts/InputField";
import Btn from "../components/layouts/Btn";

const Login = () => {
  return (
    <section>
      <Container>
        <Breadcrumb
          pageTitle={window.location.pathname.split("/")[1]}
          pathName={window.location.pathname.split("/")[1]}
          path={window.location.pathname}
        />
        <div className="border-b border-[#F0F0F0]">
          <p className=" text-secondaryColor w-[615px] text-base leading-8 mb-[60px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
        </div>
        <div className="border-b border-[#F0F0F0] my-[60px]">
          <h3 className=" text-primaryColor font-bold text-4xl">
            Returning Customer
          </h3>
          <form className=" mt-10 mb-[60px]">
            <Flex className={" mb-8 gap-x-10 items-center"}>
              <InputField
                label={"Email"}
                placeholder={"user@domain.com"}
                type={"email"}
                id={"email"}
                className={"border-b border-[#F0F0F0] w-[500px]"}
                inputClassName={"mt-3 mb-4"}
                labelClassName={"text-primaryColor font-bold text-base"}
              ></InputField>
              <InputField
                label={"Password"}
                placeholder={"give user password"}
                type={"password"}
                id={"pwd"}
                className={"border-b border-[#F0F0F0] w-[500px]"}
                inputClassName={"mt-3 mb-4"}
                labelClassName={"text-primaryColor font-bold text-base"}
              ></InputField>
            </Flex>
            <InputField
          type={"submit"}
          value={"Post"}
          className={
            "py-4 px-20 border border-primaryColor text-primaryColor font-bold text-sm mt-8 w-[200px] cursor-pointer"
          }
          inputClassName={"cursor-pointer"}
        ></InputField>
          </form>
        </div>
        <div className="mb-[140px]">
        <h3 className=" text-primaryColor font-bold text-4xl mb-9">
        New Customer
          </h3>
          <p className=" text-secondaryColor w-[615px] text-base leading-8 mb-[50px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
          <Btn
            btnName={"Login"}
            className={"py-4 px-20 bg-primaryColor text-white font-bold text-sm"} link={'/login'}
          />
        </div>
      </Container>
    </section>
  );
};

export default Login;
