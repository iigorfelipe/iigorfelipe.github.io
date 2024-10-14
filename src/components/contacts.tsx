import { MessageCircleMoreIcon } from 'lucide-react';
import { Button } from './ui/button';
import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

export function Contacts() {
  return (
    <>
      <Button variant="ghost" className="p-3">
        <MessageCircleMoreIcon strokeWidth={1.2} className="size-5" />
      </Button>

      <Button variant="ghost" className="p-3">
        <LinkedInLogoIcon className="size-5" />
      </Button>

      <Button variant="ghost" className="p-3">
        <GitHubLogoIcon className="size-5" />
      </Button>

      <Button variant="ghost" className="p-3">
        <EnvelopeClosedIcon className="size-5" />
      </Button>
    </>
  );
}
