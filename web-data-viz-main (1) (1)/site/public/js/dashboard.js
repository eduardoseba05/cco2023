const labels = ["Fluminense", "Cruzeiro ", "Cruzeiro ","Corinthians ","Palmeiras ", "Corinthians ", "Palmeiras ", "Flamengo ", "Flamengo ", "Atlético-MG", "Palmeiras"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Pontuação",
      backgroundColor: "rgb(140, 46, 194)",
      borderColor: "rgb(140, 46, 194)",
      data: [77 , 76 , 80 , 81 , 80 , 72 , 80 , 90 , 71 , 84 , 81],
    },
    // {
    //   label: "gols sofridos",
    //   backgroundColor: "#ff0000",
    //   borderColor: "#ff0000",
    //   data: [3,4,2,5,1],
    // }
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    scales: {
      // y: {
      //   beginAtZero: true
      // }

    }
  },
  };

  
  const myChart = new Chart(document.getElementById("myChart"), config);

  
      


