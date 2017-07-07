<template>
    <div>
        <form name="login-page__form" @submit.prevent="$validator.validateAll()">
            <v-card class="login">
                <v-card-title class="accent darken-4 white--text">
                    Login
                </v-card-title>
                <v-card-text>
                    <v-text-field
                            name="email"
                            label="email"
                            type="email"
                            v-model="email"
                            v-validate="'required|email'"
                            v-field-focus="'email'"
                            :error="vee.has('email') && !focused('email')"
                            :errors="!focused('email') ? vee.collect('email') : []"
                    ></v-text-field>
                    <v-text-field
                            name="password"
                            label="password"
                            type="password"
                            v-model="password"
                            v-validate="'required'"
                            v-field-focus="'password'"
                            :error="vee.has('password') && !focused('password')"
                            :errors="!focused('password') ? vee.collect('password') : []"
                    ></v-text-field>
                </v-card-text>
                <v-card-row actions>
                    <div class="login-socials">
                        <v-btn icon class="gray--text">
                            <v-icon fa>github</v-icon>
                        </v-btn>
                        <v-btn icon class="indigo--text">
                            <v-icon fa>google</v-icon>
                        </v-btn>
                        <v-btn icon class="deep-purple--text">
                            <v-icon fa>facebook</v-icon>
                        </v-btn>
                    </div>
                    <v-spacer></v-spacer>
                    <v-btn info type="submit" :disabled="vee.any()">
                        <v-icon large class="white--text">vpn_key</v-icon>
                    </v-btn>
                </v-card-row>
            </v-card>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        }
    };
</script>

<style scoped>
    .login {
        width: 100%;
    }
</style>

