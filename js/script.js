let listaCurso = [
    {
        "nome": "Java Script",
        "img": "img/capa-java-script.png",
        "desenvolvimento": "Front-End"
    },
    {
        "nome": "Angular",
        "img": "img/capa-angular.png",
        "desenvolvimento": "Front-End"
    },
    {
        "nome": "Docker",
        "img": "img/capa-docker.png",
        "desenvolvimento": "Back-End"
    },{
        "nome": "PostgreSQL",
        "img": "img/capa-postgresql.png",
        "desenvolvimento": "Back-End"
    },{
        "nome": "Type Script",
        "img": "img/capa-typescript.png",
        "desenvolvimento": "Front-End"
    },
    {
        "nome": "Django",
        "img": "img/capa-django.png",
        "desenvolvimento": "Back-End"
    },
    {
        "nome": "Php",
        "img": "img/capa-php.png",
        "desenvolvimento": "Back-End"
    },
    {
        "nome": "Laravel",
        "img": "img/capa-laravel.png",
        "desenvolvimento": "Back-End"
    },{
        "nome": "??????",
        "img": "img/capa-breve.png",
        "desenvolvimento": "????"
    },{
        "nome": "??????",
        "img": "img/capa-breve.png",
        "desenvolvimento": "????"
    },
    {
        "nome": "??????",
        "img": "img/capa-breve.png",
        "desenvolvimento": "????"
    },
    {
        "nome": "??????",
        "img": "img/capa-breve.png",
        "desenvolvimento": "????"
    },
    

]
listaCurso.map((curso)=>{
    let capaCurso = document.getElementById("cursos");
    capaCurso.innerHTML += `<div class="col-md-2">
    <div class="card" style="width: 9rem; right:auto;">
        <img src="${curso.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${curso.nome}</h5>
          
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
})