import React from "react";

const AdmissionBanner = ({
  title = "ADMISSION",
  description = "Please follow these simple steps to complete your admission application",
  backgroundImage = "/image/app2.webp",
}) => {
  return (
    <div className="relative flex min-h-36 flex-col justify-start overflow-hidden rounded-xl px-4 pt-5 pb-6 text-white sm:min-h-52 sm:px-10 sm:pt-8 sm:pb-10">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(170deg, rgba(40,44,42,.4), rgba(28,30,29,.88)), url('${backgroundImage}')`,
          filter: "blur(5px)",
          transform: "scale(1.05)",
        }}
      />
      <p className="relative font-[PoppinsBold] text-2xl sm:text-4xl">
        {title}
      </p>
      <p className="relative z-10 py-3 text-sm leading-relaxed text-white/90 sm:text-sm">
        {description}
      </p>
    </div>
  );
};

export default AdmissionBanner;