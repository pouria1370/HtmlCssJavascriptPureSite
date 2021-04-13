
  $('.navItems').click(function(){
      
    let indexFinder=undefined;
    
        let bbb=document.querySelector(".allProjectButton").classList;
        let ccc=document.querySelector(".fullstackButton").classList;
        let ddd=document.querySelector(".tradeButton").classList;
        let eee=document.querySelector(".roboticButton").classList;
    
    var testArray=[bbb,ccc,ddd,eee];
    for (let index = 0; index < testArray.length; index++) {
    if (testArray[index].contains('active')) {
        indexFinder=index;
        break;
    }    
    }
    if(indexFinder!=null)
    {
        testArray[indexFinder].remove('active');
        $(this).addClass('active');
    }
    else{
    $(this).addClass('active');}
     

      $(".paginationProjects").empty();
      $(".cards").empty();
      
       let nameOfButton=$(this).text();
    switch (nameOfButton) {
        case 'Trade Projects':{

                let indexer=undefined;
            for (let index = 1; index < 6; index++) {
                
                indexer=$('<div class="pageItems Trade-Projects "></div>').text(index);
                  $(".paginationProjects").append(indexer) ;
                 
            }
            //showfirst page for Trade category
            for (let index = 1; index < 9; index++) {
                  
                indexer='<div class="cardItems Trade-Projects">\n\
                <h1>Robotic is every where</h1>\n\
                <h3>TRobotic Project</h3>\n\
                <h3>2019/3/21</h3>\n\
                <p>\n\
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere saepe maxime similique in quas tempora accusantium itaque, repudiandae neque accusamus blanditiis ab iste odio, eius deleniti porro molestias dolorem non\n\
                </p>\n\
                <video src="../../Assets/study-in.de.mp4"></video>\n\
                </div>';
                  $(".cards").append(indexer)           
            }
            break;}
            case 'Fullstack Projects':{

                let indexer=undefined;
            for (let index = 1; index < 11; index++) {
                
                indexer=$('<div class="pageItems Fullstack-Projects " )></div>').text(index);
                  $(".paginationProjects").append(indexer) ;
                       
            }
            // Show first Page for fullstack category
            for (let index = 1; index < 9; index++) {
                  
                indexer='<div class="cardItems Fullstack-Projects">\n\
                <h1>Robotic is every where</h1>\n\
                <h3>TRobotic Project</h3>\n\
                <h3>2019/3/21</h3>\n\
                <p>\n\
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere saepe maxime similique in quas tempora accusantium itaque, repudiandae neque accusamus blanditiis ab iste odio, eius deleniti porro molestias dolorem non\n\
                </p>\n\
                <video src="../../Assets/study-in.de.mp4"></video>\n\
                </div>';
                  $(".cards").append(indexer)           
            }     
            break;}
            case 'Robotic Projects':{

                let indexer=undefined;
            for (let index = 1; index < 8; index++) {
                
                indexer=$('<div class="pageItems Robotic-Projects"></div>').text(index);
                  $(".paginationProjects").append(indexer)           
            }
            //sho firrts page for robotic proejct
            for (let index = 1; index < 9; index++) {
                  
                indexer='<div class="cardItems Robotic-Projects">\n\
                <h1>Robotic is every where</h1>\n\
                <h3>TRobotic Project</h3>\n\
                <h3>2019/3/21</h3>\n\
                <p>\n\
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere saepe maxime similique in quas tempora accusantium itaque, repudiandae neque accusamus blanditiis ab iste odio, eius deleniti porro molestias dolorem non\n\
                </p>\n\
                <video src="../../Assets/study-in.de.mp4"></video>\n\
                </div>';
                  $(".cards").append(indexer)           
            }
            break;}
            case 'All Proejects':{

                let indexer=undefined;
            for (let index = 1; index < 16; index++) {
                
                indexer=$('<div class="pageItems All-Projects"></div>').text(index);
                  $(".paginationProjects").append(indexer)           
            }
            //show first page for all projects
            for (let index = 1; index < 9; index++) {
                  
                indexer='<div class="cardItems All-Projects">\n\
                <h1>Robotic is every where</h1>\n\
                <h3>TRobotic Project</h3>\n\
                <h3>2019/3/21</h3>\n\
                <p>\n\
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere saepe maxime similique in quas tempora accusantium itaque, repudiandae neque accusamus blanditiis ab iste odio, eius deleniti porro molestias dolorem non\n\
                </p>\n\
                <video src="../../Assets/study-in.de.mp4"></video>\n\
                </div>';
                  $(".cards").append(indexer)           
            }
            break;}
            
            
    
    
        default:
            break;
    }
    
    $('.pageItems').click(function(){

          $(".cards").empty();
          let nameOfButton=$(this);
          if(nameOfButton.hasClass('All-Projects'))
          {
            
              let indexer=undefined;
              for (let index = 1; index < 9; index++) {
                  
                  indexer='<div class="cardItems All-Projects">\n\
                  <h1>Robotic is every where</h1>\n\
                  <h3>TRobotic Project</h3>\n\
                  <h3>2019/3/21</h3>\n\
                  <p>\n\
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere saepe maxime similique in quas tempora accusantium itaque, repudiandae neque accusamus blanditiis ab iste odio, eius deleniti porro molestias dolorem non\n\
                  </p>\n\
                  <video src="../../Assets/study-in.de.mp4"></video>\n\
                  </div>';
                    $(".cards").append(indexer)           
              }
      
          
          }
          else if(nameOfButton.hasClass('Robotic-Projects'))
          {
            if(nameOfButton)
            {
              let indexer=undefined;
              for (let index = 1; index < 9; index++) {
                  
                  indexer='<div class="cardItems Robotic-Projects">\n\
                  <h1>Robotic is every where</h1>\n\
                  <h3>TRobotic Project</h3>\n\
                  <h3>2019/3/21</h3>\n\
                  <p>\n\
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere saepe maxime similique in quas tempora accusantium itaque, repudiandae neque accusamus blanditiis ab iste odio, eius deleniti porro molestias dolorem non\n\
                  </p>\n\
                  <video src="../../Assets/study-in.de.mp4"></video>\n\
                  </div>';
                    $(".cards").append(indexer)           
              }
      
          }
          }
          else if(nameOfButton.hasClass('Trade-Projects')){
            if(nameOfButton)
            {
              let indexer=undefined;
              for (let index = 1; index < 9; index++) {
                  
                  indexer='<div class="cardItems Trade-Projects">\n\
                  <h1>Robotic is every where</h1>\n\
                  <h3>TRobotic Project</h3>\n\
                  <h3>2019/3/21</h3>\n\
                  <p>\n\
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere saepe maxime similique in quas tempora accusantium itaque, repudiandae neque accusamus blanditiis ab iste odio, eius deleniti porro molestias dolorem non\n\
                  </p>\n\
                  <video src="../../Assets/study-in.de.mp4"></video>\n\
                  </div>';
                    $(".cards").append(indexer)           
              }
      
          }
          }
        else {
            let indexer=undefined;
            for (let index = 1; index < 9; index++) {
                
                indexer='<div class="cardItems Fullstack-Projects">\n\
                <h1>Robotic is every where</h1>\n\
                <h3>TRobotic Project</h3>\n\
                <h3>2019/3/21</h3>\n\
                <p>\n\
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere saepe maxime similique in quas tempora accusantium itaque, repudiandae neque accusamus blanditiis ab iste odio, eius deleniti porro molestias dolorem non\n\
                </p>\n\
                <video src="../../Assets/study-in.de.mp4"></video>\n\
                </div>';
                
                  $(".cards").append(indexer)           
            }
    
        }
     
      }); 
  });
  $(document).ready(function(){
    for (let index = 1; index < 9; index++) {
              
        indexer='<div class="cardItems All-Projects">\n\
        <h1>Robotic is every where</h1>\n\
        <h3>TRobotic Project</h3>\n\
        <h3>2019/3/21</h3>\n\
        <p>\n\
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere saepe maxime similique in quas tempora accusantium itaque, repudiandae neque accusamus blanditiis ab iste odio, eius deleniti porro molestias dolorem non\n\
        </p>\n\
        <video src="../../Assets/study-in.de.mp4"></video>\n\
        </div>';
          $(".cards").append(indexer)           
    }
    for(let index=1;index<5;index++){
        if(index==1){
            indexer='<div class="articleLink">\n\
            <h1 class="headers">Robotic Articles</h1>';
            for (let index_2 = 0; index_2 <34; index_2++) {
                indexer+='<a href="#" onClick="activeLink(this)">Today is new expriment</a><br>';
                if(index_2==33)
                {indexer+='</div>';
    $(".articleNav").append(indexer);
            } 

            }
            continue;
        }
        else if(index==2){
            indexer='<div class="articleLink">\n\
            <h1 class="headers">Fullstack Articles</h1>';
            for (let index_2 = 0; index_2 <21; index_2++) {
                indexer+='<a href="#" onClick="activeLink(this)">Today is new expriment</a><br>';
                if(index_2==20)
                {indexer+='</div>';
    $(".articleNav").append(indexer);
            }           

            }
            continue;
        }
        else if(index==3){
            indexer='<div class="articleLink">\n\
            <h1 class="headers">Trade Articles</h1>';
            for (let index_2 = 0; index_2 <15; index_2++) {
                indexer+='<a href="#" onClick="activeLink(this)">Today is new expriment</a><br>';
                if(index_2==14)
                {indexer+='</div>';
    $(".articleNav").append(indexer);
            }           

            }
            continue;
        }
        else{
            indexer='<div class="articleLink">\n\
            <h1 class="headers">Game Articles</h1>';
            for (let index_2 = 0; index_2 <63; index_2++) {
                indexer+='<a href="#" onClick="activeLink(this)">Today is new expriment</a><br>';
                if(index_2==62)
                {indexer+='</div>';
    $(".articleNav").append(indexer);
            }           

            }
            continue;
        }

    }
    (function linksRemover(){
        let allNavs=document.querySelectorAll('.articleLink');
        for (let index = 0; index < allNavs.length; index++) {
        let allLinks=allNavs[index].querySelectorAll('.articleLink a');  
            if(allLinks.length>4)
            {
                for (let index_2 = 4; index_2 < allLinks.length; index_2++) {
                    allLinks[index_2].setAttribute('hidden','true');
                    if(index_2==(allLinks.length-1))
                    {
                        let what=Array.from( $(".headers"))[index];
                        console.log(what);
                        let myOsol=document.createElement("h3");
                        myOsol.setAttribute("onclick","showmePlease(this)");
                        myOsol.setAttribute("class","collapser");
                        switch (what.innerText) {
                            case "Robotic Articles":
                                {
                                    myOsol.setAttribute("class","Robotic");
                                break;
                                }
                                case "Game Articles":
                                {
                                    myOsol.setAttribute("class","Game");
                                break;
                                }
                                case "Fullstack Articles":
                                {
                                    myOsol.setAttribute("class","Fullstack");
                                break;
                                }
                                case "Trade Articles":
                                {
                                    myOsol.setAttribute("class","Trade");
                                break;
                                }
                        
                            default:
                                break;
                        }
                        let myNode=document.createTextNode("more articles");
                        myOsol.appendChild(myNode);
                        //let element=document.querySelector(".leftSide");
                        allNavs[index].appendChild(myOsol);
                    }              
                }
            }   
        }
    })();
    

})