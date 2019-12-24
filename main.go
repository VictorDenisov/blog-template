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

func img_urlFunc(url string, size string) string {
	return url
}

func main() {
	type Site struct {
		Url         string
		Title       string
		Description string
		CoverImage  string
		Logo        string
		Navigation  string
	}
	type Inventory struct {
		Lang        string
		MetaTitle   string
		BlogUrl     string
		CurrentPath string
		Site        Site
	}
	funcMap := map[string]interface{}{
		"asset":      assetFunc,
		"body_class": body_classFunc,
		"navigation": navigationFunc,
		"img_url":    img_urlFunc,
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
		Site: Site{
			Url:         "file:///home/vdenisov/projects/blogTemplate/index.html",
			Title:       "Victor's blog",
			Description: "This is Victor's blog",
			CoverImage:  "https://static.ghost.org/v2.0.0/images/welcome-to-ghost.jpg",
			Navigation:  "victor's navigation",
		},
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
