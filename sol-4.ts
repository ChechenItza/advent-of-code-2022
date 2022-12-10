import getInput from "./input.js";

async function sol1() {
    const pairs = (await getInput(4)).split("\n")

    let containedCount = 0
    for (const pair of pairs) {
        const [first, second] = pair.split(",")
        if (!first || !second) continue

        const [l1, r1] = first.split("-").map(val => Number(val))
        const [l2, r2] = second.split("-").map(val => Number(val))
        if (!l1 || !r1 || !l2 || !r2) continue

        if ((l1 <= l2 && r1 >= r2) || (l2 <= l1 && r2 >= r1)) {
            containedCount++
        }
    }

    console.log(containedCount)
}

async function sol2() {
    const pairs = (await getInput(4)).split("\n")

    let overlappingCount = 0
    for (const pair of pairs) {
        const [first, second] = pair.split(",")
        if (!first || !second) continue

        const [l1, r1] = first.split("-").map(val => Number(val))
        const [l2, r2] = second.split("-").map(val => Number(val))
        if (!l1 || !r1 || !l2 || !r2) continue

        if (
          (r1 >= l2 && r1 <= r2) ||
          (l1 >= l2 && l1 <= r2) ||
          (r2 >= l1 && r2 <= r1) ||
          (l2 >= l1 && l2 <= r1)
        ) {
            overlappingCount++
        }
    }

    console.log(overlappingCount)
}
