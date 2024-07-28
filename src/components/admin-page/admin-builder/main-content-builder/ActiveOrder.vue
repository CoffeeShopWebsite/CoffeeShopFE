<template>
    <section class="mb-6">
      <h2 class="text-xl font-bold mb-4">Orders</h2>
      <table class="min-w-full bg-white border border-zinc-200">
        <thead>
          <tr class="bg-zinc-100">
            <th class="py-2 px-4 border-b">Customer Name</th>
            <th class="py-2 px-4 border-b">Product Name</th>
            <th class="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b">John Smith</td>
            <td class="py-2 px-4 border-b">Bánh kem</td>
            <td class="py-2 px-4 border-b"><span class="bg-green-500 text-white px-2 rounded">Completed</span></td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">David Nguyen</td>
            <td class="py-2 px-4 border-b">Bánh mì</td>
            <td class="py-2 px-4 border-b"><span class="bg-yellow-500 text-white px-2 rounded">Pending</span></td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Nikolave Trang</td>
            <td class="py-2 px-4 border-b">Cà phê</td>
            <td class="py-2 px-4 border-b"><span class="bg-red-500 text-white px-2 rounded">Incomplete</span></td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Nguyễn Thị Trang</td>
            <td class="py-2 px-4 border-b">Bánh kem dâu</td>
            <td class="py-2 px-4 border-b"><span class="bg-red-500 text-white px-2 rounded">Incomplete</span></td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Nikolas Huyền</td>
            <td class="py-2 px-4 border-b">Cà phê</td>
            <td class="py-2 px-4 border-b"><span class="bg-green-500 text-white px-2 rounded">Incomplete</span></td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Đỗ Văn Khải</td>
            <td class="py-2 px-4 border-b">Bánh kem</td>
            <td class="py-2 px-4 border-b"><span class="bg-red-500 text-white px-2 rounded">Incomplete</span></td>
          </tr>
        </tbody>
      </table>
    </section>
</template>