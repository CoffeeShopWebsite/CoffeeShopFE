<template>
    <div class="login-main">
        <div class="login-box">
            <div class="inside-box">
                <p> TRANG ĐĂNG NHẬP </p>
                <div class="up-side">
                    <div class="details-login">
                        <input type="text" placeholder="Tên đăng nhập"/>
                        <label>Tên đăng nhập</label>
                    </div>
                    <div class="details-login" >
                        <input type="text" placeholder="Mật khẩu"/>
                        <label>Mật khẩu</label>
                    </div>
                </div>
                <div class="down-side">
                    <div class="down-side-details">
                        <p> Ghi nhớ đăng nhập </p>
                        <input type="checkbox">
                    </div>
                    <div class="down-side-details">
                        <a href="/authentication/forget-password">Quên mật khẩu?</a>
                    </div>
                </div>
                <div class="submit-button"> 
                    <div class="submit-fornt">
                        Đăng nhập 
                    </div>
                </div>
                <div class="sign-in-part">
                    <a href="/authentication/sign-in">Chưa có tài khoản?</a>
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
.login-main{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
}
.login-box{
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
/* ------------------- */
.details-login{
    margin: 20px 10px;
}
.details-login input{
    font-size: 20px;
    height: 1px;
    width: 300px;
    padding: 20px;
    transition: 0.15s all ease;
    color: #000;
}
.details-login input:focus{
    outline: none; /* Loại bỏ viền bao quanh khi input được chọn */
}
.details-login input::placeholder{
    color: transparent;
}
.details-login label{
    position: absolute;
    margin-top: 10px;
    left: 42%;
    font-size: 20px;
    color: #696969;
    pointer-events: none;
    transition: 0.15s all ease;
}
.details-login input:focus + label,
.details-login input:not(:placeholder-shown) +
label{
    transform: translate(5px, -22px);
    font-size: 14px;
    background-color: #fff;
    color: #000;
}
/* ------------------- */
.up-side{
    margin-bottom: 10px;
}
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
    margin-bottom: 50px;
}
.down-side p{
    font-size: 17px;
    margin: 0;
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
.down-side-details input:focus{
    outline: none;
}
.sign-in-part{
    margin-top: 10px;
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
</style>