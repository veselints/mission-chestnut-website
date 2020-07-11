<template>
  <section id="middle">
    <div class="headline cmsms_color_scheme_default">
      <div class="headline_outer">
        <div class="headline_color"></div>
        <div class="headline_inner align_left">
          <div class="headline_aligner"></div>
          <div class="headline_text">
            <h1 class="entry-title">{{title}}</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="cmsms_breadcrumbs">
      <div class="cmsms_breadcrumbs_inner align_left">
        <span>Навигация:</span>
        <a href="/index.html" class="cms_home">Начало</a>
        <span class="breadcrumbs_sep"> / </span>
        <span>{{location}}</span>
      </div>
    </div>

    <div class="middle_inner">
      <!-- Content goes here -->
    </div>

  </section>
</template>

<script>
export default {
  name: 'MiddleInner',
  components: {
    data() {
      return {
        location: "Контакти",
        title: "Контакти"
      }
    }
  }
}
</script>

<style>

</style>