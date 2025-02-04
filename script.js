document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const startButton = document.getElementById('startButton');

    function showSlide(n) {
      slides.forEach(slide => slide.classList.remove('active'));
      slides[n].classList.add('active');
    }

    startButton.addEventListener('click', function () {
       showSlide(currentSlide = 1);
       document.querySelector('header').remove();
        createTimeline();
        createChart();
        createInfographic();
        createQuiz();
        createMapContainer();
        createComments();
    });
   function createTimeline() {
       const timeline = document.getElementById('timeline');
    fetch('data.json')
    .then(response => response.json())
      .then(data => {
            data.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.classList.add('timeline-item');

        const yearElement = document.createElement('h3');
        yearElement.textContent = item.year;
          const textElement = document.createElement('p');
          textElement.textContent = item.text;
           const imgElement = document.createElement('img');
           imgElement.src = item.url;
          imgElement.alt= item.alt;

         timelineItem.appendChild(yearElement)
           timelineItem.appendChild(textElement)
          timelineItem.appendChild(imgElement)
        timeline.appendChild(timelineItem);
      });
      });
    }
    function createChart(){
        const chartContainer = document.getElementById('chartContainer');
        chartContainer.innerHTML = "Aqui será mostrado um gráfico animado com dados das rendas per capita";
    }
    function createInfographic(){
         const infographic = document.getElementById('infographic');
        infographic.innerHTML = "Aqui será mostrado um infográfico interativo sobre as fases da Revolução Industrial";
    }
     function createQuiz(){
        const quizContainer = document.getElementById('quizContainer');
        quizContainer.innerHTML = "Aqui será mostrado um quiz sobre a Revolução Industrial";
    }
    function createMapContainer() {
       const mapContainer = document.getElementById('mapContainer');
       fetch('data.json')
        .then(response => response.json())
          .then(data => {
                const mapUrl = data.map_url;
              const mapElement = document.createElement('img');
              mapElement.src = mapUrl;
              mapElement.alt = 'Mapa de zonas industriais no mundo';
               mapContainer.appendChild(mapElement);
           });
    }
    function createComments(){
        const commentArea = document.getElementById('commentArea');
        commentArea.innerHTML = "<input type='text' placeholder='Envie seu comentário'><br><button>Comentar</button>";
    }
});