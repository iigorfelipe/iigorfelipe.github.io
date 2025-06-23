import { ArrowUp, Heart } from 'lucide-react';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Button } from './ui/button';
import { useSelectedSectionStore } from '@/store/section-selected';

export const Footer = () => {
  const { setSelectedSection } = useSelectedSectionStore();

  const handleScrollToHome = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
      setSelectedSection('home');
    }
  };

  return (
    <footer className="w-full flex flex-col items-center justify-center mt-24 p-8 gap-2 bg-secondary">
      <p>{new Date().getFullYear()}</p>
      <p className="flex items-center gap-1 font-medium">
        Feito com <Heart className="size-4" /> por Igor Soares
      </p>

      <Button
        variant="link"
        className="p-3 gap-1 text-blue-600"
        onClick={() => window.open('https://github.com/iigorfelipe/iigorfelipe.github.io', '_blank')}
      >
        <GitHubLogoIcon className="size-5" /> Repositório do Projeto
      </Button>
      <Button variant="default" className="rounded-full gap-2" onClick={handleScrollToHome}>
        <ArrowUp className="size-5" /> Voltar ao Topo
      </Button>
    </footer>
  );
};
