import { SideBar } from './sidebar';
import { Themes } from './theme-provider';

export function Header() {
  return (
    <header className="flex justify-between fixed top-0 border-b left-0 w-full backdrop-blur-md z-10">
      <div className="sm-laptop:hidden rounded-lg">
        <SideBar />
      </div>

      <div className="ml-auto hidden sm-laptop:flex rounded-lg">
        <Themes />
      </div>
    </header>
  );
}
