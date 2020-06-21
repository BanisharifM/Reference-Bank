import React from "react";
import useSWR from "swr";
import { axiosInstance } from "../../../../services/axios/axios";
import axios from "axios";
import Post from "./Post";

const Index = () => {
  const { data } = useSWR("https://jsonplaceholder.typicode.com/users");
  const handleLogin = () => {};

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {!data && <p>Loading ... </p>}
      <pre>{JSON.stringify(data, null, 4)}</pre>
      <Post />
    </div>
  );
};

export default Index;
