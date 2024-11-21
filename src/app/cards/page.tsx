import Image from "next/image";
import Link from "next/link";

const Cards = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-6xl font-extrabold">The Forest’s Heart</h1>
      </div>

      <div className="card-area px-14 py-0">
        <div className="wrapper px-10 py-[10%]">
          <div className="box-area grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 mt-14">
            {/* Card 1 - Cute Rabbit */}
            <div className="box rounded-[10px] overflow-hidden shadow-[5px_5px_15px_#c5e4d7] border-4 border-solid border-white">
              <Image
                src="/Images/cute-rabbit.jpg"
                alt="Cute Rabbit"
                width={400}
                height={400}
                className="h-72 rounded-[10px] block transition-transform duration-500"
              />
              <div className="overlay p-4">
                <h3 className="font-medium mb-1 text-3xl">Cute Rabbit</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  reiciendis. Blanditiis, cupiditate. Aut, cumque facere!
                </p>
                <Link
                  href="#"
                  className="mt-3 text-white bg-lime-500 no-underline text-sm rounded-[50px] text-center px-4 py-4"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Card 2 - Lion */}
            <div className="box rounded-[10px] overflow-hidden shadow-[5px_5px_15px_#c5e4d7] border-4 border-solid border-white">
              <Image
                src="/Images/lion-02.avif"
                alt="Lion"
                width={400}
                height={400}
                className="h-72 rounded-[10px] block transition-transform duration-500"
              />
              <div className="overlay p-4">
                <h3 className="font-medium mb-1 text-3xl">Lion</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  reiciendis. Blanditiis, cupiditate. Aut, cumque facere!
                </p>
                <Link
                  href="#"
                  className="mt-3 text-white bg-lime-500 no-underline text-sm rounded-[50px] text-center px-4 py-4"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Card 3 - Plain Zebra */}
            <div className="box rounded-[10px] overflow-hidden shadow-[5px_5px_15px_#c5e4d7] border-4 border-solid border-white">
              <Image
                src="/Images/plain-zebra.jpg"
                alt="Plain Zebra"
                width={400}
                height={400}
                className="h-72 rounded-[10px] block transition-transform duration-500"
              />
              <div className="overlay p-4">
                <h3 className="font-medium mb-1 text-3xl">Plain Zebra</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  reiciendis. Blanditiis, cupiditate. Aut, cumque facere!
                </p>
                <Link
                  href="#"
                  className="mt-3 text-white bg-lime-500 no-underline text-sm rounded-[50px] text-center px-4 py-4"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Card 4 - Sparrow */}
            <div className="box rounded-[10px] overflow-hidden shadow-[5px_5px_15px_#c5e4d7] border-4 border-solid border-white">
              <Image
                src="/Images/bird.jpg"
                alt="Sparrow"
                width={400}
                height={400}
                className="h-72 rounded-[10px] block transition-transform duration-500"
              />
              <div className="overlay p-4">
                <h3 className="font-medium mb-1 text-3xl">Sparrow</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  reiciendis. Blanditiis, cupiditate. Aut, cumque facere!
                </p>
                <Link
                  href="#"
                  className="mt-3 text-white bg-lime-500 no-underline text-sm rounded-[50px] text-center px-4 py-4"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Card 5 - Parrot */}
            <div className="box rounded-[10px] overflow-hidden shadow-[5px_5px_15px_#c5e4d7] border-4 border-solid border-white">
              <Image
                src="/Images/parrot.jpg"
                alt="Parrot"
                width={400}
                height={400}
                className="h-72 rounded-[10px] block transition-transform duration-500"
              />
              <div className="overlay p-4">
                <h3 className="font-medium mb-1 text-3xl">Parrot</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  reiciendis. Blanditiis, cupiditate. Aut, cumque facere!
                </p>
                <Link
                  href="#"
                  className="mt-3 text-white bg-lime-500 no-underline text-sm rounded-[50px] text-center px-4 py-4"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Card 6 - Fishes */}
            <div className="box rounded-[10px] overflow-hidden shadow-[5px_5px_15px_#c5e4d7] border-4 border-solid border-white">
              <Image
                src="/Images/fishes.jpg"
                alt="Fishes"
                width={400}
                height={400}
                className="h-72 rounded-[10px] block transition-transform duration-500"
              />
              <div className="overlay p-4">
                <h3 className="font-medium mb-1 text-3xl">Fishes</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  reiciendis. Blanditiis, cupiditate. Aut, cumque facere!
                </p>
                <Link
                  href="#"
                  className="mt-3 text-white bg-lime-500 no-underline text-sm rounded-[50px] text-center px-4 py-4"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Card 7 - Peacock */}
            <div className="box rounded-[10px] overflow-hidden shadow-[5px_5px_15px_#c5e4d7] border-4 border-solid border-white">
              <Image
                src="/Images/peacock.jpg"
                alt="Peacock"
                width={400}
                height={400}
                className="h-72 rounded-[10px] block transition-transform duration-500"
              />
              <div className="overlay p-4">
                <h3 className="font-medium mb-1 text-3xl">Peacock</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  reiciendis. Blanditiis, cupiditate. Aut, cumque facere!
                </p>
                <Link
                  href="#"
                  className="mt-3 text-white bg-lime-500 no-underline text-sm rounded-[50px] text-center px-4 py-4"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Card 8 - Deer */}
            <div className="box rounded-[10px] overflow-hidden shadow-[5px_5px_15px_#c5e4d7] border-4 border-solid border-white">
              <Image
                src="/Images/deer.jpg"
                alt="Deer"
                width={400}
                height={400}
                className="h-72 rounded-[10px] block transition-transform duration-500"
              />
              <div className="overlay p-4">
                <h3 className="font-medium mb-1 text-3xl">Deer</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  reiciendis. Blanditiis, cupiditate. Aut, cumque facere!
                </p>
                <Link
                  href="#"
                  className="mt-3 text-white bg-lime-500 no-underline text-sm rounded-[50px] text-center px-4 py-4"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Card 9 - Elephant */}
            <div className="box rounded-[10px] overflow-hidden shadow-[5px_5px_15px_#c5e4d7] border-4 border-solid border-white">
              <Image
                src="/Images/elephant.jpg"
                alt="Elephant"
                width={400}
                height={400}
                className="h-72 rounded-[10px] block transition-transform duration-500"
              />
              <div className="overlay p-4">
                <h3 className="font-medium mb-1 text-3xl">Elephant</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  reiciendis. Blanditiis, cupiditate. Aut, cumque facere!
                </p>
                <Link
                  href="#"
                  className="mt-3 text-white bg-lime-500 no-underline text-sm rounded-[50px] text-center px-4 py-4"
                >
                  Read More
                </Link>
              </div>
            </div>


           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
