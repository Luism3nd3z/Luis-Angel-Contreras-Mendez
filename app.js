const container = document.querySelector(".container");
const curriculumData = [
  {
    section: "Información Personal",
    content: [
      "Nombre: Luis Angel Contreras Mendez",
      "Correo Electrónico: luis@email.com",x
      "Teléfono: (123) 456-7890",
      "Dirección: Calle Principal, Ciudad, País",
    ],
  },
  {
    section: "Experiencia Laboral",
    content: [
      {
        position: "Desarrollador Web - ABC Company",
        date: "Enero 2020 - Presente",
        description: "Desarrollo de aplicaciones web utilizando HTML, CSS, JavaScript, etc.",
      },
      // Agrega más experiencias laborales aquí si es necesario
    ],
  },
  {
    section: "Educación",
    content: [
      {
        degree: "Grado en Informática",
        institution: "Universidad XYZ",
        date: "2016 - 2020",
        title: "Licenciado en Informática",
      },
      // Agrega más información sobre tu educación aquí si es necesario
    ],
  },
  {
    section: "Habilidades",
    content: [
      "HTML5 y CSS3",
      "JavaScript (ES6+)",
      "Desarrollo web responsive",
      "Gestión de proyectos",
    ],
  },
];

function createCurriculumSection(sectionData) {
  const section = document.createElement("section");
  section.innerHTML = `<h2>${sectionData.section}</h2>`;
  
  if (sectionData.section === "Experiencia Laboral" || sectionData.section === "Educación") {
    const ul = document.createElement("ul");
    
    sectionData.content.forEach((item) => {
      const li = document.createElement("li");
      if (sectionData.section === "Experiencia Laboral") {
        li.innerHTML = `<h3>${item.position}</h3>
                        <p>Fecha: ${item.date}</p>
                        <p>Descripción: ${item.description}</p>`;
      } else if (sectionData.section === "Educación") {
        li.innerHTML = `<h3>${item.degree} - ${item.institution}</h3>
                        <p>Fecha: ${item.date}</p>
                        <p>Título: ${item.title}</p>`;
      }
      ul.appendChild(li);
    });

    section.appendChild(ul);
  } else {
    sectionData.content.forEach((item) => {
      const p = document.createElement("p");
      p.textContent = item;
      section.appendChild(p);
    });
  }

  return section;
}

curriculumData.forEach((sectionData) => {
  const curriculumSection = createCurriculumSection(sectionData);
  container.appendChild(curriculumSection);
});
app.js