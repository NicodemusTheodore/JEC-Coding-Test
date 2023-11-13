import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBox = () => {
  return (
    <div className="flex items-center bg-gray-100 px-4 py-1 rounded-md">
      <div className="mr-2">
        <FontAwesomeIcon size="sm" color="gray" icon={faSearch} />
      </div>
      <input
        type="text"
        placeholder="Search . . ."
        className="bg-gray-100 outline-none text-sm"
      />
    </div>
  );
};

export default SearchBox;
