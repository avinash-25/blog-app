import { useEffect, useState } from "react";

import { Grid, Box } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";

// import { getAllPosts } from '../../../service/api';
import { API } from "../../../service/api";

//components
import Post from "./Post";
// const categoryImageMap = {
//   Music: "https://ik.imagekit.io/w8r14tqb9/laptop.png?updatedAt=1715147204086",
//   Movies: "https://ik.imagekit.io/w8r14tqb9/laptop.png?updatedAt=1715147204086",
//   Sports: "https://ik.imagekit.io/w8r14tqb9/laptop.png?updatedAt=1715147204086",
//   Tech: "https://ik.imagekit.io/w8r14tqb9/laptop.png?updatedAt=1715147204086",
//   Fashion:
//     "https://ik.imagekit.io/w8r14tqb9/laptop.png?updatedAt=1715147204086",
// };

const Posts = () => {
  const [posts, getPosts] = useState([]);

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getAllPosts({ category: category || "" });
      if (response.isSuccess) {
        getPosts(response.data);
      }
    };
    fetchData();
  }, [category]);

  return (
    <>
      {posts?.length ? (
        posts.map((post) => (
          <Grid item lg={3} sm={4} xs={12}>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={`details/${post._id}`}
            >
              <Post post={post} />
            </Link>
          </Grid>
        ))
      ) : (
        <Box style={{ color: "878787", margin: "30px 80px", fontSize: 18 }}>
          No data is available for selected category
        </Box>
      )}
    </>
  );
};

export default Posts;
