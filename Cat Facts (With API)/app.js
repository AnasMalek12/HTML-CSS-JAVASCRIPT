let url = "https://catfact.ninja/fact";
let imgurl = "https://api.thecatapi.com/v1/images/search";

let btn = document.querySelector("button");
let body = document.querySelector("body")

btn.addEventListener("click", async function(){
    let facts = await getfects();
    let Img = await getImg();
    let div = document.querySelector("div");
    div.innerText = facts;
    body.style.backgroundImage =  `url("${Img}")`;

})


async function getImg() {
    try{
        let res = await axios.get(imgurl);

        return res.data?.[0]?.url ?? "";
    }catch(e){
        
        console.log("error =", err)
        return "No Image Found";
    }
}



async function getfects() {
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch(e){
        
        console.log("error =", err)
        return "No Facts Found";
    }
}