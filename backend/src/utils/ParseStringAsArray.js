module.exports = function ParseStringAsArray(ArrayAsString) {
  return ArrayAsString.split(',').map(tech => tech.trim());
}