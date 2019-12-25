package main

import (
	"bytes"
	"fmt"
	"os"
	"strings"
	"text/template"
	"time"
)

func assetFunc(path string) string {
	return "assets/" + path
}

func body_classFunc() string {
	return "post-template"
}

func img_urlFunc(url string, size string) string {
	return url
}

type NavItem struct {
	Slug    string
	Url     string
	Label   string
	Current bool
}

type Link struct {
	Title string
	Url   string
}

type Post struct {
	Url          string
	Title        string
	Authors      []string
	Tags         []Tag
	Date         time.Time
	PostClass    string
	Excerpt      string
	FeatureImage string
	ReadingTime  int // minutes
}

type Site struct {
	Url         string
	Title       string
	Description string
	CoverImage  string
	Logo        string
	Twitter     *Link
	Github      *Link
	Navigation  []NavItem
	Posts       []Post
	Post        Post
}
type Inventory struct {
	Lang        string
	MetaTitle   string
	BlogUrl     string
	CurrentPath string
	Site        Site
}

type Tag struct {
	Name string
	Slug string
}

func authorsFunc(authors []string) string {
	return strings.Join(authors, ", ")
}

func tagsFunc(tags []Tag) string {
	if len(tags) == 0 {
		return ""
	}

	links := make([]string, len(tags))
	for i, t := range tags {
		var buffer bytes.Buffer
		buffer.WriteString("<a href=\"")
		buffer.WriteString("/tag/")
		buffer.WriteString(t.Slug)
		buffer.WriteString("/\">")
		buffer.Write([]byte(t.Name))
		buffer.WriteString("</a>")
		links[i] = string(buffer.Bytes())
	}
	return "on " + strings.Join(links, ", ")
}

func dateFunc(date time.Time, format string) string {
	return "My Date"
}

func reading_timeFunc(minutes int) string {
	if minutes == 1 {
		return "1 minute"
	}
	return fmt.Sprintf("%d min read", minutes)
}

func main() {
	funcMap := map[string]interface{}{
		"asset":        assetFunc,
		"body_class":   body_classFunc,
		"img_url":      img_urlFunc,
		"authors":      authorsFunc,
		"tags":         tagsFunc,
		"date":         dateFunc,
		"reading_time": reading_timeFunc,
	}
	header, err := template.New("header.tpl.html").Funcs(funcMap).ParseFiles("header.tpl.html")
	if err != nil {
		panic(err)
	}
	footer, err := template.New("footer.tpl.html").Funcs(funcMap).ParseFiles("footer.tpl.html")
	if err != nil {
		panic(err)
	}
	loop, err := template.New("loop.tpl.html").Funcs(funcMap).ParseFiles("loop.tpl.html")
	if err != nil {
		panic(err)
	}

	siteUrl := "file:///home/vdenisov/projects/blogTemplate"

	posts := []Post{
		Post{
			Title:        "First post",
			Url:          siteUrl + "/first.html",
			Authors:      []string{"Victor", "Sergey"},
			Tags:         []Tag{Tag{"first", "first"}, Tag{"post", "post"}},
			Date:         time.Now(),
			PostClass:    "post",
			Excerpt:      "This is my short excerpt of the blog post",
			FeatureImage: "https://static.ghost.org/v2.0.0/images/writing-posts-with-ghost.jpg",
			ReadingTime:  2,
		},
		Post{
			Title:        "Second post",
			Url:          siteUrl + "/second.html",
			Authors:      []string{"Victor", "Sergey"},
			Tags:         []Tag{Tag{"second", "second"}, Tag{"post", "post"}},
			Date:         time.Now(),
			PostClass:    "post",
			Excerpt:      "This is my longer excerpt of second blog post",
			FeatureImage: "https://static.ghost.org/v2.0.0/images/writing-posts-with-ghost.jpg",
			ReadingTime:  5,
		},
	}

	sweaters := Inventory{
		Lang:        "eng",
		MetaTitle:   "meta title",
		BlogUrl:     siteUrl + "/index.html",
		CurrentPath: "/",
		Site: Site{
			Url:         siteUrl + "/index.html",
			Title:       "Victor's blog",
			Description: "This is Victor's blog",
			CoverImage:  "https://static.ghost.org/v2.0.0/images/welcome-to-ghost.jpg",
			Twitter: &Link{
				Title: "@VictorDenisov",
				Url:   "https://twitter.com/victordenisov",
			},
			Github: &Link{
				Title: "VictorDenisov",
				Url:   "https://github.com/VictorDenisov",
			},
			Navigation: []NavItem{
				NavItem{
					Slug:    "home",
					Url:     siteUrl + "/home",
					Label:   "Home",
					Current: true,
				},
				NavItem{
					Slug:    "tag",
					Url:     siteUrl + "/tag",
					Label:   "Tag",
					Current: false,
				},
				NavItem{
					Slug:    "author",
					Url:     siteUrl + "/author",
					Label:   "Author",
					Current: false,
				},
			},
			Posts: posts,
			Post:  posts[0],
		},
	}
	// Index template
	indexTmpl, err := template.New("index.tpl.html").Funcs(funcMap).ParseFiles("index.tpl.html")
	if err != nil {
		panic(err)
	}

	indexTmpl.AddParseTree("header.tpl.html", header.Tree)
	indexTmpl.AddParseTree("footer.tpl.html", footer.Tree)
	indexTmpl.AddParseTree("loop.tpl.html", loop.Tree)

	indexFile, err := os.OpenFile("index.html", os.O_RDWR|os.O_CREATE, 0755)
	if err != nil {
		panic(err)
	}
	err = indexTmpl.Execute(indexFile, sweaters)
	if err != nil {
		panic(err)
	}
	if err := indexFile.Close(); err != nil {
		panic(err)
	}

	// First post template
	postTmpl, err := template.New("post.tpl.html").Funcs(funcMap).ParseFiles("post.tpl.html")
	if err != nil {
		panic(err)
	}

	postTmpl.AddParseTree("header.tpl.html", header.Tree)
	postTmpl.AddParseTree("footer.tpl.html", footer.Tree)
	postTmpl.AddParseTree("loop.tpl.html", loop.Tree)

	postFile, err := os.OpenFile("first.html", os.O_RDWR|os.O_CREATE, 0755)
	if err != nil {
		panic(err)
	}

	err = postTmpl.Execute(postFile, sweaters)
	if err != nil {
		panic(err)
	}
	if err := postFile.Close(); err != nil {
		panic(err)
	}
}
