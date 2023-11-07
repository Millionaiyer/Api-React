import React, { useState, useEffect } from "react";
import Card from "./Components/Card/Card";
import Button from "./Components/Button/Button";
import Modal from "./Components/Modal/Modal";

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

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Modal isModalOpen={showModal} isModalClose={closeModal} />
      <Button onClick={openModal} label="Apply Now" />
      <div className="flex flex-wrap bg-[#D8D8D8] gap-12 justify-center align-center py-4">
        {jobs.map((job, index) => {
          return index < 10 && <Card key={job.id} data={job} />;
        })}
      </div>
    </>
  );
}

export default App;
