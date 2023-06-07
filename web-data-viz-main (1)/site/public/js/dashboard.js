const labels = ["jogo1", "jogo2", "jogo3","jogo4","jogo5"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "gols feitos",
      backgroundColor: "rgb(0,0,255)",
      borderColor: "rgb(0,0,255)",
      data: [4, 2, 5, 1, 3],
    },
    {
      label: "gols sofridos",
      backgroundColor: "#ff0000",
      borderColor: "#ff0000",
      data: [3,4,2,5,1],
    }
  ],
};

const config = {
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

  
  const myChart = new Chart(document.getElementById("myChart"), config);
