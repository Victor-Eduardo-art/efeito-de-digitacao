# EFEITO-DE-DIGITAÇÃO

## Como usar

Para usar basta ir no arquivo **script.js** e chamar a função **calcTmp()** e passar os seguintes parâmetros

- texto
- delay (delay que a letras vão aparecer)
- classe (caso queira usar uma classe CSS, caso não queira basta deixar em **null**)
- elemento pai (o elemento no qual o texto vai ser inserido, aliás o texto vai ficar em uma tag span)

```js
// criando um texto com delay sem classe CSS
calcTmp("teste", 100, null, aside, 1)

// criando um texto com delay com classe CSS
calcTmp("Olá mundo!", 100, 'color-red', aside, 1)
```

## Tecnologias usadas

- HTML
- CSS
- JavaScript