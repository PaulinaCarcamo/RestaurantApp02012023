import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import { useEffect, useState } from "react"
import FirebaseDb from "../firebase/firebase";

//Fetching collection data from firebase. 

const RsvnInfo = () => {

    const db = getFirestore(FirebaseDb);
    const [details, setDetails] = useState([]);

    const userData = async () => {
        const q = query(collection(db, "contacts"));
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
        userData();
    }, []);

    return (
        <div>{details.map((val, id) => {
            return <p key={id}>{val.id}</p>
        })}</div>
    )
}

export default RsvnInfo;