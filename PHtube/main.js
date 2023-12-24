let apiData = {}; // Initialize an empty object to store the data

// Make a GET request to the API
fetch("https://openapi.programming-hero.com/api/videos/category/1000")
  .then((response) => {
    // Check if the request was successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON data from the response
    return response.json();
  })
  .then((data) => {
    // Store the data in the object
    apiData = data;
    displayData(apiData.data);
  })
  .catch((error) => {
    // Handle errors
    console.error("Error fetching data:", error);
  });

const displayData = (data) => {
  let cardsContainer = document.querySelector(".cardsContainer");

  data.forEach((item) => {
    console.log(item);
    const card = document.createElement("div");
    card.classList.add("itemCard");
    card.innerHTML = `
        <img src=${item.thumbnail} id="thumbnail" alt=${item.others.title} />
        <div class="cardBottom">
          <div class="cardTitle">
            <img src=${item.authors[0].profile_picture} id="profilePic" alt=${item.authors[0].profile_name} />
            <p class="title">${item.title}</p>
          </div>
          <div class='verify'>
            <p class="id">${item.authors[0].profile_name}</p>
          </div>
          <p class="views">${item.others.views} views</p>
        </div>
      `;

    cardsContainer.appendChild(card);

    // Select the verify element within the current card
    const verification = card.querySelector(".verify");

    const verifyImage = document.createElement("img");
    verifyImage.src = "fi_10629607.svg";

    if (item.authors[0].verified == true) {
      verification.appendChild(verifyImage);
    }
  });
};
