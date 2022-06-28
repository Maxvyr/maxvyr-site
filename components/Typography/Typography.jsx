export function Title({ children }) {
  return <h2 className='text-white tracking-wide text-clamp-xl'>{children}</h2>;
}

export function Text({ children }) {
  return <p className='text-gray text-lg leading-[33px] text-justify md:text-xl lg:leading-[36px]'>{children}</p>;
}
