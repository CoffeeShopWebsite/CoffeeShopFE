<template>
    <div class="body">
        <div class="header-bar">
            <div class="header-selection">
                <div class="admin-selection">
                    <a class="admin" href="/TestMain">ADMIN</a>
                    <div class="other-selection">
                        <a href="/Account">Tài khoản</a>
                        <a href="/Product">Sản phẩm</a>
                        <a href="/Order">Đơn hàng</a>
                    </div>
                </div>
                
                <div class="log-out">
                    <div>Đăng xuất</div>    
                </div>
            </div>
            
        </div>
        <div class="boder">
            <div class="test-size">
                <Test :title="'------ Phần đầu ------'"
                      :data_test="'Hello world'" 
                      :checker="checker" @click_test="test_click" />
                <input v-model="checker"> <!-- Trường hợp có thể đặt file input 
                ở lớp cha và gọi bằng lóp con -->
            </div>
            <div class="test-size2">
                <ResultInput :input_data_name="'Họ và tên :'"
                             :input_data_email="'Email :'" 
                             :input_data_phone_number="'Số điện thoại :'" />
            </div>
        </div>
        <div class="footer" ></div>
    </div>
</template>

<script>
import Test from "./test-page/Test.vue";
import ResultInput from "./test-page/ResultInput.vue";
export default {
    name: 'TestMain',
    components: {Test, ResultInput},
    data(){
        return{
            checker: null
        }
    },
    methods: {
        test_click: function(data){
            console.log(data)
        },
    }
}
</script>

<style scoped>
.body{
    margin: 0 0 30px 0; 
}
/*-----------------------------------*/
.header-bar {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        background-color: #363636;
        color: #fff;
        font-size: 25px;
        width: 100%;
        transition: top 0.3s ease;
        margin-bottom: 30px;
}
.header-selection {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        height: 70px;
        gap: 40rem;
}
.admin-selection{
    display: flex;
    gap: 50px;
}
.admin-selection a{
        color: #fff;
        text-decoration: none;
        
        font-size: 30px;
        font-weight: 100;
}
.other-selection{
        display: flex;
        gap: 50px;
}
.other-selection a{
        position: relative;
        color: #fff;
        text-decoration: none;
        transition: color 0.5s ease;
}
.other-selection a::before{
        content: "";
        transition: width 0.3s ease;
        background-color: #fff;
        height: 2px;
        width: 0;
        position: absolute;
        bottom: 0;
}
.other-selection a:hover::before{
    width: 100%;
}
.admin{
    transition: transform 0.5s ease;
}
.admin:hover{
    transform: scale(1.1);
}
/*-----------------------------------*/
.boder{
    margin: 100px 300px 50px;
}
.test-size{
    display: flex;
    justify-content: center;
    align-items: center;
}
.test-size2{
    margin-top: 20px;
    display: flex;
    justify-content: center;
}
/*-----------------------------------*/
.footer{
        width: 100%;
        height: 400px;
        margin: 0;
        background-color: #363636;
        color: #fff;
}
</style>