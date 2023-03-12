<template>
    <div class="flex h-screen">
        <div class="relative flex-auto hidden w-0 lg:block">
            <img class="absolute inset-0 object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80" />
        </div>
        <div class="my-auto justify-center xl:w-1/3 lg:w-1/2 flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div class="items-center w-full h-full max-w-sm mx-auto lg:w-96 xl:w-80">
                <AuthForm />
            </div>
        </div>
    </div>
</template> 