const scrapping  = require('./scrapping');

async function index(req, res){
    return res.render("index.html")
    
    
}

module.exports = {
    index
}