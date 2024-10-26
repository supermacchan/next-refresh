import Image from 'next/image';

const Hero = () => {
  return (
    <section className='pt-[76px] min-h-screen'>
        <div className=' grid grid-cols-2 h-full'>
            <div className='relative min-h-full overflow-hidden after:content-[""] after:absolute after:inset-0 after:bg-black/30'>
                <Image 
                    src="/images/home/hero/hero-img.jpg" 
                    alt="hero" 
                    width={800} 
                    height={1000}
                    className='object-cover w-full h-full'
                />
            </div>
            <h1 className='text-4xl font-bold'>Hero</h1>
        </div>
    </section>
  );
};

export default Hero;