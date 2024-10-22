import { ThemeProvider } from '@/components/theme-provider';
import { Home } from './sections/home';
import { About } from './sections/about';
import { Header } from './components/header';
import { Works } from './sections/works';

function Divider() {
  return <div className="border-b w-full" />;
}

export const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <main className="flex flex-col">
      <Header />
        <section className="h-screen w-full pt-12">
          <Home />
        </section>

        <Divider />

        <section className="h-screen w-full pt-12 px-8">
          <About />
        </section>

        <Divider />

        <section className="h-screen w-full px-4">
          <Works />
        </section>
      </main>
    </ThemeProvider>
  );
};
