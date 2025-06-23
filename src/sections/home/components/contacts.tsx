import { LinkedInLogoIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';
import { Button } from '../../../components/ui/button';
import { TooltipDemo } from '../../../components/tooltip';
import { HoverContacts } from './hover-contacts';
import { cn } from '@/lib/utils';
import { GITHUB, GMAIL, ZAP } from '@/assets';
import { LINK } from '@/constants/links';

type ContactsProps = {
  isVisible?: boolean;
};

export const Contacts = ({ isVisible = true }: ContactsProps) => {
  const [showContactMeButton, setShowContactMeButton] = useState(false);

  useEffect(() => {
    if (!isVisible) {
      const timer = setTimeout(() => {
        setShowContactMeButton(true);
      }, 1500);

      return () => clearTimeout(timer);
    } else {
      setShowContactMeButton(false);
    }
  }, [isVisible]);

  const buttonStyle = (delay: number) => ({
    transform: isVisible ? 'translateX(0)' : 'translateX(120vw)',
    opacity: isVisible ? 1 : 0,
    transition: `
    transform 2s ease-in-out ${delay}s,
    opacity 1.5s ease-in-out ${delay}s`,
    willChange: 'transform, opacity',
  });

  const handleOpenLink = (link: string) => {
    window.open(link, '_blank');
  };

  if (showContactMeButton) {
    return <HoverContacts />;
  }

  return (
    <div
      className={cn(
        'bg-background rounded-sm flex gap-2 sm:gap-4',
        !isVisible && 'bg-transparent z-50 top-2 pl-[6svw] left-0 w-full h-6 fixed',
      )}
    >
      {!showContactMeButton && (
        <>
          <TooltipDemo
            children={
              <Button
                variant="ghost"
                size="icon"
                style={buttonStyle(0)}
                onClick={() => handleOpenLink(LINK.zap)}
              >
                <ZAP className="size-4 lg:size-5" name="whatsapp icon" />
              </Button>
            }
            tooltip="Whatsaap"
          />

          <TooltipDemo
            children={
              <Button
                variant="ghost"
                size="icon"
                style={buttonStyle(0.1)}
                onClick={() => handleOpenLink(LINK.linkedin)}
              >
                <GITHUB name="github icon" className="size-4 lg:size-5" />
              </Button>
            }
            tooltip="Linkedin"
          />

          <TooltipDemo
            children={
              <Button
                variant="ghost"
                size="icon"
                style={buttonStyle(0.2)}
                onClick={() => handleOpenLink(LINK.github)}
              >
                <LinkedInLogoIcon className="size-[1.0625rem] lg:size-5" />
              </Button>
            }
            tooltip="Github"
          />

          <TooltipDemo
            children={
              <Button
                variant="ghost"
                size="icon"
                style={buttonStyle(0.3)}
                onClick={() => handleOpenLink(LINK.gmail)}
              >
                <GMAIL name="gmail icon" className="size-4 lg:size-5" />
              </Button>
            }
            tooltip="Email"
          />
        </>
      )}
    </div>
  );
};
