import useFetch from "../useFetch";

const HotelsByName = ({name}) => {
    const {data, loading, error} = useFetch(`https://topic-bi-1-3-hw-2-backend.vercel.app/hotels/${name}`)
    //console.log(data)
    
    return data ? (
      <div>
        <h1>{data.name}</h1>
        <p><strong>Location: </strong>{data.location}</p>
        <p><strong>Rating: </strong>{data.rating}</p>
        <p><strong>Price Range: </strong>{data.priceRange}</p>
      </div>
    
  ) : (
    <>
      {loading && <p>Loading ....</p>}
      {error && <p>Error while fetching the data.</p>}
    </>
  );
};
export default HotelsByName