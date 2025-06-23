import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useElementVisibility } from '@/hooks/use-element-visibility';
import { works } from '@/utils/works';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { ExternalLinkIcon, GlobeIcon } from 'lucide-react';
import { useState } from 'react';

type ShowMobileProps = {
  title: string;
  mobileImg: string;
};

const ShowMobile = ({ title, mobileImg }: ShowMobileProps) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  const { elementRef, isVisible } = useElementVisibility({ threshold: 0.3 });

  if (isVisible && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <>
      <div ref={elementRef} />
      <figure
        style={{
          opacity: hasAnimated ? 1 : 0,
          transform: hasAnimated ? 'translateY(0)' : 'translateY(100px)',
          transition: 'transform 1.2s ease-in-out, opacity 1.2s ease-in-out',
          position: hasAnimated ? 'static' : 'absolute',
          visibility: hasAnimated ? 'visible' : 'hidden',
        }}
        className="w-full h-fit px-5"
      >
        <img
          src={mobileImg}
          alt={`${title} mobile illustration`}
          className="w-full h-fit drop-shadow-custom "
          loading="lazy"
        />
      </figure>
    </>
  );
};

/*
  
  xs: '320px',
  sm: '480px',
  md: '768px',
  lg: '1280px',
  xl: '1366px',
  '2xl': '1440px',
  '3xl': '1728px',
  '4xl': '1920px',
  */

export const Works = () => {
  return (
    <Carousel className="flex items-stretch md:items-center  h-full py-12 xl:py-0">
      <CarouselContent>
        {works.map((work) => (
          <CarouselItem key={work.title}>
            <div className="items-center gap-6 justify-center flex flex-col ">
              <header className="flex flex-col gap-4 xl:gap-2 items-center ">
                <h1
                  className="leading-tight font-medium"
                  style={{ fontSize: 'clamp(1.5rem, 2.5vw, 3.6rem)' }}
                >
                  {work.title}
                </h1>

                <nav className="flex gap-6">
                  <a
                    href={work.appLink}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-1 hover:text-blue-600"
                  >
                    <GlobeIcon className="size-4" />
                    <span className="text-sm">Site</span>
                    <ExternalLinkIcon size={11} />
                  </a>
                  <a
                    href={work.githubLink}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-1 hover:text-blue-600"
                  >
                    <GitHubLogoIcon className="size-4" />
                    <span className="text-sm">Github</span>
                    <ExternalLinkIcon size={11} />
                  </a>
                </nav>
              </header>

              <div className="flex flex-col h-full gap-6 xl:flex-row">
                <figure className="w-full xl:flex-1 xl:p-2">
                  <img
                    src={work.desktopImg}
                    alt={`${work.title} desktop illustration`}
                    loading="lazy"
                    className="size-full border shadow-md rounded-md"
                  />
                </figure>
                <div className="flex flex-col gap-6 xl:w-[35%]">
                  <p className="text-center h-20 xl:h-24 xl:mt-20">{work.description}</p>
                  <ShowMobile title={work.title} mobileImg={work.mobileImg} />
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="bg-secondary-foreground text-accent hover:bg-secondary-foreground/80 hover:text-accent/80" />
      <CarouselNext className="bg-secondary-foreground text-accent hover:bg-secondary-foreground/80 hover:text-accent/80" />
    </Carousel>
  );
};
