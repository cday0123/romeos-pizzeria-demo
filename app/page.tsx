export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1600&q=80')",
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            Romeo's Pizzeria
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-10">
            Fresh Pizza • Fast Delivery • Local Favourite
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full font-semibold">
              Order Online
            </button>

            <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
              Call Now
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {[
            "🍕 Fresh Ingredients",
            "🚚 Fast Delivery",
            "⭐ 5-Star Service",
            "🔥 Made Fresh Daily",
          ].map((item) => (
            <div
              key={item}
              className="bg-zinc-900 rounded-3xl p-8 text-center"
            >
              <p className="text-xl font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Items */}
      <section className="bg-zinc-950 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12">
            Popular Favourites
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Pepperoni Feast",
                img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=1000&q=80",
              },
              {
                name: "Chicken Kebab",
                img: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?auto=format&fit=crop&w=1000&q=80",
              },
              {
                name: "Cheeseburger",
                img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="bg-zinc-900 rounded-3xl overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold">{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12">
            Customer Reviews
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Best pizza in Grimsby.",
              "Fast delivery and great value.",
              "Always fresh and hot.",
            ].map((review) => (
              <div
                key={review}
                className="bg-zinc-900 p-6 rounded-3xl"
              >
                <p className="text-yellow-400 mb-3">
                  ⭐⭐⭐⭐⭐
                </p>

                <p>{review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 py-20 text-center px-6">
        <h2 className="text-5xl font-bold mb-4">
          Hungry?
        </h2>

        <p className="text-xl mb-8">
          Order your favourite takeaway today.
        </p>

        <button className="bg-white text-black px-8 py-4 rounded-full font-bold">
          Order Now
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-black py-10 text-center text-gray-400">
        <h3 className="text-white text-2xl font-bold mb-2">
          Romeo's Pizzeria
        </h3>

        <p>Pizza • Kebabs • Burgers • Delivery</p>
      </footer>
    </main>
  );
}
