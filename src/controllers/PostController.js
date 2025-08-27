import { prisma } from "../prisma.js";

class PostController {
  async create(req, res) {
    try {
      const data = req.body;

      const post = await prisma.post.create({
        data: {
          content: data.content,
        },
      });

      console.log(post);

      return res.status(201).json({ data: post });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ Message: "Internal error" });
    }
  }

  async get(req, res) {
    try {
      const data = await prisma.post.findMany();
      if (!data || data.length == 0) {
        return res.status(404).json({ Message: "Not Found" });
      }
      console.log(data);
      return res.status(200).json({ data: data });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ Message: "Internal error" });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const data = await prisma.post.findUnique({
        where: {
          id: Number(id),
        },
      });
      if (!data || data.length == 0) {
        return res.status(404).json({ Message: "Not Found" });
      }
      return res.status(200).json({ data: data });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ Message: "Internal error" });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await prisma.comment.deleteMany({
        where: {
          postId: Number(id),
        },
      });

      await prisma.post.delete({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json({ data: "Post deleted succesfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ Message: "Internal error" });
    }
  }
}

export { PostController };
