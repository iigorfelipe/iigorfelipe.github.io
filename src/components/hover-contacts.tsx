import { useState } from 'react';
import { Button } from './ui/button';
import { MessageCircleMoreIcon } from 'lucide-react';
import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { TooltipDemo } from './tooltip';

export function HoverContacts() {
  const [isHovered, setIsHovered] = useState(false);

  const handleOpenLink = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button
        variant="ghost"
        className="fixed top-2 left-[50%] transform -translate-x-1/2 p-3 cursor-default hover:bg-transparent"
      >
        Entre em contato
      </Button>

      <div
        className={`fixed top-[2px] left-[50%] transition-all duration-500 transform ${
          isHovered ? 'opacity-100 translate-y-3' : 'opacity-0 translate-y-0'
        }`}
      >
        <div className="flex justify-center">
          <TooltipDemo
            children={
              <Button
                variant="outline"
                className={`fixed top-2 transform transition-all duration-500 ${
                  isHovered ? 'translate-x-[-100px] translate-y-2' : ''
                }`}
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
                variant="outline"
                className={`fixed top-2 transform transition-all duration-500 ${
                  isHovered ? 'translate-x-[-32px] translate-y-5' : ''
                }`}
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
                variant="outline"
                className={`fixed top-2 transform transition-all duration-500 ${
                  isHovered ? 'translate-x-[32px] translate-y-5' : ''
                }`}
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
                variant="outline"
                className={`fixed top-2 transform transition-all duration-500 ${
                  isHovered ? 'translate-x-[100px] translate-y-2' : ''
                }`}
                onClick={() => handleOpenLink('mailto:iigorfelipe@example.com')}
              >
                <EnvelopeClosedIcon className="size-5" />
              </Button>
            }
            tooltip="Email"
          />
        </div>
      </div>
    </div>
  );
}
