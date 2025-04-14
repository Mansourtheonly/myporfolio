const HeaderInfo = ({ icon, title }) => {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <span className="text-sm md:text-base">{title}</span>
    </div>
  );
};

export default HeaderInfo;
