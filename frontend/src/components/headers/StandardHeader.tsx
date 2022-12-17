import ButtonLink from "../links/ButtonLink";
import StandardLink from "../links/StandardLink";
import Logo from "../../assets/logo.svg";

export default function StandardHeader() {
  const user_id = localStorage.getItem('user_id');

  return (
    <nav className="my-6 w-10/12 mx-auto">
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
            <StandardLink to={"/new-offer"}>Porównuj</StandardLink>
          </li>
          
          { user_id &&
            <li className="inline-block">
              <StandardLink to={"/cv-generator"}>CV Generator</StandardLink>
            </li>
          }

        </ul>

        <ul className="space-x-10 justify-self-end">
          <li className="inline-block">
            <StandardLink to={"/login"}>Zaloguj się</StandardLink>
          </li>
          <li className="inline-block">
            <ButtonLink to={"/register"}>Zarejestruj się</ButtonLink>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
