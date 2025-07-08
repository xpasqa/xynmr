document.addEventListener("DOMContentLoaded", function () {
  const sidebar = `
<aside class="w-64 bg-gray-100 p-4 flex flex-col justify-between h-full">
  <nav class="space-y-4 text-sm text-gray-800">
    <div>
      <h3 class="font-semibold mb-1">NCR</h3>
      <ul class="space-y-1">
        <li><a href="#" class="block hover:text-red-600">Submit New</a></li>
        <li><a href="#" class="block hover:text-red-600">Reply NCR</a></li>
        <li><a href="#" class="block hover:text-red-600">Pending NCR</a></li>
      </ul>
    </div>

    <hr class="my-4 border-t border-gray-300" />
    <div>
      <h3 class="font-semibold mb-1">Check Sheet Report</h3>
      <ul class="space-y-1">
        <li><a href="#" class="block hover:text-red-600">Part</a></li>
        <li><a href="#" class="block hover:text-red-600">In House</a></li>
        <li>
          <span class="block font-medium">Engine</span>
          <ul class="space-y-1 text-gray-600">
            <li><a href="#" class="block hover:text-red-600">Procurement Test</a></li>
            <li><a href="#" class="block hover:text-red-600">Final Inspection</a></li>
            <li><a href="#" class="block hover:text-red-600">Pre Delivery</a></li>
          </ul>
        </li>
      </ul>
    </div>

    <hr class="my-4 border-t border-gray-300" />
    <div>
      <h3 class="font-semibold mb-1">4M Exchange</h3>
      <ul class="space-y-1">
        <li><a href="#" class="block hover:text-red-600">Man</a></li>
        <li><a href="#" class="block hover:text-red-600">Machine</a></li>
        <li><a href="#" class="block hover:text-red-600">Material</a></li>
        <li><a href="#" class="block hover:text-red-600">Method</a></li>
      </ul>
    </div>
  </nav>
  <div class="mt-auto flex items-center border border-gray-200 rounded p-3 bg-gray-50">
    <img
      src="img/avatar.jpg"
      alt="Avatar"
      class="w-12 h-12 rounded-full object-cover"
    />
    <div class="ml-3">
      <div class="text-sm font-semibold text-gray-800">Nama User</div>
      <div class="text-xs text-gray-500">ID: 123456</div>
    </div>
  </div>
</aside>
  `;
  document.getElementById("sidebar-placeholder").innerHTML = sidebar;
});
