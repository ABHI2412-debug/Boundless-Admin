<section
  className="relative h-[520px] bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
  }}
>
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">

    <h1 className="text-6xl font-light mb-6">
      How can we help you?
    </h1>

    <div className="bg-white rounded-full flex shadow-lg overflow-hidden w-[700px]">

      <input
        type="text"
        placeholder="Ask a question..."
        className="flex-1 px-6 py-2.5 text-gray-700 outline-none"
      />

      <button className="bg-green-600 px-8 text-white">
        🔍
      </button>

    </div>

  </div>
</section>
