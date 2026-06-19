import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getWatchesAPI } from "../api/watchApi";

const Wear = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const [watches, setWatches] = useState([]);

  useEffect(() => {
    const fetchWatches = async () => {
      try {
        const data = await getWatchesAPI(category);
        setWatches(data.watches);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWatches();
  }, [category]);

  return (
    <div className="min-h-screen bg-black text-white p-6">
  <h1 className="text-3xl font-bold mb-6">
    {category === "men" ? "Men Watches" : "Women Watches"}
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
    {watches.map((watch) => (
      <div
        key={watch._id}
        className="border border-gray-700 bg-gray-900 rounded-lg shadow-md p-3 cursor-pointer"
      >
        <img
          src={watch.image}
          alt={watch.name}
          className="w-full h-60 object-cover rounded"
        />

        <h2 className="font-bold mt-3">
          {watch.name}
        </h2>

        <p className="text-gray-300">
          ₹{watch.price}
        </p>
      </div>
    ))}
  </div>
</div>
  );
};

export default Wear;