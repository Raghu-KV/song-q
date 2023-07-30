import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";

const Discover = () => {
  const genereTytle = "Pop";

  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-col justify-between items-center sm:flex-row mt-4 mb-10">
        <h2 className="text-white font-bold text-3xl">
          Discover {genereTytle}
        </h2>
        <select className="bg-[rgba(0,0,0,0)] text-white outline-none border border-white text-sm p-2 rounded-lg mt-5">
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value} className="bg-black">
              {genre.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Discover;
