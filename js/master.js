// Check if There is color in local storage
let mainColors = localStorage.getItem("color_option");
// Check if There is backgroundItem in local storage
let backgroundChangeLocal = localStorage.getItem("background_option");
let backgroundOptions = true ;


if(mainColors != null)
{
//    console.log("Local Storage is not empty");
document.documentElement.style.setProperty('--main--color',mainColors);

// Check For Active class
document.querySelectorAll(".colors-list li").forEach(element => 
    {
        element.classList.remove("active");

            // add active color to local storage

            if (element.dataset.color === mainColors)
            {
                element.classList.add('active');
            }
    }) ;


}

// Check Ransom bakground is emty 
if(backgroundChangeLocal != null)
{
    console.log(backgroundChangeLocal);
    console.log(typeof(backgroundChangeLocal));

    if(backgroundChangeLocal === 'true')
    {
        backgroundOptions === true;

    }else
    {
        backgroundOptions === false;


    }
}



//  Toggle in fa-spin 
document.querySelector(".toggle-settings .fa-gear").onclick = function(){
    this.classList.toggle("fa-spin");
    // Toggle To Open class
    setTimeout(function(){
    document.querySelector(".settings-box").classList.toggle('open')
}, 200
    );
}

// Switch Colors

const colorLi = document.querySelectorAll(".colors-list li");

colorLi.forEach(li=>
    {
        li.addEventListener('click',(e)=>
        {

            // set color for site 
            document.documentElement.style.setProperty('--main--color',e.target.dataset.color);

            // set color on local storage in site 
            localStorage.setItem("color_option",e.target.dataset.color);

            handleActive(e);
        })
    })
// Select Landing Page Element

let landingPage = document.querySelector(".landing-page");

// Get Array of Images

let imgArray = ['1.jpg','2.jpg','3.webp','5.jpg'];


// Random background option 


// Var to control interval

let backgroundInterval ;


function imagesRandom(){

document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
    checkbox.checked =localStorage.getItem("background_option") == "true" ?true :false;
    
    if(localStorage.getItem('background_option') === null)
    {
        
        clearInterval(backgroundInterval);


    }

        checkbox.addEventListener('change', function () {
            
        if (checkbox.checked) {
            backgroundOption=true
            console.log('Checked');
            localStorage.setItem('background_option', true);
            backgroundInterval =  setInterval(()=>
            {
                let randomNum =Math.floor(Math.random() * imgArray.length );
                // Change Background
            landingPage.style.backgroundImage = 'url("images/' + imgArray[randomNum]+ '")';
    
            }, 3000 );
        } else {
            // do that
            backgroundOptions =false;
            localStorage.setItem('background_option', false);
            clearInterval(backgroundInterval);
            checkbox.checked =backgroundOptions
        
}
    });
});
}
if(localStorage.getItem("background_option") == "true" ||  localStorage.getItem("background_option") == null)
{
    backgroundInterval =  setInterval(()=>
    {
        let randomNum =Math.floor(Math.random() * imgArray.length );
        // Change Background
    landingPage.style.backgroundImage = 'url("images/' + imgArray[randomNum]+ '")';

    }, 3000 );
}

imagesRandom();

 // Select Skill Selector

let ourSkills = document.querySelector(".skills");
let ourPersons = document.querySelector(".Testimoials");

window.onscroll = function ()
{
    // Skills offset top

    let SkillsOffSetTop = ourSkills.offsetTop;
    let personOffSetTop = ourPersons.offsetTop;

    // Skills outer Height
let SkillsOuterHeight = ourSkills.offsetHeight ; 
let personOuterHeight = ourPersons.offsetHeight ; 

   // The windows Hegith
let windowHeight = this.innerHeight;

   //window SCROLL TOP
let windowScrollTop = Math.ceil(this.pageYOffset);

if(windowScrollTop > ((SkillsOffSetTop + SkillsOuterHeight) - windowHeight))
{
let allSkills = document.querySelectorAll(".skill-box .Myskill-progress span");
    allSkills.forEach(skill => 
        {
            skill.style.width = skill.dataset.progress;
        });

}
if(windowScrollTop > ((personOffSetTop + personOuterHeight) - windowHeight))
{
let allPersin = document.querySelectorAll(".Testimoials .ts-box");
    allPersin.forEach(person => 
        {
            person.style.display = "block";
                    });

}
}

// Create pop with the images

let ourGallery = document.querySelectorAll(".gellery img");

ourGallery.forEach(img =>
    { 
        img.addEventListener('click',(e)=>{
        
        // Create Overlay Element 
        let overlay = document.createElement("div");

        // Add Class OverLay

        overlay.className = 'pop-overlay';
        
        //Add to body

        document.body.appendChild(overlay);

        // Create Special pop for images
        let popupBox = document.createElement("div");

        // Add Class To PopupBox

        popupBox.className = 'popup-box';

        
        if(img.alt !== null){

            // Create Heading
            let imgheading =  document.createElement("h3") ;
    
            // Create Text For Heading
    
            let txt = document.createTextNode(img.alt);
    
            // Add The text To heading
    
            imgheading.appendChild(txt);
            
            // Add the text to popupbox
            popupBox.appendChild(imgheading);
    
            }

        // create the imaegs
        let popupImage = document.createElement('img');

        // Spical Image 
        popupImage.src= img.src;

        // Add Image To PopupBox

        popupBox.appendChild(popupImage);

        // Add popup box To body

        document.body.appendChild(popupBox);


        // Create Close Span

        let closeButton = document.createElement('span');

        // Create the close button text
        
        let closeButtonText = document.createTextNode("X");

        // add text to close Button 

        closeButton.appendChild(closeButtonText);

        // Add class to close Button

        closeButton.className = 'close-button';

        // Add close Button to popupbox;

        popupBox.appendChild(closeButton);



    });
    });


    // Close popup
    document.addEventListener("click",function(e)
    {
        if(e.target.className =='close-button')
        {
         // remove popup
        e.target.parentNode.remove();

        // remove Overlay
        document.querySelector(".pop-overlay").remove();
        }
    });

    // Select all bullets 
    const allBullets =  document.querySelectorAll(".nav-bullets .bullet");
    
    // Select all Links 
    const allLinks =  document.querySelectorAll(".links a");


    function scrollToSection(elements)
    {

        elements.forEach(ele =>{
            ele.addEventListener("click",(e)=>
            {
                e.preventDefault();
                document.querySelector(e.target.dataset.section).scrollIntoView(
                    {
                        behavior:'smooth'
                    });
    
    
            });
        });

    }
    scrollToSection(allBullets);
    scrollToSection(allLinks);

    // handle Active State
    function handleActive(ev)
    {
        ev.target.parentElement.querySelectorAll(".active").forEach(element=>
            {
                // Remove Active Vlass From All Children
                element.classList.remove("active");
            });

            // Add Active Class On Self
            ev.target.classList.add("active");
    }

    let bulletsSpan = document.querySelectorAll(".bullets-option span");

    let bulletsContainer = document.querySelector(".nav-bullets");

    let bulletLocalItem = localStorage.getItem("bullets_option");
    
    if(bulletLocalItem !== null) {

        bulletsSpan.forEach(span=>
            {
                span.classList.remove('active');
            });


            if(bulletLocalItem === 'block')
            {
                bulletsContainer.style.display = "block";
                document.querySelector(".bullets-option .yes").classList.add('active');
            }else
            {
                bulletsContainer.style.display = "none";
                document.querySelector(".bullets-option .no").classList.add('active');


            }


    }

    bulletsSpan.forEach(span =>
        {
            span.addEventListener("click",(e)=>
            {
                if(span.dataset.display == 'show')
                {
                    bulletsContainer.style.display = "block";
                    localStorage.setItem('bullets_option','block')

                }else
                {
                    bulletsContainer.style.display = 'none';
                    localStorage.setItem('bullets_option','none')
                }
                handleActive(e);
            });
        });

        // Reset Button

        document.querySelector(".reset-options").onclick = function()
        {
            localStorage.clear();
            // localStorage.removeItem("color_options")
            window.location.reload();
        };

        // Toggle menu

        let toggleBtn = document.querySelector(".toggle-menu");
        let tLinks = document.querySelector(".links");

        toggleBtn.onclick = function (e)
        {
            // Stop Propagation
            e.stopPropagation();
            this.classList.toggle("menu-active");
            tLinks.classList.toggle('open');
        }

        //Click Any Where out Side Button To Close it

        document.addEventListener("click",(e)=>
        {

            if(e.target !== toggleBtn && e.target !== tLinks)
            {
               // check if Menu is Open
                if(tLinks.classList.contains("open"))
                {
                    toggleBtn.classList.toggle("menu-active");
                    tLinks.classList.toggle('open');
                }

            }
        });

        // Stop Propagation in the menu

        tLinks.onclick = function(e)
        {
            e.stopPropagation();
        }