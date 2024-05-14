import Navbar from "../(components)/nav-bar/page";

export default function ApplyOnlineTrainer() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <form className="max-w-lg mx-auto mt-10 p-6 bg-gray-900 rounded-lg shadow-md">
          {/* Personal Information */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Full Name</label>
              <input
                className="w-full px-3 py-2 border bg-gray-300 text-black border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                type="text"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Email Address</label>
              <input
                className="w-full px-3 py-2 border bg-gray-300 text-black border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                type="email"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block mb-1">Phone Number</label>
            <input
              className="w-full px-3 py-2 border bg-gray-300 text-black border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="tel"
              required
            />
          </div>

          {/* Training Details */}
          <div className="mt-4">
            <label className="block mb-1">Education Level</label>
            <select
              className="w-full px-3 py-2 border bg-gray-300 text-black border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">Select Education Level</option>
              <option value="highschool">High School</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="graduate">Graduate</option>
              <option value="postgraduate">Postgraduate</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="block mb-1">Area of Expertise</label>
            <input
              className="w-full px-3 py-2 border bg-gray-300 text-black border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block mb-1">Years of Experience</label>
            <input
              className="w-full px-3 py-2 border bg-gray-300 text-black border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="number"
              required
              min={0}
            />
          </div>

          {/* Availability and Credentials */}
          <div className="mt-4">
            <label className="block mb-1">Availability (hours per week)</label>
            <input
              className="w-full px-3 py-2 border bg-gray-300 text-black border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="number"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block mb-1">
              Certificates or Credentials (if any)
            </label>
            <textarea
              className="w-full px-3 py-2 border bg-gray-300 text-black border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              rows={4}
            ></textarea>
          </div>

          {/* Additional Information */}
          <div className="mt-4">
            <label className="block mb-1">
              Why do you want to become an online trainer?
            </label>
            <textarea
              className="w-full px-3 py-2 border bg-gray-300 text-black border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              rows={4}
              required
            ></textarea>
          </div>

          <div className="mt-6 flex flex-row justify-center">
            <button className="border-solid border-2 border-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-transparent hover:bg-cyan-500 rounded-sm p-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
