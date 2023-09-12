<template>
    <div class="container">
        <h1 class="text-center">Login Form</h1>
        <br>
        <br>
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <form class="form-layout" @submit.prevent>
                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" v-model="email" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" v-model="password" required>
                    </div>
                    <br>
                    <button @click="login" class="btn btn-primary">Login</button>
                </form>
            </div>
            <div class="col-md-4"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        login: function () {
            console.log("Email: " + this.email);
            console.log("Password: " + this.password);
        }
    }
}
</script>

<style scoped></style>