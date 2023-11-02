document.addEventListener("DOMContentLoaded", function() {
    const panels = document.querySelectorAll(".panel");

    panels.forEach(function(panel) {
        panel.addEventListener("click", function() {
            panels.forEach(function(p) {
                p.classList.remove("active");
            });

            this.classList.toggle("active");
        });

        // Remove the 'active' class when clicking on an already active panel
        if (panel.classList.contains("active")) {
            panel.addEventListener("click", function(event) {
                event.stopPropagation(); // Prevent the click event from propagating to the parent div
                this.classList.remove("active");
            });
        }
    });

    // Set the 'active' class for the home panel on document ready
    const homePanel = document.querySelector(".home");
    if (homePanel) {
        homePanel.classList.add("active");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const panels = document.querySelectorAll(".panel");

    panels.forEach(function(panel) {
        const content = panel.querySelector(".example");
        if (content) {
            content.style.display = "none";
        }

        panel.addEventListener("click", function() {
            panels.forEach(function(p) {
                const panelContent = p.querySelector(".example");
                if (panelContent) {
                    panelContent.style.display = "none";
                }
                p.classList.remove("active");
            });

            if (content) {
                content.style.display = "block";
            }

            panel.classList.add("active");
        });

        if (panel.classList.contains("home")) {
            if (content) {
                content.style.display = "block";
            }
        }
    });
});

