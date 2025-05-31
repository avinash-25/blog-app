//

const Post = require("../model/post.js");

// exports.createPost = async (request, response) => {
//   try {
//     debugger;
//     const post = new Post(request.body);
//     console.log(post);
//     await post.save();

//     response.status(200).json("Post saved successfully");
//   } catch (error) {
//     response.status(500).json(error);
//   }
// };

exports.createPost = async (request, response) => {
  try {
    const { title, description, picture, categories, username, createdDate } =
      request.body;

    // Create a new Post instance using data from request body
    const post = new Post({
      title,
      description,
      picture,
      categories,
      username,
      createdDate,
      // Add other required fields here (e.g., author, image, etc.)
    });

    // Save the new post to the database
    await post.save();

    response.status(201).json({ isSuccess: true, data: post });
  } catch (error) {
    response.status(500).json({ isFailure: true, error: error.message });
  }
};

exports.updatePost = async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);

    if (!post) {
      response.status(404).json({ msg: "Post not found" });
      return;
    }

    await Post.findByIdAndUpdate(request.params.id, { $set: request.body });

    response.status(200).json("Post updated successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

exports.deletePost = async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);

    if (!post) {
      return response.status(404).json({ msg: "Post not found" });
    }

    await Post.findByIdAndDelete(request.params.id);

    response.status(200).json({ msg: "Post deleted successfully" });
  } catch (error) {
    console.error("Error deleting post:", error);
    response.status(500).json({ msg: "Internal Server Error" });
  }
};
exports.getPost = async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);

    if (!post) {
      response.status(404).json({ msg: "Post not found" });
      return;
    }

    response.status(200).json(post);
  } catch (error) {
    response.status(500).json(error);
  }
};

exports.getAllPosts = async (request, response) => {
  let username = request.query.username;
  let category = request.query.category;
  let posts;
  try {
    if (username) posts = await Post.find({ username: username });
    else if (category) posts = await Post.find({ categories: category });
    else posts = await Post.find({});

    response.status(200).json(posts);
  } catch (error) {
    response.status(500).json(error);
  }
};
