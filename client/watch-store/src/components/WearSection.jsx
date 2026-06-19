import { useNavigate } from "react-router-dom";

const WearSection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center py-10 px-4">

      {/* Men Card */}
      <div
        onClick={() => navigate("/wear?category=men")}
        className="cursor-pointer w-72 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
      >
        <img
          src="https://imgs.search.brave.com/bUAqq7OQ1upYoI5lUr9RnaocRmd8vJth3FbRYJdCjng/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXJtaXRyb24uY29t/L2Nkbi9zaG9wL2Zp/bGVzL0Nhbl9NZW5f/V2Vhcl9Xb21lbl9z/X1dhdGNoZXMtMl8x/MjgweC5wbmc_dj0x/NzM2MzYyMDU0"
          alt="Men Wear"
          className="w-full h-60 object-cover"
        />
        <div className="p-4 text-center font-semibold text-lg">
          Men
        </div>
      </div>

      {/* Women Card */}
      <div
        onClick={() => navigate("/wear?category=women")}
        className="cursor-pointer w-72 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
      >
        <img
          src="https://imgs.search.brave.com/gld4blo_CKEfXcDRfWDYLiAoHiPyWWlzXmm92kCGT8I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9qdXN0/aW50aW1lLmluL2Nk/bi9zaG9wL3Byb2R1/Y3RzLzEzWDlyOVQx/V1hubUN2V1lKQVAt/bUV6LUo3NnRkeU80/Uy5qcGc_dj0xNzY2/MjI4NDMwJndpZHRo/PTM4NDA"
          alt="Women Wear"
          className="w-full h-60 object-cover"
        />
        <div className="p-4 text-center font-semibold text-lg">
          Women
        </div>
      </div>

    </div>
  );
};

export default WearSection;