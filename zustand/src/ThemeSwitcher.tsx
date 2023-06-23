import { useThemeStore } from "./stores/useThemeStore";

export default function ThemeSwitcher() {
  const toLight = useThemeStore((state) => state.toLight);
  const toDark = useThemeStore((state) => state.toDark);

  return (
    <>
      <div>
        <button onClick={() => toLight()}>Light</button>
        <button onClick={() => toDark()}>Dark</button>
      </div>
    </>
  );
}
