<template>
<div class="navbar">
    <router-link to="/"><img class="logo" src="../assets/f-logo-v2-plain-svg.svg" height="50" alt="logo"></router-link>
    <nav>
        <ul class="nav__links">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/projects">Projects</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
        </ul>
    </nav>
</div>
</template>

<script>

export default {
    name: "Navbar"
};
</script>

<style lang="scss">

$bg-color: #153e4e;
$primary-color: rgba(53, 199, 89, 0.911);

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 3vh;
    
    background-color: $bg-color;
}

li, a, button{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    font-size: 16px;
    color: white;
    text-decoration: none;
}

.logo{
    cursor: pointer;
    margin-right: auto;
}

.nav__links {
    list-style: none;
}

.nav__links li {
    display: inline-block;
    padding-left: 40px;
}

.nav__links li a {
    transition: all 0.3s ease 0s;
}

.nav__links li a:hover {
    color: $primary-color;
}

@media (max-width:640px) {
    .navbar {
        display: flex;       
    }

    .nav__links li {
        padding-left: 40px;
    }
}

</style>