<template>
    <main>
        <section>
            <h2>Картотекиране</h2>
            <p>
                Основен продукт от реализацията на проекта „Мисия Кестен” е пълна база данни за разположението на кестеновите дървета в шест градски градини в София. Като тестов модел за работа, екипът по проекта направи пилотно преброяване на кестените на територията на ж.к. „Яворов”. Резултати от кампанията по преброяване и картотекиране на кестенови дървета в шест градски градини в София с училищата партньори са вече налични за преглед и сваляне в нашата база данни.
            </p>
            <ul>
                <li>
                    <span>102</span>
                    <span>38-мо ОУ „Васил Априлов” – Парк Заимов</span>
                </li>
                <li>
                    <span>65</span>
                    <span>38-мо ОУ „Васил Априлов” – Докторска градина</span>
                </li>
                <li>
                    <span>96</span>
                    <span>129-то ОУ „Антим I” – Парк Военна Академия</span>
                </li>
                <li>
                    <span>137</span>
                    <span>20-то ОУ „Тодор Минков” – Парк НДК и бул. „Патриарх Евтимий”</span>
                </li>
                <li>
                    <span>102</span>
                    <span>19- то СОУ „Елин Пелин” – Градините на Медицинска академия и ул. „Георги Софийски”</span>
                </li>
                <li>
                    <span>65</span>
                    <span>119-то СОУ „Акад. Михаил Арнаудов” – Борисова градина, около кортовете на Академик</span>
                </li>
            </ul>
            <div class="map-container">
                <l-map ref="myMap"
                        class="section map" 
                        id="map"
                        :zoom="mapZoom"
                        :center="mapCenter"
                        :maxZoom="maxZoom">
                    <l-tile-layer :url="mapTileUrl" :attribution="mapTileAttribution"></l-tile-layer>
                </l-map>
            </div>
        </section>

        <section>
            <h2>Мобилно приложение</h2>
            <p>
                Картотекирането на кестеновите дървета се осъществява с разработеното за целта на проекта софтуерно приложение Mission Chestnut. Приложението зарежда карта на района, където се намирате в момента и ако в близост до вас има кестен, просто отивате до него и натискате зеления бутон, така този кестен вече е преброен и фигурира в базата данни.
            </p>
        </section>

        <section>
            <h2>Доклад за информацията и механизмите за наблюдение и управление на дърветата в град София</h2>
            <p>
                Докладът описва каква е наличната в структурите на Столична община информация по отношение на броя, състоянието и пространственото разположение на ценната дървесна растителност на територията на град София. Той разглежда и механизмите с които местната администрация разполага за наблюдение и вземане на управленски решения по отношение на този ресурс. Докладът се фокусира върху наличната информация и нейното управление по отношение на кестеновите дървета на територията на града.
            </p>
            <a href="pdf/Green_info_report.pdf" class="cmsms_button" target="_blank">Свали доклад</a>
        </section>

        <section>
            <h2>План за борба с листоминиращия молец и ограничаване на вредните влияния върху кестеновите дървета</h2>
            <p>
                Планът описва заплахите за конския кестен на територията на град София. Извършен е пространствен анализ на картотекираните в рамките на проекта дървета. Посочени са мерки за контрол на по-важните заплахи, застрашаващи съществуването на конския кестен в София. Разписани са план за действие и конкретни мерки, които да бъдат предприети за всяка една от картотекираните градски градини.
            </p>
            <a href="pdf/Horse_Chesnut_Camerraria.pdf" class="cmsms_button" target="_blank">Свали план</a>
        </section>
    </main>
</template>

<script>
    import * as L from 'leaflet';
    import 'leaflet.markercluster';
    import { LMap, LTileLayer } from 'vue2-leaflet';

    import * as trees from "../assets/GetTrees.json";

    export default {
        name: 'Results',
        components: {
            LMap,
            LTileLayer
        },
        data() {
            return {
                mapZoom: 13,
                mapCenter: [42.688295, 23.329949],
                maxZoom: 19,
                mapTileUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                mapTileAttribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                icon: L.divIcon({
                    iconAnchor: [0, 16],
                    labelAnchor: [-4, 0],
                    popupAnchor: [0, -24],
                    html: "<span class='mapIcon' />"
                })
            }
        },
        mounted() {
            let map = this.$refs.myMap.mapObject;
            let markers = L.markerClusterGroup();

            for (var i = 0; i < trees.default.length; i++) {
                var marker = L.marker([
                    parseFloat(trees.default[i].Latitude), 
                    parseFloat(trees.default[i].Longitude)
                ]);
                markers.addLayer(marker);
            }

            map.addLayer(markers);
        }
    }
</script>

<style>

</style>