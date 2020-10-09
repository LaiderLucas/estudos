const puppeteer = require('puppeteer');
const fs = require('fs');

async function scrapping(req, res) {
    const profile = req.body.profile

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(`https://instagram.com/${profile}`);
    if (await page.$('.VnYfv') !== null) 
    fs.writeFile('public/instagram.json', JSON.stringify([], null, 2), err => {
        if (err) throw new Error('something went wrong' + err)
        console.log('weel done!----')
    });
    else await evaluate(page) ;

    async function evaluate(){
        const imgList = await page.evaluate(() => {
            // isso é executado dentro do browser

            //pegando todos os elementos img que estão dentro do elemento article e retornando uma nodeList
            const nodeList = document.querySelectorAll('article img')

            // tranformando o NodeList em array

            const imgArray = [...nodeList]

            //transformar os nodes (Elementos HTML capturados) em objetos JS
            const imgList = imgArray.map(({ src }) => ({
                // retorna o atributo src das tag img capturadas
                src
            }))

            return imgList
        });

        fs.writeFile('public/instagram.json', JSON.stringify(imgList, null, 2), err => {
            if (err) throw new Error('something went wrong' + err)
            console.log('weel done!')
        })
    }

    
    
    return res.redirect('/')

};


module.exports = {
    scrapping
}