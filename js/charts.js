new Chartist.Line('#project-I-grades', {
    labels: ['Proyecto I', 'Proyecto II', 'PROYAT'],
    series: [
      [5, 5.5, 6.5],
      [4.5, 5.7, 5.5],
      [7, 6, 6],
      [5,4,2],
      [4,5.5,5],
      [7,5,7],
      [4.2,5.3,7],
      [6,6.5,4],
      [4.3,5.1,4.1],
      [4,4,2]
    ]
  }, {
    fullWidth: true,
    chartPadding: {
      right: 70
    },
    low: 1.0
  });

new Chartist.Pie('#projects-this-semester', {
    labels: ['Proy. I: 17', 'Proy. II: 10', 'PROYAT: 15'],
    series: [17, 10, 15]
    }, {
    donut: true,
    donutWidth: 60,
    donutSolid: true,
    startAngle: 270,
    showLabel: true,
    chartPadding: 30,
    labelOffset: 50,
    labelDirection: 'explode'
});

new Chartist.Pie('#projects-by-completion-status', {
    labels: ['Dentro del plazo: 173', 'Fuera del plazo: 79', 'En curso: 15'],
    series: [173, 79, 15]
    }, {
    donut: true,
    donutWidth: 60,
    donutSolid: true,
    startAngle: 270,
    showLabel: true,
    chartPadding: 30,
    labelOffset: 50,
    labelDirection: 'explode'
});

var chart = new Chartist.Line('#comparison-with-last-year-by-trimester', {
    labels: ["Primero", "Segundo", "Tercero", "Cuarto"],
    series: [
      [20, 25, 40, 33],
      [15, 8, 23, 52]
    ]
  }, {
    lineSmooth: Chartist.Interpolation.simple({
      divisor: 2
    }),
    fullWidth: true,
    chartPadding: {
      right: 70
    },
    low: 0
  });