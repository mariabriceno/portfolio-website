import Link from 'next/link';


export default function Header({ name }) {
  return (
    <header className='text-center'>
      <p className="text-2xl dark:text-white">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
