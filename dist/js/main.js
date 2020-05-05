const jobsListings = [
  {
    id: 1,
    company: "Photosnap",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    company: "Manage",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "./images/account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "./images/myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "./images/loop-studios.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "FullStack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "./images/faceit.svg",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: "./images/shortly.svg",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: "./images/insure.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue, Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "./images/eyecam-co.svg",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "./images/the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];

function checkIfLanguagesExists(listingData) {
  if (listingData.languages) {
    return listingData.languages;
  } else {
    return [];
  }
}
// console.log(checkIfLanguagesExists(dataJSON[0]));

function checkIfToolsExists(listingData) {
  if (listingData.tools) {
    return listingData.tools;
  } else {
    return [];
  }
}
// console.log(checkIfToolsExists(dataJSON[0]));

function getjobListingHTML(listingData) {
  console.log(listingData);
  const categoriesPlaceholder = "###CATEGORIES###";
  let jobListingHTML = `
  <section class="listing">
      <div class="container">
        <img src="${listingData.logo}" alt="${listingData.company}" />
        <div class="info-company">
            <span class="name">${listingData.company}</span>
            <span class="new">New !</span>
            <span class="featured">Featured</span>
        </div>
        <div class="job-name">
            <p class="name">${listingData.position}</p>
        </div>
        <div class="alt-infos">
            <span class="content">${listingData.postedAt}</span>
            <span class="content dotted">${listingData.contract}</span>
            <span class="content">${listingData.location}</span>
        </div>
    
        <ul class="categories">
          ${categoriesPlaceholder}
        </ul>
      </div>
  </section>
  `;

  const categoriesArray = [
    listingData.role,
    listingData.level,
    // checkIfLanguagesExists(listingData),
    // checkIfToolsExists(listingData),
    ...(listingData.languages || []),
    ...(listingData.tools || []),
  ];

  const passesFilter = !filterC;

  const categoryString = categoriesArray.reduce((acc, currentCategory) => {
    console.log(getCategoriesHTML(currentCategory));
    return acc + getCategoriesHTML(currentCategory);
  }, "");

  return jobListingHTML.replace(categoriesPlaceholder, categoryString);
}

function getCategoriesHTML(categories = [], closeItem = "item") {
  return `<li class="${closeItem}">
        ${categories}
      </li>`;
}

function setJobsListings(filterTags) {
  const jobsListingsHTML = jobsListings.reduce((acc, filterTags) => {
    return acc + getjobListingHTML(filterTags);
  }, "");

  document.getElementById("jobs").innerHTML = jobsListingsHTML;
}

// Fonction qui 'toogle' la valeur lorsqu'on click sur un élément du tableau
// des catégories

function getAllSearchBar(targetCategory) {
  // On selectionne le point d'injection
  searchContainerEl = document.querySelector(".list-categories");

  // ON prepare un tableau filtrant
  let searchBarTags = Array.from(searchContainerEl.children)
    .map((node) => node.innerHTML && node.innerHTML.trim())
    .filter((category) => !!category);
  console.log(searchBarTags);

  // Si le tableau contient une catégorie selectionner comme filtre
  if (searchBarTags.includes(targetCategory)) {
    // Le tableau est filtrer avec la condition que la category appartenent au // tableau doit être différent de la catégorie 'clicker'.
    searchBarTags = searchBarTags.filter(
      (category) => category !== targetCategory
    );
  } else {
    // On ajoute la catégorie au tableau
    searchBarTags = [...searchBarTags, targetCategory];
  }

  return searchBarTags;
  // On prépare l'HTML à injecter (categorie)
  // const closeCategoriesHTML = getCategoriesHTML(
  //   targetEl.innerHTML,
  //   "close-item"
  // );
  // console.log(searchContainerEl.innerHTML);
  // On le rajoute dans la modal de recherche
  // searchContainerEl.innerHTML =
  //   searchContainerEl.innerHTML + closeCategoriesHTML;
}

// Récuperer lelement catgorie au click sur l'ecran

window.addEventListener("click", (event) => {
  console.log(event.target);
  // Onrecupere notre categorie
  targetEl = event.target;
  targetCategory = event.target.innerHTML.trim();
  const categoryClasses = ["item", "close-item"];
  // Si on click sur la searchBar pour supp un element du filtre courant
  if (!categoryClasses.some((c) => targetEl.classList.contains(c))) {
    return;
  }

  const searchBarTags = toogleSearchBar(targetCategory);

  searchContainerEl.innerHTML = searchBarTags.reduce((acc, currentCategory) => {
    return acc + getCategoriesHTML(currentCategory, "close-item");
  }, "");

  setJobsListings();
});
