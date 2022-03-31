function isEmptyOrNull (str) {
  return (!str || str.length === 0);
}

function isAvailablePrice (price, ignoreTags) {
  // 金額異常高為額滿商品請勿下標 ( 例:尾數XXX9999 或 XXX0000)
  const strPrice = price.toString();

  for (const tag of ignoreTags) {
    const index = strPrice.indexOf(tag);

    if (index < 0) {
      continue;
    }

    return false;
  }

  return true;
}

module.exports = {
  isEmptyOrNull,
  isAvailablePrice
};
