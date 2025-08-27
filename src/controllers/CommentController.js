import { prisma } from "../prisma.js";

class CommentController {
  async create(req, res) {
    try {
      const data = req.body;

      const post = await prisma.post.findUnique({
        where: { id: Number(data.postId) },
      });

      if (!post) {
        return res.status(404).json({ Message: "Post not found" });
      }

      const comment = await prisma.comment.create({
        data: {
          content: data.content,
          postId: data.postId,
        },
      });

      return res.status(201).json({ data: comment });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ Message: "Internal error" });
    }
  }

  async get(req, res) {
    try {
      const { id } = req.params;
      const data = await prisma.comment.findMany({
        where: {
          postId: Number(id),
        },
      });

      console.log(data);
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
      const data = await prisma.comment.findUnique({
        where: {
          id: Number(id),
        },
      });
      console.log(data);
      if (!data || data.length == 0) {
        return res.status(404).json({ Message: "Not Found" });
      }
      return res.status(200).json({ data: data });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ Message: "Internal error" });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      const data = req.body;

      const comment = await prisma.comment.update({
        where: {
          id: Number(id),
        },
        data: {
          content: data.content,
        },
      });

      return res.status(200).json({ data: comment });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ Message: "Internal error" });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await prisma.comment.delete({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json({ data: "Comment deleted succesfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ Message: "Internal error" });
    }
  }
}

export { CommentController };
