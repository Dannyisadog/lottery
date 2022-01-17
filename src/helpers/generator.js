const generateCandidates = (count = 10) => {
  let candidates = [];

  for (var i=0; i<count; i++) {
    candidates.push(randomName());
  }

  return candidates;
}

const randomName = () => {
  var text = "";
  var possibleF = "ABCDEFGHIJKLMNOPQRSTVWY";
  var possible = "aaaaabcdeeeeeefghiiiijklmnooooopqrstuuuuuvy"

  text += possibleF.charAt(Math.floor(Math.random() * possibleF.length));
  for (var i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

export {
  generateCandidates
}