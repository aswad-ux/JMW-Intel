export default function TrustSignals() {
  const logos = [
    { name: "Santam", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Santam_Logo.svg/512px-Santam_Logo.svg.png" },
    { name: "Outsurance", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/OUTsurance_logo.svg/512px-OUTsurance_logo.svg.png" },
    { name: "Discovery", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Discovery_Limited_logo.svg/512px-Discovery_Limited_logo.svg.png" },
    { name: "MiWay", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/MiWay_Insurance_Logo.png/512px-MiWay_Insurance_Logo.png" },
    { name: "Hollard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Hollard_Group_Logo.png/512px-Hollard_Group_Logo.png" }
  ];

  return (
    <section className="bg-gray-50 py-10 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">
          Installations approved by all major insurance brands
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, index) => (
            <div key={index} className="w-24 md:w-32 flex justify-center items-center h-12">
              <span className="text-xl font-bold text-gray-400">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
