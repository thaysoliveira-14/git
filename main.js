document.getElementById('formulario').addEventListener('submit' , validarFormulario)

function validarFormulario() {
    const campoA = document.getElementById('campoA').value
    const campoB = document.getElementById('campoB').value

    if (campoA > campoB) {
        alert("Formulário inválido! O valor do campo B precisa ser maior que o valor do campo A")
    }
    else {
        alert ("Formulário válido!")
    }
}