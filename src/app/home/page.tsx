import Image from 'next/image'; 

const Home = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-14 py-8'>
      <div className="left-text w-full md:w-[50%] text-center md:text-left">
        <h1 className='text-4xl md:text-7xl font-extrabold'>Save The Forest</h1>
        <h3 className='font-bold text-2xl md:text-4xl pt-4 md:pt-6'>For save our planet</h3>
        <p className='pt-3 text-sm md:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex impedit iure dicta doloremque minima reiciendis.</p>
        <button className='mt-6 bg-[#19a821] h-12 md:h-14 w-40 md:w-48 font-bold text-lg md:text-xl text-white rounded-xl'>
          Contact Us
        </button>
      </div>
      <div className="right-image mb-6 md:mb-0">
        <Image 
          src="/Images/landing-image.avif" 
          alt="Landing image" 
          width={384} // md:w-96
          height={384} 
          className="rounded-full w-64 h-64 md:w-96 md:h-96" 
        />
      </div>
    </div>
  )
}

export default Home;
