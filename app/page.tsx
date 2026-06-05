export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">  
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold text-red-500">
      Romeo's Pizzeria
    </h1>

    <div className="hidden md:flex gap-8">
      <a href="#menu">Menu</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </div>

    <a
  href="https://foodhub.co.uk"
  className="bg-red-600 px-5 py-2 rounded-full"
>
  Order Now
</a>
  </div>
</nav>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center text-center px-6 pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1600&q=80')",
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tight">
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
<section id="menu" className="py-24 bg-zinc-950 px-6">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-5xl font-bold text-center mb-16">
      Our Menu
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-zinc-900 p-8 rounded-3xl">
        <h3 className="text-2xl font-bold mb-4">Pizzas</h3>
        <p>Margherita - £8.99</p>
        <p>Pepperoni - £10.99</p>
        <p>BBQ Chicken - £11.99</p>
        <p>Meat Feast - £12.99</p>
      </div>

      <div className="bg-zinc-900 p-8 rounded-3xl">
        <h3 className="text-2xl font-bold mb-4">Kebabs</h3>
        <p>Chicken Kebab - £8.99</p>
        <p>Doner Kebab - £8.49</p>
        <p>Mixed Kebab - £10.99</p>
      </div>

      <div className="bg-zinc-900 p-8 rounded-3xl">
        <h3 className="text-2xl font-bold mb-4">Burgers</h3>
        <p>Cheeseburger - £7.99</p>
        <p>Double Burger - £9.99</p>
        <p>Chicken Burger - £8.49</p>
      </div>

    </div>
  </div>
</section>
<section className="py-24 px-6 bg-black">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-5xl font-bold text-center mb-16">
      Food Gallery
    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      <img
        src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
        className="rounded-3xl h-72 w-full object-cover"
        alt="Pizza"
      />

      <img
        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
        className="rounded-3xl h-72 w-full object-cover"
        alt="Pizza"
      />

      <img
  src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=1000&q=80"
  className="rounded-3xl h-72 w-full object-cover"
  alt="Pizza"
/>

    </div>

  </div>
</section>
<section id="about" className="py-24 px-6 bg-black">
  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-5xl font-bold mb-8">
      About Romeo's Pizzeria
    </h2>

    <p className="text-xl text-gray-300 leading-relaxed">
      Romeo's Pizzeria serves freshly made pizzas, kebabs and burgers
      using quality ingredients and fast local delivery. We pride
      ourselves on great food, friendly service and excellent value
      for our customers.
    </p>

  </div>
</section>
<section id="contact" className="py-24 bg-zinc-950 px-6">
  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-5xl font-bold mb-10">
      Contact Us
    </h2>

    <div className="space-y-4 text-xl">

      <a
  href="tel:01472123456"
  className="block hover:text-red-500"
>
  📞 01472 123456
</a>

      <p>📍 Grimsby, North East Lincolnshire</p>

      <p>🕒 Open Daily: 11am - 11pm</p>

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
