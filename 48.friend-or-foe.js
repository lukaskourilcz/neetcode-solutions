function friend(friends) {
  let realFriends = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      realFriends.push(friends[i]);
    }
  }
  return realFriends;
}
