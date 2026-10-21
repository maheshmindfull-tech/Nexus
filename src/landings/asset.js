export function bindImages(files, project) {
  return function image(path) {
    const file = files[`./images/${path}`];
    if (!file) throw new Error(`Missing ${project} image: ${path}`);
    return file;
  };
}
