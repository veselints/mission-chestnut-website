<template>
    <div class="member">
        <img width="180" 
            height="180" 
            :src="member.image" 
            :alt="member.name" 
            :title="member.name">
        <p class="name">
            {{member.name}}
        </p>
        <p>{{member.position}}</p>
    </div>
</template>

<script>
    export default {
        name: "TeamMember",
        props: ["member"],
        data() {
            return {
                
            }
        }
    }
</script>

<style scoped>
    .member {
        width: 180px;
        height: 320px;
        padding: 30px;
    }

    .name {
        font-weight: 800;
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