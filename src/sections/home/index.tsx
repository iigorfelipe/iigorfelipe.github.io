import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Contacts } from './components/contacts';
import { useElementVisibility } from '@/hooks/use-element-visibility';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Technologies } from '@/sections/home/components/technologies';
import { Download } from 'lucide-react';
import { useMediaQuery } from '@/hooks/use-media-query';
import { BG_3, PROFILE } from '@/assets';
import { useMemo } from 'react';

export const Home = () => {
  const { elementRef, isVisible } = useElementVisibility({ threshold: 0.5 });

  const isMobile = useMediaQuery('(max-width: 499px)');

  const backgroundImage = useMemo(() => (isMobile ? 'none' : `url(${BG_3})`), [isMobile]);

  return (
    <div
      className={cn(
        'relative flex flex-col items-center h-full sm:items-start gap-14',
        'bg-no-repeat bg-[position:50%_100%] md:bg-[position:100%_100%]',
        'bg-[length:60%] lg:bg-[length:40%] 2xl:bg-[length:50%] 3xl:bg-contain bg-bottom',
      )}
      style={{ backgroundImage }}
    >
      <div className="flex items-center">
        <div className="flex flex-col gap-2 items-center relative">
          <Avatar
            style={{ width: 'clamp(7.5rem, 16.0556vw, 48rem)', height: 'clamp(7.5rem, 16.0556vw, 48rem)' }}
          >
            <AvatarImage className="object-cover w-full h-full" src={PROFILE} />
            <AvatarFallback>I</AvatarFallback>
          </Avatar>

          <div ref={elementRef} />

          <div className="absolute -bottom-7">
            <Contacts isVisible={isVisible} />
          </div>
        </div>

        <div className="h-fit gap-2 lg:ml-4 pl-4 items-start flex flex-col ">
          <h1 className="leading-tight" style={{ fontSize: 'clamp(1.2rem, 2.6vw, 3.5rem)' }}>
            Igor Soares
            <br />
            <span className="font-medium">Desenvolvedor Web.</span>
          </h1>
          <a
            href="/cv.pdf"
            download="CV - Igor Soares (resume) - PDF.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="gap-2" size="sm">
              Baixar CV
              <Download className="size-4" />
            </Button>
          </a>
        </div>
      </div>
      <Technologies />
    </div>
  );
};
