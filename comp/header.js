document.addEventListener("DOMContentLoaded", function () {
  const header = `
    <header class="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <img src="/img/yanmar-logo.png" alt="Yanmar Logo" class="h-10 w-auto" />
      </div>

      <nav class="hidden md:flex items-center space-x-6">
        <a href="#" class="text-gray-700 hover:text-red-600">Dashboard</a>
        <a href="#" class="text-gray-700 hover:text-red-600">NCR</a>
        <div class="relative group">
          <button class="text-gray-700 hover:text-red-600 focus:outline-none">Checksheet</button>
          <div class="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg hidden group-hover:block z-10">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Checksheet Part</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">In House</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Engine</a>
          </div>
        </div>
      </nav>

      <div class="relative">
        <button class="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center focus:outline-none"
          onclick="document.getElementById('profileMenu').classList.toggle('hidden')">
          P
        </button>
        <div id="profileMenu" class="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg hidden z-10">
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile Setting</a>
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
        </div>
      </div>
    </header>
  `;
  document.getElementById("header-placeholder").innerHTML = header;
});
