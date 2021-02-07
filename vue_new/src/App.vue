<template>
    <div>
      <header>
        <fixed-header :threshold="40">
          <div class="section section-navigation navbar">
            <nav class="content">
              <div class="main-nav">
                <router-link to="/home" title="Мисия Кестен" class="logo-link">
                  <img src="images/mission-chestnut-logo%402x.png" alt="Мисия Кестен" class="logo" />
                </router-link>
                <router-link to="/our-mission">
                  <span>Мисия</span>
                </router-link>
                <router-link to="/results">
                  <span>Резултати</span>
                </router-link>
                <router-link to="/news">
                  <span>Новини</span>
                </router-link>
                <router-link to="/about-us">
                  <span>За нас</span>
                </router-link>
                <a target="_blank" href="http://eeagrants.org/" class="logo-link">
                  <img src="images/eea-large-logo-e1413917536721.png" alt="EEA Grants" class="logo" />
                </a>
              </div>
              <ul class="mission-nav">
                <li>
                  <router-link to="/moths">
                    <span>Листоминиращ молец</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/leafs">
                    <span>Събиране на шума</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/birds">
                    <span>Къщички за синигери</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/traps">
                    <span>Феромонни капани</span>
                  </router-link>
                </li>
              </ul>
            </nav>
          </div>
        </fixed-header>

        <div v-bind:class="{ low: location !== '' }" class="section section-banner">
          <div class="content">
              <h1>{{location}}</h1>
          </div>
        </div>
      </header>

      <router-view></router-view>
      
    </div>
</template>

<script>
  import FixedHeader from 'vue-fixed-header'

  export default {
    name: 'App',
    components: {
      FixedHeader
    },
    data() {
      return {
        location: ""
      }
    },
    mounted() {
      let that = this;

      that.$router.afterEach((to) => {
        that.location = to.name;
        window.scrollTo(0, 0);
      });

      that.location = this.$route.name;
    }
  }
</script>

<style scoped>
  .navbar.vue-fixed-header--isFixed {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    box-shadow: 3px 0 30px;
  }

  .navbar.vue-fixed-header--isFixed .logo-link {
    height: 80px;
  }

  .section-navigation {
    background-color: #fff;
  }


    .logo-link {
      height: 100px;
    }
    .logo {
      height: 100%;
    }

    .section-banner {
        background-color: #8ba021;
        color: #fff;
    }

    .main-nav,
    .mission-nav {
      display: flex;
      justify-content: space-evenly;
      align-items: flex-end;
    }

    .mission-nav {
      list-style: none;
      display: none;
    }
</style>
