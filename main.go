package main

import (
	"bytes"
	"os"
	"text/template"
)

func meta_titleFunc() string {
	return "Template title"
	/*
		if values.CurrentTemplate == 1 { // post or page
			return evaluateEscape(values.Posts[values.CurrentPostIndex].Title, helper.Unescaped)
		} else if values.CurrentTemplate == 3 { // author
			var buffer bytes.Buffer
			// TODO: Error handling if there is no Posts[values.CurrentPostIndex]
			buffer.Write(values.Posts[values.CurrentPostIndex].Author.Name)
			buffer.WriteString(" - ")
			buffer.Write(values.Blog.Title)
			return evaluateEscape(buffer.Bytes(), helper.Unescaped)
		} else if values.CurrentTemplate == 2 { // tag
			var buffer bytes.Buffer
			// TODO: Error handling if there is no Posts[values.CurrentPostIndex]
			buffer.Write(values.CurrentTag.Name)
			buffer.WriteString(" - ")
			buffer.Write(values.Blog.Title)
			return evaluateEscape(buffer.Bytes(), helper.Unescaped)
		}
		// index
		return evaluateEscape(values.Blog.Title, helper.Unescaped)
	*/
}

func ghost_headFunc() string {
	// SEO stuff:
	// Output canonical url
	var buffer bytes.Buffer
	buffer.WriteString("<link rel=\"canonical\" href=\"")
	//buffer.Write(evaluateEscape(values.Blog.Url, helper.Unescaped))
	//buffer.WriteString(values.CurrentPath)
	buffer.WriteString("Canonical url")
	buffer.WriteString("\">")
	// TODO: structured data
	return string(buffer.Bytes())
}

func ghost_footFunc() string {
	return ""
}

func assetFunc(path string) string {
	return path
}

func body_classFunc() string {
	return "post-template"
}

func navigationFunc() string {
	// TODO add navigation function
	return ""
}

func main() {
	type Inventory struct {
		Lang string
	}
	sweaters := Inventory{"eng"}
	tmpl, err := template.New("index.tpl.html").Funcs(map[string]interface{}{
		"meta_title": meta_titleFunc,
		"ghost_head": ghost_headFunc,
		"ghost_foot": ghost_footFunc,
		"asset":      assetFunc,
		"body_class": body_classFunc,
		"navigation": navigationFunc,
		//}).ParseFiles("index.tpl.html")
	}).ParseFiles("index.tpl.html")
	if err != nil {
		panic(err)
	}
	err = tmpl.Execute(os.Stdout, sweaters)
	if err != nil {
		panic(err)
	}
}
