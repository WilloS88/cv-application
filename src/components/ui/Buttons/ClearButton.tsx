import { Button } from "./Button";
import deleteIcon from "../../../assets/icons/input/deleteIcon.svg";
import type { ClearButtonProps } from "../../../types/ClearButtonProps";

export const ClearButton = ({
  setFullName,
  setEmail,
  setPhoneNum,
  setAdress,
  setEducations,
  setExperiences,
}: ClearButtonProps) => {
  const clearData = () => {
    setFullName("");
    setEmail("");
    setPhoneNum("");
    setAdress("");
    setEducations([]);
    setExperiences([]);
    localStorage.removeItem("fullName");
    localStorage.removeItem("email");
    localStorage.removeItem("phoneNum");
    localStorage.removeItem("adress");
    localStorage.removeItem("educations");
    localStorage.removeItem("experiences");
  };

  return (
    <div className="my-2">
      <Button
        icon={deleteIcon}
        content="Clear Resume"
        textColor="text-red-500"
        onClick={clearData}
      />
    </div>
  );
};
