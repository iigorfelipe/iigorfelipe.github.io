import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { MessageCircleMoreIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { TooltipDemo } from './tooltip';
import { HoverContacts } from './hover-contacts';

type ContactsProps = {
  isIntersecting?: boolean;
};

export function Contacts({ isIntersecting = true }: ContactsProps) {
  const [showContactMeButton, setShowContactMeButton] = useState(false);

  useEffect(() => {
    if (!isIntersecting) {
      const timer = setTimeout(() => {
        setShowContactMeButton(true);
      }, 1200);

      return () => clearTimeout(timer);
    } else {
      setShowContactMeButton(false);
    }
  }, [isIntersecting]);

  const buttonStyle = (delay: number, viewPoint: number) => ({
    opacity: isIntersecting ? 1 : 0,
    transform: isIntersecting ? 'translateX(0)' : `translateX(${viewPoint}vw)`,
    transition: `transform 1.2s ease-in-out ${delay}s, opacity 1.2s ease-in-out ${delay}s`,
  });

  const handleOpenLink = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div
      className={`flex w-full max-w-[178px] ${!isIntersecting && 'z-50'} ${!isIntersecting && 'fixed top-2'}`}
    >
      {!showContactMeButton && (
        <>
          <TooltipDemo
            children={
              <Button
                variant="ghost"
                className="p-3"
                style={buttonStyle(0, 40.1)}
                onClick={() => handleOpenLink('https://wa.me/5598991595038')}
              >
                <MessageCircleMoreIcon strokeWidth={1.2} className="size-5" />
              </Button>
            }
            tooltip="Whatsaap"
          />

          <TooltipDemo
            children={
              <Button
                variant="ghost"
                className="p-3"
                style={buttonStyle(0.1, 37.7)}
                onClick={() => handleOpenLink('https://www.linkedin.com/in/iigor-felipe/')}
              >
                <LinkedInLogoIcon className="size-5" />
              </Button>
            }
            tooltip="Linkedin"
          />

          <TooltipDemo
            children={
              <Button
                variant="ghost"
                className="p-3"
                style={buttonStyle(0.2, 35.3)}
                onClick={() => handleOpenLink('https://github.com/iigorfelipe')}
              >
                <GitHubLogoIcon className="size-5" />
              </Button>
            }
            tooltip="Github"
          />

          <TooltipDemo
            children={
              <Button
                variant="ghost"
                className="p-3"
                style={buttonStyle(0.3, 32.9)}
                onClick={() => handleOpenLink('mailto:iigorfelipe@example.com')}
              >
                <EnvelopeClosedIcon className="size-5" />
              </Button>
            }
            tooltip="Email"
          />
        </>
      )}

      {showContactMeButton && <HoverContacts />}
    </div>
  );
}
