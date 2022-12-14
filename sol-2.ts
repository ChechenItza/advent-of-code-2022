import getInput from "./input"

type rulesType = {[index: string]: number}

const rules1: rulesType = {
  "AX": 4,
  "AY": 8,
  "AZ": 3,
  "BX": 1,
  "BY": 5,
  "BZ": 9,
  "CX": 7,
  "CY": 2,
  "CZ": 6
}

const rules2: rulesType = {
  "AX": 3,
  "AY": 4,
  "AZ": 8,
  "BX": 1,
  "BY": 5,
  "BZ": 9,
  "CX": 2,
  "CY": 6,
  "CZ": 7
}

async function sol(rules: rulesType) {
  const table = await getInput(2)

  let totalScore = 0
  for (const round of table.split("\n")) {
    const [op, me] = round.split(" ")
    if (!op || !me) continue

    totalScore += rules[op + me] ?? 0
  }

  console.log(totalScore)
}
