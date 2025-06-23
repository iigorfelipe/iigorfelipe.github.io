import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { TooltipDemo } from './tooltip';
import { useSelectedSectionStore } from '@/store/section-selected';

type Children = {
  children: JSX.Element;
  onClick: () => void;
  tooltip: string;
  sectionId: string;
};

type ToggleGroupDemoProps = {
  childrens: Children[];
};

export function ToggleGroupDemo({ childrens }: ToggleGroupDemoProps) {
  const { selectedSection, setSelectedSection } = useSelectedSectionStore();

  return (
    <ToggleGroup type="single" size="sm">
      {childrens.map(({ children, onClick, tooltip, sectionId }) => (
        <TooltipDemo
          key={sectionId}
          children={
            <ToggleGroupItem
              value={tooltip}
              aria-label={tooltip}
              onClick={() => {
                setSelectedSection(sectionId);
                onClick();
              }}
              className={`${selectedSection === sectionId ? 'bg-secondary' : ''}`}
            >
              {children}
            </ToggleGroupItem>
          }
          tooltip={tooltip}
        />
      ))}
    </ToggleGroup>
  );
}
