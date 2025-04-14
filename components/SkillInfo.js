import classNames from "classnames";
import Image from "next/image";

const SkillInfo = ({ image, name }) => {
  return (
    <div className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800   text-zinc-500 min-w-min px-2 py-1 rounded-sm">
      <div
        className={classNames({
          "bg-white rounded-full":
            name === "next" || name === "Next JS" || name === "github",
        })}
      >
        <Image width={20} height={20} src={image} />
      </div>
      <span className="capitalize">{name}</span>
    </div>
  );
};

export default SkillInfo;
