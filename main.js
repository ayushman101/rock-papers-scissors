



let start = 0;

// function to restore original state 
function deleteimages() {


    var flex = document.getElementById("flex-box");
    let e = flex.lastElementChild;
    
    //loop deletes all current images
    while (e) {
        flex.removeChild(e);
        e = flex.lastElementChild;
    }


    // create paper image and button 
    let ele = document.createElement("button");
    ele.setAttribute("id", "paper");
    ele.setAttribute("class", "image-btn");
    ele.setAttribute("onclick", "rps(this)")
    let img = document.createElement("img");
    img.src = "paper.png";
    ele.appendChild(img);
    flex.appendChild(ele);

    //create scissors img and button
    ele = document.createElement("button");
    ele.setAttribute("id", "scissors");
    ele.setAttribute("class", "image-btn");
    ele.setAttribute("onclick", "rps(this)")
    img = document.createElement("img");
    img.src = "scissors.png";
    ele.appendChild(img);
    flex.appendChild(ele);

    //create rock img and button 
    ele = document.createElement("button");
    ele.setAttribute("id", "rock");
    ele.setAttribute("class", "image-btn");
    ele.setAttribute("onclick", "rps(this)")
    img = document.createElement("img");
    img.src = "rock.png";
    ele.appendChild(img);
    flex.appendChild(ele);

    start = 0;
}



//Function calculates winner
function rps(yourchoice) {
    
    //start =0 implies its a new game 
    // else we call deleteimages function to restore original state
    if (start === 0) {

        //database to calculate winner 
        // 1 -> win , 0.5->tie  , 0->loss
        var database={
            "rock":{
                "scissors":1,
                "rock":0.5,
                "paper":0
            },
            "paper":{
                "rock":1,
                "paper":0.5,
                "scissors":0
            },
            "scissors":{
                "paper":1,
                "scissors":0.5,
                "rock":0
            },
        };  

        start = 1;

        //computer choice (random) 
        let comp =["rock","scissors","paper"] [Math.floor(Math.random() * 3)];
        console.log(comp);

        var human=yourchoice.id;


        //remove all current images 
        document.getElementById("paper").remove();
        document.getElementById("scissors").remove();
        document.getElementById("rock").remove();

        
        var flex = document.getElementById("flex-box");
        
        //create image based on humanchoice
        let ele = document.createElement("button");
        ele.setAttribute("id", `${human}`);
        ele.setAttribute("class", "image-btn");
        ele.setAttribute("onclick", "rps(this)")
        
        let img = document.createElement("img");
        img.src = `${human}.png`;
        ele.appendChild(img);
        flex.appendChild(ele);
        
        //calculate score
        var score=database[human][comp];


        //if lost
        if (score === 0) {
            console.log("lost");
    
            let comp_chc = document.createElement("img");
            comp_chc.src = `${comp}.png`;
            document.getElementById("flex-box").appendChild(comp_chc);
        
        }
        

        //if win
        else if (comp == 1) {
            console.log("win");
            
            let comp_chc = document.createElement("img");
            comp_chc.src = `${comp}.png`;
            document.getElementById("flex-box").appendChild(comp_chc);
        }
        
        // if tied
        else {
            console.log("tied");
            
            let comp_chc = document.createElement("img");
            comp_chc.src = `${comp}.png`;
            document.getElementById("flex-box").appendChild(comp_chc);
        }
    }

    // restore original state
    else {
        deleteimages();
    }

}