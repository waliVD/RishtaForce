const stringifyImageSizes = imageSizes => {
  return imageSizes.map(a => {
    const capitalizedName = a.name[0].toUpperCase() + a.name.slice(1);
    return `${captalizedName} image - ${a.width} x ${a.height}`;
  });
};
