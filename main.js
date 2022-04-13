let start = 0;

function deleteimages() {
    var flex = document.getElementById("flex-box");
    let e = flex.lastElementChild;
    while (e) {
        flex.removeChild(e);
        e = flex.lastElementChild;
    }


    let ele = document.createElement("button");
    ele.setAttribute("id", "paper");
    ele.setAttribute("class", "image-btn");
    ele.setAttribute("onclick", "rps(this)")
    let img = document.createElement("img");
    img.src = "paper.png";
    ele.appendChild(img);
    flex.appendChild(ele);

    ele = document.createElement("button");
    ele.setAttribute("id", "scissors");
    ele.setAttribute("class", "image-btn");
    ele.setAttribute("onclick", "rps(this)")
    img = document.createElement("img");
    img.src = "scissors.png";
    ele.appendChild(img);
    flex.appendChild(ele);

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




function rps(yourchoice) {
    if (start === 0) {
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
        let comp =["rock","scissors","paper"] [Math.floor(Math.random() * 3)];
        console.log(comp);

        var human=yourchoice.id;

        document.getElementById("paper").remove();
        document.getElementById("scissors").remove();
        document.getElementById("rock").remove();

        
        var flex = document.getElementById("flex-box");
        
        let ele = document.createElement("button");
        ele.setAttribute("id", `${human}`);
        ele.setAttribute("class", "image-btn");
        ele.setAttribute("onclick", "rps(this)")
        
        let img = document.createElement("img");
        img.src = `${human}.png`;
        ele.appendChild(img);
        flex.appendChild(ele);
        
        
        var score=database[human][comp];

        if (score === 0) {
            console.log("lost");
    
            let comp_chc = document.createElement("img");
            comp_chc.src = `${comp}.png`;
            document.getElementById("flex-box").appendChild(comp_chc);
        
        }
        
        else if (comp == 1) {
            console.log("win");
            
            let comp_chc = document.createElement("img");
            comp_chc.src = `${comp}.png`;
            document.getElementById("flex-box").appendChild(comp_chc);
        }
        
        else {
            console.log("tied");
            
            let comp_chc = document.createElement("img");
            comp_chc.src = `${comp}.png`;
            document.getElementById("flex-box").appendChild(comp_chc);
        }
    }

    else {
        deleteimages();
    }

}