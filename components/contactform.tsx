"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");

  var templateParams = {
    name: {name},
    email: {email},
    type: {type},
    message: {message},
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_m4h43xn', 'template_nnobczx', '#form', 'y74wiXcLOnrL-pzTn')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
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
