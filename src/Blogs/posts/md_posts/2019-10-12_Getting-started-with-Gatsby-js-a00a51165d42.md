---

title: "Getting started with Gatsby.js"
date: "October 12, 2019"

---
# Getting started with Gatsby.js


![Gatsby logo](https://cdn-images-1.medium.com/max/800/0*SITsytebcUkPd3I5)
#####Gatsby logo

Gatsby is a static site generator that uses [_graphql_](https://graphql.org/) to make static queries. This blog will go over:

1.  CLI installation
2.  Creating a new Gatsby site
3.  Graphql queries
4.  Setting up pages

#### Quick Start

If you have Npm installed on your computer; this [quick start](https://www.gatsbyjs.org/docs/quick-start) will set you up with a 0.1.0 version boilerplate. This will include a couple dependencies that are outdated so you will have to update those.

#### CLI Installation

Open up a terminal; you can use command + spacebar to open up your search and type in “Terminal”.

![](https://cdn-images-1.medium.com/max/800/1*01_0T_Rg8QifQ_Kxz8LX4Q.png)

Then return will open up a new terminal window up.

In the terminal window, type:

`npm install -g gatsby-cli`

This will globally add gatsby cli commands; To see the commands available, run `gatsby --help`.

#### Creating a new gatsby site

Once you’ve successfully installed the gatsby-cli you’ll be able to enter:
`gatsby new '<example-site>' && cd <example-site>`
running

&& cd ‘example-site ’

will move you into the directory the new of your new site. The run

npm run develop 

to run a server on localhost 8000.

![Gatsby simple starter:version:0.1.0A simple starter to get up and developing quickly with Gatsby:version:0.1.0](https://cdn-images-1.medium.com/max/600/1*oH3vwsyO9hDcxZmqWgB-yQ.png)
#####Gatsby simple starter:version:0.1.0

From here open it in your text editor of choice and you’ll see a file structure similar to the one on the left.

The first file are node\_modules that contain other node packages; thought, the src folder is where you’re going to be spending most of your time during development. In the gatsby-config.js, is where we are going to be setting up plug-ins and other package dependencies.

#### GraphQL/Setting index

So the great part about setting up your site with this work flow is that it removes some of the work you would have to do installing graphql. This boilerplate will give you the ability to start making static queries. The first thing we’d have to do is import graphql at the very top of the index file.

`import { graphql } from "gatsby"`

Then we’ll have to make query for the sites metadata

`const query = graphql\`

`query {`

   `site {`

      siteMetadata {

               title

               description

               author

       }

    }

`}`



![[http://localhost:8000/\_\_\_graphql](http://localhost:8000/___graphql)](https://cdn-images-1.medium.com/max/800/1*5KplhV3saahI-PU-k1wKEQ.png)
#####[http://localhost:8000/\_\_\_graphql](http://localhost:8000/___graphql)

the image above shows the information from the query; this is a great way to start getting familiar with graphql. Just copy the description below the image to get started.

To get this information on the page you’ll need to write it in the index page like in the picture below:

![](https://cdn-images-1.medium.com/max/600/1*BtvkWjfN_Amzq72P1Lg5Iw.png)

make sure you pass the data to the page, then within the Html tag write regular javascript to access that data.

#### Conclude

So in closing, graphql is going to be used throughout your website to retrieve data from you filesystem, including images; though, you might want to look into [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/?=ima) plug-ins. Till next time

By [Jerry Velázquez](https://medium.com/@jvr572) on [October 12, 2019](https://medium.com/p/a00a51165d42).

[Canonical link](https://medium.com/@jvr572/getting-started-with-gatsby-js-a00a51165d42)

Exported from [Medium](https://medium.com) on December 19, 2019.