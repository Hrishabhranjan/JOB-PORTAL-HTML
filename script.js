// Function to filter jobs based on search input
function filterJobs() {
    let input = document.getElementById('search-input').value.toLowerCase();
    let jobs = document.getElementsByClassName('job');

    for (let i = 0; i < jobs.length; i++) {
        let jobTitle = jobs[i].getAttribute('data-title').toLowerCase();
        let jobLocation = jobs[i].getAttribute('data-location').toLowerCase();

        if (jobTitle.includes(input) || jobLocation.includes(input)) {
            jobs[i].style.display = 'block';
        } else {
            jobs[i].style.display = 'none';
        }
    }
}
// Function to filter jobs based on search input
function filterJobs() {
    let input = document.getElementById('search-input').value.toLowerCase();
    let jobs = document.getElementsByClassName('job');

    for (let i = 0; i < jobs.length; i++) {
        let jobTitle = jobs[i].getAttribute('data-title').toLowerCase();
        let jobLocation = jobs[i].getAttribute('data-location').toLowerCase();

        if (jobTitle.includes(input) || jobLocation.includes(input)) {
            jobs[i].style.display = 'block';
        } else {
            jobs[i].style.display = 'none';
        }
    }
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
// Function to post a new job
function postJob(event) {
    event.preventDefault();

    let title = document.getElementById('job-title').value;
    let location = document.getElementById('job-location').value;
    let company = document.getElementById('job-company').value;
    let salary = document.getElementById('job-salary').value;

    let jobSection = document.getElementById('jobs-list');

    // Create new job element
    let newJob = document.createElement('div');
    newJob.classList.add('job');
    newJob.setAttribute('data-title', title);
    newJob.setAttribute('data-location', location);

    newJob.innerHTML = `
        <h3>${title}</h3>
        <p>Location: ${location}</p>
        <p>Company: ${company}</p>
        <p>Salary: ${salary}</p>
        <button onclick="openApplyForm('${title}')">Apply</button>
    `;

    // Add new job to job list
    jobSection.appendChild(newJob);

    // Clear form fields
    document.getElementById('post-job-form').reset();
}

// Function to open the apply form modal
function openApplyForm(jobTitle) {
    document.getElementById('job-name').textContent = jobTitle;
    document.getElementById('apply-form-modal').style.display = 'block';
}

// Function to close the apply form modal
function closeApplyForm() {
    document.getElementById('apply-form-modal').style.display = 'none';
}

// Function to handle job application submission
function submitApplication(event) {
    event.preventDefault();

    let name = document.getElementById
    ('applicant-name').value;
    let email = document.getElementById('applicant-email').value;
    let resume = document.getElementById('applicant-resume').value;

    // For this demo, we will just log the applicant details to the console
    console.log("Applicant Name:", name);
    console.log("Applicant Email:", email);
    console.log("Resume:", resume);

    // Show success message (in a real-world app, you would send this data to a backend server)
    alert("Application submitted successfully!");

    // Close the apply form modal
    closeApplyForm();

    // Reset the form fields
    document.getElementById('apply-job-form').reset();
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.login-form');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting for now
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        // Simple validation
        if (!validateEmail(emailValue)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (passwordValue.length < 6) {
            alert('Password must be at least 6 characters.');
            return;
        }

        // Simulating successful login (you can replace this with actual server-side login)
        alert('Login successful!');
        form.submit(); // Continue form submission
    });
});

// Email validation function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Optional: Toggle password visibility
const passwordToggle = document.createElement('span');
passwordToggle.innerText = 'Show';
passwordToggle.style.cursor = 'pointer';
passwordToggle.style.marginLeft = '10px';

passwordInput.parentElement.appendChild(passwordToggle);

passwordToggle.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggle.innerText = 'Hide';
    } else {
        passwordInput.type = 'password';
        passwordToggle.innerText = 'Show';
    }
});
        var x = document.getElementById("login");
        var y = document.getElementById("register");
        var z = document.getElementById("btn");

        function register(){
            x.style.left = "-400px";
            y.style.left = "50px";
            z.style.left = "110px";
        }

        function login(){
            x.style.left = "50px";
            y.style.left = "450px";
            z.style.left = "0px";
        }
        var modal = document.getElementById("login-form");
        window.onclick = function(event){
            if(event.target == modal){
                modal.style.display = "none";
            }
        }

