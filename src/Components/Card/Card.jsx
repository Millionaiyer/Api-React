import logo from "/src/assets/N.png";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { useState } from "react";
const Card = ({ data }) => {
  const {
    title,
    companyName,
    location,
    minimumSalary,
    maximumSalary,
    minimumExperience,
    maximumExperience,
    applyType,
    totalEmployee,
  } = data;

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="flex gap-1  border-2 rounded-md border-[#DADEDF] bg-white py-[24px] px-[16px] w-[40%]  grow-1 shrink">
        <div className="flex gap-2">
          <img
            src={logo}
            className="rounded w-12 h-12"
            alt="logo for job applicant"
          />
          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col">
              <span>{title}</span>
              <span>{companyName}</span>
              <span>{location}(In-office)</span>
            </div>
            <div className="flex flex-col">
              <span>{applyType} (9.00 am - 5.00 pm IST)</span>
              <span>
                Experience ({minimumExperience} - {maximumExperience} years)
              </span>
              <span>
                INR (₹) {minimumSalary} - {maximumSalary} / Month
              </span>
              <span>{totalEmployee} employees</span>
            </div>
            <div className="flex gap-2">
              <Button onClick={openModal} label="Apply Now" />
              <Modal isModalOpen={showModal} isModalClose={closeModal} />
            </div>
          </div>
        </div>
        {/* {showModal ? <Modal /> : console.log("error")} */}
      </div>
    </>
  );
};
export default Card;
