const CTA = () => {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32'>
      <div className='container flex flex-col gap-4 px-4 md:px-6'>
        <div className='mx-auto flex flex-col items-center gap-2 text-center'>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            Ready to get started?
          </h2>
          <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
            Sign up for an account to unlock advanced features like custom short
            URLs and link analytics.
          </p>
        </div>
        <div className='mx-auto flex flex-col gap-2 min-[400px]:flex-row'>
          <a className='w-full' href='#'>
            <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 w-full h-10'>
              Sign Up for Free
            </button>
          </a>
          <a className='w-full' href='#'>
            <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full'>
              Have an account? Login
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;
