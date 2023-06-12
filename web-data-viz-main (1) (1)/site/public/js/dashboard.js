var labels = [];

var data = {
  labels: labels,
  datasets: [
    {
      label: "gols feitos",
      backgroundColor: "#0000ff",
      borderColor: "#0000ff",
      data: [],
    },
    {
      label: "gols sofridos",
      backgroundColor: "#ff0000",
      borderColor: "#ff0000",
      data: [],
    }
  ],
};

var config = {
  type: "line",
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1
        }
      }

    }
  },
  };

  
  var myChart = new Chart(document.getElementById("myChart"), config);

  
      


