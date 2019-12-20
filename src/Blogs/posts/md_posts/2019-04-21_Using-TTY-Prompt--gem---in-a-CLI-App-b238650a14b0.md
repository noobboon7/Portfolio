# Using TTY-Prompt (gem), in a CLI App

My first experience using a TTY-gem came from, when I had to make a CLI application for a project week, my third week in flatiron’s…

![](https://cdn-images-1.medium.com/max/800/1*iuJogb2SqqWRO-PMQ3fCJQ.png)

My first experience using a TTY-gem came from, when I had to make a CLI application for a project week, my third week in flatiron’s immersive bootcamp. I got to say, it didn’t take too long to build a nice interactive terminal menu that was user friendly… I have to give thanks to a lot of the medium user blog’s for the learning curve, but I feel like I needed a bit more of explanation for some of the functionality: Mainly TTY\_Prompt.

#### Installation

TTY has a bunch of gems you can use to build out your CLI and the installation is pretty easy too. All you have to do is be in the file/director (in your terminal) that you are working in, and gem install tty.

![Installing **ALL**TTY-gems](https://cdn-images-1.medium.com/max/800/1*rnTEf2DyJ2Z-l9CkFBQn4w.png)
Installing **ALL**TTY-gems

Though for our small demonstration, we will only be installing “tty-prompt”…

![Installing on **ONE** TTY-gem](https://cdn-images-1.medium.com/max/800/1*lvPO2Svy4A2yKSa9F-A1FA.png)
Installing on **ONE** TTY-gem

Great! once entered “gem install tty-prompt” we should then “bundle” and make sure we have the gem in our “Gemfile”.

![Root file’s on left and text editor on right](https://cdn-images-1.medium.com/max/600/1*P7n7x2DnA7ulA7yiTQpzWA.png)
Root file’s on left and text editor on right

If you cannot find the TTY-prompt gem in the gem file, then simply write “gem” in lowercase and in quotes write the name of the gem “tty-prompt”. Now we are ready to start making a interactive CLI application with menus.

The order is not important, but you can also do these steps backwards (from the above).

#### Usage

In order to start using TTY-prompt you must start by making it available for use…

![Making a New TTY-Prompt](https://cdn-images-1.medium.com/max/600/1*KQ5R4IO_xyEaTaeXlv2kNQ.png)
Making a New TTY-Prompt![Global](https://cdn-images-1.medium.com/max/600/1*25T0-P5JKnFSt2RPLEGIdg.png)
Global![In a method](https://cdn-images-1.medium.com/max/600/1*YnfhOWmkPw05TpEK_TfM0w.png)
In a method

you can add new tty-prompt to your functions by setting them to a variable with in the scope of the method you are writing; make a new method to call your prompt gem or set it globally in a variable so it is accessible in a global scope throughout your entire project.

When prompting your user for information you might want to give them list of options, multiple options to choose from, general questions or password inputs; tty-prompt has many different prompt options that we can make use of, so let's take a look at some.

#### Prompt options

![Prompt.ask](https://cdn-images-1.medium.com/max/800/1*UDzhthi8waLBMfpMVjii4w.png)
Prompt.ask

Prompt.ask is a prompt function that would allow you to ask your user any question and use that information to create data for your user; do keep the question specific enough so your user can understand. You can also set validations in the prompt that would require the user to have a username, as well as, modifications to what your user inputs.

![Promt.mask](https://cdn-images-1.medium.com/max/800/1*H8o8gtFD0q_vKxhD9Jb-0A.png)
Promt.mask![setting a decoration for Prompt.mask](https://cdn-images-1.medium.com/max/600/1*A9i7Dc6Z28VNNvzZjfG2Og.png)
setting a decoration for Prompt.mask

Prompt.mask is what I like to use for sensitive information (passwords, etc.), like prompt.ask you can also set question and validations for the input. In this particular example, we have decorated mask of the input set to a ball, which is just a variable that was set beforehand; you can choose how you would like the input to be masked with a prompt.decorate. \*Setting your validations might require some syntax knowledge for “regex”.\*

![Prompt.select](https://cdn-images-1.medium.com/max/800/1*Wk2nwQfequ37NK55N-TTpw.png)
Prompt.select

Prompt.select is my personal favorites, because you give your user options to choose from. From those options you can tie functions that you would like to operate based on the choice, which gives your CLI app more fluidity and that’s always pleasing as a user.

![Prompt.multi\_select](https://cdn-images-1.medium.com/max/800/1*-x5pGQH-mKIO_Zy_xgP6QQ.png)
Prompt.multi\_select

The multi\_select function in TTY-Prompt is really useful when you’d like your user to select multiple options from a list. This could come in handy when you have a to-do list or selecting multiple items in a shopping cart.

### Conclusion

I really enjoy using TTY-Prompt for gathering user input; honestly, it makes getting user input so easy and makes your CLI app so much more user friendly! Though, this is just scratching the surface of what TTY\_Prompt can do for you in a CLI app. There is more functionality you implement in your app, if you don’t believe me, check out [https://github.com/piotrmurach/tty-prompt](https://github.com/piotrmurach/tty-prompt) , on github.com to get all the info.

By [Jerry Velázquez](https://medium.com/@jvr572) on [April 21, 2019](https://medium.com/p/b238650a14b0).

[Canonical link](https://medium.com/@jvr572/using-tty-prompt-gem-in-a-cli-app-b238650a14b0)

Exported from [Medium](https://medium.com) on December 19, 2019.