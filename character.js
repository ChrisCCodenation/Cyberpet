const selectCharacterfnc = (character) => {
    sessionStorage.setItem("selectCharacter", character);
    window.location.href = "../Class/class.html";
  };
document.addEventListener(
  "DOMContentLoaded",
  function () {
    const characters = document.querySelectorAll(".character");
    const hoverSound = document.getElementById("hover-sound");
    const selectSound = document.getElementById("select-sound");
    let selectCharacter = null;

    characters.forEach((character) => {
      character.addEventListener("mouseenter", function () {
        hoverSound.currentTime = 0;
        hoverSound.play();
      });

      character.addEventListener("click", function () {
        characters.forEach((char) => char.classList.remove("selected"));
        character.classList.add("selected");
        selectCharacter = character.getAttribute("data-name");
        console.log(character);
        selectSound.currentTime = 0;
        selectSound.play();

        document.addEventListener("DOMContentLoaded", function () {
          var Character = document.getElementById("Character");

          Character.onclick = function () {
            console.log("getting here")
            setTimeout(function () {
              alert("Button clicked after delay!");
            }, 2000);
          };
        });
      });

      if (selectCharacter) {
        alert(`You have selected: ${selectCharacter}`);
        if (selectCharacter(character)) {
          sessionStorage.setItem("selectCharacter", character);
          window.location.href = "../Class/class.html";
        }
      }
    });
    // }
    // });
    
  }

  // var selectedCharacter = sessionStorage.getItem('selectedCharacter');

  // // Define image file paths or URLs for each character
  // var characterImages = {
  //     'character1': 'Pictures/Spike.jpg',
  //     'character2': 'Pictures/Depresso.jpg',
  //     'character3': 'Pictures/Link.jpg',
  //     'character4': 'Pictures/Shovel2.jpg',
  //     'character5': 'Pictures/LingLing1.jpg'
  // };

  // // Create an image element and set its source based on selected character
  // var characterImage = document.createElement('img');
  // characterImage.src = characterImages[selectedCharacter];
  // characterImage.alt = selectedCharacter;

  // // Append the image to the container
);
