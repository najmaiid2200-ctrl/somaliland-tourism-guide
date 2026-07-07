console.log("Somaliland Tourism Guide Loaded Successfully");
const form = document.querySelector("form");

if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault();
        alert("Thank you! Your message has been sent successfully.");
        form.reset();
    });
}