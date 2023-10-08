import { Link } from "react-router-dom";
import DataFetch from "../../../public/DataFetch";

const Cards = () => {
    const events = DataFetch('/RegularEvent.json')
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">

                    {
                        events.map((event) => <>
                            <div className=" ">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={event.image} alt="blog" />
                                    <div className="p-6">
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{event.title}</h1>
                                        <div className="flex items-center flex-wrap ">
                                            <Link to={`/details/${event.id}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </Link>
                                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pl-3 py-1 border-l-2 border-gray-200">
                                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>{event.views}
                                            </span>
                                            <span className="text-slate-700 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-md pl-3 py-1 border-l-2 border-gray-200">
                                                {event.price}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>)
                    }

                </div>
            </div>
        </section >
    );
};

export default Cards;