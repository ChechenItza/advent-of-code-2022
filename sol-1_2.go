package main

import (
	"fmt"
	"io"
	"net/http"
	"strconv"
	"strings"
)

func sol2() {
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

	var maxSum1 int64 = 0
	var maxSum2 int64 = 0
	var maxSum3 int64 = 0
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

		if sum > maxSum1 {
			maxSum3 = maxSum2
			maxSum2 = maxSum1
			maxSum1 = sum
		} else if sum > maxSum2 {
			maxSum3 = maxSum2
			maxSum2 = sum
		} else if sum > maxSum3 {
			maxSum3 = sum
		}
	}

	fmt.Println(maxSum1 + maxSum2 + maxSum3)
}
