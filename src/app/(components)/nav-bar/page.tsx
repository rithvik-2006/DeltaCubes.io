import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-zinc-900 h-24">
      <div className="flex flex-row">
        <Link href="/">
          <img
            className="h-24 basis-auto"
            src="https://deltacubes.us/wp-content/uploads/2023/09/logo-removebg-preview.png"
          />
        </Link>
        <div className="flex flex-row gap-8 pl-36 py-9">
          <div className="basis-auto cursor-pointer">
            <a href="/">Home</a>
          </div>
          <div className="basis-auto cursor-pointer">
            <a href="#">About </a>
          </div>
          <div className="basis-auto cursor-pointer">
            {" "}
            <a href="#">Services</a>
          </div>
          <div className="basis-auto cursor-pointer">
            {" "}
            <a href="#">Contact</a>
          </div>
          <div className="basis-auto cursor-pointer">
            {" "}
            <a href="#">Free consultation</a>
          </div>
        </div>
        <div className="flex flex-row gap-8 pl-36 py-7">
          <div className="basis-auto">
            <Link href="/HireRemote">
              <button className="border-solid border-2 border-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-transparent hover:bg-cyan-500 rounded-sm p-2">
                Hire remote
              </button>
            </Link>
          </div>
          <div className="basis-auto">
            <Link href="/WorkRemote">
              <button className="border-solid border-2 border-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-transparent hover:bg-cyan-500 rounded-sm p-2">
                Applying job
              </button>
            </Link>
          </div>
          <div className="basis-auto">
            <Link href="/onlineTrainer">
              <button className="border-solid border-2 border-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-transparent hover:bg-cyan-500 rounded-sm p-2">
                Applying Trainer
              </button>
            </Link>
          </div>
          <div className="basis-auto">
            <Link href="/onlineTraining">
              <button className="border-solid border-2 border-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-transparent hover:bg-cyan-500 rounded-sm p-2">
                Applying for online training
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
