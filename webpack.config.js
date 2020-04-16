const path = require('path'); //pacote do node

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'), //arquivo de entrada, caminho do arquivo desde a raiz com "__dirname" e arvore  
  output: { //arquivo que será gerado após o 
    path: path.resolve(__dirname, 'public'), //caminho onde será gerado o arquivo de saída
    filename: 'bundle.js', //nome do arquivo gerado na pasta de saída (public)
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'), //onde estar todos os arquivos publico(public) da aplicação
  },
  //aplicar regras para que seja entendido quais os arquivos devem serem convertidos
  module: {
    rules: [
      {  //resumo: da regra(rules), toda vez que precisar de um arquivo js que não estiver na pasta node_modules, converte ele usando(use) o babel-loader
        test: /\.js$/, //primeira própriedade obrigatória (test:), usar expresões regulares
        exclude: /node_modules/, //não converter, é obrigação das bibliotecas fazerem isso
        use: {
          loader: 'babel-loader',
        }
      },
      {  //resumo: da regra(rules), toda vez que precisar de um arquivo js que não estiver na pasta node_modules, converte ele usando(use) o babel-loader
        test: /\.css$/, //primeira própriedade obrigatória (test:), usar expresões regulares
        exclude: /node_modules/, //não converter, é obrigação das bibliotecas fazerem isso
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader',
        }
      }
    ]
  }
};