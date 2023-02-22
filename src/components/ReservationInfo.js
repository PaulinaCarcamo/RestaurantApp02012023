import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import { useEffect, useState } from "react"
import FirebaseDb from "../firebase/firebase";
import SearchReservation from "./RsvnSearch";

//Fetching collection data from firebase. 

const RsvnInfo = () => {

    const db = getFirestore(FirebaseDb);
    const [details, setDetails] = useState([]);

    const rsvnData = async () => {
        const q = query(collection(db, "reservations"));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        console.log(data);
        setDetails(data)
    };

    console.log(details);

    useEffect(() => {
        rsvnData();
    }, []);

    return (
        <div>

            {details.map(item => (
                // <div>
                //     <div>{item.id}</div>
                //      <div>{item.name}</div>
                //     <div>{item.lastname}</div>
                //     <hr />
                // </div>

                <SearchReservation item={item} />
            ))}

        </div>
    )
}

export default RsvnInfo;


