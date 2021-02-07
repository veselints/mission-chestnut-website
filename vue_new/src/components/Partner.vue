<template>
    <a :href="partner.link" target="_blank" class="partner">
        <img :src="partner.image" :alt="partner.name" :title="partner.name">
    </a>
</template>

<script>
    export default {
        name: "Partner",
        props: ["partner"],
        data() {
            return {
            }
        }
    }
</script>

<style scoped>
    .partner {
        width: 190px;
        padding: 30px;
    }

    .partner img {
        max-width:100%;
        max-height:100%;
    }

    @media only screen and (max-width: 1519px) { 
        .partner {
            padding-left: 100px;
            padding-right: 100px;

        }
    }

    @media only screen and (max-width: 1186px) { 
        .partner {
            padding-left: 60px;
            padding-right: 60px;

        }
    }

    @media only screen and (max-width: 946px) { 
        .partner {
            padding-left: 30px;
            padding-right: 30px;

        }
    }
</style>