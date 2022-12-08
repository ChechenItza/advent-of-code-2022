import getInput from "./input.js";

async function sol() {
    const pairs = (await getInput(4)).split("\n")

    let containedCount = 0
    for (const pair of pairs) {
        const [first, second] = pair.split(",")
        if (!first || !second) continue

        const [l1, r1] = first.split("-")
        const [l2, r2] = second.split("-")
        if (!l1 || !r1 || !l2 || !r2) continue

        if ((l1 <= l2 && r1 >= r2) || (l2 <= l1 && r2 >= r1)) {
            containedCount++
        }
    }

    console.log(containedCount)
}

sol()
