var icon = document.getElementById("icon");

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")) 
        
        icon.className = "bi bi-brightness-low-fill";
    else
        icon.className = "bi bi-moon-fill";
}