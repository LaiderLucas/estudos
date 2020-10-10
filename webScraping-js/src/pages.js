async function index(req, res){
  const a = "teste"
    return res.render("index.html", {name: a} )

}

module.exports = {
    index
}