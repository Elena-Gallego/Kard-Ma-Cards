import React from 'react';
import '../stylesheets/layout/_main.scss';

class Main extends React.Component {
  render() {
    return (
      <main class="container">
        <div class="container__logoBox"></div>
        <h1 class="container__title">Crea tu tarjeta de visita</h1>
        <p class="container__subtitle">
          <span> Crea mejores contactos profesionales de</span>
          <span>forma fácil y cómoda</span>
        </p>
        <div class="container__articlesBox">
          <article class="step1 steps-js">
            <i class="far fa-object-ungroup"></i>
            <p class="articleTitle">1.diseña</p>
          </article>
          <article class="step2 steps-js">
            <i class="far fa-keyboard"></i>
            <p class="articleTitle">2.rellena</p>
          </article>
          <article class="step3 steps-js">
            <i class="fas fa-share-alt"></i>
            <p class="articleTitle">3.comparte</p>
          </article>
        </div>
        <a class="container__btn container__btn-js" href="./profilecards.html" title="go to profile card maker">
          comenzar
        </a>
      </main>
    );
  }
}
export default Main;
