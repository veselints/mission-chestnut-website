<template>
    <main>
        <article v-for="post in allNews" :key="post.id">
            <div>
                <span v-if="!post.type"></span>
                <span v-if="post.type === 'link'"></span>
                <span v-if="post.type === 'audio'"></span>
                <time :datetime="post.date" v-text="getDate(post.date)"></time>
            </div>
            <div>
                <figure v-if="!post.type && post.photos.length">
                    <router-link :to="'/news/' + post.id" 
                        :title="post.title">
                        <img width="820" 
                            height="490"
                            :src="'photos/' + post.photos[0]" 
                            :alt="post.title">
                    </router-link>
                </figure>
                <div v-if="post.type === 'video'">
                    <iframe width="820" 
                            height="461" 
                            :src="post.link" 
                            frameborder="0" 
                            allowfullscreen=""></iframe>
                </div>
                <h2>
                    <router-link :to="'/news/' + post.id" v-if="!post.type">{{post.title}}</router-link>
                    <a v-if="post.type === 'link'" :href="post.link">{{post.title}}</a>
                    <span v-if="post.type === 'audio' || post.type === 'video'">{{post.title}}</span>
                </h2>
                <p v-if="post.type === 'link'">{{post.link}}</p>
                <div v-if="post.type ===  'audio'">
                    <audio style="width: 100%;" controls>
                        <source :src="post.link" type="audio/mp3" />
                    </audio>
                </div>
                <div v-if="post.type">
                    <p v-for="par in post.text" :key="par" v-html="par"></p>
                </div>
                <div v-if="!post.type">
                    <p v-html="getFirstText(post.text[0])"></p>
                </div>
                <router-link v-if="!post.type" :to="'/news/' + post.id">Още</router-link>
            </div>
        </article>
    </main>
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