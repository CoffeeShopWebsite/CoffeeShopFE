<template>
    <div class="body">
        <div class="header-bar">
            <div class="header-selection">
                <div class="admin-selection">
                    <a class="admin" href="/admin">ADMIN</a>
                </div>
                <div class="log-out">
                    <div>Đăng xuất</div>    
                </div>      
            </div>
            <nav class="nav-selection">
                <p>- MENU -</p>
                <div class="inside-nav-selection">
                    <a href="/admin/account">Tài khoản</a>
                    <a href="/admin/product">Sản phẩm</a>
                    <a href="/admin/order">Đơn hàng</a>
                </div>
                <p>- TÍNH NĂNG -</p>
            </nav>
        </div>
        <div class="boder">
            
        </div>
        <div class="footer" ></div>
    </div>
</template>

<script>
export default {
    name: 'Admin',
}
</script>

<style>
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
}
.header-selection {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        height: 70px;
        gap: 100rem;
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
.nav-selection{
    display: flex;
    flex-direction: column;
    background-color: #4b4b4b;
    position: fixed;
    width: 300px;
    height: 100%;
}
.nav-selection p:first-child{
    font-size: 25px;
    font-weight: 500;
    margin: 20px 20px 20px
}
.nav-selection p{
    font-size: 25px;
    font-weight: 500;
    margin: 40px 20px 20px
}
.inside-nav-selection{
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin-left: 50px
}
.inside-nav-selection a{
        position: relative;
        color: #fff;
        text-decoration: none;
        transition: color 0.5s ease;
        width: fit-content;
}
.inside-nav-selection a::before{
        content: "";
        transition: width 0.3s ease;
        background-color: #fff;
        height: 2px;
        width: 0;
        position: absolute;
        bottom: 0;
}
.inside-nav-selection a:hover::before{
    width: 100%;
}
.admin{
    transition: transform 0.5s ease;
}
.admin:hover{
    transform: scale(1.1);
}
.log-out{
    cursor: pointer;
}
/*-----------------------------------*/
.boder{
    background-color: #d3d3d3;
    width: 100%;
    margin: 70px 300px;
}
.test-size{
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
        display: none
}
</style>