const {PrismaClient} = require("@prisma/client")

const prisma = new PrismaClient()

class movieController {
  async getAll(req, res) {
    try {
      const movies = await prisma.movie.findMany();
      res.json(movies);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Произошла ошибка при получении списка фильмов." });
    }
  }
  
  async create(req, res) {
    const data = req.body
    const formattedData = {
      ...data,
      release_year: Number(data.release_year), 
    };

    try {
      const movie = await prisma.movie.create({
        data: formattedData
      })

      res.json(movie)
    } catch (e) {
      console.log(e)
      res.status(500).json({ error: "Произошла ошибка при добавлении." });

    }
  }

  async delete(req, res) {
    try {
      const id = req.query.id
      const result = await prisma.movie.delete({
        where: {id: id}
      });
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Произошла ошибка при удалении." });
    }
  }

  async edit(req, res) {
    const id = req.body.id
    const data = req.body
    
    delete req.body.id
    const formattedData = {
      ...data,
      release_year: Number(data.release_year),
    };

    try {
      const movie = await prisma.movie.update({
        where: {id: id},
        data: formattedData
      })

      res.json(movie)
    } catch (e) {
      console.log(e)
      res.status(500).json({ error: "Произошла ошибка при редактировании." });
    }
  }
}

module.exports = new movieController()