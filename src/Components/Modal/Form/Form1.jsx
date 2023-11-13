import React from "react";
import Input from "../Input/Input";
import Label from "../Label/Label";
import Button from "../../Button/Button";

const Form1 = ({
  isModalOpen,
  isModalClose,
  openModal2,
  getValues,
  getValueseHandler,
  disabled,
}) => {
  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="flex justify-center align-center py-10 h-[1024px]  fixed top-0 right-0 z-10  w-full mt-5 ">
      <form className="flex  w-[560px] bg-white h-[500px] flex-col p-[32px] rounded">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <h1>Create A Job </h1>
            <span>Step 1</span>
          </div>
          <div className="flex flex-col justify-start ">
            <Label text="Job Title" />
            <Input
              type="text"
              className="w-[489px]"
              placeholder="ex. UX UI Designer"
              value={getValues.title}
              onChange={getValueseHandler}
              name="title"
            />
          </div>
          <div className="flex flex-col justify-start ">
            <Label text="Company Name" />
            <Input
              type="text"
              className="w-[489px]"
              placeholder="ex. Google"
              value={getValues.companyName}
              onChange={getValueseHandler}
              name="companyName"
            />
          </div>
          <div className="flex flex-col justify-start ">
            <Label text="Industry" />
            <Input
              type="text"
              className="w-[489px]"
              placeholder="ex. Information Technology "
              value={getValues.industry}
              onChange={getValueseHandler}
              name="industry"
            />
          </div>
          <div className="flex gap-6 justify-between">
            <div className="flex flex-col justify-start ">
              <Label text="Location" />
              <Input
                type="text"
                className="w-full"
                placeholder="ex. Chennai "
                value={getValues.location}
                onChange={getValueseHandler}
                name="location"
              />
            </div>
            <div className="flex flex-col justify-start ">
              <Label text="Remote Type" />
              <Input
                type="text"
                className="w-full"
                placeholder="ex. In-office "
                value={getValues.remoteType}
                onChange={getValueseHandler}
                name="remoteType"
              />
            </div>
          </div>
          <div className="flex justify-evenly">
            <Button onClick={isModalClose} label="Close" />
            <Button
              type="submit"
              label="Next"
              onClick={openModal2}
              disabled={disabled}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form1;
