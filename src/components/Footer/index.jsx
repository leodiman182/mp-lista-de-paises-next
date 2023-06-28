export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="h-[5vh] w-full flex flex-row items-center justify-center title text-gray-50 text-[20px]">
      Desenvolvido por{' '}
      <p className="text-primary-green">&nbsp;Leonardo Diman</p>&nbsp;| {year}
    </footer>
  );
}
