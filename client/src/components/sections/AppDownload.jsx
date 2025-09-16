import { assets } from "@/assets/frontend_assets/assets";
import React from "react";

const AppDownload = () => {
  return (
    <section className="py-10">
      <div className="container__width text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
          Download Our App
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Get our mobile app for faster and more convenient access to our
          services.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* Google Play */}
          <img src={assets.play_store} alt="" />

          {/* App Store */}
          <img src={assets.app_store} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
