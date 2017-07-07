<template>
    <v-app light>
        <v-layout row wrap align-center justify-center style="height: 100vh;">
            <v-flex xs12 sm5 md4 lg3 xl3>
                <login-form />
            </v-flex>
        </v-layout>
    </v-app>
</template>

<style lang="scss" scoped>
    .login-page {
        min-width: 400px;
        margin-left: 50%;
        transform: translateX(-50%);
    }
</style>

<script>
    import loginForm from './Login.vue';

    export default {
        components: {
            loginForm
        }
    };
</script>