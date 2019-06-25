<template>
    <div>
        <app-header></app-header>
        <v-content>
            <!--Тут будут views подаваться через роутер-->
            <router-view/>
        </v-content>
    </div>
</template>


<script>
    import AppHeader from '../components/AppHeader'
    import Home from '../views/Profile'

    export default {
        name: 'Main',
        components: {
            Home,
            AppHeader
        }
    }
</script>