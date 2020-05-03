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
            '###CATEGORIES###'
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

  const categoryString = categoriesArray.reduce((acc, currentCategory) => {
    console.log(getCategoriesHTML(currentCategory));
    return acc + getCategoriesHTML(currentCategory);
  }, "");

  return jobListingHTML.replace(categoriesPlaceholder, categoryString);
}

function getCategoriesHTML(categories) {
  return `<li class="item">
        ${categories}
      </li>`;
}

const jobsListingsHTML = jobsListings.reduce((acc, currentListing) => {
  return acc + getjobListingHTML(currentListing);
}, "");

document.getElementById("jobs").innerHTML = jobsListingsHTML;
