export default async function getInput(day: number): Promise<string> {
  const res = await fetch(`https://adventofcode.com/2022/day/${day}/input`, {
    method: "GET",
    headers: {
      cookie: ""
    }
  })

  return await res.text()
}