const table = document.getElementById("tBody");

fetch("http://127.0.0.1:8000/api/attendance/")
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const row = document.createElement("tr");
      row.setAttribute("class", "table-row");
      let classStatus = "";
      if (item.status == "غیبت") {
        classStatus = "red";
      } else if (item.status == "حضور") {
        classStatus = "green";
      } else if (item.status.includes("تعطیل")) {
        classStatus = "yellow";
      } else {
        classStatus = "blue";
      }
      row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.day}</td>
        <td>${item.date}</td>
        <td class="${classStatus}">${item.status}</td>

        <td class="padding0 flex">
            <div>${item.t1_in}</div>
            <div>${item.t1_out}</div>
        </td>
        <td class="padding0 flex">
            <div>${item.t2_in}</div>
            <div>${item.t2_out}</div>
        </td>
        <td class="padding0 flex">
            <div>${item.t3_in}</div>
            <div>${item.t3_out}</div>
        </td>

        <td>${item.official_duty}</td>
        <td>${item.presence}</td>
        <td>${item.work}</td>
        <td>${item.delay}</td>
        <td>${item.early}</td>
        <td>${item.underwork}</td>
        <td>${item.between_underwork}</td>
        <td>${item.early_overtime}</td>
        <td>${item.overtime}</td>
        <td>${item.illegal_overtime}</td>
        <td>${item.fixed_overtime}</td>
      `;
      table.appendChild(row);
    });
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });

