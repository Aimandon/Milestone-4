
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;

form.addEventListener('submit', function(event: Event) {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    const resumeHTML= `
        <h2>${name}'s  Editable Resume</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <h3>Education:</h3>
        <p>${education}</p>
        <h3>Experience:</h3>
        <p>${experience}</p>
        <h3>Skills:</h3>
        <p>${skills}</p>
    `;
    resumeDisplay.innerHTML = resumeHTML;
});
