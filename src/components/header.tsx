import { SideBar } from './sidebar';
import { useTheme } from './theme-provider';

import { useSelectedSectionStore } from '@/store/navSelected';
import { BriefcaseBusinessIcon, LaptopIcon, MonitorCog, Moon, Sun, UserRoundIcon } from 'lucide-react';
import { ToggleGroupDemo } from './toggle-group';

export function Themes() {
  const { setTheme } = useTheme();

  const childrens = [
    {
      children: <Sun className="h-4 w-4" />,
      onClick: () => setTheme('light'),
      tooltip: 'Light Mode',
    },
    {
      children: <MonitorCog className="h-4 w-4" />,
      onClick: () => setTheme('system'),
      tooltip: 'System Theme',
    },
    {
      children: <Moon className="h-4 w-4" />,
      onClick: () => setTheme('dark'),
      tooltip: 'Dark Mode',
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
      children: <UserRoundIcon className="h-4 w-4" />,
      onClick: () => handleScrollTo('about'),
      tooltip: 'About me',
    },
    {
      children: <LaptopIcon className="h-4 w-4" />,
      onClick: () => handleScrollTo('works'),
      tooltip: 'Works',
    },
    {
      children: <BriefcaseBusinessIcon className="h-4 w-4" />,
      onClick: () => handleScrollTo('experiences'),
      tooltip: 'Experiences',
    },
  ];

  return <ToggleGroupDemo childrens={childrens} />;
}

export function Header() {
  return (
    <header className="flex justify-between fixed xs-laptop:shadow-sm top-0 left-0 w-full xs-laptop:backdrop-blur-md z-10">
      <div className="sm-laptop:hidden rounded-lg backdrop-blur-md">
        <SideBar />
      </div>

      <div className="hidden sm-laptop:flex w-full items-center justify-between">
        <NavBar />
        <Themes />
      </div>
    </header>
  );
}
