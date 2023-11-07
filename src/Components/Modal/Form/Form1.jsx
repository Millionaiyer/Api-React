import React from "react";
import Input from "../Input/Input";
import Label from "../Label/Label";
import Button from "../../Button/Button";

const Form1 = ({ isModalOpen, isModalClose }) => {
  if (!isModalOpen) {
    console.log(isModalOpen);
    return null;
  }

  return (
    <div className="flex justify-center align-center py-10 h-[1024px] bg-slate-500">
      <form
        className="flex  w-[500px] bg-white h-[500px] flex-col"
        action="submit_job_application.php"
        method="post"
      >
        <div className="flex justify-around">
          <h1>Create A Job </h1>
          <span>Step 1</span>
        </div>
        <div className="flex">
          <Label text="title" />
          <Input type="text" />
        </div>
        <div className="flex">
          <Button onClick={isModalClose} label="Close" />
          <Button type="submit" label="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Form1;
