function mudarTitulo() {

    const titulo = document.getElementById("titulo");
    const titulo2 = document.getElementById("titulo2");
    const descricao = document.getElementById("descricao");
    const logo = document.getElementById("logoHeader");


    titulo.textContent = "ESCOLHA UM";
    titulo2.textContent = "JOGO";

    titulo.style.fontSize = "130px";
    titulo2.style.fontSize = "300px";
    descricao.style.fontSize = "70px";

    titulo.style.display = "block";
    titulo2.style.display = "block";
    descricao.style.display = "none";

    logo.src = "../Farmando-main/img/logo2.svg";
}

function mudarTitulo2() {

    const titulo = document.getElementById("titulo");
    const titulo2 = document.getElementById("titulo2");
    const descricao = document.getElementById("descricao");
    const logo = document.getElementById("logoHeader");


    titulo2.textContent = "MULTIVERSO EM COLAPSO";

    titulo2.style.fontSize = "250px";

    titulo.style.display = "none";
    titulo2.style.display = "block";
    descricao.style.display = "none";

    logo.src = "../Farmando-main/img/logo2.svg";
}

function mudarTitulo3() {

    const titulo = document.getElementById("titulo");
    const titulo2 = document.getElementById("titulo2");
    const descricao = document.getElementById("descricao");
    const logo = document.getElementById("logoHeader");

    titulo2.textContent = "AS SOMBRAS DO MEU ARMÁRIO";

    titulo2.style.fontSize = "250px";

    titulo.style.display = "none";
    titulo2.style.display = "block";
    descricao.style.display = "none";

    logo.src = "../Farmando-main/img/logo3.svg";
}

function mudarTitulo4() {

    const titulo = document.getElementById("titulo");
    const titulo2 = document.getElementById("titulo2");
    const descricao = document.getElementById("descricao");
    const logo = document.getElementById("logoHeader");


    titulo2.textContent = "QUANDO AS RAÍZES DESPEDAÇAM";

    titulo2.style.fontSize = "230px";

    titulo.style.display = "none";
    titulo2.style.display = "block";
    descricao.style.display = "none";

    logo.src = "../Farmando-main/img/logo2.svg";
}