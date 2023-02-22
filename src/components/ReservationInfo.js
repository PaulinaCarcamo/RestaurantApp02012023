import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import { useEffect, useState } from "react"
import FirebaseDb from "../firebase/firebase";

//Fetching collection data from firebase. RsvnInfo = Reservation information.
const RsvnInfo = () => {

    const db = getFirestore(FirebaseDb);
    const [details, setDetails] = useState([]);
    const [search, setSearch] = useState('');
    const [Searchblogs, SetSearchblogs] = useState([]);

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

    const SearchBlog = (e) => {
        e.preventDefault();

        SetSearchblogs(details.filter((blogs) =>
            blogs.id.toLowerCase().includes(search.toLowerCase()) ||
            blogs.lastname.toLowerCase().includes(search.toLowerCase())
        ));
    };

    return (
        <div>
            <div>
                <form onSubmit={(e) => { SearchBlog(e) }}>
                    <input
                        onChange={(e) => { setSearch(e.target.value) }} />
                    <button type="submit">Search</button>
                </form>
            </div>
            {Searchblogs.map(blog => (
                <div key={blog.id}>
                    <p>{blog.name}</p>
                    <p>{blog.lastname}</p>
                    <p>{blog.email}</p>
                    <p>Day {blog.date}</p>
                    <p>Hour {blog.time}</p>
                    <p>Table for {blog.table}.</p>
                </div>
            ))}
        </div>
    );
}

export default RsvnInfo;


