// Smooth Scroll

document.querySelectorAll("a[href^='#']").forEach(anchor=>{
anchor.addEventListener("click",function(e){
e.preventDefault();
document.querySelector(this.getAttribute("href"))
.scrollIntoView({behavior:"smooth"});
});
});


// Testimonials slider

let index=0;
const testimonials=document.querySelectorAll(".testimonial");

function showTestimonial(){

testimonials.forEach(t=>t.classList.remove("active"));

testimonials[index].classList.add("active");

index++;

if(index>=testimonials.length){
index=0;
}

}

setInterval(showTestimonial,4000);


// dynamic year

document.getElementById("year").textContent=new Date().getFullYear();


// scroll fade animation

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

document.querySelectorAll(".section").forEach(section=>{
observer.observe(section);
});