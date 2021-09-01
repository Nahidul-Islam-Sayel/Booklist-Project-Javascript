const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("Shelf Number");
const submit = document.querySelector(".btn");

submit.addEventListener("click",function(e){
  e.preventDefault();
  const newrow = document.createElement('tr');
  const newtitle=document.createElement('th');
  newtitle.innerHTML=title.value;
  newrow.appendChild(newtitle);
  const newauthor=document.createElement('th');
  newauthor.innerHTML=author.value;
  newrow.appendChild(newauthor);
  const newshelf=document.createElement('th');
  newshelf.innerHTML=year.value;
  newrow.appendChild(newshelf);
  booklist.appendChild(newrow);
  
})
