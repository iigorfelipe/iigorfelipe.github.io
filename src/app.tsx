import { ThemeProvider } from '@/components/theme-provider';
import { Home } from './sections/home';

export const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <section className="h-screen w-full">
        <Home />
      </section>
    </ThemeProvider>
  );
};
