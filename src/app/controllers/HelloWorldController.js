
class HelloWorld {
  async store(req, res) {
    return res.send('Hello world')
  }
}

export default new HelloWorld();