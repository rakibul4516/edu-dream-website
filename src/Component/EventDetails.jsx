import { useParams } from "react-router-dom";
import DataFetch from "../../public/DataFetch";
import PurchaseData from "../../public/PurchaseData";

const EventDetails = () => {
    const allEvent = DataFetch('/RegularEvent.json')
    const { id } = useParams()

    //Filter selected data 
    const selected = allEvent.find(event => event.id === parseInt(id))
    //Destracture data 
    const { title, description, image } = selected || {}
    return (

        <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
            <div className="container mx-auto space-y-12">
                <div className="grid grid-cols-2 overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <img src={image} alt="" className="h-full dark:bg-gray-500 rounded object-cover" />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                        <span className="mb-5 uppercase text-lg font-bold dark:text-gray-400">{title}</span>
                        <h3 className="text-sm pb-5">{description}</h3>
                        <button onClick={()=>PurchaseData(selected)}  type="button" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900">Join Event</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventDetails;

