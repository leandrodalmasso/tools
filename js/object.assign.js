let props = {
  height: 200,
  width: 300,
};

// clone
let anotherProps = Object.assign({}, props);

// override
let newWidth = {
  width: 400,
};
Object.assign(props, newWidth);

// merge
let otherProps = {
  color: 'blue',
};
let newProps = Object.assign({}, props, otherProps);
