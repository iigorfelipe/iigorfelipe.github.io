import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import { BriefcaseBusiness, Laptop, Menu, User2 } from 'lucide-react';
import { Themes } from './theme-provider';
import { Button } from './ui/button';
import { Contacts } from './contacts';

export function SideBar() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>

      <SheetContent side="left" className="flex flex-col pl-2">
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
