//your JS code here. If required.
let title='';
let author='';
let isbn='';

const tbody = document.querySelector('#book-list');

document.getElementById('submit').addEventListener('click',()=>{
    title=document.getElementById('title').value.trim();
    author=document.getElementById('author').value.trim();
    isbn=document.getElementById('isbn').value.trim();
    console.log(title,author,isbn);
    

    if(!author || !title || !isbn){
        alert("Fields are Empty");
        return;
    }

    const row = document.createElement('tr');
    row.innerHTML=`
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="btn btn-danger delete" >X</button></td>
    `;
    row.querySelector('.delete').onclick=()=>{
        row.remove();
    }
    tbody.appendChild(row);
})