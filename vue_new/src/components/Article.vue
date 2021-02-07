<template>
    <main>
        <h1>{{title}}</h1>
        <div>
            <p v-for="par in text" v-bind:key="par" v-html="par"></p>
            <ul>
                <li v-for="photo in photos" v-bind:key="photo">
                    <a :href="photo" :source="'/photos/' + photo">
                        <img :src="'/photos/' + photo.replace('.jpg', '-200x200.jpg')">
                    </a>
                </li>
            </ul>
        </div>
        <time :datetime="date" v-text="getDate(date)"></time>
    </main>
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