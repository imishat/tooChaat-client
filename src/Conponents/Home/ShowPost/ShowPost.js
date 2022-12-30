import React from 'react';
import { useQuery } from 'react-query';
import Loading from './../../Shared/Loading/Loading';
import AllPost from './AllPost';

const ShowPost = () => {
    const { data, refetch, isLoading } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
          const res = await fetch("http://localhost:5000/posts");
          const data = await res.json();
          return data;
        },
      });
      if (isLoading) {
        return <Loading></Loading>
      }
    return (
        <div>
      {data.map((posts) => (
        <AllPost key={posts._id} posts={posts}></AllPost>
      ))}
    </div>
    );
};

export default ShowPost;