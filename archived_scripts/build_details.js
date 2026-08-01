const fs = require("fs");

const head = fs.readFileSync("head.txt", "utf8");
const header = fs.readFileSync("header.txt", "utf8");
const footer = fs.readFileSync("footer.txt", "utf8");

const pageContent = `<!DOCTYPE html>
<html lang="en">
${head}
<body class="font-sans bg-white text-gray-600">

${header}

<section class="pt-40 pb-24 bg-[#f4f6f9] border-y border-gray-200 min-h-screen">
  <div class="max-w-7xl mx-auto px-5 sm:px-8">
    <div class="text-center mb-16 afu">
      <h1 id="service-title" class="font-display text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight">Service Details</h1>
      <div class="h-1 w-20 bg-[#c89f45] mx-auto mt-6 rounded-full"></div>
    </div>
    
    <div class="grid lg:grid-cols-3 gap-12">
      <!-- Left Column: Details -->
      <div class="lg:col-span-2 space-y-8 afu2">
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 class="text-2xl font-bold text-[#111111] mb-4 flex items-center gap-3">
            <span class="text-[#c89f45]">//</span> <span id="service-subtitle">Service Overview</span>
          </h2>
          <p id="service-desc" class="text-gray-600 leading-relaxed mb-8">
            Loading details...
          </p>
          
          <!-- Accordions -->
          <div class="space-y-4">
            <!-- Accordion 1 -->
            <div class="border border-gray-200 rounded-xl overflow-hidden">
              <button class="w-full px-6 py-4 flex items-center justify-between bg-[#f8f9fa] hover:bg-gray-100 transition-colors" onclick="toggleAccordion('acc1')">
                <span class="font-bold text-[#111111]">Essential Documents</span>
                <i class="fa-solid fa-plus text-gray-400" id="acc1-icon"></i>
              </button>
              <div id="acc1-content" class="hidden px-6 py-4 bg-white border-t border-gray-200">
                <ul id="service-docs" class="list-disc list-inside space-y-2 text-gray-600">
                  <li>Loading...</li>
                </ul>
              </div>
            </div>
            
            <!-- Accordion 2 -->
            <div class="border border-gray-200 rounded-xl overflow-hidden">
              <button class="w-full px-6 py-4 flex items-center justify-between bg-[#f8f9fa] hover:bg-gray-100 transition-colors" onclick="toggleAccordion('acc2')">
                <span class="font-bold text-[#111111]">Steps to Follow</span>
                <i class="fa-solid fa-plus text-gray-400" id="acc2-icon"></i>
              </button>
              <div id="acc2-content" class="hidden px-6 py-4 bg-white border-t border-gray-200">
                <ol id="service-steps" class="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Loading...</li>
                </ol>
              </div>
            </div>
            
            <!-- Accordion 3 -->
            <div class="border border-gray-200 rounded-xl overflow-hidden">
              <button class="w-full px-6 py-4 flex items-center justify-between bg-[#f8f9fa] hover:bg-gray-100 transition-colors" onclick="toggleAccordion('acc3')">
                <span class="font-bold text-[#111111]">Points to Remember</span>
                <i class="fa-solid fa-plus text-gray-400" id="acc3-icon"></i>
              </button>
              <div id="acc3-content" class="hidden px-6 py-4 bg-white border-t border-gray-200">
                <ul id="service-points" class="list-disc list-inside space-y-2 text-gray-600">
                  <li>Loading...</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Right Column: Enquiry Form -->
      <div class="lg:col-span-1 afu3">
        <div class="bg-[#f8f9fa] p-8 rounded-2xl border border-gray-200 shadow-sm sticky top-32">
          <div class="bg-[#111111] text-white text-center py-4 rounded-xl mb-8 shadow-md">
            <h3 class="font-display font-bold text-xl">Quick Enquiry</h3>
          </div>
          
          <form class="space-y-5" onsubmit="event.preventDefault(); alert('Thank you for your enquiry. We will contact you soon.');">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#c89f45] focus:ring-1 focus:ring-[#c89f45] transition-colors" required>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                <input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#c89f45] focus:ring-1 focus:ring-[#c89f45] transition-colors" required>
              </div>
            </div>
            
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
                <input type="email" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#c89f45] focus:ring-1 focus:ring-[#c89f45] transition-colors">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#c89f45] focus:ring-1 focus:ring-[#c89f45] transition-colors">
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea rows="4" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#c89f45] focus:ring-1 focus:ring-[#c89f45] transition-colors" required></textarea>
            </div>
            
            <button type="submit" class="w-full bg-[#c89f45] hover:bg-[#a37e32] text-white font-bold py-3 rounded-lg transition-colors shadow-md mt-2">
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
      
    </div>
  </div>
</section>

${footer}

<script src="service-data.js"></script>
<script>
  // Mobile menu toggle
  document.getElementById("menu-btn").addEventListener("click", () => {
    document.getElementById("mobile-menu").classList.toggle("hidden");
  });

  // Accordion logic
  function toggleAccordion(id) {
    const content = document.getElementById(id + "-content");
    const icon = document.getElementById(id + "-icon");
    if (content.classList.contains("hidden")) {
      content.classList.remove("hidden");
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
    } else {
      content.classList.add("hidden");
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    }
  }

  // Populate data
  document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceSlug = urlParams.get("service");
    
    if (serviceSlug && serviceData[serviceSlug]) {
      const data = serviceData[serviceSlug];
      
      document.getElementById("service-title").innerText = data.title;
      document.getElementById("service-subtitle").innerText = data.title;
      document.getElementById("service-desc").innerText = data.description;
      document.title = data.title + " | AL REIAD STUDIO TYPING";
      
      const docsList = document.getElementById("service-docs");
      docsList.innerHTML = data.documents.map(d => "<li>" + d + "</li>").join("");
      
      const stepsList = document.getElementById("service-steps");
      stepsList.innerHTML = data.steps.map(s => "<li>" + s + "</li>").join("");
      
      const pointsList = document.getElementById("service-points");
      pointsList.innerHTML = data.points.map(p => "<li>" + p + "</li>").join("");
      
    } else {
      document.getElementById("service-title").innerText = "Service Not Found";
      document.getElementById("service-desc").innerText = "Please return to the services page to select a valid service.";
    }
  });
</script>
</body>
</html>`;

fs.writeFileSync("service-details.html", pageContent);

