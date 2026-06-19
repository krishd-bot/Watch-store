import Navbar from "../components/Navbar";
import wat from "../assets/wat.png"
const Hero = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative h-screen bg-black">
        <Navbar />

        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-10">
          <div className="text-white">
            <h1 className="text-5xl font-light mb-4">
              Discover The POTER Collection
            </h1>

            <p className="text-gray-400 mb-6">
              Of Perennial Timepieces
            </p>

            <button className="border px-6 py-3">
              Explore Watches
            </button>
          </div>

          <img
            src={wat}
            alt="watch"
            className="w-[500px]"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;