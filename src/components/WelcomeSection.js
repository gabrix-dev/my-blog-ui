import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

const WelcomeSection = ({ className = "" }) => {
  return (
    <section className={className}>
      <div className="grid sm:grid-cols-10">
        <div className="col-span-4 col-start-1 place-self-center">
          <h1 className="text-dark mb-4 text-4xl font-medium">
            Unveiling ideas and projects to inspire positive change through
            technology.
          </h1>
          <div className="mt-12 flex flex-col">
            <button className="text-xl px-11 py-6 w-full sm:w-fit rounded-full mb-5 bg-gradient-to-br from-amber-400 via-amber-600 to-amber-950 hover:bg-slate-200 text-light font-medium">
              About Me&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
            <button className="text-xl font-medium text-dark px-1 py-1 bg-gradient-to-br from-amber-400 via-amber-600 to-amber-950 w-full mt-4 sm:mt-0 sm:w-fit  rounded-full bg-transparent hover:bg-slate-800">
              <span className="block bg-white hover:bg-slate-800 rounded-full px-10 py-5">
                Read the blog
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-6 place-self-center mt-4 ml-10 lg:mt-0">
          <div className="rounded-full w-[250px] h-[250px] lg:w-[500px] lg:h-[500px]">
            <Image
              src="/images/gf_robot_welcome.png"
              alt="G-F brand robot welcoming blog readers"
              className=""
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
