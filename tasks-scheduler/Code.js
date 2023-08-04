function listScriptProperties() {
  var scriptProperties = PropertiesService.getScriptProperties();
  var keys = scriptProperties.getKeys();
  Logger.log(keys);
}

function main() {
  listScriptProperties();
}

function storeScriptProperties(key, value) {
  var scriptProperties = PropertiesService.getScriptProperties();
  scriptProperties.setProperty(key, value);
}
