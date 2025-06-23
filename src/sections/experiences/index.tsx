import { Button } from '@/components/ui/button';
import { memo, useMemo, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useElementVisibility } from '@/hooks/use-element-visibility';

import { CompanyDetail, experiencesArray, Log } from '@/utils/experiences';
import { cn } from '@/lib/utils';
import { BG_2 } from '@/assets';
import { useMediaQuery } from '@/hooks/use-media-query';

type CardProps = {
  companyDetail: CompanyDetail;
  log?: Log;
};

export const DialogDemo = memo(({ companyDetail }: CardProps) => {
  const [togleCard, setTogleCard] = useState(true);

  const { companyName, color, roleDetails, about } = companyDetail;

  const content = useMemo(
    () =>
      togleCard
        ? roleDetails.map((detail, index) => (
            <li className="py-2.5" key={index}>
              {detail}
            </li>
          ))
        : about.map((detail, index) => (
            <p className="py-2.5" key={index}>
              {detail}
            </p>
          )),
    [about, roleDetails, togleCard],
  );

  const subTitle = companyName.includes('Trybe')
    ? 'Meus aprendizados na Trybe:'
    : `Meu trabalho na ${companyName.split(' - ')[0]}:`;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="w-fit">
          Detalhes
        </Button>
      </DialogTrigger>
      <DialogContent className="overflow-y-auto h-[90svh] w-[90svw] rounded-xl flex flex-col items-center">
        <DialogHeader className=" flex items-center pt-3">
          <DialogTitle style={{ color: color }} className="font-bold md:text-xl">
            {companyName}
          </DialogTitle>
          <DialogDescription className="font-semibold">
            {togleCard ? subTitle : 'Sobre a empresa:'}
          </DialogDescription>
        </DialogHeader>
        <ul className="list-disc font-medium px-4 text-sm md:text-base">{content}</ul>
        <DialogFooter className="mt-auto">
          <Button type="button" onClick={() => setTogleCard(!togleCard)}>
            {togleCard ? 'Ver Sobre a Empresa' : `Ver ${subTitle}`}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});

const Card = memo(({ companyDetail, log }: CardProps) => {
  return (
    <div className="flex items-center gap-2 xl:gap-4 p-2 rounded-md bg-secondary/50 md:bg-transparent">
      <picture className="size-16 xl:size-20">
        <img
          src={companyDetail.logo}
          alt={`Logo of ${companyDetail.companyName}`}
          className="w-full h-full drop-shadow-md"
        />
      </picture>

      <div className="flex md:flex-col flex-row gap-1 justify-between items-center md:items-start w-full ">
        <div className="flex flex-col w-fit text-xs sm:text-sm">
          <span className="font-medium">{log?.date}</span>
          <span>{log?.position}</span>
        </div>

        <DialogDemo companyDetail={companyDetail} />
      </div>
    </div>
  );
});

export const Experiences = memo(() => {
  const { elementRef, isVisible } = useElementVisibility({ threshold: 0.4 });

  const isMobile = useMediaQuery('(max-width: 499px)');

  const backgroundImage = useMemo(() => (isMobile ? 'none' : `url(${BG_2})`), [isMobile]);

  const allLogs = experiencesArray.flatMap((experience, index) =>
    experience.log.map((log) => ({
      log,
      companyDetail: experience,
      key: `${experience.companyName}-${index}}`,
    })),
  );

  const firstColumnItems = allLogs.slice(0, 5);
  const secondColumnItems = allLogs.slice(5);

  return (
    <div
      className={cn(
        'flex flex-col w-full h-full justify-center md:justify-start md:pt-6 2xl:pt-12',
        'bg-no-repeat bg-[position:50%_100%] md:bg-[position:100%_100%]',
        'bg-[length:60%] xl:bg-[length:40%] 2xl:bg-[length:50%] sm-bottom',
      )}
      style={{ backgroundImage }}
    >
      <div
        className="grid md:grid-cols-2 gap-3 xl:gap-4 w-fit"
        ref={elementRef}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
          transition: 'transform 1.2s ease-in-out, opacity 1.2s ease-in-out',
          position: isVisible ? 'static' : 'absolute',
          visibility: isVisible ? 'visible' : 'hidden',
        }}
      >
        <div className="flex flex-col gap-3 xl:gap-4">
          {firstColumnItems.map(({ log, companyDetail, key }) => (
            <Card key={key} log={log} companyDetail={companyDetail} />
          ))}
        </div>
        <div className="flex flex-col gap-3 xl:gap-4 ">
          {secondColumnItems.map(({ log, companyDetail, key }) => (
            <Card key={key} log={log} companyDetail={companyDetail} />
          ))}
        </div>
      </div>
    </div>
  );
});
