import { useState, ChangeEvent } from "react";
import { Disclosure } from "@headlessui/react";
import { Input } from "../ui/Input";
import { v4 as uuidv4 } from "uuid";
import type { ExperienceProps } from "../../types/ExperienceSection";

import arrowUp from "../../assets/icons/modal/arrowUp.svg";
import arrowDown from "../../assets/icons/modal/arrowDown.svg";
import experienceIcon from "../../assets/icons/input/experienceIcon.svg";

type ExperienceSectionProps = {
  experiences: ExperienceProps[];
  setExperiences: (experiences: ExperienceProps[]) => void;
};

export const ExperienceSection = ({
  experiences,
  setExperiences,
}: ExperienceSectionProps) => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleCompany = (e: ChangeEvent<HTMLInputElement>) => {
    setCompany(e.target.value);
  };

  const handlePosition = (e: ChangeEvent<HTMLInputElement>) => {
    setPosition(e.target.value);
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

  const handleDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const validateForm = () => {
    if (!company || !position || !startDate || !endDate) {
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
      const updatedExperiences = experiences.map((experience) =>
        experience.id === editId
          ? { id: editId, company, position, startDate, endDate, location }
          : experience
      );
      setExperiences(updatedExperiences);
      setEditId(null);
    } else {
      setExperiences([
        ...experiences,
        {
          id: uuidv4(),
          company,
          position,
          startDate,
          endDate,
          location,
          description,
        },
      ]);
    }
    clearForm();
    setIsFormVisible(false);
  };

  const handleDelete = (id: string) => {
    setExperiences(experiences.filter((experience) => experience.id !== id));
  };

  const handleEdit = (id: string) => {
    const experience = experiences.find((experience) => experience.id === id);
    if (experience) {
      setCompany(experience.company);
      setPosition(experience.position);
      setStartDate(experience.startDate);
      setEndDate(experience.endDate);
      setLocation(experience.location);
      setEditId(id);
      setIsFormVisible(true);
    }
  };

  const clearForm = () => {
    setCompany("");
    setPosition("");
    setStartDate("");
    setEndDate("");
    setLocation("");
    setDescription("");
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
                  src={experienceIcon}
                  alt="Experience"
                  className="mr-2 w-8 h-8"
                />
                Experience
              </span>
              <span>
                {open ? (
                  <span>
                    <img
                      src={arrowUp}
                      alt="Experience"
                      className="mr-2 w-6 h-6"
                    />
                  </span>
                ) : (
                  <span>
                    <img
                      src={arrowDown}
                      alt="Experience"
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
                    heading="Company"
                    value={company}
                    onChange={handleCompany}
                    placeholderText="Enter Company Name"
                  />
                  <Input
                    heading="Position"
                    value={position}
                    onChange={handlePosition}
                    placeholderText="Enter Position"
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
                  <Input
                    heading="Description (optional)"
                    value={description}
                    onChange={handleDescription}
                    placeholderText="Enter Description"
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
                    + Experience
                  </button>
                </div>
              )}
              <ul className="list-disc pl-5">
                {experiences.map((experience) => (
                  <li
                    key={experience.id}
                    className="mb-2 flex justify-between items-center"
                  >
                    <span>{experience.company}</span>
                    <span>
                      <button
                        onClick={() => handleEdit(experience.id)}
                        className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(experience.id)}
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
