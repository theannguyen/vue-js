<template>
    <div class="container">
        <h1 class="text-center">Register Form</h1>
        <br>
        <br>
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <form class="form-layout" @submit.prevent>
                    <div class="mb-3">
                        <label class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" v-model="name" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" v-model="email" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" v-model="password" required>
                        <div v-if="password.length > 1 && password.length < 6" class="text-danger">
                            Passwords between 1 to 6 characters
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Confirm password</label>
                        <input type="password" class="form-control" id="rePassword" v-model="rePassword" required>
                        <div v-if="password != rePassword" class="text-danger">
                            Passwords dont match
                        </div>
                    </div>
                    <button @click="register" class="btn btn-primary">Register</button>
                </form>
            </div>
            <div class="col-md-4"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "register",
    data() {
        return {
            email: "",
            password: "",
            rePassword: "",
        }
    },
    methods: {
        register: function () {
            console.log("Email: " + this.email);
        }
    }
}
</script>

<style scoped></style>