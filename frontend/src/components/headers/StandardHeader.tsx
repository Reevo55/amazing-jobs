import ButtonLink from "../links/ButtonLink";
import StandardLink from "../links/StandardLink";
import Logo from "../../assets/logo.svg";

export default function StandardHeader() {
  return (
    <nav className="my-5 w-8/12 mx-auto">
      <ul className="grid grid-cols-3 gap-3 justify-items-center">
        <li className="justify-self-start">
          <img src={Logo} alt="company logo" />
        </li>

        <ul className="space-x-10">
          <li className="inline-block">
            <StandardLink to={"/"}>Strona główna</StandardLink>
          </li>
          <li className="inline-block">
            <StandardLink to={"/szukaj"}>Szukaj</StandardLink>
          </li>
          <li className="inline-block">
            <StandardLink to={"/compare"}>Porównuj</StandardLink>
          </li>
        </ul>

        <ul className="space-x-10 justify-self-end">
          <li className="inline-block">
            <StandardLink to={"/compare"}>Zaloguj się</StandardLink>
          </li>
          <li className="inline-block">
            <ButtonLink to={"/compare"}>Zarejestruj się</ButtonLink>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
