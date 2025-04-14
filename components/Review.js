const { default: Image } = require("next/image");

const Review = ({ review }) => {
  return (
    <div className="flex flex-col gap-y-4 dark:text-zinc-400 border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4 ">
      <div className="flex space-x-4 items-center ">
        <div className="flex flex-col flex-1 items-end">
          <h1 className="font-bold capitalize">{review.name}</h1>
          {/* <span className="text-sm text-zinc-500">{review.company}</span> */}
        </div>
        <div className="relative w-[56px] h-[56px] rounded-full">
          <Image
            className="w-full h-full rounded-full"
            src={review.image}
            fill
            alt="reviewer image"
          />
        </div>
      </div>
      <div className="text-end">
        <p>{review.comment}</p>
      </div>
    </div>
  );
};

export default Review;
