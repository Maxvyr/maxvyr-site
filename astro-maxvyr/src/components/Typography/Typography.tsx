import type { ReactNode } from "react";

type TypoProps = {
  children: ReactNode;
};

export function Title({ children }: TypoProps) {
  return <h2 className="text-black tracking-wide text-clamp-xl">{children}</h2>;
}

export function Text({ children }: TypoProps) {
  return (
    <p className="text-slate-600 text-lg leading-[33px] text-justify md:text-xl lg:leading-[36px]">
      {children}
    </p>
  );
}

export function SmallText({ children }: TypoProps) {
  return <p className="text-slate-400 text-sm text-center my-3 ">{children}</p>;
}