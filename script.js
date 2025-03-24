// No Functions yet
// update: Try lng -ren
<script>
document.addEventListener("DOMContentLoaded", function() {
    const navBar = document.querySelectorAll("li a.active");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            // Remove 'active' class from all links
            navBar.forEach(nav => nav.classList.remove("active"));
            
            // Add 'active' class to the clicked link
            this.classList.add("active");
        });
    });
});
</script>
