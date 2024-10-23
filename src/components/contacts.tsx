import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { MessageCircleMoreIcon, PhoneIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { TooltipDemo } from './tooltip';

type ContactsProps = {
  isIntersecting?: boolean;
};

export function Contacts({ isIntersecting = true }: ContactsProps) {
  const [showPhoneIcon, setShowPhoneIcon] = useState(false);

  useEffect(() => {
    if (!isIntersecting) {
      const timer = setTimeout(() => {
        setShowPhoneIcon(true);
      }, 1200);

      return () => clearTimeout(timer);
    } else {
      setShowPhoneIcon(false);
    }
  }, [isIntersecting]);

  const buttonStyle = (delay: number, viewPoint: number) => ({
    opacity: isIntersecting ? 1 : 0,
    transform: isIntersecting ? 'translateX(0)' : `translateX(${viewPoint}vw)`,
    transition: `transform 1.2s ease-in-out ${delay}s, opacity 1.2s ease-in-out ${delay}s`,
  });

  return (
    <div
      className={`flex w-full max-w-[178px] ${!isIntersecting && 'z-50'} ${!isIntersecting && 'fixed top-2'}`}
    >
      {!showPhoneIcon && (
        <>
          <TooltipDemo
            children={
              <Button variant="ghost" className="p-3" style={buttonStyle(0, 40.1)}>
                <MessageCircleMoreIcon strokeWidth={1.2} className="size-5" />
              </Button>
            }
            tooltip="Whatsaap"
          />

          <TooltipDemo
            children={
              <Button variant="ghost" className="p-3" style={buttonStyle(0.1, 37.7)}>
                <LinkedInLogoIcon className="size-5" />
              </Button>
            }
            tooltip="Linkedin"
          />

          <TooltipDemo
            children={
              <Button variant="ghost" className="p-3" style={buttonStyle(0.2, 35.3)}>
                <GitHubLogoIcon className="size-5" />
              </Button>
            }
            tooltip="Github"
          />

          <TooltipDemo
            children={
              <Button variant="ghost" className="p-3" style={buttonStyle(0.3, 32.9)}>
                <EnvelopeClosedIcon className="size-5" />
              </Button>
            }
            tooltip="Email"
          />
        </>
      )}

      {showPhoneIcon && (
        <TooltipDemo
          children={
            <Button variant="ghost" className="fixed top-2 left-[50%] transform -translate-x-1/2 p-3">
              <PhoneIcon className="size-4" />
            </Button>
          }
          tooltip="Contact me"
        />
      )}
    </div>
  );
}
