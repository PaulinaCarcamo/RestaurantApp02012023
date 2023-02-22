// import { collection, getDocs, getFirestore, query } from "firebase/firestore";
// import { useEffect, useState } from "react"
// import FirebaseDb from "../firebase/firebase";

// //Fetching collection data from firebase. 

// const RsvnInfo = () => {

//     const db = getFirestore(FirebaseDb);
//     const [details, setDetails] = useState([]);

//     const rsvnData = async () => {
//         const q = query(collection(db, "reservations"));
//         const querySnapshot = await getDocs(q);
//         const data = querySnapshot.docs.map((doc) => ({
//             ...doc.data(),
//             id: doc.id,
//         }));
//         console.log(data);
//         setDetails(data)
//     };

//     console.log(details);

//     useEffect(() => {
//         rsvnData();
//     }, []);

//     return (
//         <div>

//             {details.map((val, id) => {
//                 return <p key={id}>{val.id}</p>
//             })}

//         </div>
//     )
// }

// export default RsvnInfo;

import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import {useState, useEffect} from "react";
import FirebaseDb from "../firebase/firebase.js";

const db = getFirestore(FirebaseDb);

const RsvnInfo = () => {

    const[rsvns, setRsvns] = useState([]);
    const[search, setSearch] = useState('');
    const[searchRsvns, setSearchRsvns] = useState([]);

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

    // useEffect(() =>{
    //     const unsubscribe = Blogslist.limit(100).onSnapshot(querySnapshot => {
    //         const data = querySnapshot.docs.map(doc => ({
    //           ...doc.data(),
    //           id: doc.id,
    //         }));
    //         setRsvns(data);
    //       });
    //       return unsubscribe;
    // }, []);

    const SearchBlog=(e)=>{
        e.preventDefault();
        
        setSearchRsvns(rsvns.filter((rsvns)=>
            rsvns.name.toLowerCase().includes(search.toLowerCase())||
            rsvns.lastname.toLowerCase().includes(search.toLowerCase())
        ));
    };

    return(
        <div>
            <div>
                <form onSubmit={(e) => {SearchBlog(e)}}>
                    <input
                    onChange={(e)=>{setSearch(e.target.value)}}  />
                    <button type="submit">Search</button>
                </form>
            </div>
            {searchRsvns.map(item=> (
                <div key={item.id}>
                    <p>name: {item.name}</p>
                    <p>lastname: {item.lastname}</p>
                </div>
            ))}
        </div>
    );
};

export default RsvnInfo;