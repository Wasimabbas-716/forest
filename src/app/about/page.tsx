import Image from 'next/image'; 

const About = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between px-4 md:px-14 py-8'>
      <div className="text w-full md:w-[50%] mb-8 md:mb-0">
          <h1 className='text-4xl md:text-7xl font-extrabold'>About Us</h1>
          <p className='pt-4 md:pt-6 text-base md:text-lg'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste voluptatum eveniet pariatur aut architecto. Blanditiis facilis voluptas itaque minima eum at provident qui tempore deleniti facere. Quia reiciendis tenetur quam aut cumque in possimus optio nostrum distinctio nesciunt omnis laboriosam autem, sequi illo eius eum doloremque molestiae eveniet non vel quos ipsa! Consequuntur debitis ducimus ratione impedit ipsam a voluptas possimus id illo sunt, nobis corporis reprehenderit, quae aperiam omnis! Nisi nostrum itaque provident sunt adipisci quidem odio, sint atque.
          </p>
      </div>
      <div className="image w-full md:w-auto">
        <Image src="/Images/about-01.png" alt="About Image" width={478} height={100} className='rounded-3xl bg-[#c5e4d7] w-full h-auto' />
      </div>
    </div>
  )
}

export default About;
