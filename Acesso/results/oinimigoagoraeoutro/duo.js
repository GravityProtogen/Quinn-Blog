 // ****************************************************************************
 //*                                                                          *
 //*              SE VOCÊ ESTÁ AQUI, É POR QUE ESTÁ TRAPACEANDO               *
 //*                                                                          *
 //*                                                                          *
 //*                                                                          *
 //*            NÃO UTILIZE NADA DAS INFORMAÇÕES DAQUI PARA O PUZZLE          *
 //*                    EU SABEREI SE VOCÊ TRAPACEOU                          *
 //*                              HEHEHE                                      *
 //*                                                                          *
 //*                                                                          *
 //*                                                                          *
 // ***************************************************************************




























































 

 // Função para verificar cada código e exibir feedback
 function checkCode(inputId, correctCode, feedbackId) {
    var code = document.getElementById(inputId).value.toLowerCase();
    var feedback = document.getElementById(feedbackId);

    if (code === correctCode) {
        feedback.innerHTML = "✔️ Código correto";
        feedback.style.color = "#32CD32"; // Verde para correto
    } else if (code !== "") {
        feedback.innerHTML = "❌ Código incorreto";
        feedback.style.color = "red"; // Vermelho para incorreto
    } else {
        feedback.innerHTML = ""; // Limpa se vazio
    }
}

// Função para verificar todos os códigos juntos ao enviar
function finalCheck() {
    var code1 = document.getElementById('code1').value.toLowerCase();
    var code2 = document.getElementById('code2').value.toLowerCase();
    var code3 = document.getElementById('code3').value.toLowerCase();
 // ****************************************************************************
 //*                                                                          *
 //*              SE VOCÊ ESTÁ AQUI, É POR QUE ESTÁ TRAPACEANDO               *
 //*                                                                          *
 //*                                                                          *
 //*                                                                          *
 //*            NÃO UTILIZE NADA DAS INFORMAÇÕES DAQUI PARA O PUZZLE          *
 //*                    EU SABEREI SE VOCÊ TRAPACEOU                          *
 //*                              HEHEHE                                      *
 //*                                                                          *
 //*                                                                          *
 //*                                                                          *
 // ***************************************************************************
 // ****************************************************************************
 //*                                                                          *
 //*              SE VOCÊ ESTÁ AQUI, É POR QUE ESTÁ TRAPACEANDO               *
 //*                                                                          *
 //*                                                                          *
 //*                                                                          *
 //*            NÃO UTILIZE NADA DAS INFORMAÇÕES DAQUI PARA O PUZZLE          *
 //*                    EU SABEREI SE VOCÊ TRAPACEOU                          *
 //*                              HEHEHE                                      *
 //*                                                                          *
 //*                                                                          *
 //*                                                                          *
 // ***************************************************************************
 // ****************************************************************************
 //*                                                                          *
 //*              SE VOCÊ ESTÁ AQUI, É POR QUE ESTÁ TRAPACEANDO               *
 //*                                                                          *
 //*                                                                          *
 //*                                                                          *
 //*            NÃO UTILIZE NADA DAS INFORMAÇÕES DAQUI PARA O PUZZLE          *
 //*                    EU SABEREI SE VOCÊ TRAPACEOU                          *
 //*                              HEHEHE                                      *
 //*                                                                          *
 //*                                                                          *
 //*                                                                          *
 // ***************************************************************************
 // ****************************************************************************
 //*                                                                          *
 //*              SE VOCÊ ESTÁ AQUI, É POR QUE ESTÁ TRAPACEANDO               *
 //*                                                                          *
 //*                                                                          *
 //*                                                                          *
 //*            NÃO UTILIZE NADA DAS INFORMAÇÕES DAQUI PARA O PUZZLE          *
 //*                    EU SABEREI SE VOCÊ TRAPACEOU                          *
 //*                              HEHEHE                                      *
 //*                                                                          *
 //*                                                                          *
 //*                                                                          *
 // ***************************************************************************

    var correctCode1 = "olho";
    var correctCode2 = "aranha";
    var correctCode3 = "ovelha";

    if (code1 === correctCode1 && code2 === correctCode2 && code3 === correctCode3) {
        window.location.href = "./resultados/acesso-concedido.html";
    } else {
        alert("Um ou mais códigos estão incorretos. Verifique novamente.");
    }
}