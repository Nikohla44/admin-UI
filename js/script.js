// CHARTJS LINE
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre"],
        datasets: [{
            label: "Ma moyenne",
            backgroundColor: 'rgba( 138, 13, 249, 0.1)',
            borderColor: 'rgb( 138, 13, 249)',
            data: [0, 5, 10, 15, 20, 25, 30],
        }]
    },

    // Configuration options go here
    options: {}
});

// CHARTJS RADAR
var ctxRadar = document.getElementById('myChartRadar').getContext('2d');
var chart = new Chart(ctxRadar, {
    // The type of chart we want to create
    type: 'radar',

    // The data for our dataset
    data: {
        labels: ["Cours", "Code", "Documentation", "Projet", "Sommeil", "Relax", "Sorties"],
        datasets: [{
            label: "Gestion du temps: Travail",
            backgroundColor: 'rgba(105, 198, 71, 0.1)',
            borderColor: 'rgb(105, 198, 71)',
            data: [50, 80, 80, 50, 30],
        },
        {
            label: "Gestion du temps: Perso",
            backgroundColor: 'rgba(249, 13, 63, 0.1)',
            borderColor: 'rgb(249, 13, 63)',
            data: [20, 0, 10]
        }
      ],
    },


    // Configuration options go here
    options: {}
});


// CHARTJS DOUGHNUT
var ctxRadar = document.getElementById('myChartDoughnut').getContext('2d');
var chart = new Chart(ctxRadar, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ["HTML5", "CSS3", "JavaScript"],
        datasets: [{
            label: "Connaissance",
            data: [40, 40, 20],
            backgroundColor: [
              " #f9800d ",
              " #0d95f9 ",
              "#f9dc0d",
            ]
        }]
    },

    // Configuration options go here
    options: {}
});
