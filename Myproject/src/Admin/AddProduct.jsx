import { useState } from "react";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import { toast } from "react-toastify";

function AddProduct() {

    const [sidebarOpen, setSidebarOpen] = useState(false);
  
const [mainCategory, setMainCategory] =
  useState("");

const [imageFile, setImageFile] = useState(null);

const [subCategory, setSubCategory] =
  useState("");
  const [product, setProduct] = useState({

    name: "",
    price: "",
    category: "",
    description: "",
    image: "",
    stock: ""

  });
const handleImageUpload = (e) => {
  const file = e.target.files[0];

  if (file) {
    setImageFile(file);

    setProduct({
      ...product,
      image: URL.createObjectURL(file),
    });
  }
};
  const handleChange = (e) => {

    setProduct({

      ...product,

      [e.target.name]:
        e.target.value

    });

  };
const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const formData = new FormData();

    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("category", product.category);
    formData.append("description", product.description);
    formData.append("stock", product.stock);

    if (imageFile) {
      formData.append("image", imageFile);
    }

    const response = await axios.post(
      "http://localhost:5000/api/products",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log(response.data);

toast.success("Product Added Successfully ");

  } 
  catch (error) {

  console.log(error);
  console.log(error.response?.data);

  toast.error(
    error.response?.data?.message ||
    "Failed To Add Product ❌"
  );

}
};

  return (

<>
  <div className="flex">

    <AdminSidebar
      isOpen={sidebarOpen}
      setIsOpen={setSidebarOpen}
    />

    <div className="flex-1">

      <AdminNavbar
        toggleSidebar={() =>
          setSidebarOpen(!sidebarOpen)
        }
      />
<div className="min-h-screen p-10 bg-gradient-to-br from-[#faf7f2] via-[#f8f1df] to-[#f4ead2]">
<div
  className="
  max-w-4xl
  mx-auto
  p-10
  rounded-[35px]
  backdrop-blur-xl
  bg-white/80
  border
  border-white/40
  shadow-[0_20px_60px_rgba(212,175,55,0.15)]
"
>
       <h1
  className="
  text-5xl
  md:text-6xl
  font-bold
  mb-10
  bg-gradient-to-r
  from-yellow-700
  via-amber-500
  to-yellow-600
  bg-clip-text
  text-transparent
"
>
  Add Product
</h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={product.name}
            onChange={handleChange}
className="
w-full
p-4
rounded-2xl
border
border-[#e5d5a5]
bg-white/90
focus:outline-none
focus:ring-2
focus:ring-amber-400
focus:border-amber-400
transition-all
duration-300
shadow-sm
"          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
className="
w-full
p-4
rounded-2xl
border
border-[#e5d5a5]
bg-white/90
focus:ring-2
focus:ring-amber-400
transition-all
duration-300
"     />
          <select
  value={mainCategory}
  onChange={(e) => {

    setMainCategory(
      e.target.value
    );

    setSubCategory("");

  }}
  className="
  w-full
  border
  p-4
  rounded-xl
  "
>

  <option value="">
    Select Main Category
  </option>

  <option value="collection">
    Collection
  </option>

  <option value="luxury">
    Luxury
  </option>

</select>
<select
  value={subCategory}
  onChange={(e) => {

    setSubCategory(
      e.target.value
    );

    setProduct({

      ...product,

      category:
        e.target.value

    });

  }}
  className="
  w-full
  border
  p-4
  rounded-xl
  "
>

  <option value="">
    Select Sub Category
  </option>

  {mainCategory === "collection" && (

    <>
      <option value="rings">
        Diamond Rings
      </option>

      <option value="necklace">
        Royal Necklace
      </option>

      <option value="bridal">
        Bridal Collection
      </option>

      <option value="bracelet">
        Luxury Bracelets
      </option>
    </>

  )}

  {mainCategory === "luxury" && (

    <>
      <option value="gold">
        Premium Gold
      </option>

      <option value="celebrity">
        Celebrity Style
      </option>

      <option value="watches">
        Luxury Watches
      </option>

      <option value="fashion">
        Royal Fashion
      </option>
    </>

  )}

</select>
          {/* <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={product.image}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          /> */}

<input
  type="file"
  accept="image/*"
  onChange={(e) =>
    setImageFile(e.target.files[0])
  }
className="
w-full
p-4
rounded-2xl
border
border-[#e5d5a5]
bg-white/90
focus:outline-none
focus:ring-2
focus:ring-amber-400
focus:border-amber-400
transition-all
duration-300
shadow-sm
"/>
{imageFile && (
  <img
    src={URL.createObjectURL(imageFile)}
    alt="Preview"
className="
w-48
h-48
object-cover
rounded-3xl
border-4
border-amber-200
shadow-xl
mt-4
hover:scale-105
transition-all
duration-300
"
  />
)}
          <textarea
            name="description"
            placeholder="Description"
            value={product.description}
            onChange={handleChange}
className="
w-full
h-36
p-4
rounded-2xl
border
border-[#e5d5a5]
bg-white/90
focus:ring-2
focus:ring-amber-400
transition-all
duration-300
"          />

          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={product.stock}
            onChange={handleChange}
className="
w-full
p-4
rounded-2xl
border
border-[#e5d5a5]
bg-white/90
focus:outline-none
focus:ring-2
focus:ring-amber-400
focus:border-amber-400
transition-all
duration-300
shadow-sm
"          />

          <button
      className="
w-full
py-5
rounded-2xl
font-bold
text-lg
text-white
bg-gradient-to-r
from-amber-600
via-yellow-550
to-amber-600
shadow-[0_10px_30px_rgba(212,175,55,0.4)]
hover:scale-[1.02]
hover:shadow-[0_15px_40px_rgba(212,175,55,0.5)]
transition-all
duration-300
"
          >

            ADD PRODUCT

          </button>

        </form>

       
      </div> {/* max-w-3xl */}
    </div>   {/* min-h-screen */}

    </div>   {/* flex-1 */}
  </div>     {/* flex */}

</>
);

}

export default AddProduct;