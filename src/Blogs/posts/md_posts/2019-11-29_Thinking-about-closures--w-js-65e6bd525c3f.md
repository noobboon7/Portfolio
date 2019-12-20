# Thinking about closures w/js

Hello worlds! Today I’m going to cover closures, an advanced Javascript topic which will help you write cleaner code; by understanding…

![](https://cdn-images-1.medium.com/max/1200/0*m8auOG4fyxP32tcx.jpg)

Hello worlds! Today I’m going to cover closures, an advanced Javascript topic which will help you write cleaner code; by understanding what happens when you return a variable within a function.

**_NOTE:_** When you return the value of a function, that function is then completed and popped the execution stack and deleted from memory.

#### What is Closures

> A **closure** is the combination of a function bundled together (enclosed) with references to its surrounding state (the **lexical environment**). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time. — MDN webdocs

game plans
![what-are-closures-in-javascript](https://cdn-images-1.medium.com/max/600/0*s5gfP6FCB0Z26VJT.png)
what-are-closures-in-javascript

So closures are practically functions within other function; A way I like to think about this is when you are part of a secret club(outer function) and only members(inner functions) of that club know club secrets(variables inside the parent function). Kind like being part of this team on the left and only them and there coaches know the game plan.

Lets also look at this example from author [dhananjay\_kumar](http://www.infragistics.com/community/blogs/b/dhananjay_kumar/posts/what-are-closures-in-javascript) where we can examine the scope chain. Here we have global scope and a local scope that exists only with the function `foo()` . In the global scope we have a variable “doo”that is declared with the value of “a” and stored in your computer's memory as well as the function `foo()`. Within the local scope(inside the function `foo()`) another variable is declared with the same name (“doo”), but has a different value this time. When called on the last two lines, the result will output the following “doo” and “a”.

[https://gph.is/2QBjeeI](https://gph.is/2QBjeeI)

Some confusion may occur when get two different results from the same variable, but to put simply `doo !== doo.innerscope` . When we call `foo()` it declares doo with a value of “doo” and output to the console “doo” via console.log. The reason for this is because the closest declaration of the variable doo on the scope chain is `doo = "doo"` otherwise if it would look for another declaration of doo(which is equal to “a”). Now the last line in this is `console.log(doo)` which result in the letter a, because we asking the computer for a value on the global scope and since the function above finish executing and was remove before we `console.log(doo)` do is therefore the letter “a”.

#### Conclusion

This a rather small example of how closures work and a more complex closure example would be when writing a function nested within another function. The most important takeaway from this blog would be the concept of scope chain that helps you create a clearer picture for yourself when talking about closures.

![scope chain](https://cdn-images-1.medium.com/max/600/0*4cKsfNt3W2mxEucM.png)
scope chain

In a nutshell, you can start to think about closures as a private conversation that has is own functions and variable, that are only said function would know about.

By [Jerry Velázquez](https://medium.com/@jvr572) on [November 29, 2019](https://medium.com/p/65e6bd525c3f).

[Canonical link](https://medium.com/@jvr572/thinking-about-closures-w-js-65e6bd525c3f)

Exported from [Medium](https://medium.com) on December 19, 2019.