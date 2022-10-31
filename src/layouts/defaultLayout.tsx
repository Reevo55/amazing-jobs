import Navbar from "../components/Navbar";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
