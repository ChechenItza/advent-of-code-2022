import getInput from "./input.js";

async function sol(width: number) {
  const dataStream = (await getInput(6))

  const window = {}
  for (let i = 0; i < width; i++) {
    if (!dataStream[i]) {
      console.log(`index ${i} doesn't exist in data stream ${dataStream}`)
      return
    }

    if (!window[dataStream[i]])
      window[dataStream[i]] = 1
    else
      window[dataStream[i]]++
  }

  let count = width
  for (let i = width; i < dataStream.length; i++) {
    if (checkWindow(window)) {
      break
    }

    if (!window[dataStream[i]])
      window[dataStream[i]] = 1
    else
      window[dataStream[i]]++

    window[dataStream[i - width]]--
    count++
  }

  console.log(count)
}

function checkWindow(window: {[index: string]: number}) {
  for (const val of Object.values(window)) {
    if (val > 1) return false
  }

  return true
}