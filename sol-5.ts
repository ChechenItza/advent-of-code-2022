import getInput from "./input.js";
import * as process from "process";

/*
    [B]             [B] [S]
    [M]             [P] [L] [B] [J]
    [D]     [R]     [V] [D] [Q] [D]
    [T] [R] [Z]     [H] [H] [G] [C]
    [P] [W] [J] [B] [J] [F] [J] [S]
[N] [S] [Z] [V] [M] [N] [Z] [F] [M]
[W] [Z] [H] [D] [H] [G] [Q] [S] [W]
[B] [L] [Q] [W] [S] [L] [J] [W] [Z]
 1   2   3   4   5   6   7   8   9
 */

async function sol() {
  const stacks = [
    ["B", "W", "N"],
    ["L", "Z", "S", "P", "T", "D", "M", "B"],
    ["Q", "H", "Z", "W", "R"],
    ["W", "D", "V", "J", "Z", "R"],
    ["S", "H", "M", "B"],
    ["L", "G", "N", "J", "H", "V", "P", "B"],
    ["J", "Q", "Z", "F", "H", "D", "L", "S"],
    ["W", "S", "F", "J", "G", "Q", "B"],
    ["Z", "W", "M", "S", "C", "D", "J"]
  ]

  const input = (await getInput(5)).split("\n")
  const commands = input.slice(input.findIndex(val => val.startsWith("move")))

  for (const command of commands) {
    let [, amount, , from, , to] = command.split(" ").map(val => Number(val))
    if (!amount || !from || !to) continue

    from--
    to--

    //sol1(stacks, amount, from, to)
    sol2(stacks, amount, from, to)
  }

  stacks.forEach(stack => process.stdout.write(stack[stack.length - 1] ?? ""))
}

function sol1(stacks: string[][], amount: number, from: number, to: number) {
  for (let i = 0; i < amount; i++) {
    if (!stacks[from]) {
      console.log(`stack at index ${from} is undefined`)
      break
    }

    const crate = stacks[from].pop()
    if (!crate) continue

    if (!stacks[to]) {
      console.log(`stack at index ${to} is undefined`)
      break
    }

    stacks[to].push(crate)
  }
}

function sol2(stacks: string[][], amount: number, from: number, to: number) {
  if (!stacks[from]) {
    console.log(`stack at index ${from} is undefined`)
    return
  }

  const crates = stacks[from].slice(stacks[from].length - amount)
  if (!crates) return

  stacks[from] = stacks[from].slice(0, stacks[from].length - amount)

  if (!stacks[to]) {
    console.log(`stack at index ${to} is undefined`)
    return
  }

  stacks[to].push(...crates)
}