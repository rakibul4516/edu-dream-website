
const Banner = () => {
    return (
        <section style={{ backgroundImage: `url('https://i.ibb.co/yXZdDqc/pexels-kampus-production-5940828.jpg')`, backgroundSize: 'cover' }} className="">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between bg-gray-800 text-gray-100 bg-opacity-50 h-full w-full">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leadi sm:text-6xl py-5">
                        <span className="dark:text-violet-400">Lern and Discover</span> Get New Knowledge
                    </h1>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900">Join Us</a>
                        <a href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-100">Events</a>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
    );
};

export default Banner;