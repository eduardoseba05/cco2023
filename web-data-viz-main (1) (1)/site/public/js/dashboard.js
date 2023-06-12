var labels = ["jogo 1", "jogo 2", "jogo 3","jogo 4","jogo 5"];

var data = {
  labels: labels,
  datasets: [
    {
      label: "gols feitos",
      backgroundColor: "#0000ff",
      borderColor: "#0000ff",
      data: [5,2,1,6,3],
    },
    {
      label: "gols sofridos",
      backgroundColor: "#ff0000",
      borderColor: "#ff0000",
      data: [3,4,2,5,1],
    }
  ],
};

var config = {
  type: "line",
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }

    }
  },
  };

  
  var myChart = new Chart(document.getElementById("myChart"), config);

  
      


