import "/src/index.css";

export default function Home() {
  return (
    <>
      <div className="p-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <img
            className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
            src="/src/assets/Foto/pasfoto.png"
            alt="fotogue"
          />
        </div>
        <div>
          <div className="text-lg text-black font-semibold">
            Ardio Pratama Putra
          </div>
          <p className="text-slate-500 font-medium">Software Engineer</p>
        </div>
        <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
          <a href="/about">About</a>
        </button>
      </div>
    </>
  );
}
