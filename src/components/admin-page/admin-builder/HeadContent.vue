<template>
    <header class="flex justify-between items-center mb-6 p-custom-1 m-custom-1">
        <div class="flex">
          <h1 class="text-2xl font-bold">Hello:</h1>
          <p class="text-2xl">(admin name)</p>
        </div>
        <button class="bg-sign-out-color text-sign-out px-4 py-2 rounded">Sign Out</button>
    </header>
</template>

<style>
.bg-sign-out-color{
  background-color: #000;
} 
.text-sign-out{
  color: #fff;
}
button{
  cursor: pointer;
  transition: all 0.2s ease-in-out 0ms;
}
button:hover{
  background-color: #2e2e2e;
  box-shadow: 0px 0px 20px -18px;
}
button:active{
  transform: scale(0.95);
}
</style>