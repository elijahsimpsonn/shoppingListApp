const foo = 'bar';

const validateName = (name) => {
  if (!name) throw new TypeError('Name must not be blank');
};

const create = (name) => {
  return {
    id: cuid(),
    name,
    checked: false
  };
};

export default { validateName, create };
