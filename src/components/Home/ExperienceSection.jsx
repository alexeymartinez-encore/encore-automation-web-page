import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection() {
  return (
    <div
      id="experience"
      className="grid grid-cols-3 grid-rows-1 py-5
                                    md:py-20 md:px-20"
    >
      <ExperienceCard title="5+" desc="Countries of operations" />
      <ExperienceCard title="20+" desc="Years of industry experience" />
      <ExperienceCard title="50+" desc="Companies Served" />
    </div>
  );
}
