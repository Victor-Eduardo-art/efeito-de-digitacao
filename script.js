let chave = false

function iniciar () {
   gerenciarTexto()
}

function gerenciarTexto () {
   // essa função vai chamar a função efeitoDit
   // a função efeitoDit recebe: texto, delay, classe, elementoPai, tmpExec
   const aside = document.querySelectorAll("aside")[0]

   calcTmp("teste", 100, null, aside, 1)
   calcTmp("ola mundo", 100, "colorRed", aside, 1000)
   calcTmp("Hello World", 500, null, aside, 1)
}

function efeitoDit (texto, delay, classe, ElementoPai, tmpExec) {  
// essa função é que vai criar o efeito de digitação

   chave = true
   const span = document.createElement("span")
   const br = document.createElement("br")
   const arrayTexto = texto.split("")

   span.classList.add(classe)

   ElementoPai.appendChild(span)
   ElementoPai.appendChild(br)

   let tmp = setTimeout(() => {
      let pos = 0
      let tmp2 = setInterval(() => {
         if (span.innerHTML.length != arrayTexto.length) {
            span.innerHTML = span.innerHTML + arrayTexto[pos]
            pos++
         }else {
            span.classList.add("efeitoDit")
            clearInterval(tmp2)
            chave = false
         }
      }, delay)
   }, tmpExec)
}

function calcTmp (texto, delay, classe, ElementoPai, tmpExec) {
   const tmp = setInterval(() => {
      if (chave === false) {
         efeitoDit(texto, delay, classe, ElementoPai, tmpExec)
         clearInterval(tmp)
      }
   }, 100)
}

window.addEventListener("load", iniciar)