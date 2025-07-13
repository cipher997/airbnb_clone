import { MdSearch } from "react-icons/md";

const SearchFilters = () => {
  return (
    <div className="w-full flex justify-center py-4 bg-gray-100 sticky top-[72px] z-40 shadow-md">
      <div className="flex items-center bg-white border border-gray-200 rounded-full shadow-sm overflow-x-auto px-2 md:px-4 py-2 md:py-3">
        {/* Where */}
        <div className="px-4 border-r">
          <p className="text-xs font-semibold text-gray-700">Where</p>
          <p className="text-sm text-gray-500">Search destinations</p>
        </div>

        {/* Check in */}
        <div className="px-4 border-r">
          <p className="text-xs font-semibold text-gray-700">Check in</p>
          <p className="text-sm text-gray-500">Add dates</p>
        </div>

        {/* Check out */}
        <div className="px-4 border-r">
          <p className="text-xs font-semibold text-gray-700">Check out</p>
          <p className="text-sm text-gray-500">Add dates</p>
        </div>

        {/* Who */}
        <div className="px-4">
          <p className="text-xs font-semibold text-gray-700">Who</p>
          <p className="text-sm text-gray-500">Add guests</p>
        </div>

        {/* Search Icon */}
        <button className="bg-red-400 text-white p-2 rounded-full ml-2 hover:bg-red-500 transition duration-200">
          <MdSearch className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default SearchFilters;
