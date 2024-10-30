const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");
const descriptionP=document.querySelector("#description-color p")
const descriptionS=document.querySelector("#description-color span")

buttons.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
    console.log(e)
        buttons.forEach((btn)=>{
            btn.querySelector(".color").classList.remove("selected")
        });
        const button =e.target

        const id = button.getAttribute("id");
        
        button.querySelector(".color").classList.add("selected");
        console.log(image);

        image.classList.add("changing");
        switch (id) {
            case "blue":
                descriptionP.textContent="Uma cor refrescante e vibrante que remete à tranquilidade. O azul sierra traz uma sensação de calma e leveza ao seu produto, ideal para quem busca algo único e cheio de personalidade.";
                descriptionS.textContent="Azul Sierra";
                descriptionS.style.color = "#a7c1d9";
                break;
            case "golden":
                descriptionP.textContent="Uma tonalidade luxuosa que evoca riqueza e glamour. O dourado ilumina o seu produto, oferecendo um visual opulento que se destaca entre as opções disponíveis, ideal para aqueles que buscam um toque especial.";
                descriptionS.textContent="Dourado";
                descriptionS.style.color ="#fae7cf";
                break;
            case "grafite":
                descriptionP.textContent="Um tom profundo e contemporâneo que traz um ar de sobriedade e seriedade. O grafite é perfeito para quem deseja um produto que combine versatilidade com um toque moderno e urbano.";
                descriptionS.textContent="Grafite";
                descriptionS.style.color ="#54524f";
                break;
            case "green":
                descriptionP.textContent="Uma tonalidade suave e fresca que traz um toque de natureza ao seu produto. Essa cor delicada é perfeita para quem busca uma aparência elegante e harmoniosa.";
                descriptionS.textContent="Verde-albino";
                descriptionS.style.color ="#394c38";
                break
            case "silver":
                descriptionP.textContent="Uma cor sofisticada e moderna que irradia elegância. O prateado adiciona um toque de brilho ao seu produto, tornando-o uma escolha perfeita para quem aprecia estilo e contemporaneidade.";
                descriptionS.textContent="Prateado";
                descriptionS.style.color ="#fae7cf";
                break;

        }
        image.setAttribute("src",`img/iphone_${id}.jpg`)
        setTimeout(()=>{
            image.classList.remove("changing")
        },200)
        
    })
})