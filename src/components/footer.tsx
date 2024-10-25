import { ArrowUp, Heart } from 'lucide-react';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Button } from './ui/button';
import { useSelectedSectionStore } from '@/store/navSelected';

export function Footer() {
  const { setSelectedSection } = useSelectedSectionStore();

  const handleScrollToHome = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
      setSelectedSection('home');
    }
  };

  return (
    <footer className="w-full flex flex-col items-center justify-center border-t mt-24 h-64 gap-2 70-laptop:flex-row p-8">
      <p className="flex items-center gap-1 70-laptop:ml-auto">
        Feito com <Heart className="size-4" /> por Igor Soares
      </p>

      <Button
        variant="link"
        className="p-3 gap-1"
        onClick={() => window.open('https://github.com/iigorfelipe/iigorfelipe.github.io', '_blank')}
      >
        <GitHubLogoIcon className="size-5" /> Repositório do Projeto
      </Button>

      <p>{new Date().getFullYear()}</p>
      <Button variant="default" className="rounded-full gap-2 70-laptop:ml-auto" onClick={handleScrollToHome}>
        <ArrowUp className="size-5" /> Voltar ao Topo
      </Button>
    </footer>
  );
}
