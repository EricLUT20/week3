import "./styles.css";
async function fetchData() {
  const url =
    "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";
  const data = await fetch(url);
  const dataJSON = await data.json();

  const tableBody = document.getElementById("tbodyData");
  const municipalities = Array.from(
    dataJSON.dataset.dimension.Alue.category.label
  );
  const populationData = dataJSON.dataset.value;

  municipalities.forEach((municipality, index) => {
    const population = populationData[index];
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${municipality}</td>
      <td>${population}</td>
    `;
    tableBody.appendChild(row);
  });
}
fetchData();
