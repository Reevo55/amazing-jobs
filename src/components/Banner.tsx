import { Link } from "react-router-dom";

interface BannerProps {
  title: string;
  subtitle?: string;
  link: {
    text: string;
    href: string;
  };
}

function Banner(props: BannerProps) {
  return (
    <div className="m-auto w-8/12 text-center z-10">
      <h1 className="text-9xl uppercase font-mono text-#7dd3fc tracking-widest font-thin text-neutral-200">
        {props.title}
      </h1>

      <h2 className="text-3xl font-sans font-bold italic text-gray-300 tracking-wide">
        {props.subtitle}
      </h2>

      <Link
        className="px-12 py-3 bg-sky-900 text-neutral-200 text-2xl font-sans font-bold tracking-widest uppercase mt-10 inline-block hover:bg-sky-700"
        to={props.link.href}
      >
        {props.link.text}
      </Link>
    </div>
  );
}

export default Banner;
