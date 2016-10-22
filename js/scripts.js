
var dataArray= [];

//step 2: MAke headers

var headers= ['State', 'GDP per capita'];
dataArray.push(headers);

//I will sort my jSon by GDPPerCapitas
json.sort(function(a,b){
  return b.GDPPerCapita - a.GDPPerCapita;
});

//step 3: Loop through jSon with forEach
json.forEach(function(d){
  dataArray.push([d.State, d.GDPPerCapita]);
});

console.log(dataArray);

google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable(dataArray);

        var options = {
          chartarea : {
            top:0,
            bottom:100,
            right:0,
            left: 180,
          },
          fontSize: 5,
          fontName: "Helvetica"
                };

        var chart = new google.visualization.BarChart(document.getElementById("chart"));

        chart.draw(data, options);
      }
