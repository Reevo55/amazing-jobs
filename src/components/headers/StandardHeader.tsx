import ButtonLink from "../links/ButtonLink";
import StandardLink from "../links/StandardLink";

export default function StandardHeader() {
  return (
    <header className="my-5">
      <ul className="grid grid-cols-3 gap-3 justify-items-center">
        <li>Logo</li>

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

        <ul className="space-x-10">
          <li className="inline-block">
            <StandardLink to={"/compare"}>Zaloguj się</StandardLink>
          </li>
          <li className="inline-block">
            <ButtonLink to={"/compare"}>Zarejestruj się</ButtonLink>
          </li>
        </ul>
      </ul>
    </header>
  );
}
