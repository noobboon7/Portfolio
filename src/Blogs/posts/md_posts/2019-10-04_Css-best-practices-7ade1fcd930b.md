# Css best practices

This blog post is intended for people getting started with css, and explains a high level overview of css.

![CSS (Cascading style sheets)Logo](https://cdn-images-1.medium.com/max/800/0*v59dLJr-6p2LiPsG.jpg)
CSS (Cascading style sheets)Logo

#### **Introduction**

If you re new to web development, than you might have already seen the three pillars that make a webpage: HMTL, CSS, and JavaScript. Once you start getting your hands dirty building websites with these three technologies, you might comes to question how they work? Well, covering all three in this blog post might be too much information to write, so we’ll just focus on the style portion.

It might be worth mentioning that this is not a tutorial, but more of a theoretical blog; however, if you would like some good recommendations here is playlist I like to refer to whenever I need some direction: [https://bit.ly/2LHvCJU](https://bit.ly/2LHvCJU).

#### High level overview

When a browser displays a document, it must combine the document’s content with its style information. It processes the document in a number of stages, which I’ve listed below.

![](https://cdn-images-1.medium.com/max/600/0*ClT1ipRrA-pPwvPF.png)

1.  The browser loads the HTML received from a server.
2.  Converts the HTML into a DOM (_Document Object Model_). The DOM represents the document in the computer’s memory.
3.  The browser then fetches most of the resources that are linked to by the HTML document, such as embedded images and videos … and linked CSS! \*[JavaScript](https://www.thoughtco.com/javascript-execution-order-2037518) is handled a bit later on in the process.\*
4.  The browser then parses the fetched CSS, sorts them by their selector types, e.g. element, class, ID, and so on. Based on the selectors it finds, it works out which rules should be applied to which nodes in the DOM.
5.  The render tree is laid out in the structure it should appear in after the css rules have been applied to it.
6.  The visual display of the page is shown on the screen.

### Three Pillars of writing good CSS & HTML

#### Responsive Web Design

When making your website it is good practice to keep in mind that people will be viewing your site on a range of devices; therefore, a [mobile-first-strategy](https://www.investopedia.com/terms/m/mobile-first-strategy.asp) is recommended when building your site. Other things to keep in mind:

*   Fluid Layouts
*   Media Queries
*   Responsive Images
*   Correct Units

#### Maintainable and scalable code

Writing maintainable and scalable code means: Writing clean code, easy to understand, reusable, organized files, proper names for classes, and good structure on HTML file. This is most beneficial to you the developer and other developers looking at your code base.

#### Web Performance

The performance of your site is important for the UX(User Experience), and makes loading your pages much faster. This means less wait time for your user and less HTTP request. If you’d like to know more about making your site faster I’d recommend using a css preprocessor like [Sass](https://sass-lang.com/guide).

#### Conclusion

Well, that's all for now folk! As much as I’d like to go into further details about some of the cool things I’ve learned in css, this is just a high level overview on some of the best practices to keep in mind when styling your work. Feel free to contact me on my social media, I always love working with other peeps!

By [Jerry Velázquez](https://medium.com/@jvr572) on [October 4, 2019](https://medium.com/p/7ade1fcd930b).

[Canonical link](https://medium.com/@jvr572/css-best-practices-7ade1fcd930b)

Exported from [Medium](https://medium.com) on December 19, 2019.