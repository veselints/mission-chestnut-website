<template>
    <div id="main">
      <header id="header">
        <div class="header_mid" data-height="120">
          <div class="header_mid_outer">
            <div class="header_mid_inner">

              <div class="logo_wrap">
                <router-link to="/home" title="Мисия Кестен" class="logo">
                  <img src="/_content/images/2014/10/mission-chestnut-logo%402x.png" alt="Мисия Кестен" />
                </router-link>
              </div>

              <nav role="navigation">
                <div class="menu-head-menu-bg-container">
                  <ul id="navigation" class="navigation">
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                      <router-link to="/our-mission">
                        <span class="nav_bg_clr"></span>
                        <span>Мисия</span>
                      </router-link>
                      <ul class="sub-menu">
                        <li class="menu-item menu-item-type-post_type menu-item-object-page">
                          <router-link to="/moths">
                            <span>Листоминиращ молец</span>
                          </router-link>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page">
                          <router-link to="/leafts">
                            <span>Събиране на шума</span>
                          </router-link>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page">
                          <router-link to="/birds">
                            <span>Къщички за синигери</span>
                          </router-link>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page">
                          <router-link to="/traps">
                            <span>Феромонни капани</span>
                          </router-link>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <router-link to="/results">
                        <span class="nav_bg_clr"></span>
                        <span>Резултати</span>
                      </router-link>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <router-link to="/news">
                        <span class="nav_bg_clr"></span>
                        <span>Новини</span>
                      </router-link>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <router-link to="/about-us">
                        <span class="nav_bg_clr"></span>
                        <span>За нас</span>
                      </router-link>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item">
                      <router-link to="/contacts">
                        <span class="nav_bg_clr"></span>
                        <span>Контакти</span>
                      </router-link>
                    </li>
                    <li id="menu-item-3826"
                      class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item">
                      <a target="_blank" href="http://eeagrants.org/">
                        <span class="nav_bg_clr" style="background-color:#ffffff;"></span>
                        <span>eeagrants.org</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="cl"></div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <!-- Content goes here -->
      <!-- <div id="app"></div> -->
      <router-view></router-view>
      <!-- Content goes here -->

    </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/home', component: Home }
]

const router = new VueRouter({
  routes
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')

// Now the app has started!

// export default {
//   name: 'App',
//   components: {
//     Middle
//   }
// }
</script>

<style>

</style>
