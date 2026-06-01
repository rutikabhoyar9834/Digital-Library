let search=document.getElementById("Searchbar")
search.addEventListener("keyup",function(){
    let value=search.value.toLowerCase()
    let cards=document.querySelectorAll(".card")
    cards.forEach(function(card){
        let text=card.innerText.toLowerCase()
        if(text.includes(value)){
            card.style.display="block"
        }else{
            card.style.display="none"
        }
    });
});
function filterBooks(category){
    let cards=document.querySelectorAll(".card")
    cards.forEach(function(card){
        if(category=="all" || card.dataset.category==category){
            card.style.display="block"
        }else{
            card.style.display="none"
        }
    });
}
function issueBook(btn){
    let book=btn.parentElement.querySelector("h3").innerText
    let list=document.getElementById("issuedList")
    if(list.innerHTML.includes("No books issued yet")){
        list.innerHTML="";
    }
    let li=document.createElement("li")
    li.innerHTML=`${book}
    <button class="returnBtn" onclick="returnBook(this)">Return</button>`;
    list.appendChild(li)
    btn.innerText="Issued"
    btn.disabled=true
}
function returnBook(btn){
    btn.parentElement.remove()
    let list=document.getElementById("issuedList")
    if(list.children.length==0){
        list.innerHTML=
        '<li class="empty">No books issued yet</li>'
    }
    alert("Book Returned Successfully")
}
