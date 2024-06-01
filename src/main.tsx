import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { store } from '../Redux-Store/store';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App.tsx';

type AppThemeProviderProps = {
  children: ReactNode;
};

//1) Create a context for managing the theme state.
const ThemeContext = createContext({
  mode: "light",
  toggleThemeMode: () => { },
});

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeMode must be used within a ThemeProvider");
  }
  return context;
}

const AppThemeProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
  //2) create/provide a way to toggle
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleThemeMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#E0C2FF',
      },
      secondary: {
        main: '#E0C2FF',
        light: '#F5EBFF',
        dark: '#47008F'
      },

    },
    components: {
      MuiIcon: {
        styleOverrides: {
          root: {
            '&:hover': {
              '& .MuiSvgIcon-root': {
                color: 'red',
              },
            },
          }
        }
      }
    },
  });

  return (
    <ThemeContext.Provider value={{ mode, toggleThemeMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const domNode = document.getElementById("root");
  if (domNode) {
    const root = createRoot(domNode);
    root.render(
      <React.StrictMode>
        <AppThemeProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </AppThemeProvider>
      </React.StrictMode>,
    );
  } else {
    console.error("Failed to find root element with id 'root'");
  }
});
