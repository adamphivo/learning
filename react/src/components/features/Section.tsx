import { PropsWithChildren, useContext } from "react";
import { LevelContext } from "./context/LevelContext";

interface Props {}

export default function Section({ children }: PropsWithChildren<Props>) {
  const level = useContext(LevelContext);

  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
