import item from './item.js';
let items = [];
let hideCheckedItems = false;

const findById = function (id) {
  return this.items.find((item) => item.id === id);
};

const addItem = function (name) {
  try {
    item.validateName(name);
    let newItem = item.create(name);
    this.items.push(newItem);
  } catch (error) {
    console.log(`Could not add Item: ${error.message}`);
  }
};

const findAndToggleChecked = function (id) {
  let foundItem = this.findById(id);
  foundItem.checked = !foundItem.checked;
};

const findAndUpdateName = function (id, newName) {
  try {
    let foundItem = this.findById(id);
    foundItem.name = newName;
  } catch (error) {
    console.log(`Cannot update name: ${error.message}`);
  }
};

const findAndDelete = function (id) {
  let index = this.items.findIndex((item) => item.id === id);
  items.splice(index, 1);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};
