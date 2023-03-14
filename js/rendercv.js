const loadJson = () => {
  fetch("/assets/cv.json")
    .then((response) => response.json())
    .then((data) => {
      renderData(data);
    });
};

const renderData = (jsonData) => {
  // Render contact data
  document.getElementById("name").innerHTML = jsonData.contact.name;
  document.getElementById("title").innerHTML = jsonData.contact.title;
  document.getElementById("contactinfo").innerHTML = `
  📧
            <a href="mailto:${jsonData.contact.email}?subject=Hello!"
              >${jsonData.contact.email}</a
            ><br />
            📞 <a href="tel:${jsonData.contact.phone}">${jsonData.contact.phone}</a><br />
            🌐
            <a
              href="https://${jsonData.contact.web}" 
              target="_blank"
              rel="noopener noreferrer"
              >${jsonData.contact.web}</a
            ><br />
  `;
  // Loop and render education elements
  jsonData.education.forEach((element) => {
    document.getElementById("education").innerHTML += `
        <p>
            ${element.title}<br />
            ${element.during}<br />
            ${element.description}
        </p>
    `;
  });

  // Loop and render work elements
  jsonData.work.forEach((element) => {
    document.getElementById("work").innerHTML += `
        <p>
            ${element.title}<br />
            ${element.employer}<br />
            ${element.during}<br />
            ${element.description}
        </p>
    `;
  });

  // Loop and render other exp. elements
  jsonData.other.forEach((element) => {
    document.getElementById("other").innerHTML += `
        <p>
            ${element.title}<br />
            ${element.place}<br />
            ${element.during}<br />
            ${element.description}
        </p>
    `;
  });
};

loadJson();
