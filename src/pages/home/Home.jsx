import HomeImg from '../../assets/8339823656ee1fb3d5487e9ecd86c971-removebg-preview.png';

const Home = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pt-10 pb-14 sm:pt-16 lg:pt-20 lg:pb-24">
        <div className="mx-auto max-w-5xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left">
              <div className="lg:py-24">
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-800 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block text-black">Discover New Items</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Our Website will launch soon. Join the waitlist to try the beta before it's publicly available.
                </p>
                <button className="mt-5 bg-black text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-300">
                  Join the Waitlist
                </button>
              </div>
            </div>
            <div className="mt-12 hidden lg:block">
              <img className="w-60 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                src={HomeImg}
                alt="Landing Illustration"
              />
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Home;
