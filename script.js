const moveRightButton = document.getElementById('moveRight');
const moveLeftButton = document.getElementById('moveLeft');

const availableList = document.getElementById('availableList');
const selectedList = document.getElementById('selectedList');

// Function to move checked items
function moveItems(sourceList, targetList) {
  const checkedItems = sourceList.querySelectorAll('input[type="checkbox"]:checked');
  checkedItems.forEach(item => {
    const parentLi = item.parentElement;
    item.checked = false; // Uncheck after moving
    targetList.appendChild(parentLi);
  });
}

// Move items to the right list
moveRightButton.addEventListener('click', () => {
  moveItems(availableList, selectedList);
});

// Move items to the left list
moveLeftButton.addEventListener('click', () => {
  moveItems(selectedList, availableList);
});
