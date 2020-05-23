<template>
  <section class="about mt-100">
    <div class="container">
      <div class="about-content">
        <div class="about-content__title">
          We are all gamers
        </div>
        <div class="about-content__text">
          <p>Каждый день миллиарды людей просыпаются, едят и запускают игру — это часть их повседневной жизни. Неважно, кто вы — профи, играющий в тренировочную игру перед крупным соревнованием, стример, настраивающий трансляцию для легиона своих фанатов, игрок по сети с друзьями или пассажир, ежедневно убивающий время в поезде, — мы все геймеры.</p>
          <p>В HyperX мы это понимаем, потому что мы вместе с вами. Мы знаем, что неважно, во что мы играем или как мы играем, мы все геймеры. Наши продукты — сверхудобные гарнитуры Cloud, прочные и чувствительные клавиатуры Alloy и мыши Pulsefire, продукты ChargePlay для зарядки оборудования, а также наши высокопроизводительные SSD и ОЗУ — созданы для того, чтобы обеспечить вам лучшие игровые впечатления. Все разработано, создано и точно настроено с учетом потребностей геймера.</p>
          <p>Неважно, играете вы на приставке или ПК, в свободное время или на профессиональном уровне, независимо от убеждений, цвета кожи или культуры, мы все геймеры, и продукты HyperX всегда готовы к игре. Увидимся в очереди, #HyperXFamily.</p>
        </div>
      </div>
    </div>
    <div class="about-teams">
      <div class="container">
        <div class="about-teams__title">
          RealLook shop Teams
        </div>
        <div class="about-teams__text">
          HyperX поддерживает лучшие геймерские команды в мире. См. актуальные новости от мастеров гейминга.
        </div>
        <ul class="list">
          <li class="list__item">
            <img src="https://media.kingston.com/hyperx/logos/hx-logos-redcanids.png" alt="">
          </li>
          <li class="list__item">
            <img src="https://media.kingston.com/hyperx/logos/hx-logos-pandaglobal.png" alt="">
          </li>
          <li class="list__item">
            <img src="https://media.kingston.com/hyperx/logos/hx-logos-furia.png" alt="">
          </li>
          <li class="list__item">
            <img src="https://media.kingston.com/hyperx/logos/hx-logos-excel.png" alt="">
          </li>
          <li class="list__item">
            <img src="https://media.kingston.com/hyperx/logos/hx-logos-drx.png" alt="">
          </li>
          <li class="list__item">
            <img src="https://media.kingston.com/hyperx/logos/hx-logos-dignitas.png" alt="">
          </li>
          <li class="list__item">
            <img src="https://media.kingston.com/hyperx/logos/hx-logos-detonation-gaming.png" alt="">
          </li>
          <li class="list__item">
            <img src="https://media.kingston.com/hyperx/logos/hx-logos-bc-wordmark.png" alt="">
          </li>
          <li class="list__item">
            <img src="https://media.kingston.com/hyperx/logos/logo-entity-gaming.png" alt="">
          </li>
          <li class="list__item">
            <img src="https://media.kingston.com/hyperx/logos/cn-v5-logo.png" alt="">
          </li>
          <li class="list__item">
            <img src="https://media.kingston.com/hyperx/logos/lfy.png" alt="">
          </li>
          <li class="list__item">
            <img src="https://media.kingston.com/hyperx/logos/au-dire-wolves-logo.png" alt="">
          </li>
          <li class="list__item">
            <img src="https://media.kingston.com/hyperx/logos/ph-pacific-macta-infirma-logo.png" alt="">
          </li>
          <li class="list__item">
            <img src="https://media.kingston.com/hyperx/logos/team-alsen.png" alt="">
          </li>
          <li class="list__item">
            <img src="https://media.kingston.com/hyperx/logos/team-cloud9.png" alt="">
          </li>
          <li class="list__item">
            <img src="https://media.kingston.com/hyperx/logos/hx-logos-isurus.png" alt="">
          </li>
          <li class="list__item">
            <img src="https://media.kingston.com/hyperx/logos/LGD-LOL.png" alt="">
          </li>
          <li class="list__item">
            <img src="https://media.kingston.com/hyperx/logos/team-recca-esports.png" alt="">
          </li>
          <li class="list__item">
            <img src="https://media.kingston.com/hyperx/logos/silent-gaming-logo.png" alt="">
          </li>
          <li class="list__item">
            <img src="https://media.kingston.com/hyperx/logos/team-liquid.png" alt="">
          </li>
          <li class="list__item">
            <img src="https://media.kingston.com/hyperx/logos/tyloo.png" alt="">
          </li>
          <li class="list__item">
            <img src="https://media.kingston.com/hyperx/logos/team-VGgaming.png" alt="">
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <div class="contacts">
        <div class="contacts-block title">
          <div class="left">
            Контактная информация
          </div>
          <div class="right">
            Телефон / E-mail Address
          </div>
        </div>
        <ContactList :contacts="contacts" />
      </div>
    </div>
  </section>
</template>

<script>
import ContactList from '../components/ContactList'
export default {
  name: 'About',
  components: { ContactList },
  async asyncData ({ $axios }) {
    let contacts = []
    try {
      contacts = await $axios.$get('/contacts')
    } catch (e) {
    }
    return { contacts }
  }
}
</script>

<style scoped lang="scss">
.container {
}
.about-content{
  &__title{
    font-size: 40px;
    font-weight: 700;
    color: #000000;
    padding-bottom: 10px;
    text-transform: uppercase;
  }
  &__text {
    font-size: 18px;
    font-weight: 500;
    opacity: .9;
    color: #8b8b8b;
    padding-bottom: 20px;
  }
}
.about-teams {
  background: url("/img/teams-bg.jpg") no-repeat center;
  background-size: cover;
  text-align: center;
  &__title {
    padding-top: 10px;
    font-size: 40px;
    font-weight: 700;
    color: #ffffff;
  }
  &__text {
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
    padding-bottom: 40px;
  }
}
.list{
  margin: 0;
  padding: 0 0 30px 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  &__item {
    padding: 10px;
  }
}
.contacts {
  margin: 10px 0;
  width: 100%;
  border: 1px solid #cacaca;
  &-block {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #cacaca;
    font-size: 16px;
    color: #000000;
    font-weight: 700;
    padding: 10px 0;
    &:last-child {
      border-bottom: none;
    }
    & .left {
      padding-left: 10px;
      width: 50%;
    }
    & .right {
      width: 50%;
      opacity: .7;
    }
  }
}
.title {
  font-weight: 800;
  font-size: 26px;
  & .right {
    opacity: 1;
  }
}
</style>
