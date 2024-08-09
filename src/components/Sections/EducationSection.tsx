import { useState, ChangeEvent } from "react";
import { Disclosure } from "@headlessui/react";
import { Input } from "../ui/Input";
import { v4 as uuidv4 } from "uuid";
import type { EducationProps } from "../../types/EducationSection";

import arrowUp from "../../assets/icons/modal/arrowUp.svg";
import arrowDown from "../../assets/icons/modal/arrowDown.svg";
import educationIcon from "../../assets/icons/input/educationIcon.svg";

type EducationSectionProps = {
  educations: EducationProps[];
  setEducations: (educations: EducationProps[]) => void;
};

export const EducationSection = ({
  educations,
  setEducations,
}: EducationSectionProps) => {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSchool = (e: ChangeEvent<HTMLInputElement>) => {
    setSchool(e.target.value);
  };

  const handleDegree = (e: ChangeEvent<HTMLInputElement>) => {
    setDegree(e.target.value);
  };

  const handleStartDate = (e: ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDate = (e: ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  const handleLocation = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const validateForm = () => {
    if (!school || !degree || !startDate || !endDate || !location) {
      setError("All fields are required.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSave = () => {
    if (!validateForm()) {
      return;
    }

    if (editId !== null) {
      const updatedEducations = educations.map((education) =>
        education.id === editId
          ? { id: editId, school, degree, startDate, endDate, location }
          : education
      );
      setEducations(updatedEducations);
      setEditId(null);
    } else {
      setEducations([
        ...educations,
        { id: uuidv4(), school, degree, startDate, endDate, location },
      ]);
    }
    clearForm();
    setIsFormVisible(false);
  };

  const handleDelete = (id: string) => {
    setEducations(educations.filter((education) => education.id !== id));
  };

  const handleEdit = (id: string) => {
    const education = educations.find((education) => education.id === id);
    if (education) {
      setSchool(education.school);
      setDegree(education.degree);
      setStartDate(education.startDate);
      setEndDate(education.endDate);
      setLocation(education.location);
      setEditId(id);
      setIsFormVisible(true);
    }
  };

  const clearForm = () => {
    setSchool("");
    setDegree("");
    setStartDate("");
    setEndDate("");
    setLocation("");
    setError("");
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
              {isFormVisible ? (
                <form className="space-y-2 mb-4">
                  <Input
                    heading="School"
                    value={school}
                    onChange={handleSchool}
                    placeholderText="Enter school / university"
                  />
                  <Input
                    heading="Degree"
                    value={degree}
                    onChange={handleDegree}
                    placeholderText="Enter Degree / Field Of Study"
                  />
                  <div className="flex gap-4">
                    <Input
                      heading="Start Date"
                      value={startDate}
                      onChange={handleStartDate}
                      placeholderText="Enter Start Date"
                      type="number"
                      min="1900"
                      max="2100"
                    />
                    <Input
                      heading="End Date"
                      value={endDate}
                      onChange={handleEndDate}
                      placeholderText="Enter End Date"
                      type="number"
                      min="1900"
                      max="2100"
                    />
                  </div>
                  <Input
                    heading="Location"
                    value={location}
                    onChange={handleLocation}
                    placeholderText="Enter Location"
                  />
                  {error ? <div className="text-red-500">{error}</div> : null}
                  <div className="flex justify-end gap-4">
                    <button
                      type="button"
                      onClick={handleSave}
                      className="px-4 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        clearForm();
                        setIsFormVisible(false);
                      }}
                      className="px-4 py-2 bg-gray-500 text-white rounded-full shadow hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex justify-center mb-4">
                  <button
                    onClick={handleFormVisibility}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600"
                  >
                    + Education
                  </button>
                </div>
              )}
              <ul className="list-disc pl-5">
                {educations.map((education) => (
                  <li
                    key={education.id}
                    className="mb-2 flex justify-between items-center"
                  >
                    <span>{education.school}</span>
                    <span>
                      <button
                        onClick={() => handleEdit(education.id)}
                        className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(education.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </span>
                  </li>
                ))}
              </ul>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </div>
  );
};
