<template>
    <div class="result-input">
        <div class="name-of-input">
            <div> {{ input_data_name }}</div>
            <div> {{ input_data_email }}</div>
            <div> {{ input_data_phone_number }}</div>
        </div>
        <div class="input-box">
            <input v-model="name">
            <input v-model="email">
            <input v-model="phone_number">
        </div>
    </div>
</template>

<script>
export default {
    name: 'ResultInput',
    props: ['input_data_name', 'input_data_email', 'input_data_phone_number'],
    watch:{
        name(newData){
            console.log(newData)
        },
        email(newData){
            console.log(newData)
        },
        phone_number(newData){
            console.log(newData)
        }
    },
    data(){
        return{
            name:null,
            email:null,
            phone_number:null
        }
    }
}
</script>

<style>
.result-input{
    margin: 20px;
    display: flex;
    gap: 30px;
}
.name-of-input{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.input-box{
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 300px;
}
</style>