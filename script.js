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
        // Existing COVID dashboard code (leave this unchanged)
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
    } else if (projectId === 'spotify-dashboard') {
        modalBody.innerHTML = `
            <div class="modal-content-wrapper">
                <h2>Spotify Daily Top 50</h2>
                <img src="./assets/heatmap.png" alt="Spotify Dashboard" class="modal-image" onerror="this.onerror=null; this.src='./heatmap.png'; console.log('Error loading image, trying alternate path');">
        <p>This interactive dashboard visualizes data from Spotify's Daily Top 50 playlist. Python functions are used to collect and process the data using the Spotify API, then placed in a sqlite databse for Tableau to interact with. <b>Script will run until Sept. 30th 2024 adding the latest 50 songs each time.</b></p>
        <p>Key findings will improve as the script runs:</p>
        <ul>
            <li>Songs ranging from 2.8 - 3 minutes in length account for 42.4% of the top 50 indicating a popularity-time efficiency.</li>
            <li>Songs with higher danceability and energy scores tend to rank higher.</li>
            <li>Direct corelation between danceability and popularity</li>
        </ul>
        <br>
        <p>Tools used: Python for data collection and processing, SQL for data management, and Tableau for visualization.</p>
                <div class="modal-buttons">
                    <button class="btn btn-color-2 project-btn" onclick="window.open('https://github.com/andreasjhill/TrackTrend', '_blank')">
                        GitHub
                    </button>
                    <button class="btn btn-color-2 project-btn" onclick="window.location.href='spotify-dashboard.html'">
                        Interact
                    </button>
                </div>
            </div>
        `;
    } else if (projectId === 'project-three') {
        modalBody.innerHTML = `
            <div class="modal-content-wrapper">
                <h2>Campus Ideology Research Paper</h2>
                <img src="./assets/ideology-2.png" alt="Campus Ideology Research Paper" class="modal-image" onerror="this.onerror=null; this.src='./project-3.png'; console.log('Error loading image, trying alternate path');">
                <p>Co-authored a research paper with the support of Professor Conrad Winn at 
                Carleton University. Upon approval by the Ethics Board, research involved surveying two political science classes, PSCI 3406 and PSCI 4003, 
                on their perceptions of political and ideological diversity on campus. In compliance with 
                Carleton’s Office of Research Ethics, the survey ensured respondent privacy. Data was then cleaned and analyzed 
                to assess the perceived political leanings of professors and the campus environment, 
                providing quantitative insight into ideological diversity within the political science faculty.​
                <p>The findings from the survey reveal a general perception of Carleton University as a liberal-leaning campus, with mixed opinions on the diversity of political perspectives in the classroom. Key results are as follows:</p>
                <ul>
                    <li>80% of respondents believe that their professors are liberal or left-leaning.</li>
                    <li>70% of respondents perceive Carleton’s campus as overwhelmingly liberal.</li>
                    <li>Strong support for a politically open-minded university environment that encourages diverse viewpoints.</li>
                    <li>Mixed results on whether professors foster an environment for diverse political perspectives.</li>
                </ul>
                <br>
                <p><b>Tools used: Qualtrics, IBM SPSS, Ethics Compliance, Consent Form Design, Academic Writing.</p>
                <div class="modal-buttons">
                       <button class="btn btn-color-2 project-btn" onclick="window.location.href='assets/survey_research_paper.pdf'">
                        View Paper
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

