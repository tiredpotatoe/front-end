let container = document.getElementById("course-container");
let coursesPerPage = 6;
let currentPage = 1;


function renderPage(page) {
  container.innerHTML = "";

  let startIndex = (page - 1) * coursesPerPage;
  let endIndex = startIndex + coursesPerPage;
  let paginatedCourses = data.slice(startIndex, endIndex);

  paginatedCourses.forEach(course => {
    let card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="card-img-div">
        <img src="pictures/temp-pic.png" alt="${course.course_title}" />
      </div>
      <div class="card-desc">
        <div class="card-title"><h2>${course.course_title}</h2></div>
        <div class="card-author">${course.course_instructors.join("، ")}</div>
        <div class="flex" style="font-size: 17px;">
          <div class="rating gap3">
            <div class="star-icon left-2em"><img src="pictures/stars.png" alt=""></div>
            <div class="card-rating">${course.course_rate ? course.course_rate.toFixed(1) : "بدون امتیاز"}</div>
            <div class="gray">(<span class="card-rating-count">${course.course_rate_count}</span>)</div>
          </div>
          <div class="gap3">
            <div class="left-2em"><img src="pictures/clock-icon.png" alt=""></div>
            <div class="white">مدت دوره:</div>
            <div class="gray"><span class="course-duration">${course.course_duration}</span> ساعت</div>
          </div>
          <div class="gap3">
            <div class="left-2em"><img src="pictures/graph-icon.png" alt=""></div>
            <div class="white">سطح:</div>
            <div class="course-level gray">${course.course_level}</div>
          </div>
        </div>

        <div class="flex" style="justify-content: space-between; font-size: 17px;">
          <div class="gap3">
            <div class="white expenses">هزینه:</div>
            <div class="gray"><span class="course-price">${course.course_price.toLocaleString()} </span> تومان</div>
          </div>

          <div class="flex">
            <button class="more-info-btn">اطلاعات بیشتر ></button>
          </div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

renderPage(1);

document.getElementById("pageOne").addEventListener("click", () => renderPage(1));
document.getElementById("pageTwo").addEventListener("click", () => renderPage(2));
document.getElementById("pageThree").addEventListener("click", () => renderPage(3));
document.getElementById("pageFour").addEventListener("click", () => renderPage(4));
