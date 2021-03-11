let messages = [];
let id = 0

module.exports = {
  create: (req, res) => {
    const { text, time } = req.body
    messages.push({
      id,
      text,
      time
    })
    id++
    res.status(200).send(messages)
  },
  read: (req, res) => {
    res.status(200).send(messages)
  },
  update: (req, res) => {
    const { text } = req.body
    messages.forEach((elem, i) => {
      if (elem.id === +req.params.id) {
        elem.text = text
      }
      // let updatedText = text
    })
    res.status(200).send(messages)
  },
  delete: (req, res) => {
    let text2 = null
    messages.forEach((elem, i) => {
      if (elem.i === +id) {
        text2 = i
      }
    })
    messages.splice(text2, 1)
    res.status(200).send(messages)
  }
}