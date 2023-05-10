import { createContext, useContext } from "react";

type ItemBar = {
  text: string;
  count: number;
  definition: string;
};

type BarContextType = {
  bars: ItemBar[];
  setBars: (bars: ItemBar[]) => void;
};

export const BarContext = createContext<BarContextType>({
  bars: [],
  setBars: () => {},
});

export default BarContext;
