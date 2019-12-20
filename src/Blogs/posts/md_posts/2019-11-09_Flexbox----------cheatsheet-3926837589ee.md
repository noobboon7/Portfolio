---

title: "Flexbox 💪🏼🟥 / cheatsheet"
date: "November 9, 2019"

---
# Flexbox 💪🏼🟥 / cheatsheet

PHEW!!Finally made it to flexbox! After being entrenched is massive amounts of sass code I’ve made to working with flexbox, and got to say…

![](https://cdn-images-1.medium.com/max/800/0*ypKQrcnWi_jiZulq.png)

PHEW!!Finally made it to flexbox! After being entrenched is massive amounts of sass code I’ve made to working with flexbox, and got to say, it’s much easier to “wrap” than having to clearfix floating elements😵.

#### What’s Flexbox?

Simply put, flexbox is a layout mode in CSS3; a previous version of CSS defined four layout modes:

*   **block layout** for laying out documents
*   **inline layout** for laying out text
*   **table layout** for laying 2D tabular data
*   **positioned layout** for explicit positioning

The main idea behind flexbox is to give the container the ability to expand and shrink elements to best use all the available space. Flexbox completely changes the way we build one dimensional layouts.

#### Concept

![display: flex](https://cdn-images-1.medium.com/max/800/0*mimtQsp6DMLguQYD.png)
display: flex

When setting a property to display “flex” on a(n)container you are also defaulting the items inside that container to the main axis. Keep in mind that when working with flexbox we only work on direction at a time. The main axis being the X axis and the cross is your Y Axis.

#### Syntax/Cheatsheet

Here is some of the most important syntax, in my opinion, that you’ll be using to create layouts with flexbox. Think about this more like a cheatsheet😁🤓.

//container properties 

flex-direction: row /\*X-axis\*/| row-reverse | column /\*Y-axis\*/| column-reverse

flex-wrap: nowrap| wrap | wrap-reverse

justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly 

align-items: stretch | flex-start | flex-end | center | baseline

align-content: flex-start | flex-end | center | space-between | space-around

//item properties 

align-self: auto | stretch | flex-start | flex-end | center | baseline

order: 0 | <integer>

flex-grow: 0 | <integer>

flex-shrink: 1| <integer>

flex-basis: auto| <length>

or just flex: 0 1 auto

![](https://cdn-images-1.medium.com/max/800/1*ZZREVSPxe5Ll9U28dF6LPA.png)

since medium isn’t supporting codepen repls I took a screenshot so you can see what display flex is doing to the items in the grey container. You can always click on the link below to experiment with flexbox. Try plugging in the css code above as well to see what types of layout you can get with flexbox.

[https://codepen.io/pen/?editors=1100#0](https://codepen.io/pen/?editors=1100#0)

#### Conclusion

This approach to making a layout with css is definitely much easier than setting it up with any block layout I’ve done. Not to mention that I do find myself write a bit less css code. From the research I’ve been doing css grid, flexbox and grid are compatible and will make the layout of a web page a faster process.

By [Jerry Velázquez](https://medium.com/@jvr572) on [November 9, 2019](https://medium.com/p/3926837589ee).

[Canonical link](https://medium.com/@jvr572/flexbox-cheatsheet-3926837589ee)

Exported from [Medium](https://medium.com) on December 19, 2019.