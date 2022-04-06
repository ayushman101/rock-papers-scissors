let start = 0;

function deleteimages() {
    var flex = document.getElementById("flex-box");
    let e = flex.lastElementChild;
    while (e) {
        flex.removeChild(e);
        e = flex.lastElementChild;
    }


    let ele = document.createElement("button");
    ele.setAttribute("id", "btn-0");
    ele.setAttribute("class", "image-btn");
    ele.setAttribute("onclick", "hand()")
    let img = document.createElement("img");
    img.src = "hand.png";
    ele.appendChild(img);
    flex.appendChild(ele);

    ele = document.createElement("button");
    ele.setAttribute("id", "btn-1");
    ele.setAttribute("class", "image-btn");
    ele.setAttribute("onclick", "scissors()")
    img = document.createElement("img");
    img.src = "scissors.png";
    ele.appendChild(img);
    flex.appendChild(ele);

    ele = document.createElement("button");
    ele.setAttribute("id", "btn-2");
    ele.setAttribute("class", "image-btn");
    ele.setAttribute("onclick", "rock()")
    img = document.createElement("img");
    img.src = "rock.png";
    ele.appendChild(img);
    flex.appendChild(ele);

    start = 0;
}




function hand() {
    if (start === 0) {
        start = 1;
        let comp = Math.floor(Math.random() * 3);
        console.log(comp);
        document.getElementById("btn-1").remove();
        document.getElementById("btn-2").remove();

        if (comp === 0) {
            console.log("tied");
            let comp_chc = document.createElement("img");
            comp_chc.src = "hand.png";
            document.getElementById("flex-box").appendChild(comp_chc);
            comp_chc.setAttribute("id", "btn-3");
        }
        else if (comp == 1) {
            console.log("lost");
            let comp_chc = document.createElement("img");
            comp_chc.src = "scissors.png";
            document.getElementById("flex-box").appendChild(comp_chc);
        }
        else {
            console.log("win");
            let comp_chc = document.createElement("img");
            comp_chc.src = "rock.png";
            document.getElementById("flex-box").appendChild(comp_chc);
        }
    }

    else {
        deleteimages();
    }

}
function scissors() {
    if (start === 0) {
        start = 1;
        let comp = Math.floor(Math.random() * 3);
        console.log(comp);
        document.getElementById("btn-0").remove();
        document.getElementById("btn-2").remove();

        if (comp === 0) {
            console.log("win");
            let comp_chc = document.createElement("img");
            comp_chc.src = "hand.png";
            document.getElementById("flex-box").appendChild(comp_chc);
            comp_chc.setAttribute("id", "btn-3");
        }
        else if (comp == 1) {
            console.log("tied");
            let comp_chc = document.createElement("img");
            comp_chc.src = "scissors.png";
            document.getElementById("flex-box").appendChild(comp_chc);
        }
        else {
            console.log("lost");
            let comp_chc = document.createElement("img");
            comp_chc.src = "rock.png";
            document.getElementById("flex-box").appendChild(comp_chc);
        }
    }

    else {
        deleteimages();
    }
}
function rock() {
    if (start === 0) {
        start = 1;
        let comp = Math.floor(Math.random() * 3);
        console.log(comp);
        document.getElementById("btn-1").remove();
        document.getElementById("btn-0").remove();

        if (comp === 0) {
            console.log("lost");
            let comp_chc = document.createElement("img");
            comp_chc.src = "hand.png";
            document.getElementById("flex-box").appendChild(comp_chc);
            comp_chc.setAttribute("id", "btn-3");
        }
        else if (comp == 1) {
            console.log("win");
            let comp_chc = document.createElement("img");
            comp_chc.src = "scissors.png";
            document.getElementById("flex-box").appendChild(comp_chc);
        }
        else {
            console.log("tie");
            let comp_chc = document.createElement("img");
            comp_chc.src = "rock.png";
            document.getElementById("flex-box").appendChild(comp_chc);
        }
    }

    else {
        deleteimages();
    }
}
