import Navbar from "../(components)/nav-bar/page";

export default function WorkRemote() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <form className="max-w-lg mx-auto mt-10 p-6 bg-gray-900 rounded-lg shadow-md">
          {/* Contact Information */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Full Name</label>
              <input
                className="w-full px-3 text-black py-2 border bg-gray-300 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                type="text"
              />
            </div>
            <div>
              <label className="block mb-1">Email Address</label>
              <input
                className="w-full px-3 text-black py-2 border bg-gray-300 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                type="email"
              />
            </div>
            {/* Add more contact information fields here */}
          </div>

          {/* Job Details */}
          <div className="mt-4">
            <label className="block mb-1">Job Title</label>
            <input
              className="w-full px-3 text-black py-2 border bg-gray-300 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
            />
          </div>
          <div className="mt-4">
            <label className="block mb-1">Job Description</label>
            <textarea
              className="w-full px-3 text-black py-2 border bg-gray-300 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              rows={4}
            ></textarea>
          </div>
          {/* Add more job details fields here */}

          {/* Remote Work Details */}
          {/* Add remote work details fields here */}

          {/* Budget and Compensation */}
          {/* Add budget and compensation fields here */}

          {/* Additional Information */}
          <div className="mt-4">
            <label className="block mb-1">
              Where did you hear about this job?
            </label>
            <input
              className="w-full px-3 text-black py-2 border bg-gray-300 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
            />
          </div>
          <div className="mt-4">
            <label className="block mb-1">College Name (if applicable)</label>
            <input
              className="w-full px-3 text-black py-2 border bg-gray-300 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
            />
          </div>
          <div className="mt-4">
            <label className="block mb-1">Graduation Year</label>
            <input
              className="w-full px-3 text-black py-2 border bg-gray-300 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
            />
          </div>
          <div className="mt-4 text-black flex flex-row justify-center">
            <label className="block mb-1 mr-2 text-white">Work type</label>
            <select className="rounded-sm">
              <option>Full Time</option>
              <option>Part Time</option>
            </select>
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
