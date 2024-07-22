import type { EducationProps } from "../../types/EducationSectionProps";

interface EducationOutputSectionProps {
  educations: EducationProps[];
}

export const EducationOutputSection = ({
  educations,
}: EducationOutputSectionProps) => {
  const renderEducationInfo = () => {
    return educations.map((education) => (
      <div key={education.id} className="flex mb-4 gap-4 my-2 mx-6">
        <div className="w-1/3">
          <p>
            {education.startDate} - {education.endDate}
          </p>
          <p>{education.location}</p>
        </div>
        <div className="w-2/3">
          <h3 className="font-bold">{education.school}</h3>
          <p>{education.degree}</p>
        </div>
      </div>
    ));
  };

  return (
    <div>
      {educations.length > 0 && (
        <h2 className="bg-slate-300 text-xl font-bold text-center my-4 mx-6 py-1">
          Education
        </h2>
      )}
      <div className="flex flex-col">{renderEducationInfo()}</div>
    </div>
  );
};
