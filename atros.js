// Handle the dropdown toggling functionality
function toggleDropdown(event, dropdownId) {
    event.preventDefault(); // Prevent the default behavior (if it's a link)

    // Get the dropdown content by ID
    const dropdownContent = document.getElementById(dropdownId);

    // Check if the clicked dropdown is already active
    const isActive = dropdownContent.classList.contains('active');

    // Close all dropdowns
    document.querySelectorAll('.dropdown-content').forEach(content => {
        content.classList.remove('active');
    });

    // If it wasn't active, toggle it open
    if (!isActive) {
        dropdownContent.classList.add('active');
    }
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.classList.remove('active');
        });
    }
});

// Get the image and the paragraph to replace
const mainImage = document.getElementById('mainImage');
const sectionTitle = document.getElementById('sectionTitle');
const leftSection = document.querySelector('.left-section');
const RightSection = document.querySelector(".right-section");
let hasOpened = false; // Flag to track whether the content has been changed

    var desc = `
                <h2 class="section-title" id="sectionTitle">Atros</h2>
                <p class="left-p" id="introText">
                    Artros is an extremely mountainous continent, broken by sea water running through the left side, also known as Belg. The mountains encapsulate Organo, the center country on this continent, where there is a giant crater with broken floating isles strewn about within. The thick forests cover the majority of the right side of the continent, and the mountainous range makes much of the land unusable to the people who reside here. The right side, also known as Fulder, contains two massive clearwater lakes and one running river that carries fresh fish.
                </p>
                
            `;

            const descMap = {
                'daaprough.html': `
         <h2 class="section-title" id="sectionTitle">Daaprough</h2>
                <p class="left-p" id="introText">
                    The largest of the floating isles, Daaprough connects the northern part of Organo to the city of Yurgir. With a river running through the middle of the island, It is well known for its multi-colored forests as well as its multiple schools geared towards martial combat. These schools are located on the five hills closest to the river. This is where most of the elite troops from around Organo and beyond come to receive training from one of the headmasters of the schools. It is a very strict program with an extremely high drop-out rate causing students to leave. Stemming from the popularity of the schools, much of the housing was constructed on the outskirts of the island to house the instructors and students attending these schools. 
                </p>
                 `,
                 'test.html':` 
                  <h2 class="section-title" id="sectionTitle">Fort Nog</h2>
                <p class="left-p" id="introText">
                    Nog is an extremely mountainous continent, broken by sea water running through the left side, also known as Belg. The mountains encapsulate Organo, the center country on this continent, where there is a giant crater with broken floating isles strewn about within. The thick forests cover the majority of the right side of the continent, and the mountainous range makes much of the land unusable to the people who reside here. The right side, also known as Fulder, contains two massive clearwater lakes and one running river that carries fresh fish.
                </p>
                `,
                'yurgir.html':` 
                 <h2 class="section-title" id="sectionTitle">Yurgir</h2>
               <p class="left-p" id="introText">
                    The capital city of Organo, Yurgir is located on the centermost island. It is connected to its fellow floating islands by highly guarded arcane bridges. Most adventurers never set foot in Yurgir because of how strict the entry process is. For the lucky few that have been, you find the rarest materials and magical items here, many of which are sold to the highest bidder. 
               </p>
               `,
            };

var fancyListHTML = `
<h2 class="section-title" id="sectionTitle">Legend</h2>
    <ul class="fancy-list">
        <li>Inn.</li>
        <li>atros</li>
        <li>j</li>
        <li>h</li>
        <li>j</li>
        <li>j</li>
        <li>j</li>
        <li>j</li>
        <li>j</li>
        <li>h</li>
    </ul>
    <button class="bottom-button" id="button">Description</button>
`;

// Mapping of pages to their corresponding content
const pageContent = {
    'test.html': `
        <h2 class="section-title" id="sectionTitle">Legend</h2>
        <ul class="fancy-list">
            <li>Inn.</li>
            <li>hfgdfgdfgdfg</li>
            <li>bog</li>
            <li>h</li>
            <li>j</li>
            <li>j</li>
            <li>j</li>
            <li>j</li>
            <li>j</li>
            <li>h</li>
        </ul>
        <button class="bottom-button" id="button">Description</button>
    `,
    'daaprough.html': `
        <h2 class="section-title" id="sectionTitle">Legend</h2>
        <ul class="fancy-list">
            <li>Inn.</li>
            <li>hfgdfgdfgdfg</li>
            <li>j</li>
            <li>daaprough</li>
            <li>j</li>
            <li>j</li>
            <li>j</li>
            <li>j</li>
            <li>j</li>
            <li>h</li>
        </ul>
        <button class="bottom-button" id="button">Description</button>
    `,'yurgir.html': `
        <h2 class="section-title" id="sectionTitle">Legend</h2>
        <ul class="fancy-list">
            <li>Inn.</li>
            <li>Mage Tower</li>
            <li>Inn</li>
            <li>Castle</li>
            <li>Blacksmith</li>
            <li>Hospital</li>
            <li>Magic Shop</li>
        </ul>
        <button class="bottom-button" id="button">Description</button>
    `,
};
const currentPage = window.location.pathname.split('/').pop(); // Get the page name (e.g., 'test.html')
if (pageContent[currentPage]) {
    var fancyListHTML = pageContent[currentPage];
}

// Open modal when clicking the image
mainImage.onclick = function() {
  if (!hasOpened) {
   
    if (window.innerWidth > 1200){
        leftSection.style.width = "30%";
        RightSection.style.width = "70%";
    };
    // Hide the paragraph
    const paragraph = leftSection.querySelector('p');
    
    if (paragraph) {
      paragraph.style.padding = "0";  // Remove padding
      paragraph.style.display = "none";  // Hide paragraph
      leftSection.querySelector('h2').style.display = "none";
    }

    // Replace the paragraph with the fancy list
    leftSection.innerHTML += fancyListHTML;

    // Set the flag to true so the code won't run again
    hasOpened = true;

    // Handle the button click to reset content
    const button = document.getElementById("button");
    if (button) {
        button.onclick = function() {
            if(window.location.pathname.includes("world.html")){
            leftSection.innerHTML = `
                <h2 class="section-title" id="sectionTitle">Atros</h2>
                <p class="left-p" id="introText">
                    Artros is an extremely mountainous continent, broken by sea water running through the left side, also known as Belg. The mountains encapsulate Organo, the center country on this continent, where there is a giant crater with broken floating isles strewn about within. The thick forests cover the majority of the right side of the continent, and the mountainous range makes much of the land unusable to the people who reside here. The right side, also known as Fulder, contains two massive clearwater lakes and one running river that carries fresh fish.
                </p>
                
            `;
            }else if ((pageContent[currentPage])) {
                var desc = descMap[currentPage];
                leftSection.innerHTML = desc;

            }
            // if(window.location.pathname.includes("daaprough")){
            //     leftSection.innerHTML = `
            //     <h2 class="section-title" id="sectionTitle">Daaprough</h2>
            //     <p class="left-p" id="introText">
            //         Artros is an extremely mountainous continent, broken by sea water running through the left side, also known as Belg. The mountains encapsulate Organo, the center country on this continent, where there is a giant crater with broken floating isles strewn about within. The thick forests cover the majority of the right side of the continent, and the mountainous range makes much of the land unusable to the people who reside here. The right side, also known as Fulder, contains two massive clearwater lakes and one running river that carries fresh fish.
            //     </p>
                
            // `;
            // }else if(window.location.pathname.includes("test")){
            //     leftSection.innerHTML = `
            //     <h2 class="section-title" id="sectionTitle">Fort Nog</h2>
            //     <p class="left-p" id="introText">
            //         Artros is an extremely mountainous continent, broken by sea water running through the left side, also known as Belg. The mountains encapsulate Organo, the center country on this continent, where there is a giant crater with broken floating isles strewn about within. The thick forests cover the majority of the right side of the continent, and the mountainous range makes much of the land unusable to the people who reside here. The right side, also known as Fulder, contains two massive clearwater lakes and one running river that carries fresh fish.
            //     </p>
                
            // `;
            // }
            hasOpened = false;  // Allow the content to be changed again
            if (window.innerWidth > 1200){
                leftSection.style.width = "50%";
                RightSection.style.width = "50%";
        
            };
        };
    }
  }
};
// Function to toggle accordion
function toggleAccordion(event) {
    const header = event.target;
    const content = header.nextElementSibling;
    
    // Toggle the 'open' class
    if (content.classList.contains('open')) {
      content.classList.remove('open');
      content.style.maxHeight = null;
    } else {
      content.classList.add('open');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  }
  document.getElementById('goBackButton').addEventListener('click', function () {
    // Hide the popup
    history.back()
});


  
