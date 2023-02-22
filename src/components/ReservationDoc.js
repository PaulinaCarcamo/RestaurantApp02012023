import { getFirestore, doc, getDoc, QuerySnapshot } from "firebase/firestore";
import { useEffect, useState } from "react"
import FirebaseDb from "../firebase/firebase.js";

//Fetching data from Firebase: Single document. 

const RsvnDoc = () => {

    const db = getFirestore(FirebaseDb);

    const docData = async () => {
        class Doc {
            constructor(name, lastname, email) {
                this.name = name;
                this.lastname = lastname;
                this.email = email;
            }
            toString() {
                return this.name + ', ' + this.lastname + ', ' + this.email;
            }
        }

        // Firestore data converter
        const docConverter = {
            toFirestore: (doc) => {
                return {
                    name: doc.name,
                    lastname: doc.lastname,
                    email: doc.email
                };
            },
            fromFirestore: (snapshot, options) => {
                const data = snapshot.data(options);
                return new Doc(data.name, data.lastname, data.email);
            }
        };

        const ref = doc(db, "reservations", "12MS7zVH0LMPnt5pRzeI").withConverter(docConverter);

        const docSnap = await getDoc(ref);
        if (docSnap.exists()) {
            // Convert to Doc object
            const doc = docSnap.data();
            // Use a Doc instance method
            console.log(doc.toString());
        } else {
            console.log("No such document!");
        }
    }

    useEffect(() => {
        docData();
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