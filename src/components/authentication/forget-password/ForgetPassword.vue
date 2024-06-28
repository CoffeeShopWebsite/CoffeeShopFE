<template>
    <div class="forget-password-main">
        <div class="forget-password-box">
            <div class="inside-box">
                <p> TRANG QUÊN MẬT KHẨU </p>
                <div class="up-side">
                    <div class="details-forget-password">
                        <input type="text" placeholder="Nhập email của bạn"/>
                        <label>Nhập email của bạn</label>
                    </div>
                </div>
                <div class="down-side">
                    <div class="login-part">
                        <a href="/authentication/login">Đã có tài khoản?</a>
                    </div>
                    <div class="sign-in-part">
                        <a href="/authentication/sign-in">Chưa có tài khoản?</a>
                    </div>
                </div>
                <div class="submit-button"> 
                    <div class="submit-fornt">
                        Khôi phục mật khẩu 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'ForgetPassword'
    }
</script>

<style>
:root{
    background-color: #363636;
}
.forget-password-main{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
}
.forget-password-box{
    width: 500px;
    height: 500px;
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
    margin-bottom: 50px;
}
/* ----------------- */
.details-forget-password{
    margin: 20px 10px;
}
.details-forget-password input{
    font-size: 20px;
    height: 1px;
    width: 300px;
    padding: 20px;
    transition: 0.15s all ease;
    color: #000;
}
.details-forget-password input:focus{
    outline: none; /* Loại bỏ viền bao quanh khi input được chọn */
}
.details-forget-password input::placeholder{
    color: transparent;
}
.details-forget-password label{
    position: absolute;
    margin-top: 10px;
    left: 38%;
    font-size: 20px;
    color: #000;
    pointer-events: none;
    transition: 0.15s all ease;
}
.details-forget-password input:focus + label,
.details-forget-password input:not(:placeholder-shown) +
label{
    transform: translate(5px, -22px);
    font-size: 14px;
    background-color: #fff;
    color: #000;
}
/* ----------------- */
.up-side{
    margin-bottom: 10px;
}
.submit-button{
    border-radius: 5px;
    width: 200px;
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
    margin-bottom: 50px;
}
.down-side p{
    font-size: 15px;
    margin: 0;
}
.down-side-details{
    display: flex;
    flex-direction: row-reverse;
}
.down-side-details a{
    font-size: 15px;
    text-decoration: none;
    color: #000;
    transition: color 0.3s ease;
}
.down-side-details a:hover{
    color: #0051ff;
}
.sign-in-part a{
    text-decoration: none;
    color: #000;
    transition: color 0.3s ease;
    font-size: 17px;
}
.sign-in-part a:hover{
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