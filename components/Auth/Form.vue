<template>
    <div>
        <div class="pt-5 space-y-6">
            <UIInput label="Username" placeholder="@username" v-model="data.username" />
            <UIInput label="Password" placeholder="*******" type="password" v-model="data.password" />
        </div>
        <div>
            <button @click="handleLogin">Login</button>
        </div>
    </div>
</template>

<script setup>

// data
const data = reactive({
    password: '',
    username: ''
})

// Functions
const handleLogin = () => alert(JSON.stringify(data))
</script>