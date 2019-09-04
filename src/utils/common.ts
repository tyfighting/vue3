export function formatData(data: any) {
  let r: Array<string> = [];
  for (let item of Object.keys(data)) {
    r.push(`${item}=${data[item]}`);
  }
  return r.join('&');
}
