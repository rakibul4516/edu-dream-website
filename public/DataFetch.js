import { useEffect, useState } from "react";

const DataFetch = (data) => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch(data)
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return events;
};

export default DataFetch;