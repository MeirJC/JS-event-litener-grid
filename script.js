/* -----Constants and Functions----- */

//Get Grid container
const gridContainer = document.querySelector(".grid");
// Get all cells
const gridCells = document.querySelectorAll(".cell");
// body - used for dark mode
const body = document.body;
//Function to generate random hex color
const randColor = () => {
  let hexColor = Math.floor(Math.random() * 16777215).toString(16);
  return hexColor;
};

/* -----Event Listeners----- */

//Adding outline to entire grid container
gridContainer.addEventListener(
  "mouseenter",
  () => {
    gridContainer.style.outline = "8px solid #6B5B95";
  },
  false
);
gridContainer.addEventListener(
  "mouseleave",
  () => {
    gridContainer.style.outline = "";
  },
  false
);
// For each cell
gridCells.forEach((cell) => {
  // Set outline when cell is hovered (enter or leave)
  cell.addEventListener(
    "mouseenter",
    () => {
      cell.style.outline = "3px solid #92A8D1";
    },
    false
  );
  cell.addEventListener(
    "mouseleave",
    () => {
      cell.style.outline = "";
    },
    false
  );

  // Setting random color (using randColor function) on mouse click
  cell.addEventListener("click", () => {
    if (cell.style.backgroundColor == false) {
      cell.style.backgroundColor = `#${randColor()}`;
    } else {
      cell.style.backgroundColor = "";
    }
  });
});

// "Dark Mode" feature using d keyboad key
body.addEventListener(
  "keydown",
  (keyPress) => {
    console.log(keyPress.code);

    if (keyPress.code === "KeyD") {
      if (body.style.backgroundColor == "") {
        body.style.backgroundColor = "hsl(201, 34%, 13%)";
      } else {
        body.style.backgroundColor = "";
      }
    }
  },
  false
);
