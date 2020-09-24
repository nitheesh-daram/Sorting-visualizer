function normalsort(array) {
  let animations = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let animation = {};
      animation.comparision = [i, j];
      animation.swap = [i, i];
      if (array[i] > array[j]) {
        animation.swap = [j, i];
        [array[i], array[j]] = [array[j], array[i]];
      }
      animations.push(animation);
    }
  }
  return animations;
}

function bubblesort(array) {
  let animations = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      let animation = {};
      animation.comparision = [j, j + 1];
      animation.swap = [j, j];
      if (array[j] > array[j + 1]) {
        animation.swap = [j, j + 1];
        [array[j + 1], array[j]] = [array[j], array[j + 1]];
      }
      animations.push(animation);
    }
  }
  return animations;
}

export { normalsort, bubblesort };
