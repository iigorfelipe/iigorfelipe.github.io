import { ThemeProvider } from '@/components/theme-provider';
import { Home } from './sections/home';
import { Header } from './components/header';
import { Works } from './sections/works';
import { Experiences } from './sections/experiences';
import { Footer } from './components/footer';

const Divider = () => {
  return <div className="border-b w-full" />;
};

export const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Header />

      <main className="flex flex-col px-2 sm:px-4 md:px-6 lg:px-8 2xl:px-20 gap-12 pt-6 2xl:pt-12">
        <section id="home">
          <Home />
        </section>

        <Divider />

        <section id="works">
          <Works />
        </section>

        <Divider />

        <section id="experiences">
          <Experiences />
        </section>
      </main>

      <Footer />
    </ThemeProvider>
  );
};
