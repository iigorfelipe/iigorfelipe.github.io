import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { TooltipDemo } from './tooltip';
import { useSelectedSectionStore } from '@/store/navSelected';

type Children = {
  children: JSX.Element;
  onClick: () => void;
  tooltip: string;
};

type ToggleGroupDemoProps = {
  childrens: Children[];
};

export function ToggleGroupDemo({ childrens }: ToggleGroupDemoProps) {
  const { selectedSection, setSelectedSection } = useSelectedSectionStore();

  return (
    <ToggleGroup type="single" size="sm" className="p-2">
      {childrens.map(({ children, onClick, tooltip }) => (
        <TooltipDemo
          key={tooltip}
          children={
            <ToggleGroupItem
              value={tooltip}
              aria-label={tooltip}
              onClick={() => {
                setSelectedSection(tooltip);
                onClick();
              }}
              className={`${selectedSection === tooltip ? 'bg-secondary' : ''}`}
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
