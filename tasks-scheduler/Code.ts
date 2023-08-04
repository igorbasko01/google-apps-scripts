function listScriptProperties() {
  var scriptProperties = PropertiesService.getScriptProperties();
  var keys = scriptProperties.getKeys();
  Logger.log(keys);
}

function main() {
  listScriptProperties();
}

function storeScriptProperties(key: string, value: string) {
  var scriptProperties = PropertiesService.getScriptProperties();
  scriptProperties.setProperty(key, value);
}

export function add(a: number, b: number): number {
  return a + b;
}