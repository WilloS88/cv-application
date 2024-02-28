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
  return (
    <div className="bg-cyan-600 flex-col items-center p-10 w-full h-auto text-white">
      <div className="text-center">
        <div>{fullName}</div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <div className="flex items-center gap-2 justify-center">
          <img src={emailIcon} alt="email" className="w-4 h-4" /> {email}
        </div>
        <div className="flex items-center gap-2 justify-center">
          <img src={phoneIcon} alt="email" className="w-4 h-4" /> {phoneNum}
        </div>
        <div className="flex items-center gap-2 justify-center">
          <img src={locationIcon} alt="email" className="w-4 h-4" /> {adress}
        </div>
      </div>
    </div>
  );
};
