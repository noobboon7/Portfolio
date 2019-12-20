# Making a website responsive

In 2019 we are actively using our phones and other mobile devices to browse the interwebs. So, why is make a responsive website important…

![](https://cdn-images-1.medium.com/max/800/0*GlMtcKj5TOHv5p8i.png)

In 2019 we are actively using our phones and other mobile devices to browse the interwebs. So, why is make a responsive website important? Simply for viewing and accessibility purposes. You can usually tell if a website is responsive if the content changes its size properties when the size of your viewing screen changes.

**Note:** If you use css libraries like Bootstrap 4, material ui or semantic ui; you most likely have the advantage of having a responsive layout. If you’ve been code out your css or use a preprocessors like sass, then you’ll have to make those changes yourself.

#### HTML

<meta name="viewport" content="width=device-width, initial-scale=1.0">

To start you can place the meta tag above in the head tag of your HTML5 file. The name property **viewport** is referencing the user’s visible area of a web page; the content is comprised of two properties which should be separated with a comma. The **width** is going to be measured based on the width of the device that is viewing the content. **Initial-scale** is set to 1.0 which means the content will scale to 100% of the the devices viewport.

#### Css Media queries

**_NOTE:_** _Css media queries are bit more content specific; the code snippets belows are contrived examples in sass._

// Media Query Manager

/\*

0 -600px Phone

600 - 900px Tablet portrait

900 - 1200px Tablet landscape

\[1200 - 1800\] is where our normal style apply

1800px +: Big desktops

$Breakpoint arguement choices:

\- Phone

\- tab-port

\- tab-land

\- big desktop

\*/

Above is a reference point that I like to look at when creating a responsive site.

//mixins.scss

@mixin respond($breakpoint) {

  @if $breakpoint == phone {

     @media (max-width: 37.5em) {@content}; //600px

  }

  @if $breakpoint == tab-port {

     @media (max-width: 56.25em) {@content}; //900px

  }

  @if $breakpoint == tab-land {

    @media (max-width: 75em) {@content}; //1200px

  }

  @if $breakpoint == big-desktop {

    @media (min-width: 112.5em) {@content}; //1800px

  }

}

So for this example I’m using a mixin instead of writing the same css and will import that into another file where the global styling of my site will be.

// base.scss

html {

 font-size: 65.5%; // 1rem = 10px;

 @include respond(tab-land) {font-size: 56.25%;}

 @include respond(tab-port) { font-size: 50%; }  
}  
\------------------------------------------------

//Main.css

@media (max-width: 75em) {

  html {

   font-size: 56.25%;

  }

}

@media (max-width: 56.25em) {

  html {

   font-size: 50%;

  }

}

In the code snippet above a we made this site response to the tablet screens in portrait and landscape views. We also show the css that this would translate into.

Now that you have an idea of what goes into making a responsive website, it doesn’t seem like a monumental task… at least I thought it was, when I didn’t know how make a page responsive. The idea behind responsive web design is to make the content of the site readily available to a user on any screen. that all, pretty simple huh. 😁

By [Jerry Velázquez](https://medium.com/@jvr572) on [November 1, 2019](https://medium.com/p/b59356174f4f).

[Canonical link](https://medium.com/@jvr572/making-a-website-responsive-b59356174f4f)

Exported from [Medium](https://medium.com) on December 19, 2019.