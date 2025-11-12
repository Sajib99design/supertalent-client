import { Link } from "react-router";

export const SuperCard = ({ model }) => {
  const { title, postedBy, category, summary, coverImage, useEmail } = model
  return (
    <div className="card  dark:bg-[#16295d] bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <figure className="h-48 overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </figure>
      <div className="card-body">
        <h4 className=" text-[14px] text-[#222222] dark:text-purple-500">{title}</h4>
        <p className="line-clamp-2  text-lg font-medium text-[#222222]/90 dark:text-gray-400  hover:text-[#a465f9]/70">
          {summary}
        </p>
        <div className="flex justify-between pt-4 mt-3 border-t border-gray-300 items-center">
          <span className="text-sm text-secondary ">{postedBy}</span>
          <span className="badge text-sm badge-xs badge-secondary rounded-full">{category}</span>

        </div>


      </div>
    </div>
  );
};
