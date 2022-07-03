import CountSlower from './CountSlower'

const Counter = (
  id: React.RefObject<HTMLSpanElement>,
  upto: number,
  interval: number,
  factor: number,
) => {
  const result = setInterval(() => {
    const query = id.current
    if (query) {
      const num = Number(query.innerHTML)
      if (num > upto * factor) {
        clearInterval(result)
        CountSlower(query, upto, interval, 1)
      } else {
        query.innerHTML = String(num + 1)
      }
    }
  }, 1)
  setTimeout(() => {
    const query = id.current
    if (query) {
      query.innerHTML = String(upto)
    }
  }, 2000)
}

export default Counter
