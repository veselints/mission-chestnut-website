<template>
    <div id="main">

      <header id="header">
        <div class="header_mid" data-height="120">
          <div class="header_mid_outer">
            <div class="header_mid_inner">

              <div class="logo_wrap">
                <router-link to="/home" title="Мисия Кестен" class="logo">
                  <img src="images/mission-chestnut-logo%402x.png" alt="Мисия Кестен" />
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
                          <router-link to="/leafs">
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
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <router-link to="/contacts">
                        <span class="nav_bg_clr"></span>
                        <span>Контакти</span>
                      </router-link>
                    </li>
                    <li id="menu-item-3826"
                      class="menu-item menu-item-type-custom menu-item-object-custom">
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

      <section id="middle">
        <div class="headline cmsms_color_scheme_default">
          <div class="headline_outer">
            <div class="headline_color"></div>
            <div class="headline_inner align_left">
              <div class="headline_aligner"></div>
              <div class="headline_text">
                <h1 class="entry-title">{{location}}</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="cmsms_breadcrumbs">
          <div class="cmsms_breadcrumbs_inner align_left">
            <router-link to="/home" class="cms_home">Начало</router-link>
            <span class="breadcrumbs_sep"> / </span>
            <router-link v-if="location === 'Капани за молци' || location === 'Къщиски за птици' || location === 'Събиране на шума' || location === 'Листоминиращ молец'" to="/our-mission" class="cms_home">Нашата мисия</router-link>
            <span v-if="location === 'Капани за молци' || location === 'Къщиски за птици' || location === 'Събиране на шума' || location === 'Листоминиращ молец'" class="breadcrumbs_sep"> / </span>
            <span>{{location}}</span>
          </div>
        </div>

          <!-- Content goes here -->
          <router-view></router-view>
          <!-- Content goes here -->

      </section>

    </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      location: ""
    }
  },
  mounted() {
    let that = this;

    that.$router.afterEach((to) => {
      that.location = to.name;
    });

    that.location = this.$route.name;
  }
}
</script>

<style>

</style>
