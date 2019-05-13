export const generateGrid = () => {
  const fields = [];
  let x = 1;

  for (; x <= 10; x++) {
    let y = 1;

    for (; y <= 10; y++) {
      fields.push({
        x,
        y,
        status: "empty"
      });
    }
  }

  return fields;
};

export const isFieldClickable = (target, source) =>
  (target.x === source.x &&
    (target.y === source.y - 3 || target.y === source.y + 3)) ||
  (target.y === source.y &&
    (target.x === source.x - 3 || target.x === source.x + 3)) ||
  (target.x === source.x - 2 &&
    (target.y === source.y - 2 || target.y === source.y + 2)) ||
  (target.x === source.x + 2 &&
    (target.y === source.y + 2 || target.y === source.y - 2));
