import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PurchaseItem = () => {
    const [noEvent, setNoEvent] = useState('')
    const [events, setEvents] = useState([])
    // useEffect for get Data form local storage
    useEffect(() => {
        const allEvents = JSON.parse(localStorage.getItem('events'));
        if (allEvents) {
            setEvents(allEvents)
        } else {
            setNoEvent('No data found')
        }
    }, [])
    return (
        <div>
            {
                noEvent?<div className="flex justify-center items-center h-[50vh]"><h1 className="text-xl font-semibold">{noEvent}</h1></div>:<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 items-center justify-center my-10 w-11/12 mx-auto">
                { 
                    events.map((event) => <>
    
                        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="p-8 rounded-t-lg" src={event.image} alt="product image" />
                            </a>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-semibold lg:h-14 tracking-tight text-gray-900 dark:text-white">{event.title}</h5>
                                </a>
                                <div className="flex items-center justify-between mt-3">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{event.price}</span>
                                    <Link to={`/details/${event.id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Details</Link>
                                </div>
                            </div>
                        </div>
    
                    </>)
                }
            </div>
            }
        </div>
    );
};

export default PurchaseItem;