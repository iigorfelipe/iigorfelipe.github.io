import { MonitorCog, Moon, Sun } from 'lucide-react';
import { createContext, useContext, useEffect, useState } from 'react';
import { ToggleGroupDemo } from './toggle-group';

type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  systemAppliedTheme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: 'system',
  systemAppliedTheme: 'light',
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme,
  );
  const [systemAppliedTheme, setSystemAppliedTheme] = useState<Theme>('light');

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    const resolveSystemTheme = () => {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      return systemTheme;
    };

    if (theme === 'system') {
      const systemTheme = resolveSystemTheme();
      root.classList.add(systemTheme);
      setSystemAppliedTheme(systemTheme);
    } else {
      root.classList.add(theme);
      setSystemAppliedTheme(theme);
    }
  }, [theme]);

  const value = {
    theme,
    systemAppliedTheme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};

/*
  *************************************************************
  *************************************************************
  *************************************************************
*/

export function Themes() {
  const { setTheme } = useTheme();

  const childrens = [
    {
      children: <Sun className="h-4 w-4" />,
      onClick: () => setTheme('light'),
      tooltip: 'Light Mode',
    },
    {
      children: <Moon className="h-4 w-4" />,
      onClick: () => setTheme('dark'),
      tooltip: 'Dark Mode',
    },
    {
      children: <MonitorCog className="h-4 w-4" />,
      onClick: () => setTheme('system'),
      tooltip: 'System Theme',
    },
  ];

  return <ToggleGroupDemo childrens={childrens} />;
}
