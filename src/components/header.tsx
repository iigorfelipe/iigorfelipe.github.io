import { SideBar } from './sidebar';
import { Themes } from './theme-provider';

export function Header() {
  return (
    <header className="flex justify-between fixed top-0 left-0 w-full rounded-lg backdrop-blur-md">
      <div className="sm-laptop:hidden rounded-lg z-10">
        <SideBar />
      </div>

      <div className="ml-auto hidden sm-laptop:flex rounded-lg z-10">
        <Themes />
      </div>
    </header>
  );
}
