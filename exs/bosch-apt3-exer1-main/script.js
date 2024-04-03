var nomeGlobal;
var mensagemGlobal;
var dateGlobal;

function conferirMensagemWhatsApp() {
    var changeConf = document.getElementById("conf").style.display = "inline";
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;
    var date = new Date();

    nomeGlobal = nome;
    mensagemGlobal = mensagem;
    dateGlobal = date.toLocaleString("pt-br");

    document.getElementById("confNome").textContent = nome;
    document.getElementById("confMsg").textContent = mensagem;
    document.getElementById("confDate").textContent = dateGlobal;
}

function enviar() {
    var numeroTelefone = "5541999999999";

    var linkWhatsApp =
        "https://wa.me/" +
        numeroTelefone +
        "?text=NOME DO RECEPTOR(A): " +
        nomeGlobal +
        " - MENSAGEM: " +
        mensagemGlobal +
        " - DATA: " +
        dateGlobal;

    window.open(linkWhatsApp);
}

function colorMode() {
    var element = document.body;
    element.classList.toggle("dark");
    element.classList.toggle("light");
}
