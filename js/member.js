function memberThumbnail(member) {
  const thumbnail = `
    <div class="br-1 col-12 col-xs-6 col-md-4 col-lg-3 col-xxl-2 gap-2 " >
      <div class="thumbnail_overlay thumbnail_border thumbnail_br">
          <picture>
              <source type="image/webp"
                  srcset="
                      ./img/informative/member/${member.id}/webp/${member.id}_256.webp 256w,
                      ./img/informative/member/${member.id}/webp/${member.id}_512.webp 512w"

                  sizes="
                      (min-width: 996px) calc((100vw - 8.88rem * 2 - 1.5rem * 3) / 4),
                      (min-width: 768px) calc((100vw - 6.5rem * 2 - 1.5rem * 2) / 3),
                      (min-width: 480px) calc((100vw - 2.8rem * 2 - 1.5rem * 1) / 2),
                      calc((100vw - 1.69rem * 2 - 0rem * 0) / 1)"/>
              <source type="image/jpg"
                  srcset="
                      ./img/informative/member/${member.id}/jpg/${member.id}_256.jpg 256w,
                      ./img/informative/member/${member.id}/jpg/${member.id}_512.jpg 512w"
                  sizes="
                      (min-width: 996px) calc((100vw - 8.88rem * 2 - 1.5rem * 3) / 4),
                      (min-width: 768px) calc((100vw - 6.5rem * 2 - 1.5rem * 2) / 3),
                      (min-width: 480px) calc((100vw - 2.8rem * 2 - 1.5rem * 1) / 2), 
                      calc((100vw - 1.69rem * 2 - 0rem * 0) / 1)"/>
                  <img src="./img/informative/member/${member.id}/jpg/${member.id}_512.jpg"
                          alt="Image of ${member.first_name} ${member.last_name}"
                          height="512"
                          width="512">             
          </picture>
          <div class ="thumbnail_box">
              <p class="thumbnail_name"> ${member.first_name} ${member.last_name}</p>
              <span class="thumbnail_email">${member.mail}@du.se</span>
          </div>
      </div>
    </div>
  `;
  return thumbnail;
}

function addMemberThumbnails(members) {
  let output = "";

  members.forEach(function (member) {
    output += memberThumbnail(member);
  });

  return output;
}

const gallery = document.querySelector(".gallery");

const members = [
  {
    id: "000000",

    eid: "zero",

    first_name: "Alexander",

    last_name: "Karlsson",

    gender: "Male",

    mail: "alk",
  },

  {
    id: "000001",

    eid: "one",

    first_name: "Robin",

    last_name: "Vredeskog",

    gender: "Male",

    mail: "rov",
  },

  {
    id: "000002",

    eid: "two",

    first_name: "Jane",

    last_name: "Sarani",

    gender: "Other",

    mail: "jas",
  },

  {
    id: "000003",

    eid: "three",

    first_name: "Nynaeve",

    last_name: "Al'Meara",

    gender: "Female",

    mail: "nya",
  },

  {
    id: "000004",

    eid: "four",

    first_name: "Ida",

    last_name: "Olsen",

    gender: "Female",

    mail: "ido",
  },

  {
    id: "000005",

    eid: "five",

    first_name: "Jonathan",

    last_name: "Eriksson",

    gender: "Male",

    mail: "joe",
  },

  {
    id: "000006",

    eid: "six",

    first_name: "Isak",

    last_name: "Rapp",

    gender: "Other",

    mail: "isr",
  },

  {
    id: "000007",

    eid: "seven",

    first_name: "Min",

    last_name: "Farshaw",

    gender: "Female",

    mail: "mif",
  },

  {
    id: "000008",

    eid: "eight",

    first_name: "Filippa",

    last_name: "Masonei",

    gender: "Female",

    mail: "fim",
  },

  {
    id: "000009",

    eid: "nine",

    first_name: "Elayne",

    last_name: "Trakand",

    gender: "Female",

    mail: "elt",
  },

  {
    id: "000010",

    eid: "ten",

    first_name: "Perrin",

    last_name: "Aybara",

    gender: "Male",

    mail: "pea",
  },

  {
    id: "000011",

    eid: "eleven",

    first_name: "Tuon",

    last_name: "Athaem",

    gender: "Other",

    mail: "tua",
  },

  {
    id: "000012",

    eid: "twelve",

    first_name: "Kamarile",

    last_name: "Maradim",

    gender: "Female",

    mail: "kam",
  },

  {
    id: "000013",

    eid: "thirteen",

    first_name: "Fail",

    last_name: "Bashere",

    gender: "Female",

    mail: "fab",
  },

  {
    id: "000014",

    eid: "fourteen",

    first_name: "Tom",

    last_name: "Bombadill",

    gender: "Other",

    mail: "tob",
  },

  {
    id: "000015",

    eid: "fifteen",

    first_name: "Elan",

    last_name: "Morin Tedronai",

    gender: "Other",

    mail: "elm",
  },

  {
    id: "000016",

    eid: "sixteen",

    first_name: "Mierin",

    last_name: "Eronaile",

    gender: "Female",

    mail: "mie",
  },

  {
    id: "000017",

    eid: "seventeen",

    first_name: "Barid Bel",

    last_name: "Medar",

    gender: "Male",

    mail: "bam",
  },
];

gallery.insertAdjacentHTML("beforeend", addMemberThumbnails(members));
