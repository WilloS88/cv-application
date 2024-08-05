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
import type { EducationProps } from "../types/EducationSection";
import type { ExperienceProps } from "../types/ExperienceSection";

export const Form = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNum, setPhoneNum] = useState<string>("");
  const [adress, setAdress] = useState<string>("");
  const [educations, setEducations] = useState<EducationProps[]>([]);
  const [experiences, setExperiences] = useState<ExperienceProps[]>([]);
  const [visibleDiv, setVisibleDiv] = useState<number | null>(1);
  const [bgColor, setBgColor] = useState<string>("#0891b2");
  const [fontClass, setFontClass] = useState<string>("font-sans");

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

  const handleContCustClick = (divNumber: number) => {
    setVisibleDiv(divNumber);
  };

  const handleColorChange = (color: string) => {
    setBgColor(color);
  };

  const handleFontClick = (font: string) => {
    setFontClass(font);
  };

  const getTextColor = (bgColor: string): string => {
    const color = bgColor.slice(1); 
    const rgb = parseInt(color, 16); 
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
    return luminance > 186 ? "#000000" : "#ffffff";
  };

  useEffect(() => {}, []);

  return (
    <div className="flex justify-center bg-slate-400 gap-10 p-10">
      <div className="flex-col bg-white rounded-lg h-1/5 p-2">
        <ContentButton onClick={handleContCustClick} />
        <CustomizeButton onClick={handleContCustClick} />
      </div>
      <div className="flex-col justify-center items-center w-1/3">
        <div className="flex flex-wrap justify-center items-center gap-4 mb-2 rounded-lg bg-white">
          <ClearButton
            setFullName={setFullName}
            setEmail={setEmail}
            setPhoneNum={setPhoneNum}
            setAdress={setAdress}
            setEducations={setEducations}
            setExperiences={setExperiences}
          />
          <LoadExampleButton
            setFullName={setFullName}
            setEmail={setEmail}
            setPhoneNum={setPhoneNum}
            setAdress={setAdress}
            setEducations={setEducations}
            setExperiences={setExperiences}
          />
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
            <CustomizeColor onColorChange={handleColorChange} />
            <CustomizeFont onFontClick={handleFontClick} />
          </div>
        )}
      </div>
      <div className={`bg-white shadow-lg w-1/2 min-h-3.5 flex-col ${fontClass}`}>
        <HeaderOutputSection
          fullName={fullName}
          email={email}
          phoneNum={phoneNum}
          address={adress}
          bgColor={bgColor}
          textColor={getTextColor(bgColor)}
        />
        <EducationOutputSection educations={educations} />
        <ExperienceOutputSection experiences={experiences} />
      </div>
    </div>
  );
};
