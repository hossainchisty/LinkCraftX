const Hero = () => {
    return (
        <section className='w-full py-12 md:py-24 lg:py-32'>
            <div className='container px-4 md:px-6'>
                <div className='flex flex-col items-center justify-center space-y-4 text-center md:space-y-8 lg:grid lg:gap-4 lg:grid-cols-2 lg:items-start lg:text-left xl:gap-6'>
                    <div className='space-y-2'>
                        <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl/line-tight lg:text-7xl/line-tight/translate-y-3'>
                            The only link you need to remember.
                        </h1>
                        <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                            Turn long, complex URLs into short, memorable links. Perfect for
                            sharing, promoting, or saving space.
                        </p>
                    </div>
                    <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                        <input
                            className='flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-sm w-full peer:text-sm'
                            placeholder='Enter your URL'
                            type='url'
                        />
                        <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-primary/90 px-4 py-2 h-10 min-w-[150px]'>
                            Shorten
                        </button>

                        {/*         
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            Copy
          </button> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
