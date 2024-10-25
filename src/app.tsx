import { ThemeProvider } from '@/components/theme-provider';
import { Home } from './sections/home';
import { About } from './sections/about';
import { Header } from './components/header';
import { Works } from './sections/works';
import { Experiences } from './sections/experiences';
import { useSelectedSectionStore } from './store/navSelected';
import { useIntersectionObserver } from './hooks/use-intersection-observer';
import { Footer } from './components/footer';

function Divider() {
  return <div className="border-b w-full" />;
}

export const App = () => {
  const { setSelectedSection } = useSelectedSectionStore();

  const aboutRef = useIntersectionObserver(0.8, false, () => setSelectedSection('About me'));
  const worksRef = useIntersectionObserver(0.8, false, () => setSelectedSection('Works'));
  const experiencesRef = useIntersectionObserver(0.8, false, () => setSelectedSection('Experiences'));

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <main className="flex flex-col h-full w-full max-w-[1920px] xl-desktop:mx-auto xl-desktop:border-x">
        <Header />
        <section id="home" className="h-screen w-full pt-12">
          <Home />
        </section>

        <Divider />

        <section id="about" ref={aboutRef.ref} className="h-screen w-full px-4">
          <About />
        </section>

        <Divider />

        <section id="works" ref={worksRef.ref} className="h-screen w-full px-4">
          <Works />
        </section>

        <Divider />

        <section id="experiences" ref={experiencesRef.ref} className="h-screen w-full px-4">
          <Experiences />
        </section>

        <Footer />
      </main>
    </ThemeProvider>
  );
};
