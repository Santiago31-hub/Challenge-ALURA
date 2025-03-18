let amigos = [];
function agregarAmigo{
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === ""){
        alert("Por favor, inserte un nombre.");
        return;
    }
    amigos.push(nombre);
    actualizarlista();
    input.value = "";
}