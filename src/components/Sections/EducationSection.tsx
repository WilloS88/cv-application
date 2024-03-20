import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import arrowUp from "../../assets/icons/modal/arrowUp.svg";
import arrowDown from "../../assets/icons/modal/arrowDown.svg";
import educationIcon from "../../assets/icons/input/educationIcon.svg";
import { Modal } from "../modal/Modal";
import { InputBox } from "../InputBox";

export const EducationSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [educationArray, setEducationArray] = useState([
    {
      schoolName: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    },
  ]);
  const [educationDetails, setEducationDetails] = useState({
    schoolName: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const handleEducationDetailChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setEducationDetails({
      ...educationDetails,
      [field]: e.target.value,
    });
  };

  const handleSave = () => {
    setEducationArray([...educationArray, educationDetails]);
    setEducationDetails({
      schoolName: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    }); // Reset input fields
    closeModal(); // Close modal
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="my-2">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex items-center justify-between w-full p-4 bg-white rounded-lg shadow">
              <span className="flex items-center">
                <img
                  src={educationIcon}
                  alt="Education"
                  className="mr-2 w-8 h-8"
                />
                Education
              </span>
              <span>
                {open ? (
                  <img src={arrowUp} alt="Collapse" className="mr-2 w-6 h-6" />
                ) : (
                  <img src={arrowDown} alt="Expand" className="mr-2 w-6 h-6" />
                )}
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className="my-2 p-4 bg-white rounded-lg shadow">
              {educationArray.map(
                (entry, index) =>
                  index > 0 && (
                    <div key={index} className="p-2">
                      <p>School: {entry.schoolName}</p>
                      <p>Degree: {entry.degree}</p>
                      <p>Start Date: {entry.startDate}</p>
                      <p>End Date: {entry.endDate}</p>
                      <p>Location: {entry.location}</p>
                    </div>
                  )
              )}
              <div className="flex justify-center">
                <button
                  className="mt-2 px-4 py-2 bg-indigo-500 text-white rounded-full shadow hover:bg-indigo-600"
                  onClick={openModal}
                >
                  + Education
                </button>

                <Modal isOpen={isModalOpen} onClose={closeModal}>
                  <InputBox
                    type="text"
                    heading="School Name"
                    value={educationDetails.schoolName}
                    onChange={(e) =>
                      handleEducationDetailChange(e, "schoolName")
                    }
                    placeholderText="Enter school/university name"
                  />
                  <InputBox
                    type="text"
                    heading="Degree"
                    value={educationDetails.degree}
                    onChange={(e) => handleEducationDetailChange(e, "degree")}
                    placeholderText="Enter degree"
                  />
                  <div className="flex justify-evenly">
                    <InputBox
                      type="date"
                      heading="Start Date"
                      value={educationDetails.startDate}
                      onChange={(e) =>
                        handleEducationDetailChange(e, "startDate")
                      }
                      placeholderText=""
                    />
                    <InputBox
                      type="text"
                      heading="End Date"
                      value={educationDetails.endDate}
                      onChange={(e) =>
                        handleEducationDetailChange(e, "endDate")
                      }
                      placeholderText=""
                    />
                  </div>

                  <InputBox
                    type="text"
                    heading="Location"
                    value={educationDetails.location}
                    onChange={(e) => handleEducationDetailChange(e, "location")}
                    placeholderText="Enter location"
                  />
                  <div className="flex justify-around">
                    <button
                      className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                    <button
                      className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Modal>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};
