import { useThemeStore } from "./stores/useThemeStore";
import "./index.css";
import ThemeSwitcher from "./ThemeSwitcher";
import UserNotes from "./UserNotes";
import UserInfo from "./UserInfo";
import RenameForm from "./stores/RenameForm";

export function App() {
  const theme = useThemeStore((state) => state.theme);

  return (
    <>
      <div className={`${theme}`}>
        <div>{theme}</div>
        <h1>Zustand</h1>
        <ThemeSwitcher />
        <UserInfo />
        <UserNotes />
        <RenameForm />
      </div>
    </>
  );
}

export default App;
