<template>
     <h1>Login</h1>
    <div class="Login">
    <input type="text" v-model="email" placeholder="Email"/>
        <input type="Password" v-model="password" placeholder="Password"/>
        <button>Login</button>
        </div>
        <p>
            <router-link to="/register">Register</router-link>
        </p>
        <h3>Powerd by Dimas </h3>
</template>

<script>
export default{
    name : 'login'
}
</script>

<style>

</style>