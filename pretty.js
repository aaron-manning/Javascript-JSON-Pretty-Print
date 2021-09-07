export function prettyPrint(data, depth = 0, spacer = false) {
  let output = "";
  const indent = "  ".repeat(depth);
  for (let key in data) {
    const val = data[key];
    if (!isNaN(key)) key++;
    if (typeof val === "object") {
      output += "<br/>" + indent + key + ": " + prettyPrint(val, (depth + 1), true)
    } else if (val instanceof Array) {
      output += "<br/>" + indent + key + prettyPrint(val, (depth + 1));
    } else {
      output += "<br/>" + indent + key + ": " + val;
      if (!depth) output += "<br/>"
    }
  }
  if (spacer) output += "<br/>"
  return output
}
