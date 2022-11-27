import MyButton from "./buttons/MyButton";
import SearchIcon from "@material-ui/icons/Search";
import MyInput from "./inputs/MyInput";

type Props = {};

const SearchJobInput = (props: Props) => {
  return (
    <div className="grid grid-cols-3 gap-3 my-8">
      <MyInput
        placeholder="Znajdź wymarzoną prace!"
        className="col-span-2"
      ></MyInput>
      <MyButton icon={<SearchIcon />}>Szukaj</MyButton>
    </div>
  );
};

export default SearchJobInput;
