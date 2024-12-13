const thumbs = [
  {
    src: "https://cdn.pixabay.com/photo/2019/10/13/20/28/gorilla-4547188_1280.jpg",
    alt: "A silverback gorilla standing on grass on its hands and feet.",
    width: 100,
    id: "standing",
  },
  {
    src: "unsplash-sikkema-gorilla-closeup.jpg",
    alt: "A closeup of a gorilla with its eyes looking upwards.",
    width: 100,
    id: "closeup",
  },
  {
    src: "https://cdn.pixabay.com/photo/2018/05/04/12/13/gorilla-3373856_1280.jpg",
    alt: "A silverback gorilla laying on a sack and inspecting some grass.",
    width: 100,
    id: "grass",
  },
  {
    src: "unsplash-ungaro-gorilla-leaves.jpg",
    alt: "A fully black gorilla facing to the left. It is surrounded by many plants with many green leaves.",
    width: 100,
    id: "leaves",
  },
  {
    src: "https://cdn.pixabay.com/photo/2020/10/26/08/31/gorilla-5686652_1280.jpg",
    alt: "A gorilla sitting on a rock chewing on what looks like a carrot.",
    width: 100,
    id: "chew",
  },
  {
    src: "https://images5.alphacoders.com/416/416389.jpg",
    alt: "A silverback gorilla sat on a rock on a grassy hill. He is holding a stick and looking curiously towards the camera.",
    width: 100,
    id: "stick",
  },
  {
    src: "https://cdn.pixabay.com/photo/2018/06/22/03/32/gorilla-3489893_1280.jpg",
    alt: "A mother gorilla sits watching her child, who is sat next to her.",
    width: 100,
    id: "mother",
  },
  {
    src: "https://cdn.pixabay.com/photo/2022/05/21/20/43/young-gorilla-7212279_1280.jpg",
    alt: "An infant gorilla sitting on a log. It is chewing on a plant.",
    width: 100,
    id: "baby",
  },
];

function createThumbs(thumbsArray) {
  thumbContainer = document.getElementById("thumb-container");
  for (let i = 0; i < thumbsArray.length; i++) {
    let image = document.createElement("img");
    image.src = thumbsArray[i].src;
    image.alt = thumbsArray[i].alt;
    image.width = thumbsArray[i].width;
    image.height = "auto";
    image.id = thumbsArray[i].id;
    image.className = "thumbnailImg";
    thumbContainer.appendChild(image);
    console.log(image.class);
  }
}

createThumbs(thumbs);

// function createBigImageHandler(bigImage) {}
