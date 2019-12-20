---

title: "Javascript basics"
date: "November 23, 2019]"

---
# Javascript basics

Hey all, I recently was asked about web development by a relative of mine who want to venture into coding. I really wasn’t able to break…

![Javascript logo](https://cdn-images-1.medium.com/max/800/0*pP9BLZTsfS71EhdM.jpg)
Javascript logo

Hey all, I recently was asked about web development by a relative of mine who want to venture into coding. I really wasn’t able to break down what I was doing in the console without having to explain some of the basics to him. So, in this blog I’m going to go over some fundamental that make Javascript run under the hood.

#### What is Javascript (High-level overview)

> JavaScript is a programming language that adds interactivity to your website (for example games, responses when buttons are pressed or data is entered in forms, dynamic styling, and animation). -MDN Docs

In **Web Developmen**t Javascript is a client side language, which can be used to design and program how the web pages behave on the occurrence of an event. However, with more advancement in technology we can as use Javascript as a browser engine; which works as a bridge between the User interface and the rendering engine. According to the inputs from various user interfaces, it queries and manipulates the rendering engine.

![](https://cdn-images-1.medium.com/max/800/0*_7gQnM4nWdI6z1Ji.png)

If you are chrome user, then your browser engine is being powered by google’s V8 engine(using JS).

#### Variables

Variables are containers that you can store values in; by declaring a `var`(less recommended), `const, or let` keywords, followed by any name you’ll have successfully created a variable.

```
let myVariabel = "name"var myVariabel = "name" (not recommended)const myVariabel = "name"
```

variable breakdown: Keyword variableName = Data Type

#### Data Types

1.  Strings: A string is a data type that is surrounded by quotes single or double as well as backticks ``"dbl" 'single' `bcktck` ``
2.  Numbers: a number type is represented as integers and floating point number. `integer: 1234 etc. float: 1.3333, 2.44`
3.  Booleans: only two values here True and false, used to create a flow of logic.
4.  Null: In Javascript null is reference to a non-existing object or empty for some reason.
5.  Undefined: The meaning to undefined is value is not assigned; it could also mean if a variable is declared, but not assigned, then its value is undefined.
6.  Objects: this data type is special; objects are used to store collections of data and more complex entities.
7.  Symbols: this type is used to create unique identifiers for objects.

#### Conclusion

These are some of the very basic concepts that you should get familiar with before getting into building things with javascript. It should only take about 15 minutes to get well acquainted with the data types,and they can be easily forgotten so it a good idea to commit these ideas to memory. That’s all for now, in the coming weeks I will go over more of javascript and other technologies.

By [Jerry Velázquez](https://medium.com/@jvr572) on [November 23, 2019](https://medium.com/p/250e41a03b5f).

[Canonical link](https://medium.com/@jvr572/javascript-basics-250e41a03b5f)

Exported from [Medium](https://medium.com) on December 19, 2019.