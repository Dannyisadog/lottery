const generateCandidates = (count = 10) => {
  let candidates = [];

  for (var i=0; i<count; i++) {
    candidates.push(i);
  }

  return candidates;
}

export {
  generateCandidates
}