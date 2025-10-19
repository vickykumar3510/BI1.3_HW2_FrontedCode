import { useState } from "react";
import useFetch from "../useFetch";

const Hotels = () => {
    const [successMsg, setSucessMsg] = useState("")
    const {data, loading} = useFetch("https://topic-bi-1-3-hw-2-backend.vercel.app/hotels",)
    console.log(data)
    const handleDelete = async (hotelId) => {
        try{
            const response = await fetch(`https://topic-bi-1-3-hw-2-backend.vercel.app/hotels/${hotelId}`,
                {method: "DELETE"},
            );

            if(!response.ok){
                throw "Failed to delete hotel."
            }

            const data = await response.json()
            if(data){
                setSucessMsg("Hotel deleted successfully")
                window.location.reload();
            }

        }catch(error){
            console.log(error)
        }
    }
    return (
        <div>
            {loading && <p>Loading...</p>}
            {data?.error && <p>{data?.error}</p>}
            <ul>
                {data?.map((hotel) => (
                    <li key={hotel._id}>{hotel.name}{" "}
                    <button onClick={() => handleDelete(hotel._id)}>Delete</button></li>
                ))}
            </ul>
            <p>{successMsg}</p>
        </div>
    )

}
export default Hotels