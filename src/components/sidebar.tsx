import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { BriefcaseBusinessIcon, LaptopIcon, Menu, UserRoundIcon } from 'lucide-react';
import { useState } from 'react';
import { Contacts } from './contacts';
import { Themes } from './header';
import { Button } from './ui/button';

export function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollTo = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCloseAndScroll = (sectionId: string) => {
    setIsOpen(false);
    setTimeout(() => {
      handleScrollTo(sectionId);
    }, 300);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="p-2">
        <Menu />
      </SheetTrigger>

      <SheetContent side="left" className="flex flex-col pl-2">
        <SheetTitle className="hidden"></SheetTitle>
        <SheetDescription className="hidden"></SheetDescription>
        <SheetHeader className="border-b mt-1">
          <Themes />
        </SheetHeader>

        <Button variant="ghost" className="gap-5 w-fit" onClick={() => handleCloseAndScroll('about')}>
          <UserRoundIcon className="size-6" /> About me
        </Button>

        <Button variant="ghost" className="gap-5 w-fit" onClick={() => handleCloseAndScroll('works')}>
          <LaptopIcon className="size-6" /> Works
        </Button>

        <Button variant="ghost" className="gap-5 w-fit" onClick={() => handleCloseAndScroll('experiences')}>
          <BriefcaseBusinessIcon className="size-6" /> Experiences
        </Button>

        <SheetFooter className="mt-auto flex flex-row justify-evenly border-t pt-6">
          <Contacts />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
