import emailIcon from "../../assets/icons/output/emailIcon.svg";
import phoneIcon from "../../assets/icons/output/phoneIcon.svg";
import locationIcon from "../../assets/icons/output/locationIcon.svg";
import type { HeaderOutputSectionProps } from "../../types/HeaderOutputSection";

export const HeaderOutputSection = ({
  fullName,
  email,
  phoneNum,
  address,
  bgColor,
  textColor,
}: HeaderOutputSectionProps) => {
  const renderContactInfo = (value: string, icon: string, altText: string) => {
    return value ? (
      <div className="flex items-center justify-center gap-2">
        <img src={icon} alt={altText} className="w-4 h-4" />
        <span>{value}</span>
      </div>
    ) : null;
  };

  return (
    <div style={{ backgroundColor: bgColor, color: textColor }} className="shadow-lg flex flex-col items-center p-6 w-full min-h-40">
      <h1 className="text-2xl font-bold text-center mb-4">{fullName}</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {renderContactInfo(email, emailIcon, "Email")}
        {renderContactInfo(phoneNum, phoneIcon, "Phone Number")}
        {renderContactInfo(address, locationIcon, "Address")}
      </div>
    </div>
  );
};
