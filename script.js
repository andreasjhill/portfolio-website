function togglemenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

document.getElementById('scroll-arrow').addEventListener('click', function() {
    const sections = document.querySelectorAll('section');
    const currentSection = Array.from(sections).findIndex(section => 
        section.getBoundingClientRect().top >= 0
    );

    if (currentSection < sections.length - 1) {
        sections[currentSection + 1].scrollIntoView({ behavior: 'smooth' });
    }
});


function openModal(projectId) {
    console.log('openModal called with:', projectId);
    const modal = document.getElementById('modal-overlay');
    const modalContent = document.querySelector('.modal-content');
    const modalBody = document.getElementById('modal-body');
  
    // Clear previous content
    modalBody.innerHTML = '';
  
    if (projectId === 'covid-dashboard') {
        modalBody.innerHTML = `
            <div class="modal-content-wrapper">
                <h2>COVID-19 Dashboard</h2>
                <img src="./assets/covidmap.png" alt="COVID-19 Map" class="modal-image" onerror="this.onerror=null; this.src='./covidmap.png'; console.log('Error loading image, trying alternate path');">
                <p>This interactive dashboard visualizes an exploratory analysis of COVID-19 data in the span of 2020-2021.</p>
                <p>Postgres SQL was used to query, offering insights into case numbers and fatalities at both a global and state level. Additionally, the dashboard provides forecast predictions on how the pandemic would continue using time series analysis and geographical vizializations.</p>
                <br>
                <p>Tools used: Excel, SQL, and Tableau</p>
                <div class="modal-buttons">
                    <button class="btn btn-color-2 project-btn" onclick="window.open('https://github.com/andreasjhill/Portfolio-Project-CovidData', '_blank')">
                        GitHub
                    </button>
                    <button class="btn btn-color-2 project-btn" onclick="window.location.href='covid-dashboard.html'">
                        Interact
                    </button>
                </div>
            </div>
        `;
    }
  
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);

    // Close modal when clicking outside of it
    modal.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };

    // Prevent clicks inside the modal from closing it
    modalContent.onclick = function(event) {
        event.stopPropagation();
    };
}

function closeModal() {
    const modal = document.getElementById('modal-overlay');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300); // Wait for the animation to finish before hiding the modal
}

// Function to handle navbar shrinking on scroll
window.addEventListener('scroll', function() {
    var nav = document.getElementById('desktop-nav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

