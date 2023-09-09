// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/adil-khursheed")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="text-center text-4xl text-white bg-gray-600 p-4">
      <div className="flex justify-center mb-4 rounded-lg">
        <img
          src={data.avatar_url}
          alt="GitHub Avatar"
          width={300}
          className="rounded-lg"
        />
      </div>
      <h3>Github Followers: {data.followers}</h3>
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/adil-khursheed");
  return response.json();
};
