import { HiOutlineClock, HiArrowSmallRight, HiOutlineMapPin } from "react-icons/hi2";
import DataFetch from "../../../public/DataFetch";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
const UpcomingEvent = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    const upcomeingEvents = DataFetch('/UpcomingEvent.json')
    return (
        <section >
            <div className="flex flex-col justify-center items-center my-5 lg:w-8/12 w-11/12 mx-auto text-center">
                <h1 className="text-3xl py-3 font-bold">Our Upcoming Event Schedules</h1>
                <p className="text-sm">Embrace the future with anticipation, as our upcoming event schedules promise moments of inspiration, connection, and unforgettable experiences.</p>
            </div>
            <div className=" w-full my-10">

                {
                    upcomeingEvents?.map((event)=> <>
                        <div data-aos="fade-up" key={event.id} className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-5 items-center w-11/12 mx-auto shadow my-5 bg-white rounded-md border p-5">
                            <div className="flex md:border-r-2 items-center gap-2 max-sm:mx-auto">
                                <h2 className=" shadow p-3 rounded-full bg-white md:-mr-5 z-20 text-md text-[#ff6900] font-semibold">{event.date}</h2>
                                <img alt="" className="w-12 h-12 rounded-full ri ri dark:bg-gray-500 ri ri object-cover" src={event.user_image} />

                            </div>
                            <div className="col-span-2 lg:border-r-2 flex items-center gap-2">
                                <HiArrowSmallRight className="text-xl"></HiArrowSmallRight>
                                <h3 className="text-green-600 text-lg font-semibold">{event.title}</h3>
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
                    </>)
                }

            </div>
        </section>
    );
};

export default UpcomingEvent;