import getInput from "./input.js";

const condition1 = (l1: number, l2: number, r1: number, r2: number) => {
    return (l1 <= l2 && r1 >= r2) || (l2 <= l1 && r2 >= r1)
}

const condition2 = (l1: number, l2: number, r1: number, r2: number) => {
    return (r1 >= l2 && r1 <= r2) ||
      (l1 >= l2 && l1 <= r2) ||
      (r2 >= l1 && r2 <= r1) ||
      (l2 >= l1 && l2 <= r1)
}

async function sol(condition: (l1: number, l2: number, r1: number, r2: number) => boolean) {
    const pairs = (await getInput(4)).split("\n")

    let overlappingCount = 0
    for (const pair of pairs) {
        const [first, second] = pair.split(",")
        if (!first || !second) continue

        const [l1, r1] = first.split("-").map(val => Number(val))
        const [l2, r2] = second.split("-").map(val => Number(val))
        if (!l1 || !r1 || !l2 || !r2) continue

        if (condition(l1, l2, r1, r2)) {
            overlappingCount++
        }
    }

    console.log(overlappingCount)
}
