import { ButtonStyled } from "./ButtonStyled";
import type { LoadExampleButtonProps } from "../../../types/styled/LoadExampleButton";
import data from "../../../data/exampleData";

export const LoadExampleButton = ({
  setFullName,
  setEmail,
  setPhoneNum,
  setAdress,
  setEducations,
  setExperiences,
}: LoadExampleButtonProps) => {
  const loadData = () => {
    setFullName(data[0].fullName ?? "");
    setEmail(data[0].email ?? "");
    setPhoneNum(data[0].phoneNumber ?? "");
    setAdress(data[0].address ?? "");
    setEducations([
      {
        id: "0",
        school: data[1].school ?? "",
        degree: data[1].degree ?? "",
        startDate: data[1].startDate ?? "",
        endDate: data[1].endDate ?? "",
        location: data[1].location ?? "",
      },
    ]);
    setExperiences([
      {
        id: "0",
        company: data[2].company ?? "",
        position: data[2].position ?? "",
        startDate: data[2].startDate ?? "",
        endDate: data[2].endDate ?? "",
        location: data[2].location ?? "",
        description: data[2].description ?? "",
      },
      {
        id: "1",
        company: data[3].company ?? "",
        position: data[3].position ?? "",
        startDate: data[3].startDate ?? "",
        endDate: data[3].endDate ?? "",
        location: data[3].location ?? "",
        description: data[3].description ?? "",
      },
    ]);
  };

  return (
    <div>
      <ButtonStyled content="Load Example" onClick={loadData} />
    </div>
  );
};
