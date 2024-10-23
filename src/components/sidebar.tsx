import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { BriefcaseBusiness, Laptop, Menu, User2 } from 'lucide-react';

import { Button } from './ui/button';

import { Themes } from './header';
import { Contacts } from './contacts';

export function SideBar() {
  return (
    <Sheet>
      <SheetTrigger className="p-2">
        <Menu />
      </SheetTrigger>

      <SheetContent side="left" className="flex flex-col pl-2">
        <SheetTitle className="hidden"></SheetTitle>
        <SheetDescription className="hidden"></SheetDescription>
        <SheetHeader className="border-b mt-1">
          <Themes />
        </SheetHeader>

        <Button variant="ghost" className="gap-5 w-fit">
          <User2 className="size-6" /> About me
        </Button>

        <Button variant="ghost" className="gap-5 w-fit">
          <Laptop className="size-6" /> Works
        </Button>

        <Button variant="ghost" className="gap-5 w-fit">
          <BriefcaseBusiness className="size-6" /> Experiences
        </Button>

        <SheetFooter className="mt-auto flex flex-row justify-evenly border-t pt-6">
          <Contacts />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
