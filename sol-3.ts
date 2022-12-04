import getInput from "./input.js";

async function sol() {
  const rucksacks = await getInput(3)

  let priorSum = 0
  for (const rucksack of rucksacks.split("\n")) {
    const lc = rucksack.substring(0, rucksack.length / 2)
    const rc = rucksack.substring(rucksack.length / 2)

    const items: { [index: string]: boolean } = {}
    for (const c of lc) {
      items[c] = true
    }

    for (const c of rc) {
      if (items[c]) {
        let priority = c.charCodeAt(0)
        if (priority >= 65 && priority <= 90) {
          priority -= 38
        } else {
          priority -= 96
        }

        priorSum += priority
        items[c] = false
      }
    }
  }

  console.log(priorSum)
}

async function sol2() {
  const rucksacks = (await getInput(3)).split("\n")

  let priorSum = 0
  for (let i = 0; i < rucksacks.length - 1; i += 3) {
    const rucksack1 = rucksacks[i] ?? ""
    const rucksack2 = rucksacks[i + 1] ?? ""
    const rucksack3 = rucksacks[i + 2] ?? ""

    const items: { [index: string]: number } = {}
    for (const c of rucksack1) {
      items[c] = 2
    }

    let counted: { [index: string]: boolean } = {}
    for (const c of rucksack2) {
      if (items[c] && !counted[c]) {
        items[c] -= 1
        counted[c] = true
      }
    }

    counted = {}
    for (const c of rucksack3) {
      if (items[c] && !counted[c]) {
        items[c] -= 1
        counted[c] = true

        if (items[c] === 0) {
          let priority = c.charCodeAt(0)
          if (priority >= 65 && priority <= 90) {
            priority -= 38
          } else {
            priority -= 96
          }

          priorSum += priority
        }
      }
    }
  }

  console.log(priorSum)
}