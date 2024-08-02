import { useState, useEffect } from "react";
import { ContentButton } from "./ui/Buttons/ContentButton";
import { CustomizeButton } from "./ui/Buttons/CustomizeButton";
import { InputBox } from "./ui/Inputs/InputBox";
import { EducationSection } from "./Sections/EducationSection";
import { ExperienceSection } from "./Sections/ExperienceSection";
import { ClearButton } from "./ui/Buttons/ClearButton";
import { LoadExampleButton } from "./ui/Buttons/LoadExampleButton";
import { HeaderOutputSection } from "./Sections/HeaderOutputSection";
import { EducationOutputSection } from "./Sections/EducationOutputSection";
import { ExperienceOutputSection } from "./Sections/ExperienceOutputSection";
import { CustomizeColor } from "./Sections/CustomizeColor";
import { CustomizeFont } from "./Sections/CustomizeFont";
import data from "../data/exampleData";
import type { EducationProps } from "../types/EducationSection";
import type { ExperienceProps } from "../types/ExperienceSection";

export const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [adress, setAdress] = useState("");
  const [educations, setEducations] = useState<EducationProps[]>([]);
  const [experiences, setExperiences] = useState<ExperienceProps[]>([]);
  const [visibleDiv, setVisibleDiv] = useState<number | null>(2);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePhoneNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNum(e.target.value);
  };

  const handleAdress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdress(e.target.value);
  };

  const clearData = () => {
    setFullName("");
    setEmail("");
    setPhoneNum("");
    setAdress("");
  };

  const loadData = () => {
    setFullName(data[0].fullName);
    setEmail(data[0].email);
    setPhoneNum(data[0].phoneNumber);
    setAdress(data[0].address);
  };

  const handleContCustClick = (divNumber: number) => {
    setVisibleDiv(divNumber);
  };

  useEffect(() => {}, []);

  return (
    <div className="flex justify-center bg-slate-400 gap-10 p-10 ">
      <div className="flex-col bg-white rounded-lg h-1/5 p-2">
        <ContentButton onClick={handleContCustClick} />
        <CustomizeButton onClick={handleContCustClick} />
      </div>
      <div className="flex-col justify-center items-center w-1/3">
        <div className="flex flex-wrap justify-center items-center gap-4 mb-2 rounded-lg bg-white">
          <ClearButton clearData={clearData} />
          <LoadExampleButton onClick={loadData} />
        </div>
        {visibleDiv === 1 && (
          <div>
            <div className="flex-col bg-white p-4 rounded-lg">
              <div>
                <h1 className="text-xl font-bold mb-2">Personal Details</h1>
              </div>
              <InputBox
                heading="Full Name"
                value={fullName}
                onChange={handleName}
                placeholderText="First and last name"
              />
              <InputBox
                heading="Email"
                value={email}
                onChange={handleEmail}
                placeholderText="Enter email"
              />
              <InputBox
                heading="Phone number"
                value={phoneNum}
                onChange={handlePhoneNum}
                placeholderText="Enter phone number"
              />
              <InputBox
                heading="Adress"
                value={adress}
                onChange={handleAdress}
                placeholderText="City, Country"
              />
            </div>
            <EducationSection
              educations={educations}
              setEducations={setEducations}
            />
            <ExperienceSection
              experiences={experiences}
              setExperiences={setExperiences}
            />
          </div>
        )}
        {visibleDiv === 2 && (
          <div className="flex-col">
            <CustomizeColor />
            <CustomizeFont />
          </div>
        )}
      </div>
      <div className="bg-slate-500 w-1/2 h-screen flex-col">
        <HeaderOutputSection
          fullName={fullName}
          email={email}
          phoneNum={phoneNum}
          address={adress}
        />
        <EducationOutputSection educations={educations} />
        <ExperienceOutputSection experiences={experiences} />
      </div>
    </div>
  );
};
