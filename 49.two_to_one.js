function longest(s1, s2) {
    let combined = (s1 + s2).split('');
    let sorted = combined.sort();
    let unique = [...new Set(sorted)];
    return unique.join('')
  }