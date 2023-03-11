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
const {login} = useAuth()
// data
const data = reactive({
    username: '',
    password: '',
    loading: false
})

// Functions
const handleLogin = async() => {
    data.loading = true
    try {
        await login({
        username: data.username,
        password: data.password
    })
        }
    catch{

    }
    finally{

    }
}
</script>