import { SideBar } from '../components/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '../components/ui/button';
import { Mouse } from 'lucide-react';
import { Themes } from '../components/theme-provider';
import { Contacts } from '../components/contacts';

function Header() {
  return (
    <header className="flex justify-between">
      <div className="tablet:hidden p-2">
        <SideBar />
      </div>

      <div className="ml-auto hidden tablet:flex">
        <Themes />
      </div>
    </header>
  );
}

function IntroductoryText() {
  return (
    <div className="flex ">
      <div className="hidden tablet:flex mr-6 border-l tablet:mt-7 laptop:mt-9 70-laptop:ml-6 laptop:mr-4 desktop:mt-14" />
      <section className="flex flex-col h-fit ml-3 tablet:ml-0 tablet:mt-7 laptop:mt-9 laptop:ml-5 desktop:mt-14 xl-desktop:mt-16 xl-desktop:gap-2">
        <p className="tablet:text-lg 70-laptop:text-3xl desktop:text-4xl">Hello,</p>
        <p className="tablet:text-2xl 70-laptop:text-4xl desktop:text-5xl">
          I’m <span className="font-medium">Igor Soares!</span>
        </p>
        <p className="tablet:text-2xl 70-laptop:text-4xl desktop:text-5xl">I work as a Web Developer.</p>
      </section>
    </div>
  );
}

function Footer() {
  return (
    <footer className="flex flex-col gap-5 tablet:gap-0 items-center justify-center">
      <Button
        variant="outline"
        className="w-2/3 py-8 70-tablet:py-6 rounded-3xl text-md tablet:hidden"
        size="lg"
      >
        Contact me
      </Button>
      <div className="border-b w-full tablet:border-none" />
      <Mouse />
    </footer>
  );
}

export function Home() {
  return (
    <div className="flex flex-col h-full max-w-[1920px] xl-desktop:mx-auto xl-desktop:border-x">

      <Header />

      <div className="flex flex-col h-full tablet:px-[2%] 70-laptop:px-[5%]">
        <div className="flex items-center tablet:pt-0 pl-6 tablet:items-start">
          <div className="flex flex-col w-fit items-center gap-2 laptop:gap-3 px-3">
            <Avatar className="size-24 tablet:size-36 70-laptop:size-48 desktop:size-60 xl-desktop:size-72">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>I</AvatarFallback>
            </Avatar>

            <div className="hidden tablet:flex justify-center">
              <Contacts />
            </div>

            <Button
              variant="outline"
              className="hidden tablet:flex tablet:py-6 rounded-3xl text-md w-full"
              size="lg"
            >
              Contact me
            </Button>
          </div>
          <IntroductoryText />
        </div>

        <div className="flex justify-center my-auto px-[5%] tablet:px-0 tablet:-mt-[10%] tablet:ml-[25%] 70-laptop:ml-auto desktop:-mt-[5%] xl-desktop:-mt-[10%]">
          <img
            src="programming-1.svg"
            alt=""
            className="h-80 laptop:h-[360px] desktop:h-[460px] xl-desktop:h-[600px]"
          />
        </div>
      </div>

      <Footer />

    </div>
  );
}
