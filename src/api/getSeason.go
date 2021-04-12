package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)


func getSeason(season string) {
	url := "https://ergast.com/api/f1/"+season+".json"
	fmt.Print(url)
  
	client := &http.Client {
	}
	req, err := http.NewRequest("GET", url, nil)
  
	if err != nil {
	  fmt.Println(err)
	  return
	}
	res, err := client.Do(req)
	if err != nil {
	  fmt.Println(err)
	  return
	}
	defer res.Body.Close()
  
	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
	  fmt.Println(err)
	  return
	}
	fmt.Println(string(body))
  }
