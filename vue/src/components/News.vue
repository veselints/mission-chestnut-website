<template>
  <div class="middle_inner">
    <section class="content_wrap r_sidebar">
        <div class="content entry" role="main">
            <div id="cmsms_row_5e3286f516389" class="cmsms_row cmsms_color_scheme_default">
                <div class="cmsms_row_outer_parent">
                    <div class="cmsms_row_outer">
                        <div class="cmsms_row_inner">
                            <div class="cmsms_row_margin">
                                <div class="cmsms_column one_first">
                                    <div class="cmsms_wrap_blog entry-summary" id="blog_5e3286f5165a6" data-meta="date,categories,author,more">
                                        <div class="blog standard">
                                            <article v-for="post in allNews" :key="post.id"
                                                    class="post type-post status-publish format-standard has-post-thumbnail hentry category-archive-highlights category-archive-news category-archive-events cmsms_default_type">
                                                <div class="cmsms_post_info entry-meta">
                                                    <span v-if="!post.type" class="cmsms_post_format_img cmsms-icon-desktop-3"></span>
                                                    <span v-if="post.type === 'link'" class="cmsms_post_format_img cmsms-icon-globe-6"></span>
                                                    <span v-if="post.type === 'audio'" class="cmsms_post_format_img  cmsms-icon-music-4"></span>
                                                    <abbr class="published cmsms_post_date" 
                                                        :title="post.date" v-text="getDate(post.date)"></abbr>
                                                </div>
                                                <div class="cmsms_post_cont">
                                                    <figure v-if="!post.type && post.photos.length">
                                                        <router-link :to="'/news/' + post.id" 
                                                            :title="post.title" 
                                                            class="cmsms_img_link preloader">
                                                            <img width="820" 
                                                                height="490"
                                                                class="full-width wp-post-image"  
                                                                :src="'photos/' + post.photos[0]" 
                                                                :alt="post.title">
                                                        </router-link>
                                                    </figure>
                                                    <div v-if="post.type === 'video'" class="cmsms_video_wrap">
                                                        <iframe width="820" 
                                                                height="461" 
                                                                :src="post.link" 
                                                                frameborder="0" 
                                                                allowfullscreen=""></iframe>
                                                    </div>
                                                    <header class="cmsms_post_header entry-header">
                                                        <h1 class="cmsms_post_title entry-title">
                                                            <router-link :to="'/news/' + post.id" v-if="!post.type">{{post.title}}</router-link>
                                                            <a v-if="post.type === 'link'" :href="post.link">{{post.title}}</a>
                                                            <span v-if="post.type === 'audio' || post.type === 'video'">{{post.title}}</span>
                                                        </h1>
                                                        <h5 v-if="post.type === 'link'" 
                                                            class="cmsms_post_subtitle">{{post.link}}</h5>
                                                    </header>
                                                    <div v-if="post.type ===  'audio'" class="cmsms_audio">
                                                        <audio class="wp-audio-shortcode" style="width: 100%;" controls>
                                                            <source :src="post.link" type="audio/mp3" />
                                                        </audio>
                                                    </div>
                                                    <div v-if="post.type" class="cmsms_post_content entry-content">
                                                        <p v-for="par in post.text" :key="par" v-html="par"></p>
                                                    </div>
                                                    <div v-if="!post.type" class="cmsms_post_content entry-content">
                                                        <p v-html="getFirstText(post.text[0])"></p>
                                                    </div>
                                                    <footer v-if="!post.type" class="cmsms_post_footer entry-meta">
                                                        <router-link :to="'/news/' + post.id" class="button cmsms_post_read_more">Още</router-link>
                                                    </footer>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import * as news from "../assets/news.json";

export default {
    name: 'News',
    components: {
    },
    data() {
        return {
            location: "News",
            title: "News",
            allNews: null
        }
    },
    mounted() {
        this.allNews = news.default.sort(function(a, b) {
            var nameA = a.date.toUpperCase();
            var nameB = b.date.toUpperCase();
            
            if (nameA < nameB) {
                return 1;
            }
            if (nameA > nameB) {
                return -1;
            }

            return 0;
        })
    },
    methods: {
        getDate(dateString) {
            let date = new Date(dateString);

            return date.getDate() + '/' + date.getMonth() + '/ ' + date.getFullYear();
        },
        getFirstText(paragraph) {
            return paragraph.substring(0, 180) + '...';
        }
    }
}
</script>

<style>

</style>