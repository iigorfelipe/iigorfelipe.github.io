import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '../components/ui/button';
import { Contacts } from '../components/contacts';
import { useMediaQuery } from '@/hooks/use-media-query';

function IntroductoryText() {
  const laptopSize = 'md-laptop:border-l md-laptop:pl-6 md-laptop:-mt-[94px] 70-laptop:ml-4';
  const laptopTextSize = 'sm-laptop:text-lg md-laptop:text-xl 70-laptop:text-2xl laptop:text-3xl';
  const laptopTextSize2 = 'sm-laptop:text-xl md-laptop:text-2xl 70-laptop:text-3xl laptop:text-4xl';
  const desktopTextSize = 'sm-desktop:text-2xl md-desktop:text-3xl 70-desktop:text-4xl';
  const desktopTextSize2 = 'sm-desktop:text-3xl md-desktop:text-4xl 70-desktop:text-5xl';

  return (
    <div className={`flex flex-col ${laptopSize} 70-desktop:gap-2`}>
      <p className={`${laptopTextSize} ${desktopTextSize}`}>Hello,</p>
      <p className={`${laptopTextSize2} ${desktopTextSize2}`}>
        I’m <span className="font-medium">Igor Soares!</span>
      </p>
      <p className={`${laptopTextSize2} ${desktopTextSize2}`}>I work as a Web Developer.</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="flex justify-center py-6">
      <Button variant="outline" className="w-2/3 py-8 xs-laptop:py-6 rounded-3xl text-md" size="lg">
        Contact me
      </Button>
    </footer>
  );
}

function ProgrammingImage() {
  const laptopSize =
    'sm-laptop:h-64 md-laptop:h-80 md-laptop:px-0 md-laptop:-mt-[35px] 70-laptop:h-[350px] 70-laptop:-mt-[100px] laptop:h-[400px] laptop:-mt-[140px] laptop:ml-auto';
  const desktopSize =
    'xs-desktop:h-80 sm-desktop:my-auto sm-desktop:h-[420px] md-desktop:h-[480px] 70-desktop:h-[590px] 70-desktop:-mt-[76px] xl-desktop:h-[610px] xl-desktop:-mt-[156px]';
  return (
    <figure className={`flex justify-center min-h-36 my-auto px-[5%] ${laptopSize} ${desktopSize}`}>
      <img src="programming-1.svg" alt="Programming illustration" className="w-full h-full" />
    </figure>
  );
}

export function Home() {
  const isMdLaptop = useMediaQuery('(min-width: 640px)');

  return (
    <div className="flex flex-col h-full max-w-[1920px] px-2 70-laptop:px-[2%] laptop:px-[5%] xl-desktop:mx-auto xl-desktop:border-x">
      <div className="flex flex-col h-full">
        <div className="flex items-center">
          <div className="flex flex-col w-fit items-center gap-2 px-3">
            <Avatar className="size-24 sm-laptop:size-28 md-laptop:size-36 70-laptop:size-48 xs-desktop:size-32 md-desktop:size-48 70-desktop:size-60 xl-desktop:size-72">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>I</AvatarFallback>
            </Avatar>

            {isMdLaptop && (
              <>
                <div className="flex justify-center">
                  <Contacts />
                </div>
                <Button
                  variant="outline"
                  className="flex sm-laptop:py-6 rounded-3xl text-md w-full"
                  size="lg"
                >
                  Contact me
                </Button>
              </>
            )}
          </div>

          <IntroductoryText />
        </div>

        <ProgrammingImage />
      </div>

      {!isMdLaptop && <Footer />}
    </div>
  );
}
