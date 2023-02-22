import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useEffect } from "react"
import FirebaseDb from "../firebase/firebase.js";

//Fetching data from Firebase: Single document. 

const RsvnDoc = () => {

    const db = getFirestore(FirebaseDb);
    const userData = async () => {
        const docRef = doc(db, "contacts", "z8Ol4vqAHaNjHTPd1D5k");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    };

    useEffect(() => {
        userData();
    }, []);

    return (
        <div>
            {/* {details.map((val, id) => {
            return <p key={id}>{val.id}</p>
        })} */}
        </div>
    )
}

export default RsvnDoc;