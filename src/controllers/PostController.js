import { prisma } from "../prisma.js";

class PostController {
  async create(req, res) {
    try {
      const data = req.body;
      const user = await prisma.user.findUnique({
        where: { id: Number(data.authorId) },
      });
      if (!user) {
        return res.status(404).json({ Message: "User not found" });
      }

      const post = await prisma.post.create({
        data: {
          title: data.title,
          content: data.content,
          authorId: Number(data.authorId),
        },
      });

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
