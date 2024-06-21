import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import arrowUp from "../../assets/icons/modal/arrowUp.svg";
import arrowDown from "../../assets/icons/modal/arrowDown.svg";
import educationIcon from "../../assets/icons/input/educationIcon.svg";
import { InputBox } from "../InputBox";
import type { EducationEntry } from "../../types/EducationSectionProps";

export const EducationSection = () => {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");

  const handleSchool = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSchool(e.target.value);
  };

  const handleDegree = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDegree(e.target.value);
  };

  const handleStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  const handleLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const [educations, setEducations] = useState<EducationEntry[]>([]);
  const [newEducation, setNewEducation] = useState<EducationEntry>({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);



  const saveEducation = () => {
    setEducations((prevEducations) => [...prevEducations, newEducation]);
    setNewEducation({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
    setIsFormVisible(false);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="my-2">
      <Disclosure>
        {({ open }) => (
          <div>
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
                  <span>
                    <img
                      src={arrowUp}
                      alt="Education"
                      className="mr-2 w-6 h-6"
                    />
                  </span>
                ) : (
                  <span>
                    <img
                      src={arrowDown}
                      alt="Education"
                      className="mr-2 w-6 h-6"
                    />
                  </span>
                )}
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className="my-2 p-4 bg-white rounded-lg shadow">
              {isFormVisible && (
                <form className="space-y-2">
                  <InputBox
                    heading="School"
                    value={school}
                    onChange={handleSchool}
                    placeholderText="Enter school / university"
                  />
                  <InputBox
                    heading="Degree"
                    value={degree}
                    onChange={handleDegree}
                    placeholderText="Enter Degree / Field Of Study"
                  />
                  <div className="flex gap-4">
                    <InputBox
                      heading="Start Date"
                      value={startDate}
                      onChange={handleStartDate}
                      placeholderText="Enter Start Date"
                    />
                    <InputBox
                      heading="End Date"
                      value={endDate}
                      onChange={handleEndDate}
                      placeholderText="Enter End Date"
                    />
                  </div>
                  <InputBox
                    heading="Location"
                    value={location}
                    onChange={handleLocation}
                    placeholderText="Enter Location"
                  />
                  <div className="flex justify-end gap-4">
                    <button
                      type="button"
                      onClick={saveEducation}
                      className="px-4 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={toggleFormVisibility}
                      className="px-4 py-2 bg-gray-500 text-white rounded-full shadow hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
              <div className="flex justify-center">
                <button
                  onClick={toggleFormVisibility}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600"
                >
                  + Education
                </button>
              </div>
              <div>
                {educations.map((education, index) => (
                  <div key={index} className="border p-4 rounded-lg my-2">
                    <p><strong>School:</strong> {education.school}</p>
                    <p><strong>Degree:</strong> {education.degree}</p>
                    <p><strong>Start Date:</strong> {education.startDate}</p>
                    <p><strong>End Date:</strong> {education.endDate}</p>
                    <p><strong>Location:</strong> {education.location}</p>
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </div>
  );
};
