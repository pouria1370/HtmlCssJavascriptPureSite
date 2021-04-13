var c = document.querySelector(".sideButton");
var ctx = c.getContext("2d");
ctx.font = " 30px fantasy ";
ctx.fillText("  Click Me ", 10, 30);

function clickme() {
  let y = document.querySelector(".articleNav");
  y.classList.toggle("change");
}

function testmePlese() {
  y.removeAttribute("hidden");
}

function showmePlease(y) {
  let allNavs = document.querySelectorAll(".articleLink");
  if(y.innerText=='more articles'){
    if (y.classList.contains("Robotic")) {
        let allLinks = allNavs[0].querySelectorAll(".articleLink a");
        console.log(allLinks.length);
        for (let index_2 = 0; index_2 < allLinks.length; index_2++) {
          allLinks[index_2].removeAttribute("hidden");
        }
        let b = document.querySelector(".Robotic");
        b.innerHTML = "Collapse Articles";
      } else if (y.classList.contains("Fullstack")) {
        let allLinks = allNavs[1].querySelectorAll(".articleLink a");
        console.log(allLinks.length);
    
        for (let index_2 = 0; index_2 < allLinks.length; index_2++) {
          allLinks[index_2].removeAttribute("hidden");
        }
        let b = document.querySelector(".Fullstack");
        b.innerHTML = "Collapse Articles";
      } else if (y.classList.contains("Trade")) {
        let allLinks = allNavs[2].querySelectorAll(".articleLink a");
        console.log(allLinks.length);
    
        for (let index_2 = 0; index_2 < allLinks.length; index_2++) {
          allLinks[index_2].removeAttribute("hidden");
        }
        let b = document.querySelector(".Trade");
        b.innerHTML = "Collapse Articles";
      } else {
        let allLinks = allNavs[3].querySelectorAll(".articleLink a");
        console.log(allLinks.length);
    
        for (let index_2 = 0; index_2 < allLinks.length; index_2++) {
          allLinks[index_2].removeAttribute("hidden");
        }
        let b = document.querySelector(".Game");
        b.innerHTML = "Collapse Articles";
      }

  }
  else{
    if (y.classList.contains("Robotic")) {
        let allLinks = allNavs[0].querySelectorAll(".articleLink a");
        console.log(allLinks.length);
        for (let index_2 = 0; index_2 < allLinks.length; index_2++) {
          allLinks[index_2].setAttribute("hidden",'true');
        }
        let b = document.querySelector(".Robotic");
        b.innerHTML = "more articles";
      } else if (y.classList.contains("Fullstack")) {
        let allLinks = allNavs[1].querySelectorAll(".articleLink a");
        console.log(allLinks.length);
    
        for (let index_2 = 0; index_2 < allLinks.length; index_2++) {
          allLinks[index_2].setAttribute("hidden",'true');
        }
        let b = document.querySelector(".Fullstack");
        b.innerHTML = "more articles";
      } else if (y.classList.contains("Trade")) {
        let allLinks = allNavs[2].querySelectorAll(".articleLink a");
        console.log(allLinks.length);
    
        for (let index_2 = 0; index_2 < allLinks.length; index_2++) {
          allLinks[index_2].setAttribute("hidden",'true');
        }
        let b = document.querySelector(".Trade");
        b.innerHTML = "more articles";
      } else {
        let allLinks = allNavs[3].querySelectorAll(".articleLink a");
        console.log(allLinks.length);
    
        for (let index_2 = 0; index_2 < allLinks.length; index_2++) {
          allLinks[index_2].setAttribute("hidden",'true');
        }
        let b = document.querySelector(".Game");
        b.innerHTML = "more articles";
      }

  }
 
}
