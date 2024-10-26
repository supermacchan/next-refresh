import Link from 'next/link';

const Header = () => {
  return (
    <header className="border-b border-white/20 bg-killarney-800/50">
      <div className="flex items-center justify-between gap-8 containe mx-auto">
        <button type="button" className='uppercase text-xl font-medium px-10 py-6 hover:bg-black/20 transition-colors duration-300'>
            Menu
        </button>
        <Link href="/" className='text-xl font-medium px-10 py-6 hover:scale-110 transition-transform duration-300'>
          Logo
        </Link>
        <div>
          <button type="button" className='uppercase text-xl font-medium px-10 py-6 hover:bg-black/20 transition-colors duration-300'>
            Profile
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;