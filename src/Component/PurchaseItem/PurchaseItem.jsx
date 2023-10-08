import { useEffect, useState } from "react";

const PurchaseItem = () => {
    const [noData, setNoData] = useState('')
    const [ events ,setEvents] = useState([])
    // useEffect for get Data form local storage
    useEffect(() => {
        const allEvents = JSON.parse(localStorage.getItem('events'));
        if (allEvents) {
            setEvents(allEvents)
        } else {
            setNoData('No data found')
        }
    }, [])
    console.log(events)
    return (
        <div>
            {
                events.map((event)=><>
                <div className="grid grid-cols-2">
                    <img src={event.image} alt="" className="w-full h-[50vh] object-cover gap-6 mb-5" />
                    <h1>{event.title}</h1>
                </div>
                </>)
            }
        </div>
    );
};

export default PurchaseItem;