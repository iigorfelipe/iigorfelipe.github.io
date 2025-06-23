import { useState } from 'react';
import { Button } from '../../../components/ui/button';
import { LinkedInLogoIcon } from '@radix-ui/react-icons';
import { GITHUB, GMAIL, ZAP } from '@/assets';
import { cn } from '@/lib/utils';
import { AnimatedPhone } from './animated-phone';
import { LINK } from '@/constants/links';

export const HoverContacts = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleOpenLink = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div
      className="relative z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button
        className={cn('fixed h-fit p-0 rounded-md top-2 right-5 cursor-default', isHovered && 'opacity-50')}
      >
        <AnimatedPhone />
      </Button>

      <div
        className={`fixed top-7 right-9 transition-all duration-500 transform ${
          isHovered ? 'opacity-100 translate-y-3' : 'opacity-0 translate-y-0'
        }`}
      >
        <div className="flex justify-center ">
          <Button
            className={`fixed p-2 h-fit top-0 transform transition-all duration-500 ${
              isHovered ? '-translate-x-[45px] -translate-y-9' : ''
            }`}
            onClick={() => handleOpenLink(LINK.zap)}
          >
            <ZAP className="size-5" />
          </Button>

          <Button
            className={`fixed p-2 h-fit top-0 transform transition-all duration-500 ${
              isHovered ? '-translate-x-[45px] translate-y-1' : ''
            }`}
            onClick={() => handleOpenLink(LINK.linkedin)}
          >
            <LinkedInLogoIcon className="size-5" />
          </Button>

          <Button
            className={`fixed p-2 top-0 h-fit transform transition-all duration-500 ${
              isHovered ? '-translate-x-[35px] translate-y-[45px]' : ''
            }`}
            onClick={() => handleOpenLink(LINK.github)}
          >
            <GITHUB className="size-5" />
          </Button>

          <Button
            className={`fixed top-2 p-2 h-fit transform transition-all duration-500 ${
              isHovered ? 'translate-x-2 translate-y-10' : ''
            }`}
            onClick={() => handleOpenLink(LINK.gmail)}
          >
            <GMAIL className="size-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
