import React, { useState, useEffect } from "react";
import Card from "./Components/Card/Card";
import Button from "./Components/Button/Button";
// import Modal from "./Components/Modal/Modal";
import Form1 from "./Components/Modal/Form/Form1";
import Form2 from "./Components/Modal/Form/Form2";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://6530d94e6c756603295f269f.mockapi.io/jobs"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [showModal, setShowModal] = useState({ form1: false, form2: false });

  const openModal = () => {
    setShowModal({ ...showModal, form1: true, form2: false });
  };

  const closeModal = () => {
    setShowModal({ ...showModal, form1: false, form2: false });
    setGetValues({
      title: "",
      companyName: "",
      location: "",
      industry: "",
      remoteType: "",
      minimumSalary: "",
      maximumSalary: "",
      minimumExperience: "",
      maximumExperience: "",
      applyType: "",
      totalEmployee: "",
    });
  };

  const openModal2 = () => {
    setShowModal({ ...showModal, form1: false, form2: true });
  };

  const prevModal = () => {
    setShowModal({ ...showModal, form1: true, form2: false });
  };

  const [getValues, setGetValues] = useState({
    title: "",
    companyName: "",
    location: "",
    industry: "",
    remoteType: "",
    minimumSalary: "",
    maximumSalary: "",
    minimumExperience: "",
    maximumExperience: "",
    applyType: "",
    totalEmployee: "",
  });

  const getValueseHandler = (e) => {
    // console.log(e.target.name, e.target.value);
    setGetValues((prevGetValues) => ({
      ...prevGetValues,
      [e.target.name]: e.target.value,
    }));
    
    setGetValues((prevGetValues) => ({
      ...prevGetValues,
      [e.target.name]: e.target.value,
    }));
    
    // check if string
    if (typeof e.target.value === 'string' ) {
      const isAlphabetic = /^[a-zA-Z]*$/.test(e.target.value);
  
      setGetValues((prevGetValues) => ({
        ...prevGetValues,
        [e.target.name]: isAlphabetic ? e.target.value : '',
      }));
    }
   
    // Check if the input is a number
    if (!isNaN(parseFloat(e.target.value)) && isFinite(e.target.value)) {
      setGetValues((prevGetValues) => ({
        ...prevGetValues,
        [e.target.name]: parseFloat(e.target.value),
      }));
    }
    if (e.target.type === 'radio') {
      // Handle radio button input
      setGetValues((prevGetValues) => ({
        ...prevGetValues,
        [e.target.name]: e.target.value,
      }));
    }
  };


  
  
  
  
  
  

    // if{typeof e.target.value === 'number' || e.target.value instanceof number) {
    //   const numericValue = /[^a-zA-Z]/g.test(e.target.value)
    // if (!isNaN(numericValue)) {
    
    
// Using this code write if input type =text e.target.value

// /^[a-zA-Z]*$/.test(inputValue)
    
    console.log(getValues.maximumExperience, "bigExp");
    console.log(getValues.minimumExperience, "smallExp");
  

  // validation
  const disableBtnForm1 = () => {
    
    return (
      getValues.title.length < 1 ||
      getValues.companyName.length < 1 ||
      getValues.industry.length < 1 ||
      getValues.location.length < 1 ||
      getValues.remoteType.length < 1
    );
  };

  const disableBtnForm2 = () => {
    return (
      getValues.minimumExperience.length < 1 ||
      getValues.maximumExperience.length < 1 ||
      getValues.minimumSalary.length < 1 ||
      getValues.maximumSalary.length < 1 ||
      getValues.totalEmployee.length < 1 ||
      getValues.applyType.length < 1
    );
  };

  
  const isValid = () => {
    return  parseInt(getValues.minimumExperience) < parseInt(getValues.maximumExperience) &&
            parseInt(getValues.minimumSalary) < parseInt(getValues.maximumSalary) 

  } 



  return (
    <>
      {/* <Modal /> */}
      <Form1
        isModalOpen={showModal.form1}
        isModalClose={closeModal}
        openModal2={openModal2}
        getValues={getValues}
        getValueseHandler={getValueseHandler}
        disabled={disableBtnForm1()}
      />
      <Form2
        isModalOpen={showModal.form2}
        prevModal={prevModal}
        getValues={getValues}
        getValueseHandler={getValueseHandler}
        closeModal={closeModal}
        disabled={disableBtnForm2() || !isValid()  }
      />
      <div className="flex justify-evenly">
        <Button onClick={openModal} label="Apply Now" />
        <Button label="Delete Button" />
      </div>
      <div
        className={` ${
          showModal.form2 || showModal.form1
            ? "flex opacity-20 fixed overflow-hidden "
            : ""
        } flex-wrap bg-[#D8D8D8] flex gap-12 justify-center align-center py-4`}
      >
        {jobs.map((job, index) => {
          return index < 10 && <Card key={job.id} data={job} />;
        })}
      </div>
    </>
  );
}

export default App;
