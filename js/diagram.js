 //Готовим диаграмму
 function Diagram () {
  var ctx = document.getElementById("myChart");
  var myChart = new Chart (ctx, {
   type: 'line',
   data: {
    labels: [], //Подписи оси x
    datasets: [
     {
      label: 'f(sin(x))', //Метка
      data: [], //Данные
      borderColor: 'blue', //Цвет
      borderWidth: 2, //Толщина линии
      fill: false //Не заполнять под графиком
     }
     //Можно добавить другие графики
    ]
   },
   options: {
    responsive: false, //Вписывать в размер canvas
    scales: {
     xAxes: [{
      display: true
     }],
     yAxes: [{
      display: true
     }]
    }
   }
  });
  //Заполняем данными
  for (var x = 0.0; x<=2*Math.PI; x+=Math.PI/10) {
   myChart.data.labels.push(''+x.toFixed(2));
   myChart.data.datasets[0].data.push(f(x).toFixed(2));
  }
  //Обновляем
  myChart.update();

  function f(x) { //Вычисление нужной функции
   return Math.sin(x);
  }
 }

 //Ставим загрузку диаграммы на событие загрузки страницы
 window.addEventListener("load", Diagram); 