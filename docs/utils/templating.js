const html = (templateObject, ...substs) => {
  // Use raw template strings: we don’t want
  // backslashes (\n etc.) to be interpreted
  const raw = templateObject.raw

  let result = ''

  substs.forEach((subst, i) => {
    // Retrieve the template string preceding
    // the current substitution
    let lit = raw[i]

    // In the example, map() returns an Array:
    // If `subst` is an Array (and not a string),
    // we turn it into a string
    if (Array.isArray(subst)) {
      subst = subst.join('')
    }

    // If the substitution is preceded by an exclamation
    // mark, we escape special characters in it
    if (lit.endsWith('!')) {
      subst = htmlEscape(subst)
      lit = lit.slice(0, -1)
    }
    result += lit
    result += subst
  })
  // Take care of last template string
  result += raw[raw.length - 1] // (A)

  return result
}

export default html
