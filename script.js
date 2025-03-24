function loadPage(page) {
    if (page === "home") {
        history.pushState({ page: "home" }, null, "#home");
        return; // Don't fetch home.html because index.html is already loaded
    }

    fetch(`pages/${page}.html`)
        .then(response => {
            if (!response.ok) throw new Error("Page not found");
            return response.text();
        })
        .then(data => {
            let content = document.getElementById("content");
            if (content) {
                content.innerHTML = data;
                history.pushState({ page: page }, null, "#" + page);
            } else {
                console.error("Error: #content div not found in index.html");
            }
        })
        .catch(error => {
            document.getElementById("content").innerHTML = "<h2>Page not found.</h2>";
            console.error("Error loading page:", error);
        });
}

// Load default page if none is specified
document.addEventListener("DOMContentLoaded", () => {
    let page = window.location.hash.substring(1) || "home"; // Default to home
    loadPage(page);
});
