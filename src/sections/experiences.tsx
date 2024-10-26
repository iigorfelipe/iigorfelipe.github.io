import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useMediaQuery } from '@/hooks/use-media-query';
import { BriefcaseBusinessIcon, EllipsisIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { TooltipDemo } from '@/components/tooltip';
import {
  ComapnyIdType,
  experiences,
  ExperienceType,
  firstPageOfTheCarouselOfExperiences,
  secondPageOfTheCarouselOfExperiences,
} from '@/utils/experiences';

type CardProps = {
  experience: ExperienceType;
};
type DialogDemoProps = {
  companyId: ComapnyIdType;
};

export function DialogDemo({ companyId }: DialogDemoProps) {
  const [togleCard, setTogleCard] = useState(true);

  const { companyName, color, roleDetails, about } = experiences[companyId];

  const content = togleCard ? (
    <ul className="list-disc px-6">
      {roleDetails.map((detail, index) => (
        <li key={index} className="py-2">
          {detail}
        </li>
      ))}
    </ul>
  ) : (
    about.map((detail, index) => (
      <p key={index} className="px-6">
        {detail}
      </p>
    ))
  );

  const subTitle = companyName.includes('Trybe')
    ? 'Meus aprendizados na Trybe'
    : `Meu Trabalho na ${companyName.split(' - ')[0]}`;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="flex size-6">
          <TooltipDemo
            children={<EllipsisIcon strokeWidth={1} className="laptop:size-5" />}
            tooltip="Exibir detalhes"
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md overflow-y-auto max-h-full rounded-xl">
        <DialogHeader>
          <DialogTitle style={{ color: color }} className="font-bold">
            {companyName}
          </DialogTitle>
          <DialogDescription>{togleCard ? subTitle : 'Sobre a Empresa'}</DialogDescription>
        </DialogHeader>
        {content}
        <DialogFooter className="sm:justify-start">
          <Button type="button" variant="secondary" onClick={() => setTogleCard(!togleCard)}>
            {togleCard ? 'Ver Sobre a Empresa' : `Ver ${subTitle}`}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function Card({ experience }: CardProps) {
  return (
    <div className="flex items-center gap-4 w-full max-w-[400px]">
      <picture className="size-16 sm-laptop:size-[50px] 70-laptop:size-[70px] laptop:size-[76px] xs-desktop:size-[78px]">
        <img
          src={experiences[experience.companyId].logo}
          alt={`Logo of ${experiences[experience.companyId].companyName}`}
          className="w-full h-full drop-shadow-md"
        />
      </picture>

      <div className="flex flex-col gap-1 sm-laptop:gap-0 justify-center w-full 70-laptop:gap-1 laptop:gap-0 70-desktop:gap-1">
        <span className="text-xs sm-laptop:text-[11px] 70-laptop:text-[13px] laptop:text-base xs-desktop:text-sm 70-desktop:text-base">
          {experience.date}
        </span>
        <span className="text-xs sm-laptop:text-[11px] 70-laptop:text-[13px] laptop:text-base xs-desktop:text-sm 70-desktop:text-base">
          {experience.position}
        </span>

        <DialogDemo companyId={experience.companyId} />
      </div>
    </div>
  );
}
export function Experiences() {
  const { ref, isIntersecting } = useIntersectionObserver(0.4);
  const [groupedExperiences, setGroupedExperiences] = useState<ExperienceType[][]>([
    firstPageOfTheCarouselOfExperiences,
    secondPageOfTheCarouselOfExperiences,
  ]);

  const isMobile = useMediaQuery('(max-width: 499px)');
  const widthIs896pxDown = useMediaQuery('(max-width: 896px)');
  const imgLaptopSize =
    'sm-laptop:max-w-60 md-laptop:max-w-xs md-laptop:-mt-8 70-laptop:mt-auto 70-laptop:-ml-60 70-laptop:max-w-sm';
  const imgDesktopSize =
    'xs-desktop:mt-0 xs-desktop:max-w-xs sm-desktop:max-w-md md-desktop:max-w-lg md-desktop:mt-auto md-desktop:mr-0 70-desktop:max-w-xl';

  useEffect(() => {
    if (!widthIs896pxDown) {
      const filteredPage1 = [
        ...firstPageOfTheCarouselOfExperiences,
        ...secondPageOfTheCarouselOfExperiences.filter((exp) => exp.companyId === 'trybeExperience'),
      ];
      const filteredPage2 = secondPageOfTheCarouselOfExperiences.filter(
        (exp) => exp.companyId === 'atlasExperience',
      );

      setGroupedExperiences([filteredPage1, filteredPage2]);
    } else {
      setGroupedExperiences([firstPageOfTheCarouselOfExperiences, secondPageOfTheCarouselOfExperiences]);
    }
  }, [widthIs896pxDown]);

  return (
    <div className="flex flex-col w-full h-full items-center sm-laptop:gap-6 sm-laptop:justify-evenly sm-laptop:pt-12 70-laptop:flex-row 70-laptop:items-start 70-laptop:px-12 laptop:px-20 xl-desktop:px-48">
      {isMobile && <BriefcaseBusinessIcon className="h-4 w-4 mt-3 ml-auto" />}

      {widthIs896pxDown && (
        <Carousel className="w-full h-fit px-4 sm-laptop:px-10 max-w-lg">
          <CarouselContent>
            {groupedExperiences.map((page, pageIndex) => (
              <CarouselItem
                key={pageIndex}
                className="flex flex-col w-full pb-1 items-center mt-6 gap-6 ml-2 md-laptop:gap-2"
              >
                {page.map((experience, experienceIndex) => {
                  return <Card key={experienceIndex} experience={experience} />;
                })}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-10 laptop:size-16 70-desktop:size-12 xl-desktop:size-24" />
          <CarouselNext className="mr-10 laptop:size-16 70-desktop:size-12 xl-desktop:size-24" />
        </Carousel>
      )}

      {!widthIs896pxDown && (
        <div
          className="flex 70-laptop:justify-start 70-laptop:gap-12 70-laptop:w-full -mr-32 70-desktop:justify-start w-full"
          ref={ref}
          style={{
            opacity: isIntersecting ? 1 : 0,
            transform: isIntersecting ? 'translateX(0)' : 'translateX(-100px)',
            transition: 'transform 1.2s ease-in-out, opacity 1.2s ease-in-out',
            position: isIntersecting ? 'static' : 'absolute',
            visibility: isIntersecting ? 'visible' : 'hidden',
          }}
        >
          {groupedExperiences.map((page, pageIndex) => (
            <div key={pageIndex} className="flex flex-col mt-8 w-full items-center gap-2 70-laptop:gap-6">
              {page.map((experience, experienceIndex) => {
                return <Card key={experienceIndex} experience={experience} />;
              })}
            </div>
          ))}
        </div>
      )}

      <figure className={`flex justify-center w-full h-fit mt-auto ${imgLaptopSize} ${imgDesktopSize}`}>
        <img
          src="https://github.com/user-attachments/assets/c52df343-2824-4e05-8645-14e27599c35b"
          alt="Programming illustration"
          className="w-full h-full"
        />
      </figure>
    </div>
  );
}
