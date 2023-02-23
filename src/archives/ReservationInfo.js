import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import { useState, useEffect } from "react";
import FirebaseDb from "../firebase/firebase.js";

const db = getFirestore(FirebaseDb);
//Fetching all data from firebase. Collection: Reservations
const RsvnInfo = () => {
    const [rsvns, setRsvns] = useState([]);
    const rsvnData = async () => {
        const q = query(collection(db, "reservations"));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        console.log(data);
        setRsvns(data)
    };

    useEffect(() => {
        rsvnData();
    }, []);

    return (
        <div>
            {rsvns.map(item => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.lastname}</p>
                    <p>{item.date}</p>
                    <p>{item.time}</p>
                    <p>{item.table}</p>
                </div>
            ))}
        </div>
    )
};

export default RsvnInfo;