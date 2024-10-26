import Image from 'next/image';

const Hero = () => {
  return (
    <section className='pt-[76px]'>
        <div className='min-h-screen grid grid-cols-2'>
            <div className='relative overflow-hidden after:content-[""] after:absolute after:inset-0 after:bg-black/30'>
                <Image 
                    src="/images/home/hero/hero-img.jpg" 
                    alt="hero" 
                    width={500} 
                    height={500} 
                    className='object-cover w-full h-full'
                />
            </div>
            <h1 className='text-4xl font-bold'>Hero</h1>
        </div>
    </section>
  );
};

export default Hero;