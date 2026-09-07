import React from "react";

const TransportationBanner = () => {
  return (
    <div
      className="relative flex min-h-36 flex-col justify-start overflow-hidden rounded-xl px-4 pt-5 pb-6 text-bone sm:min-h-52 sm:px-10 sm:pt-8 sm:pb-10"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(170deg, rgba(40,44,42,.4), rgba(28,30,29,.88)), url('/image/sb1.jpg')",
          filter: "blur(5px)",
          transform: "scale(1.05)",
        }}
      />
      <h1 className="relative font-[PoppinsBold] text-2xl uppercase text-bone sm:text-4xl">
        TRANSPORTATION
      </h1>

      <p className="relative py-3 max-w-190 text-[9px] md:text-sm leading-relaxed text-bone/90">
        Note: These rates are based on standard routes. The final
        transportation fee may vary depending on the exact pickup location and
        van availability. If you would like to avail of the transportation
        service, please first visit the school on your selected schedule.
        Kindly coordinate with the school office for further assistance. Thank
        You!
      </p>
    </div>
  );
};

export default TransportationBanner;