import Image from "next/image";

import FeatImage01 from "@/public/images/work1.jpeg";
import FeatImage02 from "@/public/images/work2.jpeg";
import FeatImage03 from "@/public/images/work3.jpeg";
import FeatImage04 from "@/public/images/work4.jpeg";

export default function Zigzag() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">So, how does it work?</h1>
            <p className="text-xl text-darkblue">
              Letting your house with us is easy and convenient. Just follow
              these simple steps:
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage01}
                  width={540}
                  height={405}
                  alt="Features 01"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">Contact us</h3>
                  <p className="text-xl text-darkblue mb-4">
                    Tell us about your property and your expectations. You can
                    fill out the form on our website, call us on 01234 567890,
                    or email us at info@houseletting.com. We will respond to
                    your enquiry within 24 hours and arrange a suitable time for
                    the next step.
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage02}
                  width={540}
                  height={405}
                  alt="Features 02"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-3">Arrange a visit</h3>
                  <p className="text-xl text-darkblue mb-4">
                    Our agent will visit your property at the agreed time and
                    date, and inspect its condition, size, location, and
                    features. They will also take photos and measurements, and
                    ask you some questions about your preferences and
                    requirements. Based on this information, they will give you
                    an estimate of how much rent you can expect to receive from
                    your property.
                  </p>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage03}
                  width={540}
                  height={405}
                  alt="Features 03"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">Choose a service</h3>
                  <p className="text-xl text-darkblue mb-4">
                    Choose a service that suits your budget and needs, from full
                    management to tenant find only. We offer three different
                    levels of service for our landlords, full management, rent
                    collection, and tenant find only
                  </p>
                </div>
              </div>
            </div>

            {/* 4th item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage04}
                  width={540}
                  height={405}
                  alt="Features 02"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-3">Sit back and relax</h3>
                  <p className="text-xl text-darkblue mb-4">
                    Our agent will visit your property at the agreed time and
                    date, and inspect its condition, size, location, and
                    features. They will also take photos and measurements, and
                    ask you some questions about your preferences and
                    requirements. Based on this information, they will give you
                    an estimate of how much rent you can expect to receive from
                    your property.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
