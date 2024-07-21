document.addEventListener('DOMContentLoaded', function() {
    const dndButtons = document.querySelectorAll('.dnd');
    const hoverSound = document.getElementById('hover-sound');
    const selectSound = document.getElementById('select-sound');
    let selectedCharacter = null;

    dndButtons.forEach(button => {
        button.addEventListener('mouseover', function() {
            hoverSound.currentTime = 0;
            hoverSound.play();
        });

        button.addEventListener('click', function() {
            // Remove 'selected' class from previously selected character
            dndButtons.forEach(btn => btn.classList.remove('selected'));

            // Add 'selected' class to clicked button
            button.classList.add('selected');

            // Play select sound
            selectSound.currentTime = 0;
            selectSound.play();

            // Store selected character name
            selectedCharacter = button.getAttribute('data-name');

            // Store the selected character in sessionStorage
            sessionStorage.setItem('selectedCharacter', selectedCharacter);
        });
    });

    document.getElementById('selectedCharacter').addEventListener('click', function() {
        if (selectedCharacter) {
            alert(`You have selected: ${selectedCharacter}`);
        }
    });
});



 // Retrieve selected character from session storage
 var selectedCharacter = sessionStorage.getItem('selectedCharacter');

 var characterImages = {
    'character1': 'Pictures/Spike.jpg',
    'character2': 'Pictures/Depresso.jpg',
    'character3': 'Pictures/Link.jpg',
    'character4': 'Pictures/Shovel2.jpg',
    'character5': 'Pictures/LingLing1.jpg'
};

 var characterImage = document.createElement('img');
 characterImage.src = characterImages[selectedCharacter];
 characterImage.alt = selectedCharacter;

 document.getElementById('characterImageContainer').appendChild(characterImage);