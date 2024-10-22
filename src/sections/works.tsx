import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { ExternalLinkIcon, GlobeIcon } from 'lucide-react';

const works = [
  {
    title: 'Tree View',
    description:
      'Visualização hierárquica dos ativos de uma empresa, abrangendo componentes, ativos e localizações.',
    desktopImg: 'tree-view.png',
    mobileImg: 'tree-view-mobile.png',
    githubLink: 'https://github.com/iigorfelipe/tree-view',
    appLink: 'https://iigorfelipe.github.io/tree-view/',
  },
  {
    title: 'Woovi',
    description: 'Guia de Pagamento: Pix e Cartão de Crédito Parcelado no Woovi',
    desktopImg: 'woovi.png',
    mobileImg: 'woovi-mobile.png',
    githubLink: 'https://github.com/iigorfelipe/woovi',
    appLink: 'https://iigorfelipe.github.io/woovi/',
  },
  {
    title: 'Invoice Insight',
    description:
      'Listagem performática de clientes e prestações por mês. Inclui gráfico e filtragem por períodos.',
    desktopImg: 'invoice-insight.png',
    mobileImg: 'invoice-insight-mobile.png',
    githubLink: 'https://github.com/iigorfelipe/invoice-insight',
    appLink: 'https://iigorfelipe.github.io/invoice-insight/',
  },
  {
    title: 'Github Explorer',
    description:
      'Explore repositórios GitHub com facilidade. Filtragem por tipo, linguagem e ordenação disponíveis.',
    desktopImg: 'github-explorer.png',
    mobileImg: 'github-explorer-mobile.png',
    githubLink: 'https://github.com/iigorfelipe/github-explorer',
    appLink: 'https://iigorfelipe.github.io/github-explorer/',
  },
];

export function Works() {
  return (
    <Carousel>
      <CarouselContent>
        {works.map((work) => (
          <CarouselItem key={work.title}>
            <div className="h-screen flex flex-col items-center justify-evenly px-12 xs-desktop:px-0 md-desktop:px-12 desktop:px-16">
              <h1 className="underline mt-12 underline-offset-4 decoration-1 text-xl sm-laptop:text-lg md-laptop:text-xl xs-desktop:text-2xl xs-desktop:mt-16 md-desktop:mt-0 md-desktop:text-4xl 70-desktop:mt-12">
                {work.title}
              </h1>
              <div className="flex flex-col items-center h-full w-full justify-evenly 70-laptop:flex-row 70-laptop:h-fit">
                <figure className="w-full h-fit sm-laptop:max-w-xs 70-laptop:max-w-xl xs-desktop:max-w-4xl">
                  <img
                    src={work.desktopImg}
                    alt={`${work.title} desktop illustration`}
                    className="w-full h-full rounded-md drop-shadow-custom"
                    loading="lazy"
                  />
                </figure>

                <p className="flex text-center pt-4 px-10 sm-laptop:text-sm md-laptop:px-0 70-laptop:max-w-[30%] 70-laptop:text-base xs-desktop:text-base md-desktop:px-4 desktop:text-lg">
                  {work.description}
                </p>
              </div>

              <div className="flex flex-col items-center h-3/4 w-full justify-around sm-laptop:h-4/5 70-laptop:flex-row-reverse 70-laptop:gap-36 laptop:gap-28 70-laptop:h-fit 70-laptop:-mt-12 xs-desktop:h-4/5 md-desktop:h-fit">
                <figure className="w-full h-fit sm-laptop:max-w-[240px] 70-laptop:max-w-sm xs-desktop:max-w-xs sm-desktop:max-w-sm md-desktop:max-w-md 70-desktop:max-w-lg">
                  <img
                    src={work.mobileImg}
                    alt={`${work.title} mobile illustration`}
                    className="w-full h-fit drop-shadow-custom"
                    loading="lazy"
                  />
                </figure>

                <nav className="flex flex-col gap-3 w-full max-w-xs desktop:gap-5">
                  <a
                    href={work.appLink}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-1 desktop:gap-2"
                  >
                    <GlobeIcon className="size-5 desktop:size-6" />
                    <span className="sm-laptop:text-sm 70-laptop:text-base xs-desktop:text-base desktop:text-lg">
                      Link da aplicação
                    </span>
                    <ExternalLinkIcon size={11} />
                  </a>
                  <a
                    href={work.githubLink}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-1"
                  >
                    <GitHubLogoIcon className="size-5 desktop:size-6" />
                    <span className="sm-laptop:text-sm 70-laptop:text-base xs-desktop:text-base desktop:text-lg">
                      Link do repositório no Github
                    </span>
                    <ExternalLinkIcon size={11} />
                  </a>
                </nav>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-10 laptop:size-16 70-desktop:size-12 xl-desktop:size-24" />
      <CarouselNext className="mr-10 laptop:size-16 70-desktop:size-12 xl-desktop:size-24" />
    </Carousel>
  );
}
