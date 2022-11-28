import MyButton from "./buttons/MyButton";
import SearchIcon from "@material-ui/icons/Search";
import MyInput from "./inputs/MyInput";
import MyListbox from "./lists/MyListbox";
import cities from "../assets/cities.json";

type Props = {
  className?: string;
};
interface City {
  name: string;
  enum: string;
}

const citiesArray = cities.pl as City[];

const SearchJobInput = ({ className }: Props) => {
  return (
    <div className={`grid grid-cols-4 gap-3 ${className}`}>
      <MyInput
        placeholder="Znajdź wymarzoną prace!"
        className="col-span-2"
      ></MyInput>
      <MyListbox<City> objects={citiesArray} property={"name"}></MyListbox>
      <MyButton icon={<SearchIcon />}>Szukaj</MyButton>
    </div>
  );
};

export default SearchJobInput;
