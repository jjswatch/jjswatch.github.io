const params = new URLSearchParams(window.location.search);
const id = params.get("id");

apiGet(`/products/${id}/history`).then(data => {
  new Chart(document.getElementById("chart"), {
    type: "line",
    data: {
      labels: data.map(d => d.date),
      datasets: [{
        label: "價格",
        data: data.map(d => d.price),
      }]
    }
  });
});
