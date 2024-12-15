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
    image.tabIndex = "1";
    thumbContainer.appendChild(image);
    console.log(image.class);
  }
}

createThumbs(thumbs);

const thumb1 = document.getElementById("standing");
const thumb2 = document.getElementById("closeup");
const thumb3 = document.getElementById("grass");
const thumb4 = document.getElementById("leaves");
const thumb5 = document.getElementById("chew");
const thumb6 = document.getElementById("stick");
const thumb7 = document.getElementById("mother");
const thumb8 = document.getElementById("baby");

let currentImage = null;
let bigImageContainer = document.getElementById("big-image-container");
thumb1.addEventListener("click", () => {
  bigImageHandler(0);
});
thumb2.addEventListener("click", () => {
  bigImageHandler(1);
});
thumb3.addEventListener("click", () => {
  bigImageHandler(2);
});
thumb4.addEventListener("click", () => {
  bigImageHandler(3);
});
thumb5.addEventListener("click", () => {
  bigImageHandler(4);
});
thumb6.addEventListener("click", () => {
  bigImageHandler(5);
});
thumb7.addEventListener("click", () => {
  bigImageHandler(6);
});
thumb8.addEventListener("click", () => {
  bigImageHandler(7);
});

function bigImageHandler(imgNum) {
  bigImageContainer.innerHTML = null;
  let bigImage = document.createElement("img");
  bigImage.src = thumbs[imgNum].src;
  // console.log("test");
  // console.log(bigImage.src);
  bigImage.alt = thumbs[imgNum].alt;
  bigImage.className = "bigImg";
  bigImageContainer.appendChild(bigImage);
  currentImage = imgNum;
  console.log(currentImage);
}

const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");
leftButton.addEventListener("click", prevImage);
rightButton.addEventListener("click", nextImage);

function prevImage() {
  let prev = currentImage - 1;
  if (prev === -1) {
    currentImage = 7;
  } else {
    currentImage = prev;
  }
  bigImageHandler(currentImage);
}
function nextImage() {
  let next = currentImage + 1;
  if (next === 8) {
    currentImage = 0;
  } else {
    currentImage = next;
  }
  bigImageHandler(currentImage);
}
