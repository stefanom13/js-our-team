const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name:'Walter Gordon',
      role:'Office Manager',
      image:'walter-gordon-office-manager.jpg',
    },
    {
      name:'Angela Lopez',
      role:'Social Media Manager',
      image:'angela-lopez-social-media-manager.jpg',
    },
    {
      name:'Scott Estrada',
      role:'Developer',
      image:'scott-estrada-developer.jpg',
    },
    {
      name:'Barbara Ramos',
      role:'Graphic Designer',
      image:'barbara-ramos-graphic-designer.jpg',
    },
  ];

  // selezionare class presente in html che contiene la card
  const teamContaier = document.querySelector('.team-container')

  // usare la card esistente  e per ogni elemento creare nuova card ed inserirla nel dom
  
for (let i = 0; i < team.length; i++) {
  // vado a riprendere gli elementi presenti nell array team
  const teamMember = team [i];
  const name = teamMember.name
  const role = teamMember.role
  const image = teamMember.image

  const htmlCard = `
    <div class="team-card">
     <div class="card-image">
       <img
         src="img/${ image }"
         alt="${ name }"
       />
     </div>
     <div class="card-text">
       <h3>${ name }</h3>
       <p>${ role }</p>
     </div>
   </div>`;

   teamContaier.innerHTML += htmlCard;
  //  inserisco le img nel team-conteiner

}
  
  
  // metodo alernativo con funzione 
  
  // function gethtmlCard (teamMember){
    //  const name = teamMember.name
    //  const image = teamMember.image
    //  const role = teamMember.role

    //  return `
    //  <div class="team-card">
    //   <div class="card-image">
    //     <img
    //       src="img/${ image }"
    //       alt="${ name }"
    //     />
    //   </div>
    //   <div class="card-text">
    //     <h3>${ name }</h3>
    //     <p>${ role }</p>
    //   </div>
    // </div>`;
 
  // }
  
  



  // metodo alernativo con funzione  per aggiungere nuovo membro
  
  // function newteamember (name role image){
    //  const name = teamMember.name
    //  const image = teamMember.image
    //  const role = teamMember.role

    //  return `
    //  name = name
    // image = image 
    // role = role
  // }

  // }
  
  // const newMember = newteamember ('pippo,''image''role')
  