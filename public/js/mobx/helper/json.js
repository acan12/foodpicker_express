export const json = {
  filter: (obj, fields) => {
    return fields.reduce((result, key) => { result[key] = obj[key]; return result; }, {});
  }
}
