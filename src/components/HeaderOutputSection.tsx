import React from 'react'; // Ensure React is in scope when using JSX
import emailIcon from "../assets/icons/output/emailIcon.svg";
import phoneIcon from "../assets/icons/output/phoneIcon.svg";
import locationIcon from "../assets/icons/output/locationIcon.svg";

type HeaderOutputSectionProps = {
  fullName: string;
  email: string;
  phoneNum: string;
  adress: string;
};

export const HeaderOutputSection = ({
  fullName,
  email,
  phoneNum,
  adress,
}: HeaderOutputSectionProps) => {

  const renderContactInfo = (value: string, icon: string, altText: string) => {
    return value ? (
      <div className="flex items-center gap-2 justify-center">
        <img src={icon} alt={altText} className="w-4 h-4" /> {value}
      </div>
    ) : null;
  };

  return (
    <div className="bg-cyan-600 flex-col items-center p-10 w-full h-auto text-white">
      <div className="text-center">
        <div>{fullName}</div>
      </div>
      <div className="flex justify-center items-center gap-4">
        {renderContactInfo(email, emailIcon, "Email")}
        {renderContactInfo(phoneNum, phoneIcon, "Phone Number")}
        {renderContactInfo(adress, locationIcon, "Address")}
      </div>
    </div>
  );
};
