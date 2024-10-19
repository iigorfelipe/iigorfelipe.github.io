import { useTheme } from '@/components/theme-provider';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { useMediaQuery } from '@/hooks/use-media-query';

function MoreUsedLanguages() {
  const { systemAppliedTheme } = useTheme();
  const isDesktopDown = useMediaQuery('(max-width: 1600px)');

  // const carouselTitlePtBr = 'Linguagens mais usadas'; TODO
  const carouselTitleEn = 'Most Used Languages:';
  const layout = isDesktopDown ? 'layout=compact' : '';
  const bgColor = systemAppliedTheme === 'dark' ? '262626' : 'FFFFFF';
  const textColor = systemAppliedTheme === 'dark' ? 'F2F2F2' : '0A0A0A';

  return (
    <img
      src={`https://github-readme-stats.vercel.app/api/top-langs/?username=iigorfelipe&langs_count=10&theme=${systemAppliedTheme}&custom_title=${carouselTitleEn}&${layout}&hide_border=true&bg_color=${bgColor}&text_color=${textColor}&progress_color=FF5733`}
      className="sm-desktop:w-[340px] 70-desktop:w-[360px]"
    />
  );
}

function OtherTechnologies() {
  // const moreSkillsTitlePtBr = 'Outras tecnologias que utilizo:' TODO;
  const moreSkillsTitle = 'Other Technologies I Use:';

  const ulStyle = 'list-disc pl-5 text-xs 70-laptop:text-sm sm-desktop:text-sm 70-desktop:text-[15px]';
  const liStyle = 'py-0.5 xs-desktop:text-sm desktop:py-1.5 desktop:text-base xl-desktop:py-2.5';

  return (
    <div className="flex flex-col w-full items-center gap-4 70-laptop:max-w-xs desktop:max-w-lg xl-desktop:w-fit">
      <span className="font-semibold 70-laptop:text-lg xs-desktop:text-lg 70-desktop:text-xl desktop:text-[21px]">
        {moreSkillsTitle}
      </span>

      <div className="flex justify-center w-full gap-8 xl-desktop:flex-col xl-desktop:gap-0">
        <ul className={ulStyle}>
          <li className={liStyle}>Figma</li>
          <li className={liStyle}>Material UI</li>
          <li className={liStyle}>Radix UI</li>
          <li className={liStyle}>Shadcn UI</li>
          <li className={liStyle}>Tailwind CSS</li>
          <li className={liStyle}>Next.js</li>
        </ul>
        <ul className={ulStyle}>
          <li className={liStyle}>React.js</li>
          <li className={liStyle}>Redux</li>
          <li className={liStyle}>Node.js</li>
          <li className={liStyle}>Mongo DB</li>
          <li className={liStyle}>MySQL</li>
        </ul>
      </div>
    </div>
  );
}

function SkillsCarousel() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem className="flex justify-center items-center">
          <div className="flex justify-center items-center w-full h-full">
            <MoreUsedLanguages />
          </div>
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center">
          <OtherTechnologies />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

function AboutMeText() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const textEn =
    'I am a Fullstack developer with a special passion for frontend. I have a great enthusiasm for creating intuitive interfaces and engaging experiences';
  // const textPtBr =
  //   'Sou desenvolvedor Fullstack, com uma paixão especial pelo frontend. Tenho um grande entusiasmo por criar interfaces intuitivas e experiências envolventes.'; TODO
  const laptopTextSize = 'md-laptop:text-[15px] 70-laptop:text-base 70-laptop:max-w-sm laptop:text-lg';
  const desktopTextSize =
    'xs-desktop:text-base sm-desktop:text-center md-desktop:text-lg 70-desktop:max-w-lg 70-desktop:text-2xl xl-desktop:text-2xl';

  return (
    <p
      className={`flex text-sm ${laptopTextSize} ${desktopTextSize}`}
      ref={ref}
      style={{
        opacity: isIntersecting ? 1 : 0,
        transform: isIntersecting ? 'translateX(0)' : 'translateX(-100px)',
        transition: 'transform 1.2s ease-in-out, opacity 1.2s ease-in-out',
      }}
    >
      {textEn}
    </p>
  );
}

export function About() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const widthIs896pxDown = useMediaQuery('(max-width: 896px)');
  const widthIs1600pxUp = useMediaQuery('(min-width: 1600px)');

  const imgLaptopSize = 'sm-laptop:max-w-60 md-laptop:max-w-xs 70-laptop:max-w-sm';
  const imgDesktopSize =
    'xs-desktop:max-w-xs sm-desktop:max-w-md 70-desktop:max-w-xl xl-desktop:h-full xl-desktop:w-full';

  return (
    <div className="flex h-full w-full xl-desktop:px-24">
      <div className="flex flex-col items-center justify-evenly w-full h-full">
        <div className="flex items-center justify-center h-fit w-full 70-laptop:justify-around">
          <AboutMeText />
          {!widthIs896pxDown && !widthIs1600pxUp && <MoreUsedLanguages />}
        </div>

        {widthIs896pxDown && (
          <div className="flex px-8 py-2 max-w-xs xs-desktop:max-w-sm sm-desktop:max-w-full sm-desktop:px-24">
            <SkillsCarousel />
          </div>
        )}

        <div className="flex items-center justify-center w-full 70-laptop:justify-around">
          <figure
            ref={ref}
            className={`flex justify-center w-full h-fit ${imgLaptopSize} ${imgDesktopSize} ${
              isIntersecting ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            <img src="programming-2.svg" alt="Programming illustration" className="w-full h-full" />
          </figure>

          {!widthIs896pxDown && !widthIs1600pxUp && (
            <div
              className="mr-12"
              ref={ref}
              style={{
                opacity: isIntersecting ? 1 : 0,
                transform: isIntersecting ? 'translateX(0)' : 'translateX(100px)',
                transition: 'transform 1.2s ease-in-out, opacity 1.2s ease-in-out',
              }}
            >
              <OtherTechnologies />
            </div>
          )}
        </div>
      </div>

      {widthIs1600pxUp && (
        <div className="flex w-full h-full items-center justify-evenly">
          <MoreUsedLanguages />
          <div
            ref={ref}
            style={{
              opacity: isIntersecting ? 1 : 0,
              transform: isIntersecting ? 'translateX(0)' : 'translateX(100px)',
              transition: 'transform 1.2s ease-in-out, opacity 1.2s ease-in-out',
            }}
          >
            <OtherTechnologies />
          </div>
        </div>
      )}
    </div>
  );
}
