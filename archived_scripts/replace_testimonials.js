const fs = require("fs");
let html = fs.readFileSync("index.html", "utf8");

const newTestimonials = `
<!-- TESTIMONIALS -->
<section class="py-28 bg-[#f4f6f9] border-t border-gray-200 overflow-hidden">
  <div class="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
    
    <!-- Left Side: Logo/Brand -->
    <div class="text-center lg:text-left">
      <div class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-bold text-[#111111] mb-6 tracking-widest uppercase">
        <span class="w-2 h-2 rounded-full bg-[#111111]"></span> Client Stories
      </div>
      <h2 class="font-display text-4xl sm:text-5xl font-extrabold text-black tracking-tight mb-8">What our clients <br>say about <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] to-[#c89f45]">us</span></h2>
      <img src="images/logo.jpeg" alt="AL REIAD Logo" class="h-24 w-auto object-contain mx-auto lg:mx-0 opacity-90 rounded-lg shadow-sm">
    </div>

    <!-- Right Side: Changeable Testimonial (Slider) -->
    <div class="relative bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      <!-- Quote Icon -->
      <i class="fa-solid fa-quote-left text-4xl text-[#c89f45]/20 absolute top-6 sm:top-10 right-6 sm:right-10 z-0"></i>
      
      <!-- Slider Container -->
      <div class="relative overflow-hidden z-10" id="testimonial-slider">
        <!-- Slides -->
        <div class="flex transition-transform duration-500 ease-in-out" id="testimonial-track">
          
          <!-- Slide 1 -->
          <div class="w-full shrink-0">
            <div class="flex gap-1 mb-6">
              <i class="fa-solid fa-star text-[#c89f45] text-sm"></i><i class="fa-solid fa-star text-[#c89f45] text-sm"></i><i class="fa-solid fa-star text-[#c89f45] text-sm"></i><i class="fa-solid fa-star text-[#c89f45] text-sm"></i><i class="fa-solid fa-star text-[#c89f45] text-sm"></i>
            </div>
            <p class="text-gray-600 font-medium leading-relaxed mb-8 text-lg sm:text-xl">"AL REIAD has been handling my company's visa and trade license processes for two years. They are incredibly fast, professional, and completely transparent with their procedures."</p>
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 rounded-full bg-[#111111]/5 flex items-center justify-center text-[#111111] font-bold font-display text-xl shrink-0">A</div>
              <div>
                <h4 class="font-bold text-[#111111] text-lg">Ahmed Al Mansoori</h4>
                <p class="text-sm text-gray-500 font-medium uppercase tracking-wider mt-1">Business Owner</p>
              </div>
            </div>
          </div>
          
          <!-- Slide 2 -->
          <div class="w-full shrink-0">
            <div class="flex gap-1 mb-6">
              <i class="fa-solid fa-star text-[#c89f45] text-sm"></i><i class="fa-solid fa-star text-[#c89f45] text-sm"></i><i class="fa-solid fa-star text-[#c89f45] text-sm"></i><i class="fa-solid fa-star text-[#c89f45] text-sm"></i><i class="fa-solid fa-star text-[#c89f45] text-sm"></i>
            </div>
            <p class="text-gray-600 font-medium leading-relaxed mb-8 text-lg sm:text-xl">"I needed emergency typing services for my family visa application, and the team at AL REIAD went above and beyond to ensure everything was submitted perfectly on the same day."</p>
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 rounded-full bg-[#c89f45]/10 flex items-center justify-center text-[#c89f45] font-bold font-display text-xl shrink-0">S</div>
              <div>
                <h4 class="font-bold text-[#111111] text-lg">Sarah Jenkins</h4>
                <p class="text-sm text-gray-500 font-medium uppercase tracking-wider mt-1">Resident</p>
              </div>
            </div>
          </div>
          
          <!-- Slide 3 -->
          <div class="w-full shrink-0">
            <div class="flex gap-1 mb-6">
              <i class="fa-solid fa-star text-[#c89f45] text-sm"></i><i class="fa-solid fa-star text-[#c89f45] text-sm"></i><i class="fa-solid fa-star text-[#c89f45] text-sm"></i><i class="fa-solid fa-star text-[#c89f45] text-sm"></i><i class="fa-solid fa-star text-[#c89f45] text-sm"></i>
            </div>
            <p class="text-gray-600 font-medium leading-relaxed mb-8 text-lg sm:text-xl">"The best typing center in Al Ain. Their attention to detail in legal translation and immigration paperwork means I never have to worry about rejected applications anymore."</p>
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 rounded-full bg-[#111111] flex items-center justify-center text-white font-bold font-display text-xl shrink-0">K</div>
              <div>
                <h4 class="font-bold text-[#111111] text-lg">Khalid Saif</h4>
                <p class="text-sm text-gray-500 font-medium uppercase tracking-wider mt-1">Corporate Client</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <!-- Controls -->
      <div class="flex items-center justify-between mt-8 border-t border-gray-100 pt-6 z-10 relative">
        <div class="flex gap-2" id="testimonial-dots">
          <button class="w-2.5 h-2.5 rounded-full bg-[#111111] transition-all" onclick="goToSlide(0)" aria-label="Slide 1"></button>
          <button class="w-2.5 h-2.5 rounded-full bg-gray-200 transition-all hover:bg-gray-300" onclick="goToSlide(1)" aria-label="Slide 2"></button>
          <button class="w-2.5 h-2.5 rounded-full bg-gray-200 transition-all hover:bg-gray-300" onclick="goToSlide(2)" aria-label="Slide 3"></button>
        </div>
        <div class="flex gap-3">
          <button class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-white transition-colors" onclick="prevSlide()" aria-label="Previous Slide">
            <i class="fa-solid fa-arrow-left text-sm"></i>
          </button>
          <button class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-white transition-colors" onclick="nextSlide()" aria-label="Next Slide">
            <i class="fa-solid fa-arrow-right text-sm"></i>
          </button>
        </div>
      </div>
    </div>
    
  </div>
</section>

<script>
  let currentSlide = 0;
  const totalSlides = 3;
  const track = document.getElementById("testimonial-track");
  const dots = document.getElementById("testimonial-dots");

  function updateSlider() {
    if(track) {
        track.style.transform = \`translateX(-\${currentSlide * 100}%)\`;
    }
    if(dots) {
        const dotChildren = dots.children;
        for(let i=0; i<dotChildren.length; i++) {
          if(i === currentSlide) {
            dotChildren[i].className = "w-2.5 h-2.5 rounded-full bg-[#111111] transition-all";
          } else {
            dotChildren[i].className = "w-2.5 h-2.5 rounded-full bg-gray-200 transition-all hover:bg-gray-300";
          }
        }
    }
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
  }

  function goToSlide(index) {
    currentSlide = index;
    updateSlider();
  }

  // Auto advance every 5 seconds
  setInterval(nextSlide, 5000);
</script>
`;

html = html.replace(/(<!-- TESTIMONIALS -->[\s\S]*?<\/section>)/, newTestimonials);
fs.writeFileSync("index.html", html);
console.log("Testimonials replaced");

