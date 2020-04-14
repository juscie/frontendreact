module.exports = {

  presets: [
    '@babel/preset-env', //converte códigos do "js" mais moderno para um código do "js" antigo para que o browser entenda / na aplicação acontece o mesmo, porem com node, códigos js mais antigo
    '@babel/preset-react' //o preset-react vai adicionar as funcionalidade(a conversão) do preset-env no react para que ele entenda
  ],
};