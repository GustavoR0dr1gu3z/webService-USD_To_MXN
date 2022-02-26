const puppeteer = require('puppeteer');


(async () => {

    try{
        // Abrimos el navegador
        const browser = await puppeteer.launch();

        // Abrimos nueva pagina
        const page = await browser.newPage();

        // Abrimos URL
        await page.goto("https://www.banxico.org.mx/tipcamb/tipCamIHAction.do");


        const fechaF = await page.evaluate(() => {
            // Seleccionamos la fecha
            const fechass = document.querySelector('.renglonPar').firstChild.textContent;



            return fechass;
        });
        
        // Imprimimos la fecha
        console.log(fechaF);

        // Cerramos el navegador
        await browser.close();          

    } catch(error){
        console.log(error);
    }


})();