<template>
    <div class="body">
        <div class="header-bar">
            <div class="header-selection">
                <div class="admin-selection">
                    <a href="/Admin">ADMIN</a>
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
        </div>
        <div class="footer"></div>
    </div>
</template>

<script>
export default {
    name: 'Product'
}
</script>

<style scoped>
.body{
    margin: 0
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
        transition: transform 0.5s ease;
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