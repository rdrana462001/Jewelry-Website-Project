function Collection() {

  const products = [

    {
      id: 1,
      name: "Royal Necklace",
      price: "₹1,20,000",
      image: "/Royel lacklace.jpg",
    },

    {
      id: 2,
      name: "Diamond Ring",
      price: "₹80,000",
      image: "/12.jpg",
    },

    {
      id: 3,
      name: "Luxury Bridal",
      price: "₹2,50,000",
      image: "/v4.jpg",
    },

  ];

  return (

    <div className="min-h-screen bg-[#f8f5ef] px-10 py-32">

      {/* HEADING */}

      <div className="text-center mb-20">

        <p className="tracking-[6px] text-[#c89b3c] mb-4">
          PREMIUM COLLECTION
        </p>

        <h1 className="text-7xl font-serif">
          Luxury Jewellery
        </h1>

      </div>


      {/* PRODUCTS */}

      <div className="grid md:grid-cols-3 gap-10">

        {products.map((item) => (

          <div
            key={item.id}
            className="
            bg-white
            rounded-[35px]
            overflow-hidden
            shadow-2xl
            group
            "
          >

            {/* IMAGE */}

            <div className="overflow-hidden">

              <img
                src={item.image}
                alt=""
                className="
                w-full
                h-[450px]
                object-cover
                transition
                duration-700
                group-hover:scale-110
                "
              />

            </div>


            {/* CONTENT */}

            <div className="p-8">

              <h1 className="text-3xl font-serif mb-4">

                {item.name}

              </h1>

              <p className="text-[#c89b3c] text-2xl mb-6">

                {item.price}

              </p>


              {/* BUTTONS */}

              <div className="flex gap-4">

                <button
                  className="
                  flex-1
                  py-4
                  rounded-full
                  bg-black
                  text-white
                  hover:bg-[#c89b3c]
                  transition
                  duration-500
                  "
                >

                  Add To Cart

                </button>


                <button
                  className="
                  px-6
                  rounded-full
                  border
                  border-black
                  hover:bg-black
                  hover:text-white
                  transition
                  duration-500
                  "
                >

                  ♡

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Collection;