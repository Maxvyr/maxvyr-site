import About from "../About/About";

export default function Header() {
  return (
    <header className="py-[100px] lg:flex flex-col items-center">
      <About />
      <div className="divide-solid"></div>
    </header>
  );
}
