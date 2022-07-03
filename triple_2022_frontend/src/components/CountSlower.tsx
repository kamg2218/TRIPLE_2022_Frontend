const CountSlower = (
  query: HTMLSpanElement,
  upto: number,
  interval: number,
  count: number,
) => {
  setTimeout(() => {
    const num = Number(query.innerHTML)
    if (num < upto) {
      query.innerHTML = String(num + 1)
      CountSlower(query, upto, interval, count * 1.6)
    }
  }, interval + count)
}

export default CountSlower
