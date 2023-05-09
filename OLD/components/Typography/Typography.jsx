export function Title({ children }) {
  return <h2 className="text-black tracking-wide text-clamp-xl">{children}</h2>;
}

export function Text({ children }) {
  return (
    <p className="text-slate-600 text-lg leading-[33px] text-justify md:text-xl lg:leading-[36px]">
      {children}
    </p>
  );
}

export function SmallText({ children }) {
  return <p className="text-slate-400 text-sm text-center my-3 ">{children}</p>;
}
