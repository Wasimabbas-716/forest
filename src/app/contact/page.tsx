import Image from "next/image";

const Contact = () => {
  return (
    <div className="px-4 py-8">
      <div className="">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center my-6 -mt-2">
          Contact Us
        </h1>
      </div>

      <div className="contact-page flex flex-col md:flex-row justify-center items-center text-center gap-8">
        <form
          action=""
          className="contact-area flex flex-col justify-center bg-[#19a821] gap-4 text-black p-6 h-auto w-full md:w-[40%] rounded-2xl border-4 border-[#056a23] border-solid"
        >
          <div className="flex justify-center gap-2">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="w-full md:w-96 h-12 rounded-lg pl-4 focus:outline-[#056a23] "
            />
          </div>

          <div className="flex justify-center gap-2">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full md:w-96 h-12 rounded-lg pl-4 focus:outline-[#056a23]"
            />
          </div>

          <div className="flex justify-center gap-2">
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              className="w-full md:w-96 h-24 rounded-lg pl-4 focus:outline-[#056a23]"
            ></textarea>
          </div>

          <div className="button">
            <button className="bg-[#056a23] w-full md:w-96 h-14 rounded-2xl text-2xl text-white border-none outline-none">
              Send Message
            </button>
          </div>
        </form>

        <div className="image w-full md:w-auto">
          <Image
            src="/Images/contact-image.png"
            alt="Contact Image"
            width={478}
            height={100}
            className="rounded-3xl bg-[#c5e4d7] w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
