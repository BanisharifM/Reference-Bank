import React from "react";
import axios from "axios";
import useSWR, { mutate, trigger } from "swr";

const Post = () => {
  const { data } = useSWR("https://jsonplaceholder.typicode.com/users");

  const handleNewPost = async () => {
    // mutate(
    //   "https://jsonplaceholder.typicode.com/users",
    //   [
    //     ...data,
    //     {
    //       userId: 4,
    //       id: 4,
    //       title: "this is simple post",
    //       body: "adjklbnadlkngk nqadkljgb akldng ;landglj nadkgnajk nd",
    //     },
    //   ],
    //   false
    // );
    // await  post req . then .catch 
    // trigger("https://jsonplaceholder.typicode.com/users");
  };

  return (
    <div>
      <button onClick={handleNewPost}> post </button>
      this is a simple post
    </div>
  );
};

export default Post;
