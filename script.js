let numeroSecreto = Math.floor(Math.random() * 10) + 1;
          console.log("Ta aí, meu chefe. " + numeroSecreto + " Qualquer coisa, não fui eu quem te passei")
          function adivinhar () {
               let palpite = parseInt(document.getElementById("palpite").value);
               let resultado = document.getElementById("resultado");

               if (palpite === numeroSecreto) {
                    resultado.innerText = "Parabéns, você acertou!";
               } else if (palpite < numeroSecreto) {
                    resultado.innerText = "Quase, escolha um número maior";
               } else {
                    resultado.innerText = "Quase, escolha um número menor";
               }

          }