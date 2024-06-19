<template>
    <div>
        <p>{{ title }}</p>
        <p> {{ data_test }}</p> <!-- data_test: nhận dữ liệu từ trang cha vào -->
        <button @click="click_me">Click me</button>
    </div>
    
</template>

<script>
export default {
    name: 'Test',
    // props: những dữ liệu từ component 
    // cha truyền vào componet con
    // comp cha: Admin
    // comp con: Test
    props: ['data_test','checker', 'title'],
    // Watch hàm giám sát thay đổi trong một thuộc
    // tính phản ứng và phản hồi tương ứng
    watch:{
        checker(newData){ // gọi cho lớp con của phần input
            console.log(newData)
        }
    },
    methods:{
        click_me: function(){
            let me = this;
            me.$emit("click_test", "test 1234")
        },
    }
}
</script>