package main

import (
	"bytes"
	"fmt"
	"os"
	"strings"
	"text/template"
	"time"

	"github.com/gomarkdown/markdown"
	"github.com/gomarkdown/markdown/parser"
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

type Author struct {
	Name         string
	Url          string
	ProfileImage string
	Bio          string
	Location     string
	Website      string
	Twitter      string
	Facebook     string
}

type Post struct {
	Url          string
	Title        string
	Authors      []Author
	Tags         []Tag
	Date         time.Time
	PostClass    string
	Excerpt      string
	FeatureImage string
	ReadingTime  int // minutes
	Html         string
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

func authorsFunc(authors []Author) string {
	names := make([]string, len(authors))
	for i, a := range authors {
		names[i] = a.Name
	}
	return strings.Join(names, ", ")
}

func tagsFunc(tags []Tag, prefix, separator string) string {
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
	return prefix + strings.Join(links, separator)
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

const text = `
# Header 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada gravida orci vel vulputate. Nunc varius maximus ex consectetur rutrum. Quisque et placerat velit, sed accumsan nibh. In bibendum eros sed ante fringilla aliquam. Pellentesque id dolor ultricies, lobortis risus sit amet, ullamcorper mauris. Fusce tempor lorem id feugiat vulputate. Aliquam erat volutpat. Cras aliquet, nisl non fringilla tincidunt, dolor mi suscipit nunc, nec ultricies sapien orci nec augue. Duis consectetur lorem pellentesque neque tempor, vitae aliquam arcu scelerisque. Etiam aliquam libero id metus gravida, eu sagittis turpis pulvinar. Aenean nec tortor quis risus scelerisque vehicula sit amet nec enim. Vivamus varius enim maximus tempus viverra. Nunc at ligula vitae massa pretium scelerisque quis vel mauris.

## Header 2
Quisque sit amet diam lorem. Sed venenatis pellentesque ipsum a sagittis. Donec arcu augue, bibendum et commodo quis, semper quis risus. Cras lorem nisl, auctor sit amet diam quis, facilisis molestie erat. Etiam auctor, dui a finibus ultricies, turpis odio consequat enim, a aliquam nulla est sed tellus. Ut elit ipsum, tincidunt ut felis ac, tristique tempor augue. Nam eu nisi at elit dictum aliquam ut in urna. Vestibulum sollicitudin erat massa, vel luctus neque blandit ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec volutpat dictum maximus. Ut ullamcorper nec lorem a imperdiet.

### Header 3
Nullam ac libero dolor. Sed volutpat placerat nisl, vel cursus mauris fringilla ut. Praesent non malesuada urna. Donec metus tellus, aliquet ac dignissim a, elementum nec elit. Nam dictum, massa id euismod porttitor, felis mauris placerat enim, vitae scelerisque lorem mi in enim. Mauris justo diam, hendrerit et viverra tristique, accumsan nec nisl. Curabitur congue libero at lectus dapibus, sit amet accumsan nibh faucibus. Nulla aliquam imperdiet cursus. Fusce enim sapien, vehicula at fringilla vel, gravida sagittis mauris. Nunc commodo ante id sapien scelerisque, quis ultricies risus tempor. Proin lacinia, lorem sit amet gravida ullamcorper, nunc eros viverra arcu, vitae bibendum ex felis quis enim. Ut interdum convallis mi ac dapibus. Curabitur mollis volutpat purus vitae molestie.

#### Header 4
Aenean dignissim laoreet metus eu pretium. Nulla at est eu diam auctor aliquam. Phasellus eget odio ac ex euismod vestibulum at eu ligula. Nulla eu velit non massa venenatis mattis sed vehicula leo. Integer volutpat massa vitae lectus volutpat lobortis. Sed sed interdum lectus. Maecenas eu velit at mi vehicula venenatis. Curabitur in erat ac libero vestibulum ornare vel id felis. Morbi eu dictum magna. Sed in porttitor lorem, sed semper nunc. Curabitur sollicitudin sodales lectus at aliquam. Sed eu velit vel orci pulvinar tempus sit amet at libero. Praesent imperdiet interdum pretium. Praesent ultrices facilisis enim, in volutpat ex volutpat ac.

##### Header 5
Nulla facilisi. Cras suscipit tempor nisl in porttitor. Integer vel tempus nisi, in posuere urna. Duis ut est vel eros varius faucibus. Vestibulum a nisl sed urna tincidunt posuere at sed dui. In convallis rhoncus ex non consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam eleifend ut magna quis dignissim. Fusce sodales est sit amet posuere facilisis. Sed viverra mollis odio, nec bibendum quam efficitur eget. Aliquam lacus dolor, dapibus et purus ac, congue tempus mauris. Pellentesque sed blandit justo. Ut varius erat in nunc dictum, ullamcorper cursus ante sagittis. Aenean tempus nunc quis arcu ultricies, ac suscipit lacus porttitor. Phasellus maximus, justo at vehicula hendrerit, augue erat pulvinar est, ut rutrum odio arcu et ex. Nunc cursus euismod mattis.
`

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

	victor := Author{
		Name:     "Victor",
		Bio:      "Victor's bio",
		Location: "San Jose",
		Website:  "denisov.io",
		Twitter:  "VictorDenisov",
		Facebook: "VictorFacebook",
		Url:      siteUrl + "/author/victor",
	}

	sergey := Author{
		Name:     "Sergey",
		Bio:      "Sergey's bio",
		Location: "Saratov",
		Website:  "densovt.org",
		Twitter:  "Serge",
		Facebook: "SergeFacebook",
		Url:      siteUrl + "/author/sergey",
	}

	posts := []Post{
		Post{
			Title:        "First post",
			Url:          siteUrl + "/first.html",
			Authors:      []Author{victor},
			Tags:         []Tag{Tag{"first", "first"}, Tag{"post", "post"}},
			Date:         time.Now(),
			PostClass:    "post",
			Excerpt:      "This is my short excerpt of the blog post",
			FeatureImage: "https://static.ghost.org/v2.0.0/images/writing-posts-with-ghost.jpg",
			ReadingTime:  2,
			Html:         renderMarkdown(text),
		},
		Post{
			Title:        "Second post",
			Url:          siteUrl + "/second.html",
			Authors:      []Author{victor, sergey},
			Tags:         []Tag{Tag{"second", "second"}, Tag{"post", "post"}},
			Date:         time.Now(),
			PostClass:    "post",
			Excerpt:      "This is my longer excerpt of second blog post",
			FeatureImage: "https://static.ghost.org/v2.0.0/images/writing-posts-with-ghost.jpg",
			ReadingTime:  5,
			Html:         renderMarkdown(text),
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

func renderMarkdown(text string) string {
	extensions := parser.CommonExtensions | parser.AutoHeadingIDs
	parser := parser.NewWithExtensions(extensions)

	md := []byte(text)
	html := markdown.ToHTML(md, parser, nil)

	return string(html)
}
