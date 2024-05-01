import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import Header from './Header';
import Footer from './Footer';
import './Cat.css';

function CatPage() {
  function notifySelectedCat(catName) {
    alert("Вы выбрали котика: " + catName);
  }

  function selectCat(catName, event) {
    notifySelectedCat(catName);
    event.preventDefault();
  }

  useEffect(() => {
    var selectButtons = document.querySelectorAll('.plot');

    selectButtons.forEach(function (button) {
      button.addEventListener('click', function (event) {
        var catName = this.parentNode.querySelector('name').textContent;
        selectCat(catName, event);
      });
    });
  }, []);

  return (
    <div>
      <Header/>
      <h1 id="main">Добро пожаловать, какой вы сегодня котик?</h1>

      <div className="minip">
        <div className="mg">
          <div className="clr"></div>
          <div className="group">
            <span>Сонный</span>
          </div>
        </div>
        <div className="av"
             style={{backgroundImage: "url('https://sun9-47.userapi.com/impg/6qwkxoe8jmG4u_2aVu__5PiHqU_f-SQo8i3tew/_i17VbsoJ4Y.jpg?size=1000x980&quality=96&sign=ad89c0f1dc17017dcdc4adb71aa93a0e&type=album')"}}>
        </div>
        <div className="info">
          <name>Котик №1</name>
          <deets>
            Тише будь котик спит
          </deets>
        </div>
        <a className="plot" title="Выбрать" href="/cat.html">
          Выбрать
        </a>
      </div>

      <div className="minip">
        <div className="mg">
          <div className="clr"></div>
          <div className="group">
            <span>Влюбленный</span>
          </div>
        </div>
        <div className="av"
             style={{backgroundImage: "url('https://sun9-4.userapi.com/impg/eWSv4leZC52caZ6xxGVdHDpO5gEyJ6Cbb5uf5Q/T3MeU10M5Fc.jpg?size=563x554&quality=96&sign=25570bd8c9032b8c4e51a317233395e2&type=album')"}}>
        </div>
        <div className="info">
          <name>Котик №2</name>
          <deets>
            Кусь любовный
          </deets>
        </div>
        <a className="plot" title="Выбрать" href="/cat.html">
          Выбрать
        </a>
      </div>

      <div className="minip">
        <div className="mg">
          <div className="clr"></div>
          <div className="group">
            <span>депрессивный</span>
          </div>
        </div>
        <div className="av"
             style={{backgroundImage: "url('https://sun9-4.userapi.com/impg/bpHxSn_wBEOg5K9qQ0hUlSkbiDJXJFPPgPHVXA/0Kb-ULwb30g.jpg?size=750x747&quality=96&sign=ef1594353e6e357e66c4ba75eeec0dd4&type=album')"}}>
        </div>
        <div className="info">
          <name>Котик №3</name>
          <deets>
            Качаю де прес сию
          </deets>
        </div>
        <a className="plot" title="Выбрать" href="/cat.html">
          Выбрать
        </a>
      </div>

      <main>
        <h2 id="about">О нас</h2>
        <center>
          <p>Привет! Если тебе грустно, то ты пришел по адресу. У нас много котиков, чтобы тебя улыбнуть<br/>
            Мы верим в силу позитива и радости, которые приносят котики. На нашем сайте ты найдешь самых разных
            котиков - от веселых и игривых до серьезных и задумчивых. Мы постоянно обновляем нашу коллекцию,
            чтобы каждый мог найти котика по своему вкусу.<br/>
            Не забывай заглядывать к нам, чтобы получать дозу позитива и умиротворения от наших милых
            пушистиков. Мы рады приветствовать тебя в нашем котиковом мире!</p>
        </center>

        <h2 id="cats">Смешные котики</h2>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400&display=swap" rel="stylesheet"/>

        <div className="gallery">
          <div className="gallery__column">
            <a
              href="https://sun9-32.userapi.com/impg/MuPtyVUluKbEQSi-LOSX-yWHPgWadhqYXul25g/3ttTIu2P0qo.jpg?size=604x546&quality=96&sign=fd48796b4155558c01f658db2394f59d&type=album"
              target="_blank" className="gallery__link">
              <figure className="gallery__thumb">
                <img
                  src="https://sun9-32.userapi.com/impg/MuPtyVUluKbEQSi-LOSX-yWHPgWadhqYXul25g/3ttTIu2P0qo.jpg?size=604x546&quality=96&sign=fd48796b4155558c01f658db2394f59d&type=album"
                  alt="Portrait by Jessica Felicio"
                  className="gallery__image gallery__image-small"/>
                <figcaption className="gallery__caption"/>
              </figure>
            </a>

            <a
              href="https://sun9-77.userapi.com/impg/-RkQC2ZAgbqx5Y2_DQoKdBflDbwlH9kIrHsMAw/q5BJUjxdVhM.jpg?size=719x719&quality=96&sign=5370e24835e7f9cc3a4894e4d50173d9&type=album"
              target="_blank" className="gallery__link">
              <figure className="gallery__thumb">
                <img
                  src="https://sun9-77.userapi.com/impg/-RkQC2ZAgbqx5Y2_DQoKdBflDbwlH9kIrHsMAw/q5BJUjxdVhM.jpg?size=719x719&quality=96&sign=5370e24835e7f9cc3a4894e4d50173d9&type=album"
                  className="gallery__image gallery__image-small"/>
                <figcaption className="gallery__caption"/>
              </figure>
            </a>

            <a
              href="https://sun9-55.userapi.com/impg/Q7YgN0TXJVhqLOUfFijBsP6DXsSbSm-JOGhk_w/b9rqYKhJmc8.jpg?size=949x867&quality=96&sign=bf215bd0842fee20e274d5286c9e7985&type=album/300x300"
              target="_blank" className="gallery__link">
              <figure className="gallery__thumb">
                <img
                  src="https://sun9-55.userapi.com/impg/Q7YgN0TXJVhqLOUfFijBsP6DXsSbSm-JOGhk_w/b9rqYKhJmc8.jpg?size=949x867&quality=96&sign=bf215bd0842fee20e274d5286c9e7985&type=album/300x300"
                  className="gallery__image gallery__image-small"/>
                <figcaption className="gallery__caption"></figcaption>
              </figure>
            </a>
          </div>

          <div className="gallery__column">
            <a
              href="https://sun9-12.userapi.com/impg/RpM9QW9_wrp9aR_fw7ASlslbIM9-ccEpK8vZCg/oLobj8ksb0k.jpg?size=540x540&quality=96&sign=5423160186ad28f96f85ef4fd765eea1&type=album"
              target="_blank" className="gallery__link">
              <figure className="gallery__thumb">
                <img
                  src="https://sun9-12.userapi.com/impg/RpM9QW9_wrp9aR_fw7ASlslbIM9-ccEpK8vZCg/oLobj8ksb0k.jpg?size=540x540&quality=96&sign=5423160186ad28f96f85ef4fd765eea1&type=album/300x300"
                  alt="Portrait by Hikiapp"
                  className="gallery__image gallery__image-small"/>
                <figcaption className="gallery__caption"/>
              </figure>
            </a>

            <a
              href="https://sun9-53.userapi.com/impg/o3NMM9-vOWLqE_fWERJ4NVqX_x3InQkciCo19A/1ul31y-uQso.jpg?size=1081x1080&quality=96&sign=3a48906abc6a068ec3af444f402cbec5&type=album"
              target="_blank" className="gallery__link">
              <figure className="gallery__thumb">
                <img
                  src="https://sun9-53.userapi.com/impg/o3NMM9-vOWLqE_fWERJ4NVqX_x3InQkciCo19A/1ul31y-uQso.jpg?size=1081x1080&quality=96&sign=3a48906abc6a068ec3af444f402cbec5&type=album"
                  alt="Portrait by Ivana Cajina"
                  className="gallery__image gallery__image-small"/>
                <figcaption className="gallery__caption"></figcaption>
              </figure>
            </a>

            <a
              href="https://sun9-55.userapi.com/impg/Vq21ivrPa_Htso8toIDWt1Uen2cpg0ZyUeQc4g/Qcg5Fc4Ba1c.jpg?size=563x440&quality=96&sign=0cf8012b711f3f550ad9cde970c9e74c&type=album"
              target="_blank" className="gallery__link">
              <figure className="gallery__thumb">
                <img
                  src="https://sun9-55.userapi.com/impg/Vq21ivrPa_Htso8toIDWt1Uen2cpg0ZyUeQc4g/Qcg5Fc4Ba1c.jpg?size=563x440&quality=96&sign=0cf8012b711f3f550ad9cde970c9e74c&type=album/300x500"
                  alt="Portrait by Jeffery Erhunse"
                  className="gallery__image gallery__image-small"/>
                <figcaption className="gallery__caption"></figcaption>
              </figure>
            </a>
          </div>

          <div className="gallery__column">
            <a
              href="https://sun9-68.userapi.com/impg/I9d6bEjWGUBMknK8xO3_X9VVcwn8bcw9zWWgdQ/UH2oVad3Hbo.jpg?size=928x933&quality=96&sign=89c0b69f59848fb42b337c0e24e3dcac&type=album"
              target="_blank" className="gallery__link">
              <figure className="gallery__thumb">
                <img
                  src="https://sun9-68.userapi.com/impg/I9d6bEjWGUBMknK8xO3_X9VVcwn8bcw9zWWgdQ/UH2oVad3Hbo.jpg?size=928x933&quality=96&sign=89c0b69f59848fb42b337c0e24e3dcac&type=album"
                  alt="Portrait by Jessica Felicio"
                  className="gallery__image gallery__image-small"/>
                <figcaption className="gallery__caption"/>
              </figure>
            </a>

            <a
              href="https://sun9-68.userapi.com/impg/wN3rdzaZNM302j2QwcXDN-gTsapS_t0wiVQA2Q/1iZvNtEF_Ko.jpg?size=972x1080&quality=96&sign=e395ad600ad01ada2e6ee1fab7d1007d&type=album"
              target="_blank" className="gallery__link">
              <figure className="gallery__thumb">
                <img
                  src="https://sun9-68.userapi.com/impg/wN3rdzaZNM302j2QwcXDN-gTsapS_t0wiVQA2Q/1iZvNtEF_Ko.jpg?size=972x1080&quality=96&sign=e395ad600ad01ada2e6ee1fab7d1007d&type=album"
                  className="gallery__image gallery__image-small"/>
                <figcaption className="gallery__caption"/>
              </figure>
            </a>

            <a
              href="https://sun9-47.userapi.com/impg/t4Zg3GumPuCpN-mSoOv-KXOt1htEaLfZEIVluA/qSLyRpO-mQ4.jpg?size=839x911&quality=96&sign=56cb355bcede5746bb4894cad4dbd664&type=album"
              target="_blank" className="gallery__link">
              <figure className="gallery__thumb">
                <img
                  src="https://sun9-47.userapi.com/impg/t4Zg3GumPuCpN-mSoOv-KXOt1htEaLfZEIVluA/qSLyRpO-mQ4.jpg?size=839x911&quality=96&sign=56cb355bcede5746bb4894cad4dbd664&type=album"
                  className="gallery__image gallery__image-small"/>
                <figcaption className="gallery__caption"></figcaption>
              </figure>
            </a>
          </div>

          <div className="gallery__column">
            <a
              href="https://sun9-68.userapi.com/impg/crDuIhIkBwQ5_mVbD0hjWFr1uCLWBip2LUQBIw/jZVyaB9ZUmE.jpg?size=525x525&quality=96&sign=87ced22a123b3a7c91bff3b67e5b93c9&type=album"
              target="_blank" className="gallery__link">
              <figure className="gallery__thumb">
                <img
                  src="https://sun9-68.userapi.com/impg/crDuIhIkBwQ5_mVbD0hjWFr1uCLWBip2LUQBIw/jZVyaB9ZUmE.jpg?size=525x525&quality=96&sign=87ced22a123b3a7c91bff3b67e5b93c9&type=album"
                  alt="Portrait by Jessica Felicio"
                  className="gallery__image gallery__image-small"/>
                <figcaption className="gallery__caption"/>
              </figure>
            </a>

            <a
              href="https://sun9-51.userapi.com/impg/BHALoYIpTV_pA-GL35oysMWdRabjQ1WPToBhQw/b0CvTYbMiUo.jpg?size=848x768&quality=96&sign=0b6accbaddea685a943d25c7fd15aa72&type=album"
              target="_blank" className="gallery__link">
              <figure className="gallery__thumb">
                <img
                  src="https://sun9-51.userapi.com/impg/BHALoYIpTV_pA-GL35oysMWdRabjQ1WPToBhQw/b0CvTYbMiUo.jpg?size=848x768&quality=96&sign=0b6accbaddea685a943d25c7fd15aa72&type=album"
                  className="gallery__image gallery__image-small"/>
                <figcaption className="gallery__caption"/>
              </figure>
            </a>

            <a
              href="https://sun9-10.userapi.com/impg/mVcE5AlYLxHFEoyDPXyaFED0WqgHSIaQfcgkNg/60boE9NJ0p4.jpg?size=485x472&quality=96&sign=a67b89c7dbff53a9446d193d1504b864&type=album"
              target="_blank" className="gallery__link">
              <figure className="gallery__thumb">
                <img
                  src="https://sun9-10.userapi.com/impg/mVcE5AlYLxHFEoyDPXyaFED0WqgHSIaQfcgkNg/60boE9NJ0p4.jpg?size=485x472&quality=96&sign=a67b89c7dbff53a9446d193d1504b864&type=album"
                  className="gallery__image gallery__image-small"/>
                <figcaption className="gallery__caption"></figcaption>
              </figure>
            </a>
          </div>
        </div>
      </main>
      <h2 id="contacts">Контакты</h2>
      <p>Свяжитесь с нами по адресу: KotikMemes@mail.ru<br/>
        или по номеру: +7(123)-456-78-90</p>
      <ContactForm/>
      <br/><br/><br/>
      <Footer/>
    </div>
  );
}

export default CatPage;
