"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");

  var templateParams = {
    name: { name },
    email: { email },
    type: { type },
    message: { message },
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m4h43xn",
        "template_nnobczx",
        "#form",
        "y74wiXcLOnrL-pzTn"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <section id="contact" className="bg-bgalt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-center">Ready to join us?</h2>
            <p className="text-xl text-darkblue text-center">
              If you are excited to rent out your property with us, don't wait
              any longer. Contact us today and let us take care of everything
              for you. You can either fill out the form below or give us a call.
            </p>

            <div
              className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:gap-16 items-center justify-center md:max-w-2xl lg:max-w-none place-items-center"
              data-aos-id-blocks
            >
              {/* email */}
              <div
                className="relative pt-6 gap-3 flex items-center"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.075 5.3325C0.226227 4.66986 0.597983 4.07822 1.12938 3.65446C1.66078 3.23071 2.32033 2.99995 3 3H21C21.6797 2.99995 22.3392 3.23071 22.8706 3.65446C23.402 4.07822 23.7738 4.66986 23.925 5.3325L12 12.621L0.075 5.3325ZM0 7.0455V17.7015L8.7045 12.3645L0 7.0455ZM10.1415 13.245L0.2865 19.2855C0.52999 19.7989 0.91429 20.2326 1.39467 20.5362C1.87505 20.8397 2.43176 21.0005 3 21H21C21.5681 21.0001 22.1246 20.8389 22.6048 20.5351C23.0849 20.2313 23.4688 19.7975 23.712 19.284L13.857 13.2435L12 14.379L10.1415 13.2435V13.245ZM15.2955 12.366L24 17.7015V7.0455L15.2955 12.3645V12.366Z"
                    fill="#501DFF"
                  />
                </svg>
                <p className="text-lg text-darkblue text-center">
                  hello@rentix.co.uk
                </p>
              </div>

              {/* phone */}
              <div
                className="relative pt-6 gap-3 flex items-center"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.075 5.3325C0.226227 4.66986 0.597983 4.07822 1.12938 3.65446C1.66078 3.23071 2.32033 2.99995 3 3H21C21.6797 2.99995 22.3392 3.23071 22.8706 3.65446C23.402 4.07822 23.7738 4.66986 23.925 5.3325L12 12.621L0.075 5.3325ZM0 7.0455V17.7015L8.7045 12.3645L0 7.0455ZM10.1415 13.245L0.2865 19.2855C0.52999 19.7989 0.91429 20.2326 1.39467 20.5362C1.87505 20.8397 2.43176 21.0005 3 21H21C21.5681 21.0001 22.1246 20.8389 22.6048 20.5351C23.0849 20.2313 23.4688 19.7975 23.712 19.284L13.857 13.2435L12 14.379L10.1415 13.2435V13.245ZM15.2955 12.366L24 17.7015V7.0455L15.2955 12.3645V12.366Z"
                    fill="#501DFF"
                  />
                </svg>
                <p className="text-lg text-darkblue text-center">
                  +123 456 789
                </p>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              id="form"
              className="space-y-8 p-10 mt-10 bg-white"
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-xl text-darkblue">
                  I'm interested in...
                </label>
                <div className="mt-6 flex items-center gap-x-6">
                  <ul className="grid md:grid-cols-2 gap-x-3">
                    <li>
                      <input
                        type="radio"
                        id="letting"
                        name="type"
                        value={type}
                        onChange={(e) => {
                          setType("Letting");
                        }}
                        className="hidden peer"
                        required
                      />
                      <label
                        htmlFor="letting"
                        className="btn text-blue border-blue border-2 hover:bg-bluehover hover:text-white peer-checked:text-white peer-checked:bg-bluehover cursor-pointer w-full mb-4 sm:w-auto sm:mb-0"
                      >
                        <div className="block">
                          <div className="">Letting</div>
                        </div>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="renting"
                        name="type"
                        value={type}
                        onChange={(e) => {
                          setType("Renting");
                        }}
                        className="hidden peer"
                      />
                      <label
                        htmlFor="renting"
                        className="btn text-blue border-blue border-2 hover:bg-bluehover hover:text-white peer-checked:text-white peer-checked:bg-bluehover cursor-pointer w-full mb-4 sm:w-auto sm:mb-0"
                      >
                        <div className="block">
                          <div className="">Renting</div>
                        </div>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="block p-3 w-full text-sm text-gray-900 border-x-0 border-t-0 border-b-4 border-slate-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="block p-3 w-full text-sm text-gray-900 border-x-0 border-t-0 border-b-4 border-slate-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your email"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  rows={4}
                  className="block p-3 w-full text-sm text-gray-900 border-x-0 border-t-0 border-b-4 border-slate-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="btn text-white bg-blue hover:bg-bluehover w-full mb-4 sm:w-auto sm:mb-0"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
