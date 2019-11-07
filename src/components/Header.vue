<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <router-link tag="li" 
                to="/" 
                active-class="active"
                exact
                class="nav-item">
                    <a class="nav-link">Home</a>
            </router-link>
            <router-link tag="li" 
                to="/user" 
                active-class="active"
                class="nav-item">
                    <a class="nav-link">Users</a>
            </router-link>
        </ul>
    </div>
    </nav>
</template>