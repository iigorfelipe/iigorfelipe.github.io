import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useMediaQuery } from '@/hooks/use-media-query';
import { BriefcaseBusinessIcon, CircleEllipsisIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

type Log = {
  date: string;
  position: string;
};

type Experiences = {
  trybeExperience: {
    company: string;
    duration: string;
    logo: string;
    roleDetails: string[];
    log: Log[];
  };
  atlasExperience: {
    company: string;
    duration: string;
    logo: string;
    roleDetails: string[];
    log: Log[];
  };
};

const experiences: Experiences = {
  trybeExperience: {
    company: 'Trybe - Escola de Tecnologia online',
    duration: 'ago de 2021 | ago de 2022',
    logo: 'trybe-logo.svg',
    roleDetails: [
      'Desenvolvimento e manutenção de aplicações web dinâmicas e intuitivas usando Next.js, React, TypeScript, Context API, Redux, Material UI.',
      'Colaboração com designer utilizando Figma para criação de interfaces de usuário intuitivas e responsivas.',
      'Criação de componentes performáticos.',
      'Documentação das minhas atividades.',
      'Atualizações de tabelas no MongoDB e MySQL.',
      'Criação de microsserviços para automatizar tarefas usando Node.js.',
      'Reuniões diárias sobre o progresso das atividades.',
    ],
    log: [
      {
        date: 'ago de 2021',
        position: 'Fundamentos do Desenvolvimento Web',
      },
      {
        date: '2021',
        position: 'Desenvolvimento Front-End',
      },
      {
        date: '2021',
        position: 'Desenvolvimento Back-End',
      },
      {
        date: '2021',
        position: 'Ciência da Computação',
      },
      {
        date: 'ago de 2022',
        position: 'Desenvolvimento Web',
      },
    ],
  },

  atlasExperience: {
    company: 'Atlas - Segurança e Inteligência Logística',
    duration: 'out de 2022 | jun de 2024',
    logo: 'atlas-logo.svg',
    roleDetails: [
      'Desenvolvimento e manutenção de aplicações web dinâmicas e intuitivas usando Next.js, React, TypeScript, Context API, Redux, Material UI.',
      'Colaboração com designer utilizando Figma para criação de interfaces de usuário intuitivas e responsivas.',
      'Criação de componentes performáticos.',
      'Documentação das minhas atividades.',
      'Atualizações de tabelas no MongoDB e MySQL.',
      'Criação de microsserviços para automatizar tarefas usando Node.js.',
      'Reuniões diárias sobre o progresso das atividades.',
    ],
    log: [
      {
        date: 'out de 2022',
        position: 'Desenvolvedor Frontend',
      },
      {
        date: '2024',
        position: 'Desenvolvedor FullStack',
      },
    ],
  },
};

type ExperienceType = Log & {
  companyId: 'trybeExperience' | 'atlasExperience';
};

const page1: ExperienceType[] = [
  {
    companyId: 'trybeExperience',
    date: 'ago de 2021',
    position: 'Fundamentos do Desenvolvimento Web',
  },
  {
    companyId: 'trybeExperience',
    date: '2021',
    position: 'Desenvolvimento Front-End',
  },
  {
    companyId: 'trybeExperience',
    date: '2021',
    position: 'Desenvolvimento Back-End',
  },
  {
    companyId: 'trybeExperience',
    date: '2021',
    position: 'Ciência da Computação',
  },
];

const page2: ExperienceType[] = [
  {
    companyId: 'trybeExperience',
    date: 'ago de 2022',
    position: 'Desenvolvimento Web',
  },
  {
    companyId: 'atlasExperience',
    date: 'out de 2022',
    position: 'Desenvolvedor Frontend',
  },
  {
    companyId: 'atlasExperience',
    date: '2024',
    position: 'Desenvolvedor FullStack',
  },
];

type CardProps = {
  experience: ExperienceType;
};

function Card({ experience }: CardProps) {
  return (
    <div className="flex items-center gap-4 w-full max-w-[400px]">
      <picture className="size-16 sm-laptop:size-[50px] 70-laptop:size-[70px] laptop:size-[76px] xs-desktop:size-20 70-desktop:size-24 2xl-desktop:size-28">
        <img
          src={experiences[experience.companyId].logo}
          alt={`Logo of ${experiences[experience.companyId].company}`}
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

        <Button variant="link" className="p-0 pr-8 flex gap-2 w-full items-center -mt-[9px] laptop:-mt-1">
          <span className="text-xs sm-laptop:text-[11px] 70-laptop:text-[13px] laptop:text-base xs-desktop:text-sm 70-desktop:text-base">
            Detalhes
          </span>
          <CircleEllipsisIcon strokeWidth={1} className="size-4 ml-auto laptop:size-5" />
        </Button>
      </div>
    </div>
  );
}
export function Experiences() {
  const isMobile = useMediaQuery('(max-width: 499px)');
  const widthIs896pxDown = useMediaQuery('(max-width: 896px)');
  const imgLaptopSize =
    'sm-laptop:max-w-60 md-laptop:max-w-xs md-laptop:-mt-8 70-laptop:mt-auto 70-laptop:-ml-60 70-laptop:max-w-sm';
  const imgDesktopSize =
    'xs-desktop:mt-0 xs-desktop:max-w-xs sm-desktop:max-w-md md-desktop:max-w-lg md-desktop:mt-auto md-desktop:mr-0 70-desktop:max-w-xl';

  const [groupedExperiences, setGroupedExperiences] = useState<ExperienceType[][]>([page1, page2]);

  useEffect(() => {
    if (!widthIs896pxDown) {
      const filteredPage1 = [...page1, ...page2.filter((exp) => exp.companyId === 'trybeExperience')];
      const filteredPage2 = page2.filter((exp) => exp.companyId === 'atlasExperience');

      setGroupedExperiences([filteredPage1, filteredPage2]);
    } else {
      setGroupedExperiences([page1, page2]);
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
        <div className="flex 70-laptop:justify-start 70-laptop:gap-12 70-laptop:w-full -mr-32 70-desktop:justify-start w-full">
          {groupedExperiences.map((page, pageIndex) => (
            <div key={pageIndex} className="flex flex-col mt-8 w-full items-center gap-2 70-laptop:gap-6">
              {page.map((experience, experienceIndex) => {
                return <Card key={experienceIndex} experience={experience} />;
              })}
            </div>
          ))}
        </div>
      )}

      <figure className={`flex justify-center w-full h-fit mt-auto ${imgLaptopSize} ${imgDesktopSize} `}>
        <img src="programming-3.svg" alt="Programming illustration" className="w-full h-full" />
      </figure>
    </div>
  );
}
