
document.getElementById("generateBtn").addEventListener("click", function () {
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const education = document.getElementById("education").value.trim();
    const skills = document.getElementById("skills").value.trim();
    const experience = document.getElementById("experience").value.trim();
    const projects = document.getElementById("projects").value.trim();
    const hobbies = document.getElementById("hobbies").value.trim();
    const references = document.getElementById("references").value.trim();

        
        const layoutSelector = document.getElementById('layout');
        const themeSelector = document.getElementById('theme'); 
    
        const layoutCSS = document.getElementById('layoutCSS');
    
        
        layoutSelector.addEventListener('change', function () {
            const selectedLayout = layoutSelector.value;
            layoutCSS.href = `templates/${selectedLayout}.css`;
        });
    
        
        function changeTheme(theme) {
            
            document.body.classList.remove("blue", "green");
        
            
            if (theme === "blue") {
                document.body.classList.add("blue");
            } else if (theme === "green") {
                document.body.classList.add("green");
            }
            document.body.style.transition = "none";
            document.body.offsetHeight; 
            document.body.style.transition = "";
        }
        
        
        document.getElementById("theme").addEventListener("change", function () {
            const selectedTheme = this.value; 
            console.log("Selected theme:", selectedTheme); 
            changeTheme(selectedTheme);       
        });
        
        
    document.getElementById("generateBtn").addEventListener("click", function () {
        const fullName = document.getElementById("fullName").value.trim();
        const education = document.getElementById("education").value.trim();
    
        let output = `
            <div class="cv" id="resume">
            <h2>${fullName}</h2>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Address: ${address}</p>
            <hr>
            <h3>Education</h3>
            <p>${education}</p>
            <hr>
            <h3>Skills</h3>
            <p>${skills}</p>
            <hr>
            <h3>Experience</h3>
            <p>${experience}</p>
            <hr>
            <h3>Projects</h3>
            <p>${projects}</p>
            <hr>
            <h3>Hobbies</h3>
            <p>${hobbies}</p>
            <hr>
            <h3>References</h3>
            <p>${references}</p>
            </div>
        `;
    
        document.getElementById("cvOutput").innerHTML = output;
        document.getElementById("downloadBtn").style.display = "block"; 
    });
    
    document.getElementById("downloadBtn").addEventListener("click", function () {
        
        const element = document.getElementById("resume"); 
    
        html2pdf().from(element).set({
            filename: 'resume.pdf',
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        }).save().then(() => {
            console.log("Download complete.");
        }).catch(err => console.error("Download failed:", err));
    });
    
});
