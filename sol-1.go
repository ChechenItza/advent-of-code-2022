package main

import (
	"fmt"
	"io"
	"net/http"
	"strconv"
	"strings"
)

func main() {
	client := &http.Client{}

	req, err := http.NewRequest("GET", "https://adventofcode.com/2022/day/1/input", nil)
	if err != nil {
		fmt.Println(err)
		return
	}

	//set your cookie val here
	req.Header.Set("Cookie", "")

	resp, err := client.Do(req)
	if err != nil {
		fmt.Println(err)
		return
	}

	data, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Println(err)
		return
	}

	var maxSum int64 = 0
	baggages := strings.Split(string(data), "\n\n")
	for _, baggage := range baggages {
		items := strings.Split(baggage, "\n")

		var sum int64 = 0
		for _, calories := range items {
			//ignore single trailing new line
			if calories == "" {
				continue
			}

			icalories, err := strconv.ParseInt(calories, 10, 64)
			if err != nil {
				fmt.Println(err)
				return
			}

			sum += icalories
		}

		if sum > maxSum {
			maxSum = sum
		}
	}

	fmt.Println(maxSum)
}
