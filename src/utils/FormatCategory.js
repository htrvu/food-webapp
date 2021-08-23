const formatCategory = (category) => {
  const formated = category.split("-").reduce((res, word, index) => {
    if (index) res += " "
    res = res + word[0].toUpperCase() + word.slice(1)
    return res
  }, "")
  return formated
}

export default formatCategory