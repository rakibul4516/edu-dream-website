import { useParams } from "react-router-dom";
import DataFetch from "../../public/DataFetch";
import PurchaseData from "../../public/PurchaseData";

const EventDetails = () => {
    const allEvent = DataFetch('/RegularEvent.json')
    console.log(allEvent)
    const {id} = useParams()
    console.log(id)

    //Filter selected data 
    const selected = allEvent.find(event=>event.id === parseInt(id))
    //Destracture data 
    const {title,description,image}= selected || {}
    return (
        <div className="w-11/12 mx-auto">
            <img src={image} alt={title} className="w-full h-[100vh] object-cover rounded-md"/>
            <h1 className="text-2xl py-2 font-semibold">{title}</h1>
            <button onClick={()=>PurchaseData(selected)} className="py-2 px-3 bg-[#ff6900]">Purchase</button>
            <p className="">{description}</p>
        </div>
    );
};

export default EventDetails;