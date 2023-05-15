type TypoProps = {
  children: React.ReactNode;
};

const Title = ({ children }: TypoProps) =>{
  return (
    <h2 className="text-black tracking-wide text-4xl font-bold">{children}</h2>
  );
}

const Text = ({ children }: TypoProps) => {
  return (
    <p className="text-slate-600 text-lg leading-[33px] text-justify md:text-xl lg:leading-[36px]">
      {children}
    </p>
  );
}

const SmallText = ({ children }: TypoProps) => {
  return <p className="text-slate-400 text-sm text-center my-3 ">{children}</p>;
}


export { Title, Text, SmallText}