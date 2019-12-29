---

title: "How to structure css"
date: "October 27, 2019"

---
# How to structure css


![google image of page park](https://cdn-images-1.medium.com/max/800/0*Kk-wLItU1vmrWYzo.jpg)
google image of page park

On my journey to becoming a better css developer I was always struggling to organize my files in a way that made it easier for other developers modify; though, I’m glad to have found the BEM and 7 to 1 pattern in scss.

#### What is BEM

![](https://cdn-images-1.medium.com/max/800/0*8adMk8z4fw6msMvC.jpeg)

BEM is an acronym that stands for Block-Element-Modifier; it’s used structure the layout of the page and make it easier to rearranging. The fastest way to spot if a developer is using this method is the syntax.
```
_/\* Block component \*/_ 

.btn {}  

_/\* Element that depends upon the block \*/_  

.btn\_\_price {}  

_/\* Modifier that changes the style of the block \*/_ 

.btn--orange {}  

.btn--big {}
```

In this example, the block element is written as a high-level component, and should be referred to as the parent. The next element is denoted with two underscores, this part of the BEM system is responsible for the element that lives inside the block. Modifiers are written with two hyphens; these are meant to give the block some style, without affecting other buttons that you may have.

#### Seven to One Pattern

In this part, we are going to be talking about an architectural pattern that is very useful when trying to make changes to the style of the webpage. The 7-to-1 pattern is 1 main.scss file and 7 folders comprised of “particles” that make up the styling portion of your site.

\*\***Note:** 7-to-1 pattern is predominately used with preprocessors like Sass. \*\*

```
sass or css/
||– abstracts/|   
    |– _variables.scss    # Sass Variables|   
    |– _functions.scss    # Sass Functions|   
    |– _mixins.scss       # Sass Mixins|   
    |– _placeholders.scss # Sass Placeholders
||– base/|   
    |– _reset.scss        # Reset/normalize|   
    |– _typography.scss   # Typography rules|   …                     
||– components/|   
    |– _buttons.scss      # Buttons|   
    |– _carousel.scss     # Carousel|   
    |– _cover.scss        # Cover|   
    |– _dropdown.scss     # Dropdown|   …                     
||– layout/|   
    |– _navigation.scss   # Navigation|   
    |– _grid.scss         # Grid system|   
    |– _header.scss       # Header|   
    |– _footer.scss       # Footer|   
    |– _sidebar.scss      # Sidebar|   
    |– _forms.scss        # Forms|   …                     
||– pages/|   
    |– _home.scss         # Home specific styles|   
    |– _contact.scss      # Contact specific styles|   …                     
||– themes/|   
    |– _theme.scss        # Default theme|   
    |– _admin.scss        # Admin theme|   …                     
||– vendors/|  
    |– _bootstrap.scss    # Bootstrap|   
    |– _jquery-ui.scss    # jQuery UI|   …                     
|– main.scss              # Main Sass file
```

The **base** folder is going to hold all the boilerplate code that style the site on a global level. **Abstracts** has your building tools that make it easier for you to create styling without having to write the same code over and over again. **Components** are micro element of the page that are reusable in every part of a website. **Pages** is pretty self explanatory, and **layouts** are macro elements that are used on certain part of the site. **Vendors** are use to hold 3rd party libraries, and **theme** are usually seen more in larger applications that like to change the layout of their site.

So these are pretty simple to implement, but very helpul when build clean reusable code that scales well.

By [Jerry Velázquez](https://medium.com/@jvr572) on [October 27, 2019](https://medium.com/p/8c5572228d4d).

[Canonical link](https://medium.com/@jvr572/how-to-structure-css-8c5572228d4d)

Exported from [Medium](https://medium.com) on December 19, 2019.