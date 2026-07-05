import { interests } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { InterestTile } from "@/components/ui/InterestTile";

export function InterestsSection() {
  return (
    <Section id="interests" label="#3 Curiosity" heading="Interests">
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:grid-rows-[repeat(3,auto)] sm:gap-x-6 sm:gap-y-8 lg:grid-cols-3">
        {interests.map((tile) => (
          <InterestTile key={tile.name} tile={tile} />
        ))}
      </div>
    </Section>
  );
}
