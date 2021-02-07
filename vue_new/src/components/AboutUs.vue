<template>
    <main>
        <section class="section section-team">
            <div class="content">
                <h2>Екипът</h2>
                <div class="team">
                    <team-member v-for="member in teamMembers"
                                v-bind:member="member"
                                v-bind:key="member.name"></team-member>
                </div>
            </div>
        </section>
        <section class="section section-contacts">
            <div class="content">
                <h2>Контакти</h2>
                <p>Веселин Цветанов</p>
                <p>телефон: +359 898 63 11 06</p>
                <p>email: <a href="mailto:veselintsvetanov@gmail.com">veselintsvetanov@gmail.com</a></p>
            </div>
        </section>
        <section class="section section-partners">
            <div class="content">
                <h2>Партньори</h2>
                <div class="partners">
                    <partner v-for="partner in partners" v-bind:partner="partner" v-bind:key="partner.name"></partner>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    import TeamMember from './TeamMember.vue'
    import Partner from './Partner.vue'
    
    export default {
        name: 'AboutUs',
        components: {
            TeamMember,
            Partner
        },
        data() {
            return {
                location: "AboutUs",
                title: "AboutUs",
                partners: [{
                    image: "images/8-logo.png",
                    name: "Списание 8",
                    link: "http://www.spisanie8.bg/"
                },{
                    image: "images/eea-large-logo-e1413917536721.png",
                    name: "EEA Grants",
                    link: "http://www.ngogrants.bg/"
                },{
                    image: "images/Bank_logo.jpg",
                    name: "Райфайзенбанк България",
                    link: "http://izberi.rbb.bg/home"
                },{
                    image: "images/BDZP.png",
                    name: "БДЗП",
                    link: "http://bspb.org/"
                },{
                    image: "images/oldmission-logo-e1413907760927.png",
                    name: "Да спасим в суматохата кестените",
                    link: null
                },{
                    image: "images/flower-logo.jpg",
                    name: "Фондация „Цвете“",
                    link: null
                }],
                teamMembers: [{
                    image: "images/veneta.png",
                    name: "Вени",
                    position: "Изпълнителен Директор"
                },{
                    image: "images/veso.png",
                    name: "Весо",
                    position: "Проектен Мениджър"
                },{
                    image: "images/vakata.png",
                    name: "Ваката",
                    position: "Счетоводител"
                },{
                    image: "images/marto.png",
                    name: "Марто",
                    position: "Координатор"
                },{
                    image: "images/iva.png",
                    name: "Ива",
                    position: "Координатор"
                },{
                    image: "images/hristo.png",
                    name: "Христо",
                    position: 'Експерт "Градинска и паркова растителност"'
                },{
                    image: "images/niki.png",
                    name: "Ники",
                    position: "Консултант - Ентомолог"
                },{
                    image: "images/petko.png",
                    name: "Петко",
                    position: 'Експерт "Анализи и обработка на данни"'
                },{
                    image: "images/tyanko.png",
                    name: "Тянко",
                    position: "Графичен дизайнер"
                },{
                    image: "images/rumbata.png",
                    name: "Румен",
                    position: "Софтуерен инженер"
                },{
                    image: "images/vlado.png",
                    name: "Владо",
                    position: "Софтуерен инженер"
                }]
            }
        }
    }
</script>

<style scoped>
    .section-contacts {
        background-color: #8ba021;
        color: #fff;
    } 

    .section-contacts p {
        text-align: left;
    }

    p {
        margin-bottom: 0.4em;
        margin-top: 0.4em;
    }

</style>