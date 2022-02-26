const puppeteer = require('puppeteer');
const fs = require('fs');

(async() => {    
    try{
        // Abrimos el navegador
        const browser = await puppeteer.launch();

        // Abrimos nueva pagina
        const page = await browser.newPage();

        // Abrimos URL
        await page.goto("https://www.banxico.org.mx/tipcamb/tipCamIHAction.do");


        const contenidoF = await page.evaluate(() => {
            
            // Seleccionamos la fecha            
            const fecha = document.querySelector('body > table > tbody > tr:nth-child(2) > td:nth-child(1) > table > tbody > tr:nth-child(2) > td:nth-child(1) > table > tbody > tr:last-child > td').innerText

            // Seleccionamos la cantidad
            const cantidad = document.querySelector('body > table > tbody > tr:nth-child(2) > td:nth-child(1) > table > tbody > tr:nth-child(2) > td:nth-child(3) > table > tbody > tr:last-child > td').innerText

            return {fecha, cantidad};
        });
        
        // Imprimimos la fecha
        console.log(contenidoF.fecha);

        // Imprimirmos la cantidad
        console.log(contenidoF.cantidad);

        // Guardamos en un archivo JSON
        fs.writeFileSync('banxico.json', JSON.stringify(contenidoF));
        
        
        // Cerramos el navegador
        await browser.close();          

    } catch(error){
        console.log(error);
    }
})();
