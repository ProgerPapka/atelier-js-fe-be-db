<template>
    <div>
        <v-navigation-drawer :clipped="clipped" v-model="drawer" app>
            <v-list>
                <v-list-tile v-for="(item, i) in menuItems" :key="`menuItem ${i}`">
                    <v-list-tile-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app :clipped-left="clipped">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <router-link to="/" tag="span" style="cursor: pointer">
                <v-toolbar-title v-text="'Atelier'"></v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn icon flat :to="logoutUrl">
                    <v-icon>{{logoutIcon}}</v-icon>
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        name: "AppHeader",
        data() {
            return {
                drawer: false,
                clipped: true,
                userName: 'Эльдар',
                logoutIcon: 'power_settings_new',
                logoutUrl: 'logout'
            }
        },
        computed: {
            menuItems() {
                return [
                    {
                        icon: 'account_circle',
                        title: 'Профиль',
                        route: '/profile'
                    },
                    {
                        icon: 'local_grocery_store',
                        title: 'Товары',
                        route: '/items'
                    },
                    {
                        icon: 'category',
                        title: 'Категории',
                        route: '/categories'
                    },
                    {
                        icon: 'power_settings_new',
                        title: 'Выйти',
                        route: '/logout'
                    }
                ]
            }
        }
    }
</script>
