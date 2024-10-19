import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { TooltipDemo } from './tooltip';
import { useState } from 'react';

type Children = {
  children: JSX.Element;
  onClick: () => void;
  tooltip: string;
};

type ToggleGroupDemoProps = {
  childrens: Children[];
};

export function ToggleGroupDemo({ childrens }: ToggleGroupDemoProps) {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <ToggleGroup type="single" size="sm" className='p-2'>
      {childrens.map(({ children, onClick, tooltip }) => (
        <TooltipDemo
          key={tooltip}
          children={
            <ToggleGroupItem
              value={tooltip}
              aria-label={tooltip}
              onClick={() => {
                setSelectedValue(tooltip);
                onClick();
              }}
              className={`${selectedValue === tooltip ? 'bg-secondary' : ''}`}
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
