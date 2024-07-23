import type { ExperienceProps } from "../../types/ExperienceSectionProps";

interface ExperienceOutputSectionProps {
  experiences: ExperienceProps[];
}

export const ExperienceOutputSection = ({
  experiences,
}: ExperienceOutputSectionProps) => {
  const renderExperienceInfo = () => {
    return experiences.map((experience) => (
      <div key={experience.id} className="flex mb-4 gap-4 my-2 mx-6">
        <div className="w-1/3">
          <p>
            {experience.startDate} - {experience.endDate}
          </p>
          <p>{experience.location}</p>
        </div>
        <div className="w-2/3">
          <h3 className="font-bold">{experience.company}</h3>
          <p>{experience.position}</p>
        </div>
      </div>
    ));
  };

  return (
    <div>
      {experiences.length > 0 && (
        <h2 className="bg-slate-300 text-xl font-bold text-center my-4 mx-6 py-1">
          Experience
        </h2>
      )}
      <div className="flex flex-col">{renderExperienceInfo()}</div>
    </div>
  );
};
