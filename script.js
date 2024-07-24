function toggleDetails() {
    const card = document.getElementById('applicant-card');
    const details = document.getElementById('detailed-info');
    
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'flex';
    } else {
        details.style.display = 'none';
    }
}
