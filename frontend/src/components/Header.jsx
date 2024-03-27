const Header = () => {
  return (
    <div className='bg-gray-50/90'>
      <div className='py-4'>
        <div className='container flex items-center justify-center gap-4 px-4'>
          <a className='flex items-center gap-2 font-semibold' href='/'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={24}
              height={24}
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
              className='w-6 h-6'
            >
              <path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' />
              <path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' />
            </svg>
            LinkCraftX
          </a>
          <nav className='ml-auto space-x-4 text-sm flex-1 text-center'>
            <a className='font-medium' href='#'>
              Features
            </a>
            <a className='font-medium' href='#'>
              Pricing
            </a>
            <a className='font-medium' href='#'>
              FAQ
            </a>
          </nav>
          <div className='ml-4'>
            <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2'>
              Login
            </button>
          </div>
          <div>
            <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-primary/90 h-10 px-4 py-2'>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
