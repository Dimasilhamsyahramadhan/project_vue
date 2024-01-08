<template>
    <h1>Register</h1>
    <div class="Register">
        <input type="text" v-model="name" placeholder="Enter Name"/>
        <input type="text" v-model="email" placeholder="Enter Email"/>
        <input type="Password" v-model="password" placeholder="Enter Password"/>
        <button v-on:click="Register">Register</button>
        <p>
            <router-link to="/">Login</router-link>
        </p>

        
    </div>
    

</template>

<script>
export default{
    name : 'register',
    data()
    {
        return {
            name:'',
            email:'',
            password:'',
        }
    }
}
</script>

<style>
h1 {
    padding-top: 70px;
    margin-bottom: 30px;
}
input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    border-radius: 4px;
    display: block;
    margin-bottom: 10px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}

button{
    width: 300px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color:  #fff;
    cursor: pointer;
    border-radius: 4px;
}
h3{
    padding-top: 200px;
}
p{ 
    width: 300px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid skyblue;
    background: skyblue;
    color:  #fff;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    margin-top:10px;
    
    
}
</style>