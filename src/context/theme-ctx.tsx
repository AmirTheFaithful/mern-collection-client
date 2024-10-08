import {
  FC,
  ReactElement,
  ReactNode,
  Dispatch,
  SetStateAction,
  useState,
  createContext,
  Context,
  useContext,
} from "react";

export type ThemeType = "light" | "dark";
export type ThemeContextType = {
  theme: ThemeType;
  setTheme: Dispatch<SetStateAction<ThemeType>>;
};

interface ProviderProps {
  children: ReactNode;
}

let GlobalThemeContext: Context<ThemeContextType>;

export const ThemeContextProvider: FC<ProviderProps> = ({
  children,
}): ReactElement => {
  const [theme, setTheme] = useState<ThemeType>("light");
  const ThemeContext: Context<ThemeContextType> =
    createContext<ThemeContextType>({ theme, setTheme });

  GlobalThemeContext = ThemeContext;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextType => {
  const { theme, setTheme } = useContext<ThemeContextType>(GlobalThemeContext);

  return { theme, setTheme };
};
