<template>
    <v-app>
        <router-view/>
    </v-app>
</template>

<script>
    export default {
        data(){
            return {
                a: 5
            }
        },
        methods: {

        },
        computed: {
            getA(){
                return this.a;
            }
        }
    }
</script>
