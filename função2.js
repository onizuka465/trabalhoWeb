
//função de mudar tema

function applyTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}


function toggleTheme() {
    if (document.body.classList.contains('light-theme')) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    }
}

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', toggleTheme);

const savedTheme = localStorage.getItem('theme');
console.log(savedTheme)
applyTheme();

//função de pop-up

document.querySelectorAll('.receita').forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault();
      const detalhes = item.nextElementSibling.cloneNode(true);
      detalhes.style.display = 'block'; 
      document.querySelector('.popup').innerHTML = '';
      document.querySelector('.popup').appendChild(detalhes);
      document.querySelector('.overlay').style.display = 'block';
      document.querySelector('.popup').style.display = 'block';
    });
  });

  document.querySelector('.overlay').addEventListener('click', () => {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.popup').style.display = 'none';
  });
//função para abas e favoritar

  function showReceitasGeral(){
    let sectionReceitaPerfil = document.getElementById("ReceitasGeral")
    sectionReceitaPerfil.style.display="block"
    let sectionReceitasFavoritas = document.getElementById("ReceitasFavoritas")
    sectionReceitasFavoritas.style.display="none"
  }

  function showReceitasFavoritas(){
    let sectionReceitaFavoritas = document.getElementById("ReceitasFavoritas")
    sectionReceitaFavoritas.style.display="block"
    let sectionReceitasGeral = document.getElementById("ReceitasGeral")
    sectionReceitasGeral.style.display="none"
  }
  function moverParaFavoritas(id) {
    var receita = document.getElementById(id);
    var favoritas = document.getElementById('ReceitasFavoritas');

        var clone = receita.cloneNode(true);

        favoritas.appendChild(clone);

    var removerButton = document.createElement('button');
    removerButton.textContent = 'Remover das Favoritas';
    removerButton.onclick = function() {
        favoritas.removeChild(clone);
        this.style.display = 'none'; 
    };
    clone.appendChild(removerButton);
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    alert('Mensagem enviada!');

    document.getElementById('mensagem').value = '';
});