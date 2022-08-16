function loadTable() {
  let data = [
    {
      machine_name: ["Auto Winding Machine", "Boiler Machine"],
      machine_id: ["machine001", "machine002"],
      "energy_consumption(kWh)": { Today: [0, 0], MTD: [0, 0], YTD: [0, 0] },
      "active_power(MW)": [0, 0],
      "apparent_power(MVA)": [0, 0],
      "reactive_power(MVAr)": [0, 0],
      "current(Amps)": [0, 0],
      "voltage(Volts)": [0, 0],
      power_factor: [0, 0],
      idle_time: { Today: [0, 0], MTD: [0, 0], YTD: [0, 0] },
    },
  ];
  let obj = data[0];

  const table = document.createElement("table");

  let tr = table.insertRow(-1);

  Object.keys(obj).map((k) => {
    console.log(k.replace(/_/g, " "));
    const th = document.createElement("th");
    th.innerHTML = k.replace(/_/g, " ");
    tr.appendChild(th);

    if (!Array.isArray(obj[k])) {
      // console.log(obj[k]);

      // tr = table.insertRow(-1);
      // var tabCell = tr.insertCell(-1);
      // tabCell.innerHTML = obj[k];
      Object.keys(obj[k]).map((j) => {
        console.log(j);
        for (let i = 0; i < obj[k].length; i++) {
          const element = obj[k][j];
          console.log(element);
        }
      });
    } else {
      let tr = table.insertRow(-1);
      for (let i = 0; i < obj[k].length; i++) {
        const element = obj[k][i];

        // let tabCell = tr.insertCell(-1);
        let td = document.createElement("td");
        td.innerHTML = element;
        tr.appendChild(td);
        console.log(element);
      }
    }
  });

  const divContainer = document.getElementById("root");
  divContainer.innerHTML = "";
  divContainer.appendChild(table);
}
