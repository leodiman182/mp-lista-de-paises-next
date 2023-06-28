import Image from 'next/image';
import ToggleThemeButton from '../ToggleThemeButton';
import img from '@/assets/imgs/world.png';

export default function Header() {
  return (
    <header className="h-[10vh] w-full">
      <section className="flex flex-row items-center justify-between px-[30px] max-w-[1024px] mx-auto h-full">
        <div className="flex flex-row items-center h-full">
          <Image
            width={999}
            height={999}
            className="w-[100px]"
            src={img}
            alt="world icon"
          />
          <p className="title text-primary-blue text-[40px]">
            Planets<strong className="text-primary-green">List</strong>
          </p>
        </div>
      </section>
    </header>
  );
}
