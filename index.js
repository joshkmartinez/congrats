module.exports = (req, res) => {
  res.writeHead(302, {
    Location: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  })
  res.end()
}
