import React from "react";
import { useLocation } from "react-router-dom";

const ArticlePage = () => {
  let { state } = useLocation();
  const data = state?.item;
  return (
    <div className="container my-8 mx-auto px-6 xl:px-0">
      <img src={data?.image} alt={data?.name} className="w-full object-cover" />
      <div className="my-4 md:text-lg text-gray-500">by {data?.name}</div>
      <div className="md:text-5xl text-2xl my-4 md:my-4 redColor font-semibold">
        {data?.name}
      </div>
      <div className="text-lg">{data?.description}</div>
    </div>
  );
};

export default ArticlePage;
