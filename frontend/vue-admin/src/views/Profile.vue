<template>
    <div>
        <v-container fluid fill-height>
            <v-layout align-center justify-center fill-height>
                <v-flex md12 lg12 xl12>
                    <v-card class="elevation-5" height='400px' app>
                        <v-container fluid fill-height>
                            <v-layout row wrap justify-center align-center>
                                <v-flex md6 lg6 xl6>
                                    <v-avatar :size="avatarSize" color="grey lighten-4">
                                        <img :src="avatar">
                                    </v-avatar>
                                </v-flex>
                                <v-layout align-start>
                                <v-flex md15 lg5 xl15 align-start>

                                        <h3 class="headline mb-2">{{`${this.lastName} ${this.firstName}
                                            ${this.middleName}`}}</h3>
                                </v-flex>
            </v-layout>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>

    export default {
        name: 'profile',
        components: {},
        data() {
            return {
                firstName: 'Эльдар',
                lastName: 'Зиятдинов',
                middleName: 'Наильевич',
                avatar: 'https://i.pinimg.com/736x/7b/41/00/7b4100bbfb77e8b995394e7d7f2ec3d5--dreamworks-animation-animation-movies.jpg',
                gender: 'male',
                birthDate: '12.08.1995',
                email: 'ziatdinov.eldar9@yandex.ru',
                mobile: '+79277319605',
                tile: true,
                avatarSize: 256
            }
        },
        methods: {}
    }
</script>
