const sessionIDtoUserMap = new Map();

export function setUser(id, user) {
  sessionIDtoUserMap.set(id, user);
}
export function getUser(id) {
  return sessionIDtoUserMap.get(id);
}
