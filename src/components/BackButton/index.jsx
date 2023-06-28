import { MdArrowBack } from 'react-icons/md';
import Link from 'next/link';

export default function BackButton() {
  return (
    <Link href="/">
      <button className="flex flex-row items-center hover:bg-primary-blue rounded-md py-[4px] px-[15px] pl-[10px]  duration-150 hover:first:fill-black text-white hover:text-black font-bold title">
        <MdArrowBack className="mr-[2px]" size={'1em'} />
        BACK
      </button>
    </Link>
  );
}
