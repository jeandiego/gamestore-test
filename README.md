<h1 align="center">
  <img alt="GamePlay" title="Plant Manager" src=".github/logo.png" />
</h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=E51C44&labelColor=0A1033">

 <img src="https://img.shields.io/static/v1?label=NLW&message=06&color=E51C44&labelColor=0A1033" alt="NLW 06" />
</p>


![cover](.github/cover.png?style=flat)


## 💻 Projeto
Aplicativo de teste para processo seletivo Supera Tecnologia. Uma loja virtual de jogos eletrônicos. Visualize produtos, filtre-os e adicione ao carrinho de compras.


## Features 


-   [ ] Permite adicionar um produto ao carrinho;
-   [ ] Permite filtrar os produtos por popularidade, maior preço, menor preço e ordem alfabética (A-Z e Z-A);
-   [ ] Calcula o frete de acordo com as regras de negócio: Cada produto é adicionado R$ 10,00 frete. Para compras acima de R$ 250,00, o frete é grátis.
-   [ ] Permite adicionar, diminuir e remover produtos diretamente de dentro do carrinho.


## ✨ Tecnologias

-   [ ] React Native
-   [ ] Javascript
-   [ ] Json Server
-   [ ] Redux
-   [ ] Reactotron
-   [ ] React Native Svg e Svg Transform
-   [ ] Axios
-   [ ] React Navigation Stack
-   [ ] React Native Gesture Handler

## 🔖 Layout

O layout do aplicativo foi baseado em uma versão do Product Designer Milliarta, cujo link é https://dribbble.com/shots/15507510-Fashion-Store-Mobile-Appç

- [ ] Perfil de milliarta => https://dribbble.com/milliarta



## Executando o projeto

Utilize o **yarn** ou o **npm install** para instalar as dependências do projeto.
Em seguida, rode os seguintes comandos para buildar o projeto em simulador Android

```cl
yarn android
yarn start
```

Para rodar o Json Server e consumir a API, siga as etapas abaixo:

```cl
Em ./src/services/api.js -> Altere o SEU_ENDEREÇO_IP em  "baseURL: 'http://SEU_ENDEREÇO_IP:3333'" para o endereço de IP da sua máquina/rede.
```
Após alterar o IP, rode o comando no terminal

```cl
 json-server ./src/services/products.json --host SEU_ENDEREÇO_IP --port 3333
```


Lembre-se de alterar o baseURL para o endereço de IP da sua rede. Em seguida, rode o json-server para rodar a API.

<br />

<div align="center">
  <small>Desenvolvido por Jean Diego Dal'Santo - Junho/2021</small>
</div>
