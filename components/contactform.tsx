export default function Contact() {
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
            <form action="#" className="space-y-8 p-10 mt-10 bg-white">
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
                        name="letting"
                        value="letting"
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
                        name="renting"
                        value="renting"
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
                  id="name"
                  className="block p-3 w-full text-sm text-gray-900 border-x-0 border-t-0 border-b-4 border-slate-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  className="block p-3 w-full text-sm text-gray-900 border-x-0 border-t-0 border-b-4 border-slate-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your email"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <textarea
                  id="message"
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
