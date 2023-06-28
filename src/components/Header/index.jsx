import ToggleThemeButton from '../ToggleThemeButton';

export default function Header() {
  return (
    <header className="h-[10vh] w-full bg-yellow-50 px-[30px] text-black">
      Header
      <ToggleThemeButton />
    </header>
  );
}
