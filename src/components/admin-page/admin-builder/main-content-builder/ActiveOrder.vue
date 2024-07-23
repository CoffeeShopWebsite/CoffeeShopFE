<template>
    <section class="mb-6">
      <h2 class="text-xl font-bold mb-4">Orders</h2>
      <table class="min-w-full bg-white border border-zinc-200">
        <thead>
          <tr class="bg-zinc-100">
            <th class="py-2 px-4 border-b">Project Name</th>
            <th class="py-2 px-4 border-b">Members</th>
            <th class="py-2 px-4 border-b">Priority</th>
            <th class="py-2 px-4 border-b">Progress</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b">Dropbox Design System</td>
            <td class="py-2 px-4 border-b">34</td>
            <td class="py-2 px-4 border-b"><span class="bg-red-500 text-white px-2 rounded">High</span></td>
            <td class="py-2 px-4 border-b"><div class="bg-zinc-200 h-2 rounded" style="width: 75%;"></div></td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Stack Team UI Design</td>
            <td class="py-2 px-4 border-b">47</td>
            <td class="py-2 px-4 border-b"><span class="bg-yellow-500 text-white px-2 rounded">Medium</span></td>
            <td class="py-2 px-4 border-b"><div class="bg-zinc-200 h-2 rounded" style="width: 25%;"></div></td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Github Samples</td>
            <td class="py-2 px-4 border-b">100</td>
            <td class="py-2 px-4 border-b"><span class="bg-green-500 text-white px-2 rounded">Low</span></td>
            <td class="py-2 px-4 border-b"><div class="bg-zinc-200 h-2 rounded" style="width: 100%;"></div></td>
          </tr>
        </tbody>
      </table>
    </section>
</template>