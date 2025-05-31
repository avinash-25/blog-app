// import { useState, useEffect, useContext } from "react";

// import { Box, Typography, styled } from "@mui/material";
// import { Delete, Edit } from "@mui/icons-material";
// import { Link, useNavigate, useParams } from "react-router-dom";

// import { API } from "../../service/api";

// import { DataContext } from "../../context/DataProvider";

// // components
// import Comments from "./comments/Comments";

// const Container = styled(Box)(({ theme }) => ({
//   margin: "50px 100px",
//   [theme.breakpoints.down("md")]: {
//     margin: 0,
//   },
// }));

// const Image = styled("img")({
//   width: "100%",
//   height: "50vh",
//   objectFit: "cover",
// });

// const EditIcon = styled(Edit)`
//   margin: 5px;
//   padding: 5px;
//   border: 1px solid #878787;
//   border-radius: 10px;
// `;

// const DeleteIcon = styled(Delete)`
//   margin: 5px;
//   padding: 5px;
//   border: 1px solid #878787;
//   border-radius: 10px;
// `;

// const Heading = styled(Typography)`
//   font-size: 38px;
//   font-weight: 600;
//   text-align: center;
//   margin: 50px 0 10px 0;
// `;

// const Author = styled(Box)(({ theme }) => ({
//   color: "#878787",
//   display: "flex",
//   margin: "20px 0",
//   [theme.breakpoints.down("sm")]: {
//     display: "block",
//   },
// }));

// const DetailView = () => {
//   const url =
//     "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

//   const [post, setPost] = useState({});
//   const { account } = useContext(DataContext);

//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       let response = await API.getPostById(id);
//       if (response.isSuccess) {
//         setPost(response.data);
//       }
//     };
//     fetchData();
//   }, []);

//   // const deleteBlog = async () => {
//   //     await API.deletePost(post._id);
//   //     navigate('/')
//   // }
//   const deleteBlog = async () => {
//     try {
//       const response = await API.deletePost(id);
//       if (response.isSuccess) {
//         navigate("/");
//       } else {
//         console.error("Failed to delete post");
//       }
//     } catch (error) {
//       console.error("Error deleting post:", error);
//     }
//   };

//   return (
//     <Container>
//       <Image src={post.picture || url} alt="post" />
//       <Box style={{ float: "right" }}>
//         {account.username === post.username && (
//           <>
//             <Link to={`/update/${post._id}`}>
//               <EditIcon color="primary" />
//             </Link>
//             <DeleteIcon onClick={deleteBlog} color="error" />
//           </>
//         )}
//       </Box>
//       <Heading>{post.title}</Heading>

//       <Author>
//         <Link
//           to={`/?username=${post.username}`}
//           style={{ textDecoration: "none", color: "inherit" }}
//         >
//           <Typography>
//             Author: <span style={{ fontWeight: 600 }}>{post.username}</span>
//           </Typography>
//         </Link>
//         <Typography style={{ marginLeft: "auto" }}>
//           {new Date(post.createdDate).toDateString()}
//         </Typography>
//       </Author>

//       <Typography>{post.description}</Typography>
//       <Comments post={post} />
//     </Container>
//   );
// };

// export default DetailView;
// import { useState, useEffect, useContext } from "react";

// import { Box, Typography, styled } from "@mui/material";
// import { Delete, Edit } from "@mui/icons-material";
// import { Link, useNavigate, useParams } from "react-router-dom";

// import { API } from "../../service/api";

// import { DataContext } from "../../context/DataProvider";

// // components
// import Comments from "./comments/Comments";

// const Container = styled(Box)(({ theme }) => ({
//   margin: "50px 100px",
//   [theme.breakpoints.down("md")]: {
//     margin: 0,
//   },
// }));

// const Image = styled("img")({
//   width: "100%",
//   height: "50vh",
//   objectFit: "cover",
// });

// const EditIcon = styled(Edit)`
//   margin: 5px;
//   padding: 5px;
//   border: 1px solid #878787;
//   border-radius: 10px;
// `;

// const DeleteIcon = styled(Delete)`
//   margin: 5px;
//   padding: 5px;
//   border: 1px solid #878787;
//   border-radius: 10px;
// `;

// const Heading = styled(Typography)`
//   font-size: 38px;
//   font-weight: 600;
//   text-align: center;
//   margin: 50px 0 10px 0;
// `;

// const Author = styled(Box)(({ theme }) => ({
//   color: "#878787",
//   display: "flex",
//   margin: "20px 0",
//   [theme.breakpoints.down("sm")]: {
//     display: "block",
//   },
// }));

// const DetailView = () => {
//   const url =
//     "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

//   const [post, setPost] = useState({});
//   const { account } = useContext(DataContext);

//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       let response = await API.getPostById(id);
//       if (response.isSuccess) {
//         setPost(response.data);
//       }
//     };
//     fetchData();
//   }, []);

//   //   const deleteBlog = async () => {
//   //     await API.deletePost(post.id);
//   //     navigate("/");
//   //   };

//   const deleteBlog = async () => {
//     try {
//       const response = await API.deletePost(id);
//       if (response.isSuccess) {
//         // Navigate to home page or any appropriate route after deletion
//         navigate("/");
//       } else {
//         // Handle error if deletion was not successful
//         console.error("Failed to delete post");
//       }
//     } catch (error) {
//       console.error("Error deleting post:", error);
//     }
//   };

//   return (
//     <Container>
//       <Image src={post.picture || url} alt="post" />
//       <Box style={{ float: "right" }}>
//         {account.username === post.username && (
//           <>
//             <Link to={`/update/${post._id}`}>
//               <EditIcon color="primary" />
//             </Link>
//             <DeleteIcon onClick={() => deleteBlog()} color="error" />
//           </>
//         )}
//       </Box>
//       <Heading>{post.title}</Heading>

//       <Author>
//         <Link
//           to={`/?username=${post.username}`}
//           style={{ textDecoration: "none", color: "inherit" }}
//         >
//           <Typography>
//             Author: <span style={{ fontWeight: 600 }}>{post.username}</span>
//           </Typography>
//         </Link>
//         <Typography style={{ marginLeft: "auto" }}>
//           {new Date(post.createdDate).toDateString()}
//         </Typography>
//       </Author>

//       <Typography>{post.description}</Typography>
//       <Comments post={post} />
//     </Container>
//   );
// };

// export default DetailView;
import React, { useState, useEffect, useContext } from "react";
import { Box, Typography, styled } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API } from "../../service/api";
import { DataContext } from "../../context/DataProvider";
import Comments from "./comments/Comments";

const Container = styled(Box)(({ theme }) => ({
  margin: "50px 100px",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));

const Image = styled("img")({
  width: "100%",
  height: "50vh",
  objectFit: "contain",
  marginTop: "50px",
});

const EditIcon = styled(Edit)`
  margin: 5px;
  padding: 5px;
  border: 1px solid #878787;
  border-radius: 10px;
`;

const DeleteIcon = styled(Delete)`
  margin: 5px;
  padding: 5px;
  border: 1px solid #878787;
  border-radius: 10px;
`;

const Heading = styled(Typography)`
  font-size: 38px;
  font-weight: 600;
  text-align: center;
  margin: 50px 0 10px 0;
`;

const Author = styled(Box)(({ theme }) => ({
  color: "#878787",
  display: "flex",
  margin: "20px 0",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

const DetailView = () => {
  const { account } = useContext(DataContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.getPostById(id);
        if (response.isSuccess) {
          setPost(response.data);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchData();
  }, [id]);

  const deleteBlog = async () => {
    try {
      const response = await API.deletePost(id);
      if (response.isSuccess) {
        navigate("/");
      } else {
        console.error("Failed to delete post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  // Helper function to get category-specific image URL
  const getCategoryImage = (categoryType) => {
    const categoryImageMap = {
      Music:
        "https://ik.imagekit.io/w8r14tqb9/bend-having-open-air-concert_23-2148664579.jpg?updatedAt=1715764755501",
      Movies:
        "https://ik.imagekit.io/w8r14tqb9/movie1.jpg?updatedAt=1715246356973",
      Sports:
        "https://ik.imagekit.io/w8r14tqb9/park-activities-outdoor-sport-workout-healthy-lifestyle-people-running-riding-bicycle-jogging-park-activities-illustration-park-activity-runner-workout-jogging-exercise_229548-641.jpg?updatedAt=1715764727397",
      Tech: "https://ik.imagekit.io/w8r14tqb9/tech1.jpg?updatedAt=1715246651615",
      Fashion:
        "https://ik.imagekit.io/w8r14tqb9/swap-party-s1-1-o%20(1).avif?updatedAt=1715764708440",
      // Add more categories as needed
    };

    return (
      categoryImageMap[categoryType] ||
      "https://ik.imagekit.io/w8r14tqb9/8e459158a4f82bcc215a9e2dce3644ed.png?updatedAt=1715764878602"
    );
  };

  const categoryImageUrl = getCategoryImage(post.categories);

  return (
    <Container>
      <Image src={post.picture || categoryImageUrl} alt="post" />
      <Box style={{ float: "right" }}>
        {account.username === post.username && (
          <>
            <Link to={`/update/${post._id}`}>
              <EditIcon color="primary" />
            </Link>
            <DeleteIcon onClick={deleteBlog} color="error" />
          </>
        )}
      </Box>
      <Heading>{post.title}</Heading>

      <Author>
        <Link
          to={`/?username=${post.username}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography>
            Author: <span style={{ fontWeight: 600 }}>{post.username}</span>
          </Typography>
        </Link>
        <Typography style={{ marginLeft: "auto" }}>
          {new Date(post.createdDate).toDateString()}
        </Typography>
      </Author>

      <Typography>{post.description}</Typography>
      <Comments post={post} />
    </Container>
  );
};

export default DetailView;
