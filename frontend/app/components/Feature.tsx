/* eslint-disable react/no-unescaped-entities */
const Feature = () => {
    return (
        <section className='w-full py-12 md:py-24 lg:py-32'>
            <div className='container flex flex-col gap-4 px-4 md:px-6'>
                <div className='mx-auto flex flex-col items-center gap-2 text-center'>
                    <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                        Why use our URL shortener?
                    </h2>
                    <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                        Our URL shortener isn't just about making links shorter. It's about
                        making them work for you.
                    </p>
                </div>
                <div className='grid max-w-sm gap-4 mx-auto items-start text-center sm:max-w-2xl sm:grid-cols-2 sm:gap-8 lg:max-w-4xl lg:grid-cols-3 lg:gap-12'>
                    <div className='flex flex-col items-center gap-2'>
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
                            className='w-12 h-12 rounded-lg bg-gray-100 p-3'
                        >
                            <path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' />
                            <path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' />
                        </svg>
                        <h3 className='text-xl font-bold'>Save Space</h3>
                        <p className='text-sm text-gray-500 dark:text-gray-400'>
                            Shorter links take up less room, leaving you more characters for
                            your message.
                        </p>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
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
                            className='w-12 h-12 rounded-lg bg-gray-100 p-3'
                        >
                            <path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' />
                            <path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' />
                        </svg>
                        <h3 className='text-xl font-bold'>Improve Readability</h3>
                        <p className='text-sm text-gray-500 dark:text-gray-400'>
                            Long, complex URLs can be hard to read and look unprofessional.
                            Shortened links are clean and easy on the eyes.
                        </p>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
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
                            className='w-12 h-12 rounded-lg bg-gray-100 p-3'
                        >
                            <path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' />
                            <path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' />
                        </svg>
                        <h3 className='text-xl font-bold'>Track Clicks</h3>
                        <p className='text-sm text-gray-500 dark:text-gray-400'>
                            Our URL shortener allows you to track how many times your link has
                            been clicked, giving you valuable insights into engagement.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;
