import { ThemeProvider } from '@/src/context/ThemeContext';

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <div>{children}</div>
    </ThemeProvider>
  );
};

export default Main;
