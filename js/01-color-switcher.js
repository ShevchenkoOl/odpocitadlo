//funkce pro generování náhodné barvy
function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
 }

 //Aby se barvy po určité době samy měnily, je potřeba použít metodu setInterval() – informace o ní najdete na internetu.