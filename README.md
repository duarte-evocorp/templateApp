<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="http://www.evocorp.com.br" target="_blank">
    <img src="https://www.evocorp.com.br/assets/images/evocorp.png" height="100" width="300" alt="Logo">
  </a>

  <h3 align="center">Template EVOCORP Basic</h3>
</p>


## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conte%C3%BAdo)
- [Sobre o Projeto](#sobre-o-projeto)
- [Feito Com](#feito-com)
- [Começando](#come%C3%A7ando)
- [Pré-requisitos](#pr%C3%A9-requisitos)
- [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Instalação](#instala%C3%A7%C3%A3o)
- [Passo Adicional no Android](#passo-adicional-no-android)
- [Edição](#edi%C3%A7%C3%A3o)


## Sobre o Projeto

Este projeto visa a criação de um template que possa ser utilizado no momento de criação de projetos utilizando React Native, visto que o processo de instalação e configuração das libs no início de um projeto podem gerar certa complexidade e muitas vezes até erros que atrasam o processo, atrapalhando assim o fluxo de desenvolvimento.

Projeto para agilizar o desenvolvimento, visto que o processo de instalação e configurações de libs muitas vezes e demorado e complicado.

### Feito Com

Abaixo segue o que foi utilizado na criação deste template:

- [React Native](http://facebook.github.io/react-native/) - O React Native é um framework que permite o desenvolvimento de aplicações mobile usando JavaScript e React;
- [Axios](https://github.com/axios/axios) - O Axios é um cliente HTTP baseado em Promises para Browser e NodeJS;
- [React Redux](https://github.com/reduxjs/react-redux) - 
- [Redux](https://redux.js.org/) -
- [Redux Saga](https://redux-saga.js.org/) - È uma biblioteca que gerencia requisições assíncronas;
- [Styled Components](https://styled-components.com/) - 

## Começando

Para conseguir utilizar o template, seja através do React Native CLI ou com uma cópia local dos arquivos, siga os passos abaixo.

### Pré-requisitos

Antes de seguirmos para as configurações e uso do template, é ideal que você tenha o ambiente configurado para criar e testar aplicativos em React Native, para isso você pode seguir o guia do link abaixo:

[Ambiente React Native (Android/iOS)](https://github.com/Rocketseat/ambiente-react-native)

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
evoTemplateApp
├── app/
│   ├── assets/
│   │   └── fonts/
|   |   └── images/
|   ├── components/
|   |   └── Button/
|   |   |   └── index.js
|   |   |   └── styles.js
|   |   └── Icons/
|   |   |   └── index.js
│   │   └── StatusBar/
│   │   │   └── index.js
|   |   └── Text/
|   |   |   └── index.js
|   |   └── Toast/
|   |   |   └── index.js
│   │   └── Welcome/
│   │   │   └── index.js
│   │   │   └── styles.js
│   └── index.js
|   ├── constants/
|   |   └── data_types.js
|   |   └── PAGES.
|   |   └── ToastSettings.js
|   |   └── index.js
│   ├── helpers/
│   │   └── index.js
│   │   └── dataFormat.js
|   |   └── getKeyByValue.js
|   |   └── normalize.js
|   |   └── prefixInTypes.js
|   ├── modules/
|   |   ├── Information/
|   |   |   └── actions.js
|   |   |   └── index.js
|   |   |   └── reducers.js
|   |   |   └── saga.js
|   |   |   └── types.js
|   ├── pages/
|   |   ├── Componentes/
|   |   |   └── index.js
|   |   |   └── styles.js
|   |   |   └── view.js
|   |   ├── Details/
|   |   |   └── index.js
|   |   |   └── styles.js
|   |   |   └── view.js
|   |   ├── Home/
|   |   |   └── index.js
|   |   |   └── styles.js
|   |   |   └── view.js
|   ├── routers/
|   |   └── index.js
|   ├── services/
|   |   └── Api.js
|   |   └── ErrorResponseHandler.js
|   |   └── index.js
|   |   └── MessageResponseHandler.js
|   ├── store/
|   |   └── index.js
|   |   └── middlewares.js
|   |   └── reducers.js
|   |   └── sagas.js
│   ├── styles/
│   │   └── images.js
│   │   └── index.js
│   │   └── theme.js
│   └── App.js
├── babel.config.js
├── dependencies.json
├── index.js
├── metro.config.js
├── package.json
├── react-native.config.js
└── README.md
```

Serão explicados os arquivos e diretórios na seção de [Edição](#edição).

### Instalação

1. Para instalar e utilizar esse template o processo é bem simples, basta criar um projeto novo utilizando o comando:

```sh
react-native init AwesomeExample --template evotemplateapp
```

2. Depois do projeto criado você pode deletar o arquivo `App.js` da raiz, pois o arquivo `index.js` agora aponta para a pasta **app**.

Com isso o projeto será criado com todas as dependências do template devidamente instaladas e linkadas, tal como os arquivos de configuração que são copiados para o projeto.

---

#### Passo Adicional no Android

Para que os gestos sejam habilitados no Android é necessário um passo a mais, que é bem simples, abra o arquivo `android/app/src/main/java/<pacote_do_projeto>/MainActivity.java`, e comece importando os pacotes como abaixo:

```java
// ...
import com.facebook.react.ReactActivity;
// Importações adicionadas
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
```

Feito a importação vamos criar um método novo, logo abaixo do `getMainComponentName()`, ficando:

```java
public class MainActivity extends ReactActivity {
  @Override
  protected String getMainComponentName() { ... }
  // Método adicionado
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
       return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}
```

criado o método, vamos para `android/app/build.gradle`, adicionando na segunda linha:

```java
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

---

### Edição

Nesta seção haverão instruções caso você queira editar o template, explicando para que os diretórios são utilizados e também os arquivos de configuração.

- **app** - Diretório contendo todos os arquivos da aplicação, é criado um diretório `app` para que o código da aplicação possa ser isolado em um diretório e facilmente portado para outros projetos, se necessário;

- **assets** - Diretório para armazenar imagens, fonts ou qualquer mídia em geral que possam ser utilizadas na aplicação;

- **pages** - Diretório onde ficam as páginas (telas) da aplicação, como forma de padronização e boas práticas toda página fica dentro de um diretório com seu nome;

- **components** - Diretório onde ficam os componentes utilizados por toda a aplicação, podendo ser deletado caso não seja utilizado;

- **index.js** - Arquivo com toda a lógica da página, tal como os componentes visuais a serem renderizados;

- **services** - Diretório onde serão criados os arquivos relacionados a serviços utilizados na aplicação, por exemplo, requisições HTTP, autenticação com Firebase ou qualquer outro serviço que for utilizado;

- **api.js** - Arquivo com a configuração da biblioteca Axios para envio de requisições HTTP, o endereço que vem configurado de exemplo pode ser modificado;

- **routers** - Diretório onde as configurações de navegação da aplicação, nele são criados os Navigators disponibilizados na biblioteca React Navigation;

- **dependencies.json** - Arquivo contendo apenas um objeto com a lista de dependências que devem ser instaladas na aplicação, vale lembrar que as dependências que já vem por padrão no projeto como `react` e `react-native` não precisam estar nessa lista, a menos que você queira gerenciar a versão dessas libs;

- **index.js** - Arquivo raiz da aplicação, também chamado de _Entry Point_, é o primeiro arquivo chamado no momento do build e execução da aplicação, nele é chamado o arquivo `src/index.js` que por sua vez chama as rotas da aplicação;

- **package.json** - Diferente dos projetos comuns, esse arquivo tem as configurações necessárias para a publicação do Template no NPM, para saber mais sobre isso veja a seção abaixo.
