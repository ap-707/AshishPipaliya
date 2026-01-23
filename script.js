const link = document.getElementById("download_resume");
const url = link.getAttribute("href");
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);


// Adjust this to fit your detection logic
const isDownloadable = url.endsWith(".pdf");

if (isDownloadable) {
    e.preventDefault(); // Stop normal navigation

    // Create a temporary link element to trigger download
    const tempLink = document.createElement("a");
    tempLink.href = href;
    tempLink.download = href.split("/").pop(); // Use the filename from URL
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
} else {
    // Open in new tab
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
}

document.getElementById("year").textContent = new Date().getFullYear();

const data = {
    "Certificates": [
         {
            "name": "Python Fundamentals",
            "link": "https://d9jmtjs5r4cgq.cloudfront.net/ComplementaryCourseCertificate/849842/original/Ashish_Sureshbhai_Pipaliya20220308-18489-1c1sflr.jpg",
            "iframe": "",
            "pnglink" : "",
            "platform_icon": "https://d1fdloi71mui9q.cloudfront.net/wpmuQ3EaRHeEFgOMOaJQ_convert.png",
            "platform": "Great Learning"
        },
        {
            "name": "Introduction to Data Science",
            "link": "", //"https://drive.google.com/file/d/11aPgN8H9W5nqKOeQjWFWroZCVEO9pBWO/view?usp=drivesdk",
            "iframe": "", // "https://drive.google.com/uc?export=view&id=11aPgN8H9W5nqKOeQjWFWroZCVEO9pBWO",
            "pnglink" : "11aPgN8H9W5nqKOeQjWFWroZCVEO9pBWO",
            "platform_icon": "https://is2-ssl.mzstatic.com/image/thumb/Purple115/v4/54/17/94/54179444-aa7e-65b9-49f1-6517463659fe/source/512x512bb.jpg",
            "platform": "Infosys Springboard"
        },
        {
            "name": "Probability and Statistics using Python",
            "link": "", // "https://drive.google.com/file/d/11cdfiURLISD8vQ9bc1dUZ_FCItDX9wos/view?usp=drivesdk",
            "iframe": "", // "https://drive.google.com/file/d/11cdfiURLISD8vQ9bc1dUZ_FCItDX9wos/view?usp=sharing",
            "pnglink" : "11cdfiURLISD8vQ9bc1dUZ_FCItDX9wos",
            "platform_icon": "https://is2-ssl.mzstatic.com/image/thumb/Purple115/v4/54/17/94/54179444-aa7e-65b9-49f1-6517463659fe/source/512x512bb.jpg",
            "platform": "Infosys Springboard"
        },
        {
            "name": "Python For Data Science",
            "link": "",
            "iframe": "https://courses.cognitiveclass.ai/certificates/993c983d36654b1086b2cbd9e2105d40",
            "pnglink" : "",
            "platform_icon": "https://sn-portals-cognitiveclass.s3.us-south.cloud-object-storage.appdomain.cloud/644bcxng43h754iyqftkagb7aen1",
            "platform": "Cognitiveclass"
        },
        {
            "name": "Data Visualization With PowerBI",
            "link": "https://d9jmtjs5r4cgq.cloudfront.net/ComplementaryCourseCertificate/3393123/original/Ashish_Sureshbhai_Pipaliya20230924-73-1y628h9.jpg",
            "iframe": "",
            "pnglink" : "",
            "platform_icon": "https://d1fdloi71mui9q.cloudfront.net/wpmuQ3EaRHeEFgOMOaJQ_convert.png",
            "platform": "Great Learning"
        },
        // {
        //     "name": "Master’s Graduate in Data Science",
        //     "link": "",
        //     "iframe": "",
        //     "pnglink" : "1r1UL_i32vfxI6EC8_E26fOjP8H6WPx0a",
        //     "platform_icon": "https://christuniversity.in/images/emblem_logo.png",
        //     "platform": "CHRIST (Deemed to be University)"
        // },
        
    ],
    "skills": [
        {
            "category": "programming",
            "items": [
                { "name": "Python", "icon": "https://img.icons8.com/ios-filled/48/000000/python.png" },
                { "name": "SQL", "icon": "https://img.icons8.com/ios-filled/48/000000/sql.png" },
                { "name": "Java", "icon": "https://img.icons8.com/ios-filled/48/000000/java-coffee-cup-logo.png" },
                { "name": "HTML", "icon": "https://img.icons8.com/ios-filled/48/000000/html-5.png" },
                { "name": "CSS", "icon": "https://img.icons8.com/ios-filled/48/000000/css3.png" },
                { "name": "JavaScript", "icon": "https://img.icons8.com/ios-filled/48/000000/javascript.png" }
            ]
        },
        {
            "category": "machine-learning",
            "items": [
                { "name": "Data Pre-Processing", "icon": "https://img.icons8.com/ios-filled/48/000000/data-configuration.png" },
                { "name": "Deep Learning", "icon": "https://img.icons8.com/?size=64&id=u5cBN2YgFqn5&format=png&color=1A1A1A" },
                { "name": "NLP", "icon": "https://img.icons8.com/ios-filled/48/000000/speech-bubble.png" },
                { "name": "Computer Vision", "icon": "https://img.icons8.com/?size=48&id=YNoETM4GGoUU&format=png&color=1A1A1A" }
            ]
        },
        {
            "category": "tools",
            "items": [
                { "name": "Power BI", "icon": "https://img.icons8.com/?size=100&id=QMTbsd0FVhHS&format=png&color=1A1A1A" },
                { "name": "MS Office", "icon": "https://img.icons8.com/?size=100&id=117062&format=png&color=1A1A1A" },
                { "name": "Looker Studio", "icon": "https://img.icons8.com/ios-filled/48/000000/dashboard.png" },
                { "name": "Power Automate", "icon": "https://ap-707.github.io/AshishPipaliya/ProjectImgs/PowerAutomate.png" },
                { "name": "Google Analytics", "icon": "https://img.icons8.com/?size=128&id=ZSt7LSFvNpZG&format=png" },
                { "name": "Google BigQuery", "icon": "https://img.icons8.com/ios-filled/48/000000/database.png" }
            ]
        },
        {
            "category": "soft-skills",
            "items": [
                { "name": "Analytical Skills", "icon": "https://img.icons8.com/?size=100&id=xYlFNxNeJAzA&format=png" },
                { "name": "Problem Solving", "icon": "https://img.icons8.com/?size=128&id=yku81UQEXoew&format=png" },
                { "name": "Leadership", "icon": "https://img.icons8.com/ios-filled/48/000000/leadership.png" },
                { "name": "Decision Making", "icon": "https://img.icons8.com/ios-filled/48/000000/decision.png" },
                { "name": "Observing", "icon": "https://img.icons8.com/?size=100&id=113885&format=png" },
                { "name": "Market Research", "icon": "https://img.icons8.com/?size=100&id=57711&format=png" }
            ]
        }
    ],
    "projects": [
        {
            "main_image": {
                "images": [
                    "https://ap-707.github.io/AshishPipaliya/ProjectImgs/Diamond-price-prediction.jpg"
                ]
            },
            "image": "https://ap-707.github.io/AshishPipaliya/ProjectImgs/Diamond-price-prediction.jpg",
            "projectLink": "",
            "MediaLink": "https://drive.google.com/drive/folders/15qBzl4ugb9pcDdY0A9qDoqxpTNJ0fB_S?usp=drive_link",
            "title": "Diamond Price Prediction",
            "year": 2024,
            "category": "data",
            "purpose": "Build an algorithm to predict diamond prices based on current market price and demand.",
            "technologies": "Python, Flask, Machine Learning (Decision Tree) ,HTML, CSS, JS",
            "description": "This algorithm predicts diamond prices using a human-like thought process, analyzing past and market data to save time on repetitive analysis of 37,000 diamond criteria."
        },
        {
            "main_image": {
                "images": [
                    "https://ap-707.github.io/AshishPipaliya/ProjectImgs/browser-extensions.png"
                ]
            },
            "image": "https://ap-707.github.io/AshishPipaliya/ProjectImgs/browser-extensions.png",
            "projectLink": "https://www.w3schools.com",
            "MediaLink": "https://drive.google.com/drive/folders/15qBzl4ugb9pcDdY0A9qDoqxpTNJ0fB_S?usp=drive_link",
            "title": "Web Browser Extensions",
            "year": 2024,
            "category": "automation",
            "purpose": "Reduce manual searching by highlighting key data on websites.",
            "technologies": "Java, JavaScript",
            "description": "Automatically highlights important details during website research, saving time for users."
        },
        {
            "main_image": {
                "images": [
                    "https://ap-707.github.io/AshishPipaliya/ProjectImgs/webscraper-logo-header.png"
                ]
            },
            "image": "https://ap-707.github.io/AshishPipaliya/ProjectImgs/webscraper-logo-header.png",
            "projectLink": "https://www.w3schools.com",
            "MediaLink": "https://drive.google.com/drive/folders/15qBzl4ugb9pcDdY0A9qDoqxpTNJ0fB_S?usp=drive_link",
            "title": "Scraping and Automation",
            "year": 2024,
            "category": "automation",
            "purpose": "Automate data scraping and formatting for faster decision-making.",
            "technologies": "Python (Selenium, BeautifulSoup, HTML, CSS, JS, Excel, PyGui, Macros)",
            "description": "Scrapes data from websites, formats it in Excel, and performs automated analysis to deliver concise decision-making insights."
        },
        {
            "main_image": {
                "images": [
                    "https://ap-707.github.io/AshishPipaliya/ProjectImgs/Twitter-Sentiment-Analysis-1.png"
                ]
            },
            "image": "https://ap-707.github.io/AshishPipaliya/ProjectImgs/Twitter-Sentiment-Analysis-1.png",
            "projectLink": "https://www.w3schools.com",
            "MediaLink": "https://drive.google.com/drive/folders/15qBzl4ugb9pcDdY0A9qDoqxpTNJ0fB_S?usp=drive_link",
            "title": "Twitter Sentiment Analysis",
            "year": 2023,
            "category": "data",
            "purpose": "Analyze public sentiment on state government and opposition parties.",
            "technologies": "Python (Selenium), NLP, Excel",
            "description": "Provides insights into public opinions on government policies and schemes using sentiment analysis."
        },
        {
            "main_image": {
                "images": [
                    "https://ap-707.github.io/AshishPipaliya/ProjectImgs/Uber-Thumbnail.jpg"
                ]
            },
            "image": "https://ap-707.github.io/AshishPipaliya/ProjectImgs/Uber-Thumbnail.jpg",
            "projectLink": "https://www.w3schools.com",
            "MediaLink": "https://drive.google.com/drive/folders/15qBzl4ugb9pcDdY0A9qDoqxpTNJ0fB_S?usp=drive_link",
            "title": "Uber Ride Predictive Modelling",
            "year": 2023,
            "category": "data",
            "purpose": "Research Uber ride cancellation prediction and fare estimation.",
            "technologies": "Python, Power BI, Java",
            "description": "Utilizes exploratory data analysis and machine learning (linear regression, logistic regression, gradient boosting, decision trees) to build predictive models. Presented at IACIDS '23."
        },
        {
            "main_image": {
                "images": [
                    "https://ap-707.github.io/AshishPipaliya/ProjectImgs/COMP-CUBE/user-app/Screenshot 2025-05-31 135055.png",
                    "https://ap-707.github.io/AshishPipaliya/ProjectImgs/COMP-CUBE/user-app/Screenshot 2025-05-31 135122.png",
                    "https://ap-707.github.io/AshishPipaliya/ProjectImgs/COMP-CUBE/user-app/Screenshot 2025-05-31 135154.png",
                    "https://ap-707.github.io/AshishPipaliya/ProjectImgs/COMP-CUBE/user-app/Screenshot 2025-05-31 135305.png",
                    "https://ap-707.github.io/AshishPipaliya/ProjectImgs/COMP-CUBE/user-app/Screenshot 2025-05-31 135330.png",
                    "https://ap-707.github.io/AshishPipaliya/ProjectImgs/COMP-CUBE/user-app/Screenshot 2025-05-31 135345.png",
                    "https://ap-707.github.io/AshishPipaliya/ProjectImgs/COMP-CUBE/user-app/Screenshot 2025-05-31 135443.png",
                    "https://ap-707.github.io/AshishPipaliya/ProjectImgs/COMP-CUBE/user-app/Screenshot 2025-05-31 135451.png",
                    "https://ap-707.github.io/AshishPipaliya/ProjectImgs/COMP-CUBE/user-app/Screenshot 2025-05-31 135353.png",
                    "https://ap-707.github.io/AshishPipaliya/ProjectImgs/COMP-CUBE/user-app/Screenshot 2025-05-31 135511.png",
                ]
            },
            "image": "https://ap-707.github.io/AshishPipaliya/ProjectImgs/Logo.jpg",
            "projectLink": "https://github.com/ap-707/Complaint-Cube.git",
            "MediaLink": "https://drive.google.com/drive/folders/15qBzl4ugb9pcDdY0A9qDoqxpTNJ0fB_S?usp=drive_link",
            "title": "Complaint Cube",
            "year": 2022,
            "category": "mobile",
            "purpose": "Mobile app to address local community issues.",
            "technologies": "React Native, PHP, MySQL, Java",
            "description": "A React Native app enabling users to report community problems efficiently, with PHP and MySQL for seamless data management."
        },
        {
            "main_image": {
                "images": [
                    "https://ap-707.github.io/AshishPipaliya/ProjectImgs/POWERBI/Company sales.png",
                    "https://ap-707.github.io/AshishPipaliya/ProjectImgs/POWERBI/Inventory vs sale.png",
                    "https://ap-707.github.io/AshishPipaliya/ProjectImgs/POWERBI//Monthly performance.png",
                    "https://ap-707.github.io/AshishPipaliya/ProjectImgs/AvgBackAndAmountPerc.png",
                    "https://ap-707.github.io/AshishPipaliya/ProjectImgs/Inv_Sale_Trend.png",
                ]
            },
            "image": "https://ap-707.github.io/AshishPipaliya/ProjectImgs/POWERBI/Company sales.png",
            "projectLink": "",
            "MediaLink": "",
            "title": "PowerBI Dashboard",
            "year": '2023-2024',
            "category": "data",
            "purpose": "Inventory Management, Sales Tracking and Production Control, Monthly Performance & Evaluation",
            "technologies": "PowerBI , SQL, Python",
            "description": " </br><strong>Monthly Performance Dashboard:</strong> </br>This dashboard shows monthly performance of different product categories. By visualizing trends, highlighting high-performing categories and monthly growth, it helps decision-makers to make data-driven decisions. Key features include dynamic filters, trend analysis, and year-to-date comparisons. </br></br><strong>Inventory vs Sales Dashboard:</strong></br> The Inventory vs Sales dashboard helps in balancing between stock levels and sales performance. It highlights understocked or overstocked products and identifies items with low sales velocity. This enables better inventory planning, reduces holding costs, and minimizes lost sales opportunities. The dashboard includes visual cues for critical stock alerts, sales-to-inventory ratios, and actionable insights. </br></br> <strong>Company Sales Dashboard:</strong> </br> This dashboard focuses on analyzing sales distribution by company or client. It provides a breakdown of which companies purchased which products, the volume of sales, and purchasing trends over time and monitoring their buying patterns."
        }
    ],
    "companies": [
        {
            "name": "Hare Krishna Exports Pvt. Ltd.",
            "link": "https://www.hk.co/",
            "logo": "https://play-lh.googleusercontent.com/asd-BDb9GoFwRAZipl5Nyss9w5P0SI9gt1IBWglNXA4UdFi-TDfms8npqrXuBxYKFPTS",
            "role": "Data Analyst",
            "location": "Surat, Gujarat",
            "start": "Sep 2024",
            "end": "Present",
            "type": "Full-Time",
            "about": "<strong>Harekrishna Exports Pvt. Ltd. (HK)</strong> is a Surat­-based, family‑run jewellery & diamond manufacturing and exporting company. Producing over 500,000 carats annually and serving 80+ countries, HK is celebrated for its vertically integrated, fair‑pricing model and state‑of‑the‑art solar‑powered facilities .",
            "responsibility": "Control Production & Sales, Inventory & Sales analysis, Dashboards and PowerBI reports,Automation and Process Analysis.",
            "contribution": "Worked on multiple self-initiated data science, automation, and AI/ML-based projects under personal branding. Developed tools and solutions that have been deployed in academic, professional, and personal environments.",
            "impact": "Drove data-driven decision-making across production, sales, and inventory through interactive Power BI dashboards and advanced analytical models. Improved operational efficiency by optimising inventory planning, automating reporting workflows, and enhancing data accuracy. Delivered actionable insights to management and cross-functional teams while independently developing innovative data science and AI/ML solutions aligned with real-world business needs."
        },
        {
            "name": "K. Girdharlal International Pvt. Ltd.",
            "link": "https://www.kgirdharlal.com/",
            "logo": "https://res.cloudinary.com/kgdiamonds/image/upload/v1625656015/logo/37_footer.png",
            "role": "Data Analyst",
            "location": "Surat, Gujarat",
            "start": "Jan 2024",
            "end": "Aug 2024",
            "type": "Full-Time",
            "about": "<strong>K. Girdharlal International Pvt. Ltd.</strong> is a fourth‑generation, India‑based diamond manufacturer, globally active, with strong roots in ethical practices and sustainability including carbon‑neutral goals, green building certification, and community initiatives.",
            "responsibility": "Market Research, Automation, Web Scraping & Creating Diamond Price Prediction Algorithms.",
            "contribution": "Creating Automated reporting tools & processes, Web scraper, and Data Analysis through Power BI.",
            "impact": "Optimised pricing strategies for increased profitability, customer attraction, and market reach by adapting to trends and reducing decision-making time by 30%."
        },
        {
            "name": "AIGGPA",
            "link": "https://aiggpa.mp.gov.in/",
            "logo": "https://static.mygov.in/saas/s3fs-saas/mp/mygov_16501129081531683.jpg",
            "role": "Data Analyst Intern",
            "location": "Bhopal, Madhya Pradesh",
            "start": "Jul 2023",
            "end": "Aug 2023",
            "type": "Internship",
            "about": "<strong>Atal Bihari Vajpayee Institute of Good Governance and Policy Analysis (AIGGPA)</strong>, Bhopal is a government‑run think tank and training institute in Madhya Pradesh, established in 2007 (renamed in 2014). It drives evidence-based policymaking through data analytics, evaluation, and capacity-building initiatives.",
            "responsibility": "Analyse people's perspectives towards political parties through social media and reporting.",
            "contribution": "Collected data using web scraping and analysed public sentiment towards political parties using NLP.",
            "impact": "Identified ineffective policies and developed alternative solutions, analysed the political landscape and the probability of which party will be the next government."
        }
    ]
}

// GSAP Animations
gsap.from("#home h1, #home p, #home a", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out"
});

gsap.from("#about img, #about p, #about a", {
    scrollTrigger: "#about",
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});

gsap.from(".certificate-card", {
    scrollTrigger: "#certificate",
    opacity: 0,
    y: 20,
    duration: 0.8,
    stagger: 0.05,
    ease: "power3.out"
});

gsap.from(".skill-card", {
    scrollTrigger: "#skills",
    opacity: 0,
    y: 20,
    duration: 0.8,
    stagger: 0.05,
    ease: "power3.out"
});

gsap.from(".project-card", {
    scrollTrigger: "#projects",
    opacity: 0,
    y: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
});

gsap.from(".experience-card", {
    scrollTrigger: "#experience",
    opacity: 0,
    y: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
});
// -----------------------------------------------------------------------------------------------------
// Count Experience duration
function getLastDateOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function getTotalExperienceDuration(companies) {
    let totalMonths = 0;
    const now = new Date();

    companies.forEach(company => {
        const startStr = company.start; 
        const endStr = company.end;     

        const startDate = new Date(`01 ${startStr}`); // Start from day 01 of start month
        
        const endDate = endStr.toLowerCase() === "present"  
            ? getLastDateOfMonth(now)
            : getLastDateOfMonth(new Date(`15 ${endStr}`));
        
        const days = (endDate - startDate) / (1000 * 60 * 60 * 24);  // Calculate months
        const months = Math.round(days / 30);

        totalMonths += months;
    });

    const yearsDone = Math.floor(totalMonths / 12);
    const monthsDone = totalMonths % 12;

    const Ytext = yearsDone > 1 ? " years " : " year ";
    const Mtext = monthsDone > 1 ? " months " : " month ";

    if (yearsDone > 0 && monthsDone > 0) {
        return yearsDone + Ytext + "and " + monthsDone + Mtext;
    } else if (yearsDone > 0) {
        return yearsDone + Ytext;
    } else {
        return monthsDone + Mtext;
    }
}

document.querySelector("#experience_duration").textContent = getTotalExperienceDuration(data.companies);



// -----------------------------------------------------------------------------------------------------
// Skill Filter
function toggleDetails(index) {
    const detailSection = document.getElementById(`details-${index}`);
    detailSection.classList.toggle('hidden');
}

// Company cards
function generateCompanyExperienceHTML(companies) {
    return companies.map(company => {
        return `
        <div class="experience-card bg-gray-50 shadow-md rounded-[40px] p-4 mb-6 cursor-pointer" onclick="toggleDetails(this)" >
      
        <!-- Top Row -->
        <div class="flex items-center justify-between gap-4">
      
            <!-- Left: Logo + Info -->
            <div class="flex items-center gap-4">
                <div class="w-20 h-20 bg-white rounded-full overflow-hidden border border-gray-300 flex-shrink-0">
                <img src="${company.logo}"  alt="${company.name} logo" class="w-full h-full object-contain p-2">
                </div>
        
                <div>
                <h3 class="font-bold text-gray-900 text-base sm:text-lg">
                    <a href="${company.link}" class="hover:underline"> ${company.name} </a> <span class="font-normal text-gray-600 text-sm"> – ${company.location} </span>
                </h3>
                <p class="text-sm sm:text-base text-gray-600 font-medium"> ${company.role} – ${company.type} </p>
                <p class="text-sm sm:text-base text-gray-500"> ${company.start} – ${company.end} </p>
                </div>
            </div>
      
            <!-- Right: Arrow -->
            <button class="doropdown_arrow w-10 h-10 flex items-center justify-center transform transition-transform duration-300 ease-in-out" type="button" >
                <img src="https://img.icons8.com/?size=50&id=2760&format=png" alt="Toggle Details" class="w-6 h-6 object-contain" />
            </button>
      
        </div>
      
        <!-- Expandable Details -->
        <div class="company-details overflow-hidden max-h-0 transition-all duration-300 ease-in-out" >
      
          <div class="mt-5 pt-4 border-t border-gray-200 bg-gray-50 rounded-xl px-3 pb-4"> 
            ${company.about ? ` 
            <div class="mb-4"> 
              <h4 class="text-sm font-semibold text-gray-800 mb-1">About Company</h4>
              <p class="text-sm text-gray-600 leading-relaxed"> ${company.about} </p>
            </div>` : ''}
      
            ${company.responsibility ? `
            <div class="mb-4">
              <h4 class="text-sm font-semibold text-gray-800 mb-1">My Responsibilities</h4>
              <p class="text-sm text-gray-600 leading-relaxed"> ${company.responsibility} </p>
            </div>` : ''}
      
            ${company.contribution ? `
            <div class="mb-4">
              <h4 class="text-sm font-semibold text-gray-800 mb-1">My Contribution</h4>
              <p class="text-sm text-gray-600 leading-relaxed"> ${company.contribution} </p>
            </div>` : ''}
      
            ${company.impact ? `
            <div>
              <h4 class="text-sm font-semibold text-gray-800 mb-1">Impact</h4>
              <p class="text-sm text-gray-600 leading-relaxed"> ${company.impact} </p>
            </div>` : ''}
      
          </div>
        </div>
      
      </div>
      
        `;
    }).join("");
}

// Insert into section with id="experience"
const experienceHTML = generateCompanyExperienceHTML(data.companies);
document.querySelector('#experience .max-w-7xl').insertAdjacentHTML('beforeend', experienceHTML);

function toggleDetails(button) {
    const card = button.closest('.experience-card');
    const details = card.querySelector('.company-details');
    const img = button.querySelector('.doropdown_arrow');

    // Toggle max-height animation
    details.classList.toggle('open');

    // Toggle arrow rotation
    img.classList.toggle('rotate-180');
}



// ===========================================================


function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('flex');
    modal.classList.add('hidden');
}

// =======================================================================
// Certificate script
function openCertificateModal(certi) {
    const modal = document.getElementById('imageModal');
    const modalContent = document.getElementById('modalContent');
    const loader = document.getElementById('modalLoader');

    // Clear previous content
    modalContent.innerHTML = '';

    if (certi.link) {
        modalContent.innerHTML = 
           `<div id="secure-box" class="w-full h-fit max-h-[90vh] rounded-md overflow-hidden">
                <img src="${certi.link}" draggable="false" alt="Certificate" class="w-full h-fit rounded-md"/>
            </div>
        `;
    } else if (certi.iframe) {
        modalContent.innerHTML = `
            <div id="secure-box" class="w-full h-[90vh] max-h-[90vh] rounded-md overflow-hidden">
                <iframe src="${certi.iframe}" draggable="false"  class="w-full h-full rounded-md border-0"></iframe>
            </div>
        `;
    } else if (certi.pnglink) {
        modalContent.innerHTML = `
            <div id="secure-box" class="w-full h-fit max-h-[90vh] rounded-md overflow-hidden">
                <img src="https://lh3.googleusercontent.com/d/${certi.pnglink}" draggable="false" alt="Certificate" class="w-full rounded-md"/>
            </div>
        `;
    }
     else {
        // Fallback content
        modalContent.innerHTML = `
            <p class="text-red-500 text-center font-semibold">Certificate not available</p>
        `;
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('flex');
    modal.classList.add('hidden');
}

// certificate-Cards
function generateCertiHTML(Certificates) {
    return Certificates.map(certi => {
        const certiData = JSON.stringify(certi).replace(/"/g, '&quot;'); // escape quotes

        if (isMobile) {
            // For Mobile
            return `
            <div onclick="openCertificateModal(JSON.parse('${certiData}'))"
                class="certificate-card group py-[6px] pl-[15px] pr-[6px] flex w-fit items-center space-x-4 justify-between bg-gray-100 rounded-[50px] opacity-100 hover:bg-gray-200 font-bold text-lg cursor-pointer">

                <div class="flex flex-col">
                    <span class="text-[12px] font-semibold">${certi.name}</span>
                </div>

                <div class="certi-icon rounded-full w-7 h-7 transition-transform duration-300 ease-in-out group-hover:scale-125">
                    <img src="${certi.platform_icon}" alt="icon"
                        class="certi-icon rounded-full w-full h-full transition-transform duration-300 ease-in-out" />

                    <!-- Tooltip -->
                    <div class="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 mb-1 hidden group-hover:block 
                                bg-gray-500 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
                        ${certi.platform}
                    </div>
                </div>
            </div>
        `;
        } else {
            // For Tablate or Windows
            return `
            <div onclick="openCertificateModal(JSON.parse('${certiData}'))"
                class="certificate-card group py-[10px] pl-[30px] pr-[10px] flex w-fit items-center space-x-4 justify-between bg-gray-100 rounded-[50px] opacity-100 hover:bg-gray-200 font-bold text-lg cursor-pointer">

                <div class="flex flex-col">
                    <span class="text-base font-semibold">${certi.name}</span>
                </div>

                <div class="certi-icon rounded-full w-8 h-8 transition-transform duration-300 ease-in-out group-hover:scale-125">
                    <img src="${certi.platform_icon}" alt="icon"
                        class="certi-icon rounded-full w-full h-full transition-transform duration-300 ease-in-out" />

                    <!-- Tooltip -->
                    <div class="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 mb-1 hidden group-hover:block 
                                bg-gray-500 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
                        ${certi.platform}
                    </div>
                </div>
            </div>
        `;
        }
    }).join("");
}

const CertificatesHTML = generateCertiHTML(data.Certificates);
document.querySelector('.certificate-grid').innerHTML = CertificatesHTML;

// ===========================================================
// skills-Cards
function generateSkillsHTML(skills) {
    return skills.map(skill => {
        return skill.items.map(item => {
            return `
                <div class="skill-card p-2 sm:p-4 flex items-center gap-2 sm:gap-3 transition-none sm:transition-all sm:hover:scale-105 sm:hover:shadow-lg" data-category="${skill.category}">
                    <img src="${item.icon}" alt="${item.name}" class="skill-icon w-6 h-6 sm:w-8 sm:h-8">
                    <p class="text-xs sm:text-sm font-semibold text-gray-800">${item.name}</p>
                </div>
            `;
        }).join("");
    }).join("");
}

const skillsHTML = generateSkillsHTML(data.skills);
document.querySelector('.skill-grid').innerHTML = skillsHTML;

// ======================================================================================

// Project-cards
function generateProjectsHTML(projects) {
    const container = document.querySelector(".project-grid");

    // Preserve the modal but clear old cards
    const modalHTML = container.querySelector("#projectModal").outerHTML;
    container.innerHTML = modalHTML;

    // Append new cards
    projects.forEach((project, index) => {
        const card = document.createElement("a");
        card.className = "project-card max-h-[250px] bg-white p-6 rounded-xl shadow-md cursor-pointer flex items-center justify-center hover:underline";
        card.setAttribute("data-category", project.category);
        card.setAttribute("data-index", index);

        card.innerHTML = `
            <img src="${project.image}" alt="${project.title} image" 
                 class="h-[90%] w-full object-cover object-center rounded-lg mb-1 mx-auto my-auto" />
            <h3 class="text-xl font-semibold text-gray-800 text-center">${project.title}</h3>
        `;

        card.addEventListener("click", () => {
            showProjectModal(project);
        });

        container.appendChild(card);
    });
}


function showProjectModal(project) {
    const modal = document.getElementById("projectModal");
    const modalContent = document.getElementById("projectModalContent"); // ✅ unique ID

    modalContent.innerHTML = `
    <div class="flex flex-col md:flex-row gap-4">
        <!-- Left: Horizontal Scrollable Images -->
        <div class="overflow-x-auto whitespace-nowrap md:w-1/2 max-h-[400px] flex items-center rounded-lg">
            ${project.main_image?.images?.map(img =>
                `<img src="${img}" alt="${project.title}" class="inline-block max-h-[400px] object-contain" />`
            ).join("") || ""}
        </div>  

        <!-- Right: Project Details -->
        <div class="md:w-1/2 overflow-y-scroll max-h-[500px]">
            <div class="flex items-center">
                <h2 class="text-2xl font-bold mr-2">${project.title} (${project.year})</h2>
            </div>
            <p class="mb-2 text-gray-700"><strong>Purpose:</strong><br/> ${project.purpose || "N/A"}</p>
            <p class="mb-2 text-gray-700"><strong>Technologies:</strong><br/> ${project.technologies || "N/A"}</p>
            <p class="mb-4 text-gray-700"><strong>Description:</strong> ${project.description || "No description available."}</p>
        </div>
    </div>
    `;

    modal.classList.remove("hidden");
}

// Generate HTML elements for projects and add them to the project-grid
generateProjectsHTML(data.projects);

// Close modal
document.getElementById("closeProjectModal").addEventListener("click", () => {
    document.getElementById("projectModal").classList.add("hidden");
});

// ======================================================================================
const skillFilterButtons = document.querySelectorAll('#skills .filter-btn');
const skillCards = document.querySelectorAll('.skill-card');

skillFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update button styles
        skillFilterButtons.forEach(btn => {
            btn.classList.remove('bg-blue-600', 'text-white');
            btn.classList.add('bg-gray-200', 'text-gray-800');
        });
        button.classList.remove('bg-gray-200', 'text-gray-800');
        button.classList.add('bg-blue-600', 'text-white');

        // Filter skills
        const filter = button.getAttribute('data-filter');
        skillCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'flex';
                gsap.fromTo(card, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Project Filter
const projectFilterButtons = document.querySelectorAll('#projects .filter-btn');
const projectCards = document.querySelectorAll('.project-card');

projectFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update button styles
        projectFilterButtons.forEach(btn => {
            btn.classList.remove('bg-blue-600', 'text-white');
            btn.classList.add('bg-gray-200', 'text-gray-800');
        });
        button.classList.remove('bg-gray-200', 'text-gray-800');
        button.classList.add('bg-blue-600', 'text-white');

        // Filter projects
        const filter = button.getAttribute('data-filter');
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                gsap.fromTo(card, { opacity: 0, y: 0 }, { opacity: 1, y: 0, duration: 0.5 });
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Ensure all project cards are visible on initial load
window.addEventListener('load', () => {
    projectCards.forEach(card => {
        card.style.display = 'block';
        gsap.set(card, { opacity: 1, y: 0 });
    });
});





