import { prisma } from "../prisma.js";

class UserController {
  async create(req, res) {
    try {
      const data = req.body;

      const user = await prisma.user.create({
        data: {
          email: data.email,
          name: data.name,
          password: data.password,
        },
      });

      return res.status(201).json({ data: user });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ Message: "Internal error" });
    }
  }

  async get(req, res) {
    try {
      const data = await prisma.user.findMany();
      if (!data || data.length == 0) {
        return res.status(404).json({ Message: "Not Found" });
      }
      return res.status(200).json({ data: data });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ Message: "Internal error" });
    }
  }
}

export { UserController };
