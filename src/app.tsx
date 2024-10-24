import { ThemeProvider } from '@/components/theme-provider';
import { Home } from './sections/home';
import { About } from './sections/about';
import { Header } from './components/header';
import { Works } from './sections/works';
import { Experiences } from './sections/experiences';

function Divider() {
  return <div className="border-b w-full" />;
}

export const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <main className="flex flex-col h-full w-full max-w-[1920px] xl-desktop:mx-auto xl-desktop:border-x">
        <Header />
        <section id="home" className="h-screen w-full pt-12">
          <Home />
        </section>

        <Divider />

        <section id="about" className="h-screen w-full px-4">
          <About />
        </section>

        <Divider />

        <section id="works" className="h-screen w-full px-4">
          <Works />
        </section>

        <Divider />

        <section id="experiences" className="h-screen w-full px-4">
          <Experiences />
        </section>

        <footer className="w-full h-36 flex items-center justify-center border-t mt-6">Footer</footer>
      </main>
    </ThemeProvider>
  );
};
