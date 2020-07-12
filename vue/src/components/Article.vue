<template>
    <section class="content_wrap r_sidebar">
        <div class="content entry" role="main">
            <div class="blog opened-article">
                <article class="post type-post status-publish format-standard has-post-thumbnail hentry category-archive-highlights category-archive-news">
                    <header class="cmsms_post_header entry-header">
                        <span class="cmsms_post_format_img cmsms-icon-desktop-3"></span>
                        <h1 class="cmsms_post_title entry-title">{{title}}</h1>
                    </header>
                    <div class="cmsms_post_content entry-content">
                        <p v-for="par in text" v-bind:key="par" v-html="par"></p>
                        <div class="ilightbox_clear"></div>
                        <!-- .ilightbox_clear -->
                        <div id="ilightbox_5" class="ilightbox_wrap ilightbox_gallery" data-options="{attr:'source'}">
                            <ul>
                                <li v-for="photo in photos" v-bind:key="photo" style="width: 29.7%; float: left">
                                    <a :href="photo" :source="'/photos/' + photo" data-options="thumbnail:'`/photos/` + photo.replace(`.jpg`, `-200x200.jpg`)'">
                                        <img :src="'/photos/' + photo.replace('.jpg', '-200x200.jpg')">
                                    </a>
                                </li>
                            </ul>
                            <div class="ilightbox_clear"></div>
                        </div>
                        <div class="cl"></div>
                    </div>
                    <footer class="cmsms_post_footer entry-meta">
                        <div class="cmsms_post_meta_info">
                            <abbr class="published cmsms_post_date cmsms-icon-calendar-8" 
                                :title="date" v-text="getDate(date)"></abbr>
                        </div>
                    </footer>
                </article>
            </div>
        </div>
    </section>
</template>

<script>
import * as news from "../assets/news.json";

export default {
    name: 'Article',
    data() {
        return {
            date: null,
            title: "",
            text: [],
            photos: []
        }
    },
    methods: {
        getDate() {
            let date = new Date(this.date);

            return date.getDate() + '/' + date.getMonth() + '/ ' + date.getFullYear();
        },
    },
    mounted() {
        let id = Number(this.$route.params.id);
        let article = news.default.find((item) => item.id === id);

        this.title = article.title;
        this.date = article.date;
        this.text = article.text;
        this.photos = article.photos;
    }
}
</script>

<style>

</style>