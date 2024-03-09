import { useState, useEffect } from "react";
import { ContentButton } from "./Buttons/ContentButton";
import { CustomizeButton } from "./Buttons/CustomizeButton";
import { InputBox } from "./InputBox";
import { EducationSection } from "./Sections/EducationSection";
import { ExperienceSection } from "./Sections/ExperienceSection";
import { ClearButton } from "./Buttons/ClearButton";
import { LoadExampleButton } from "./Buttons/LoadExampleButton";
import { HeaderOutputSection } from "./HeaderOutputSection";
import data from "../data/exampleData";

export const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [adress, setAdress] = useState("");

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

  useEffect(() => {}, []);

  return (
    <div className="flex justify-center bg-slate-400 gap-10 p-10 h-dvh">
      <div className="flex-col bg-white rounded-lg h-1/5 p-2">
        <ContentButton />
        <CustomizeButton />
      </div>
      <div className="flex-col justify-center items-center w-1/3">
        <div className="flex justify-center gap-5 py-2 mb-2 rounded-lg bg-white">
          <ClearButton clearData={clearData} />
          <LoadExampleButton onClick={loadData} />
        </div>
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
        <EducationSection />
        <ExperienceSection />
      </div>
      <div className="bg-slate-500 w-1/2">
        <HeaderOutputSection
          fullName={fullName}
          email={email}
          phoneNum={phoneNum}
          address={adress}
        />
      </div>
    </div>
  );
};
