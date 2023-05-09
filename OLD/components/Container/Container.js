import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

export default function Container(props) {
  return (
    <div className="flex flex-col h-full bg-slate-50">
      <Nav />
      {props.children}
      <Footer />
    </div>
  );
}
