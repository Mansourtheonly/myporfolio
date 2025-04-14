const Heading = ({ children }) => {
  return (
    <h2 className="text-base md:text-lg font-bold text-indigo-500 dark:text-zinc-400">
      {children}
    </h2>
  );
};

export default Heading;
