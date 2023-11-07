import React from "react";
import Input from "../Input/Input";
import Label from "../Label/Label";
import Button from "../../Button/Button";

const Form2 = ({ isModalOpen, isModalClose }) => {
  if (!isModalOpen) {
    console.log(isModalOpen);
    return null;
  }

  return (
    <div className="flex justify-center align-center py-10 h-[1024px] bg-[#F2F5F7] ">
      <form
        className="flex  w-[560px] bg-white h-[500px] flex-col p-[32px] rounded"
        action="submit_job_application.php"
        method="post"
      >
        <div className="flex flex-col gap-6">        
        <div className="flex justify-between">
          <h1>Create A Job </h1>
          <span>Step 2</span>
        </div>
       
        <div className="flex gap-6 justify-between">
        <div className="flex flex-col justify-start ">
          <Label text="Experience" />
          <Input type="number" className='w-full' placeholder='Minimum Experience ' />
        </div>        
        <div className="flex flex-col justify-end ">
          <Input type="number" className='w-full' placeholder='Maximum Experience ' />
        </div>
        </div>

        <div className="flex gap-6 justify-between">
        <div className="flex flex-col justify-start ">
          <Label text="Salary" />
          <Input type="number" className='w-full' placeholder='Minimum Salary ' />
        </div>        
        <div className="flex flex-col justify-end ">
          <Input type="number" className='w-full' placeholder='Maximum Salary ' />
        </div>
        </div>

        <div className="flex flex-col justify-start ">
          <Label text="Total Employee" />
          <Input type="number" className="w-[489px]" placeholder='ex. 100' />
        </div>
        <div className="flex flex-col justify-start ">
          <Label text="Total Employee" />
          <div className="flex  gap-4">

         
          <div className="flex gap-2 items-center">
          <Input type="radio" className="w-4" placeholder='ex. 100' />
          <Label text="Quick Apply" />
          </div>
          <div className="flex gap-2 items-center ">
          <Input type="radio" className="w-4" placeholder='ex. 100' />
          <Label text="External Apply " />
          </div>
          </div>
        </div>

        <div className="flex justify-evenly">
          <Button onClick={isModalClose} label="Close" />
          <Button type="submit" label="Submit" />
        </div>
        </div>
      </form>
    </div>
  );
};

export default Form2;
