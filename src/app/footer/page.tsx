import Image from 'next/image';

const Footer = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <Image
        src="/Images/footer-3.webp"
        alt="Footer Image"
        width={500}
        height={500}
        className="w-full h-auto max-w-xs md:max-w-md lg:max-w-lg"
      />
    </div>
  );
};

export default Footer;
