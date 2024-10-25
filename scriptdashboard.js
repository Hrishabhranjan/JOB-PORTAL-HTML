document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logout-btn');
    const userName = document.getElementById('user-name');
    const userEmail = document.getElementById('user-email');
    const userJoinDate = document.getElementById('user-join-date');

    // Simulated user data (you can replace this with dynamic data from a server)
    const userData = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        joinDate: 'January 2023'
    };

    // Display user data
    userName.textContent = userData.name;
    userEmail.textContent = userData.email;
    userJoinDate.textContent = userData.joinDate;

    // Handle logout action
    logoutBtn.addEventListener('click', () => {
        alert('Logged out successfully!');
        // Redirect to login page (replace with actual URL)
        window.location.href = 'login.html';
    });
});
