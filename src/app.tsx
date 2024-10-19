import { ThemeProvider } from '@/components/theme-provider';
import { Home } from './sections/home';
import { About } from './sections/about';
import { Header } from './components/header';

function Divider() {
  return <div className="border-b w-full" />;
}

export const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Header />
      <main className="flex flex-col">
        <section className="h-screen w-full pt-12">
          <Home />
        </section>
        <Divider />
        <section className="h-screen w-full pt-12 px-8">
          <About />
        </section>
      </main>
    </ThemeProvider>
  );
};
