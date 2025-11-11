import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const videos = [
  "https://cdn.dribbble.com/userupload/44360845/file/4988e26dadf995df34b5bfde3d04d45d.mp4",
  "https://cdn.dribbble.com/userupload/44953456/file/76723a83e127562547a28df5001d257b.webm",
  "https://cdn.dribbble.com/userupload/16569515/file/original-d99071d642c8efd87400222a0c344e1a.mp4",
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  // Auto-play the carousel every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrent((current - 1 + videos.length) % videos.length);
  const nextSlide = () => setCurrent((current + 1) % videos.length);

  return (
    <>
    <div className="w-full flex top-0 left-0 justify-center ">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full overflow-hidden bg-black rounded shadow-2xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {videos.map((src, i) => (
              <div key={i} className="w-full shrink-0 relative">
                <video
                  src={src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[60vh] object-cover brightness-90"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 w-2 rounded-full transition-all ${
                  current === i ? "bg-white w-4" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className=""></div>
    </>
  );
};

export default Banner;
