import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Contacts } from '../components/contacts';
import { useMediaQuery } from '@/hooks/use-media-query';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

function IntroductoryText() {
  const laptopSize = 'md-laptop:border-l md-laptop:pl-6 md-laptop:-mt-11 70-laptop:ml-4 sm-desktop:-ml-2 md-desktop:ml-5';
  const laptopTextSize = 'text-sm sm-laptop:text-lg md-laptop:text-xl 70-laptop:text-2xl';
  const laptopTextSize2 = 'text-sm sm-laptop:text-xl md-laptop:text-2xl 70-laptop:text-3xl';
  const desktopTextSize = 'xs-desktop:text-base sm-desktop:text-xl md-desktop:text-2xl 70-desktop:text-3xl';
  const desktopTextSize2 = 'xs-desktop:text-base sm-desktop:text-xl md-desktop:text-3xl 70-desktop:text-4xl';

  return (
    <div className={`flex flex-col ${laptopSize} 70-desktop:gap-2`}>
      <p className={`${laptopTextSize} ${desktopTextSize}`}>Olá,</p>
      <p className={`${laptopTextSize2} ${desktopTextSize2}`}>
        Sou <span className="font-medium">Igor Soares!</span>
      </p>
      <p className={`${laptopTextSize2} ${desktopTextSize2}`}>Trabalho como Desenvolvedor Web.</p>
    </div>
  );
}

function ProgrammingImage() {
  const laptopSize =
    'sm-laptop:h-64 md-laptop:h-80 md-laptop:px-0 70-laptop:h-[350px] 70-laptop:ml-auto 70-laptop:-mt-16 laptop:h-[400px] laptop:-mt-28';
  const desktopSize =
    'xs-desktop:h-80 sm-desktop:my-auto sm-desktop:h-[420px] md-desktop:h-[480px] 70-desktop:h-[590px] 70-desktop:-mt-11 xl-desktop:h-[610px] xl-desktop:-mt-[156px]';
  return (
    <figure className={`flex justify-center min-h-36 my-auto px-[5%] ${laptopSize} ${desktopSize}`}>
      <img
        src="https://github.com/user-attachments/assets/b63daa1b-b4f1-4af2-ba78-83481d776123"
        alt="Programming illustration"
        className="w-full h-full"
      />
    </figure>
  );
}

export function Home() {
  const isMdLaptop = useMediaQuery('(min-width: 640px)');
  const { ref, isIntersecting } = useIntersectionObserver(0.5);

  return (
    <div className="flex flex-col h-full px-2 70-laptop:px-[2%] laptop:px-[5%]">
      <div className="flex flex-col h-full">
        <div className="flex items-center">
          <div className="flex flex-col w-fit items-center gap-2 px-3">
            <Avatar className="size-24 sm-laptop:size-28 md-laptop:size-36 70-laptop:size-48 xs-desktop:size-32 md-desktop:size-48 70-desktop:size-60 xl-desktop:size-72 border">
              <AvatarImage
                className="object-cover w-full h-full"
                src="https://github.com/user-attachments/assets/27172328-3387-4d6b-b498-955d1e8df695"
              />
              <AvatarFallback>I</AvatarFallback>
            </Avatar>

            {isMdLaptop && (
              <>
                <div ref={ref} />
                <div className={`flex justify-center py-1 ${!isIntersecting && 'h-11'}`}>
                  <Contacts isIntersecting={isIntersecting} />
                </div>
              </>
            )}
          </div>

          <IntroductoryText />
        </div>

        <ProgrammingImage />
      </div>

      {!isMdLaptop && (
        <div className="flex items-center justify-center">
          <Contacts />
        </div>
      )}
    </div>
  );
}
