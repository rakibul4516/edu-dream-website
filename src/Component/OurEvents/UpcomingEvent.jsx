import { HiOutlineClock, HiArrowSmallRight,HiOutlineMapPin } from "react-icons/hi2";
import DataFetch from "../../../public/DataFetch";

const UpcomingEvent = () => {
    const upcomeingEvents = DataFetch('/UpcomingEvent.json')
    return (
        <div className=" w-full my-10">

            {
                upcomeingEvents?.map((event => <>
                    <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-5 items-center w-11/12 mx-auto shadow my-5 bg-white rounded-md border p-5">
                        <div className="flex md:border-r-2 items-center gap-2 max-sm:mx-auto">
                            <h2 className=" shadow p-3 rounded-full bg-white md:-mr-5 z-20 text-md text-[#ff6900] font-semibold">{event.date}</h2>
                            {/* <img src={event.user_image} alt="user" /> */}
                            <img alt="" className="w-12 h-12 rounded-full ri ri dark:bg-gray-500 ri ri" src="https://source.unsplash.com/40x40/?portrait?1" />

                        </div>
                        <div className="col-span-2 lg:border-r-2 flex items-center gap-2">
                            <HiArrowSmallRight className="text-xl"></HiArrowSmallRight>
                            <h3 className="">{event.title}</h3>
                        </div>
                        <div className="flex items-center gap-2 md:border-r-2">
                            <HiOutlineClock className="text-xl"></HiOutlineClock>
                            <div>
                                <p className="text-sm">{event.start_time}</p>
                                <p className="text-sm">{event.end_time}</p>
                            </div>
                        </div>
                        <div className="flex items-center col-span-2 gap-2">
                            <HiOutlineMapPin className="text-xl"></HiOutlineMapPin>
                            <div>
                                <p className="text-sm">{event.location}</p>
                            </div>
                        </div>
                    </div>
                </>))
            }

        </div>
    );
};

export default UpcomingEvent;