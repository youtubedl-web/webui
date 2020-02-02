export function getVideoID(link) {
  if (link.indexOf("youtu.be") != -1) return link.substr(link.indexOf("youtu.be")+9)

  return link.split("v=")[1]
}