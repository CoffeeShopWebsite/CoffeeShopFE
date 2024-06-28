<template>
    <div class="sign-in-main">
        <div class="sign-in-box">
            <div class="inside-box">
                <p> TRANG ĐĂNG KÝ </p>
                <div class="up-side">
                    <div class="details-sign-in">
                        <input type="text" placeholder="Họ tên"/>
                        <label>Họ tên</label>
                    </div>
                    <div class="details-sign-in">
                        <input type="text" placeholder="Số điện thoại"/>
                        <label>Số điện thoại</label>
                    </div>
                    <div class="details-sign-in">
                        <input type="text" placeholder="Email"/>
                        <label>Email</label>
                    </div>
                    <div class="details-sign-in">
                        <input type="text" placeholder="Tên đăng nhập"/>
                        <label>Tên đăng nhập</label>
                    </div>
                    <div class="details-sign-in" >
                        <input type="text" placeholder="Mật khẩu"/>
                        <label>Mật khẩu</label>
                    </div>
                </div>
                <div class="down-side">
                    <div class="login-part">
                        <a href="/authentication/login">Đã có tài khoản?</a>
                    </div>
                    <div class="down-side-details">
                        <a href="/authentication/forget-password">Quên mật khẩu?</a>
                    </div>
                </div>
                <div class="submit-button"> 
                    <div class="submit-fornt">
                        Đăng ký 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login'
    }
</script>

<style>
:root{
    background-color: #363636;
}
.sign-in-main{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 35px;
}
.sign-in-box{
    width: 500px;
    height: 550px;
    background: #fff;
    box-shadow: 7px 7px 10px rgba(0, 0, 0, 0.582);
}
.inside-box{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.inside-box p{
    font-size: 40px;
    margin-bottom: 10px;
    margin-top: 20px;
}
/* ----------------- */
.details-sign-in{
    margin: 20px 10px;
}
.details-sign-in input{
    font-size: 20px;
    height: 1px;
    width: 300px;
    padding: 20px;
    transition: 0.15s all ease;
    color: #000;
}
.details-sign-in input:focus{
    outline: none; /* Loại bỏ viền bao quanh khi input được chọn */
}
.details-sign-in input::placeholder{
    color: transparent;
}
.details-sign-in label{
    position: absolute;
    margin-top: 10px;
    left: 38%;
    font-size: 20px;
    color: #000;
    pointer-events: none;
    transition: 0.15s all ease;
}
.details-sign-in input:focus + label,
.details-sign-in input:not(:placeholder-shown) +
label{
    transform: translate(5px, -22px);
    font-size: 14px;
    background-color: #fff;
    color: #000;
}
/* ----------------- */
.submit-button{
    border-radius: 5px;
    width: 100px;
    height: 50px;
    background-color: #363636;
    color: #fff;
    cursor: pointer;
    transition: transform 0.3s ease;
}
.submit-fornt{
    font-size: 15px;
    text-align: center;
    margin-top: 15px;
}
.submit-button:hover{
    transform: scale(1.1);
}
.down-side{
    display: flex;
    gap: 100px;
    margin-bottom: 20px;
}
.down-side-details{
    display: flex;
    flex-direction: row-reverse;
}
.down-side-details a{
    font-size: 17px;
    text-decoration: none;
    color: #000;
    transition: color 0.3s ease;
}
.down-side-details a:hover{
    color: #0051ff;
}
.login-part a{
    text-decoration: none;
    color: #000;
    transition: color 0.3s ease;
    font-size: 17px;
}
.login-part a:hover{
    color: #0051ff;
}
</style>