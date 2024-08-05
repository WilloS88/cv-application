import type { EducationProps } from "./EducationSection";
import type { ExperienceProps } from "./ExperienceSection";

export type ClearButtonProps = {
  setFullName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPhoneNum: React.Dispatch<React.SetStateAction<string>>;
  setAdress: React.Dispatch<React.SetStateAction<string>>;
  setEducations: React.Dispatch<React.SetStateAction<EducationProps[]>>;
  setExperiences: React.Dispatch<React.SetStateAction<ExperienceProps[]>>;
};
