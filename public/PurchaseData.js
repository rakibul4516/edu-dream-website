import swal from 'sweetalert';
const PurchaseData = (event) => {
        let newEvents = [];
        const localStorageEvents = JSON.parse(localStorage.getItem('events'));
        if (!localStorageEvents) {
            newEvents.push(event);
            localStorage.setItem('events', JSON.stringify(newEvents))
            swal("Complete!", "Purchase Successfully", "success");
        } else {
            const exist = localStorageEvents.find((data) => data.id === event.id);
            if (!exist) {
                newEvents.push(...localStorageEvents, event);
                localStorage.setItem('events', JSON.stringify(newEvents))
                swal("Complete!", "Purchase Successfully", "success");
            } else {
                swal("Exist!", "Please select another one", "error");
            }
        }
    }

    export default PurchaseData;