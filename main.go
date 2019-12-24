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

func assetFunc(path string) string {
	return "assets/" + path
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
		Lang        string
		MetaTitle   string
		BlogUrl     string
		CurrentPath string
	}
	funcMap := map[string]interface{}{
		"asset":      assetFunc,
		"body_class": body_classFunc,
		"navigation": navigationFunc,
	}
	header, err := template.New("header.tpl.html").Funcs(funcMap).ParseFiles("header.tpl.html")
	if err != nil {
		panic(err)
	}
	footer, err := template.New("footer.tpl.html").Funcs(funcMap).ParseFiles("footer.tpl.html")
	if err != nil {
		panic(err)
	}

	sweaters := Inventory{
		Lang:        "eng",
		MetaTitle:   "meta title",
		BlogUrl:     "http://localhost",
		CurrentPath: "/",
	}
	tmpl, err := template.New("index.tpl.html").Funcs(funcMap).ParseFiles("index.tpl.html")

	tmpl.AddParseTree("header.tpl.html", header.Tree)
	tmpl.AddParseTree("footer.tpl.html", footer.Tree)
	if err != nil {
		panic(err)
	}
	err = tmpl.Execute(os.Stdout, sweaters)
	if err != nil {
		panic(err)
	}
}
