import React from "react";
import Input from "../Input/Input";
import Label from "../Label/Label";
import Button from "../../Button/Button";

const Form2 = ({ isModalOpen, prevModal, getValues, getValueseHandler }) => {
  if (!isModalOpen) {
    return false;
  }

  return (
    <div className="flex justify-center align-center py-10 h-[1024px]  fixed top-0 right-0 z-10  w-full ">
      <form className="flex  w-[560px] bg-white h-[500px] flex-col p-[32px] rounded">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <h1>Create A Job </h1>
            <span>Step 2</span>
          </div>

          <div className="flex gap-6 justify-between">
            <div className="flex flex-col justify-start ">
              <Label text="Experience" />
              <Input
                type="number"
                className="w-full"
                placeholder="Minimum Experience "
                value={getValues.minimumExperience}
                name="minimumExperience"
                onChange={getValueseHandler}
              />
            </div>
            <div className="flex flex-col justify-end ">
              <Input
                type="number"
                className="w-full"
                placeholder="Maximum Experience "
                value={getValues.maximumExperience}
                name="maximumExperience"
                onChange={getValueseHandler}
              />
            </div>
          </div>

          <div className="flex gap-6 justify-between">
            <div className="flex flex-col justify-start ">
              <Label text="Salary" />
              <Input
                type="number"
                className="w-full"
                placeholder="Minimum Salary "
                value={getValues.minimumSalary}
                name="minimumSalary"
                onChange={getValueseHandler}
              />
            </div>
            <div className="flex flex-col justify-end ">
              <Input
                type="number"
                className="w-full"
                placeholder="Maximum Salary "
                value={getValues.maximumSalary}
                name="maximumSalary"
                onChange={getValueseHandler}
              />
            </div>
          </div>

          <div className="flex flex-col justify-start ">
            <Label text="Total Employee" />
            <Input
              type="number"
              className="w-[489px]"
              placeholder="ex. 100"
              value={getValues.totalEmployee}
              onChange={getValueseHandler}
            />
          </div>

          {/* Radio Button  */}
          <div className="flex flex-col gap-1">
            <div>
              <Label text="Apply Type" />
            </div>
            <div className="flex gap-4">
              <div className=" flex gap-1">
                <Input
                  type="radio"
                  value={getValues.applyType}
                  onChange={getValueseHandler}
                  className="w-[20px]"
                />
                <div>
                  <Label text="Quick Apply" />
                </div>
              </div>
              <div className="flex gap-1">
                <Input
                  type="radio"
                  Value={getValues.applyType}
                  onChange={getValueseHandler}
                  className="w-[20px]"
                />
                <div>
                  <Label text="External Apply" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-evenly">
            <Button onClick={prevModal} label="Go Back" />
            <Button
              type="submit"
              label="Submit"
              onClick={() => console.log(getValues)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form2;
