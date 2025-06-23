import { useTheme } from './theme-provider';

import { useSelectedSectionStore } from '@/store/section-selected';
import { BriefcaseBusinessIcon, LaptopIcon, MonitorCog, Moon, Sun } from 'lucide-react';
import { ToggleGroupDemo } from './toggle-group';

export function Themes() {
  const { setTheme } = useTheme();

  const childrens = [
    {
      children: <Sun className="size-4" />,
      onClick: () => setTheme('light'),
      tooltip: 'Claro',
      sectionId: 'light',
    },
    {
      children: <MonitorCog className="size-4" />,
      onClick: () => setTheme('system'),
      tooltip: 'Do Sistema',
      sectionId: 'system',
    },
    {
      children: <Moon className="size-4" />,
      onClick: () => setTheme('dark'),
      tooltip: 'Escuro',
      sectionId: 'dark',
    },
  ];

  return <ToggleGroupDemo childrens={childrens} />;
}

export function NavBar() {
  const { setSelectedSection } = useSelectedSectionStore();

  const handleScrollTo = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setSelectedSection(sectionId);
    }
  };

  const childrens = [
    {
      children: <LaptopIcon className="size-4" />,
      onClick: () => handleScrollTo('works'),
      tooltip: 'Projetos',
      sectionId: 'works',
    },
    {
      children: <BriefcaseBusinessIcon className="size-4" />,
      onClick: () => handleScrollTo('experiences'),
      tooltip: 'Experiências',
      sectionId: 'experiences',
    },
  ];

  return <ToggleGroupDemo childrens={childrens} />;
}

export function Header() {
  return (
    <header className="flex justify-between px-2 w-full border-b py-2 z-10 items-center">
      <NavBar />
      <Themes />
    </header>
  );
}
