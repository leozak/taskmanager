import React, {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

interface DateContextType {
  year: number;
  setYear: Dispatch<SetStateAction<number>>;
  month: number;
  setMonth: Dispatch<SetStateAction<number>>;
  day: number;
  setDay: Dispatch<SetStateAction<number>>;
}

export const DateContext = createContext<DateContextType>({
  year: 0,
  setYear: () => {},
  month: 0,
  setMonth: () => {},
  day: 0,
  setDay: () => {},
});

const nowDate = new Date();

const DateProvider = ({ children }: { children: React.ReactNode }) => {
  const [year, setYear] = useState<number>(nowDate.getUTCFullYear());
  const [month, setMonth] = useState<number>(nowDate.getUTCMonth());
  const [day, setDay] = useState<number>(nowDate.getUTCDate());

  return (
    <DateContext.Provider
      value={{ year, setYear, month, setMonth, day, setDay }}
    >
      {children}
    </DateContext.Provider>
  );
};

export default DateProvider;
