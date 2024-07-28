<template>
    <aside class="w-1/5 bg-zinc-800 text-white p-4">
      <h2 class="text-lg font-bold">ADMIN</h2>
      <nav class="mt-4">
        <ul>
          <li><a href="/Admin" class="block py-2 hover:bg-zinc-700">Dashboard</a></li>
          <li><a href="/Product" class="block py-2 hover:bg-zinc-700">Products</a></li>
          <li><a href="/Order" class="block py-2 hover:bg-zinc-700">Orders</a></li>
          <li><a href="/Account" class="block py-2 hover:bg-zinc-700">Accounts</a></li>
        </ul>
      </nav>
    </aside>
</template>

<style>
    ul{
        padding: 0;
    }
    li{
        list-style-type: none;
    }
    nav{
        margin-right: 20px;
    }
    a{
        color: #fff;
    }
    a:hover{
        color: #fff;
        text-decoration: none;
    }
</style>