# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a class?

Your answer: It makes a parent and child class so that the child class can use (inherit) any of the methods in the parent class.

Researched answer: In object oriented programming, "super" is used to call a method from the parent class. You can use it in a child class to have access to a method with the same name as a method in the parent class. It will call the method and pass on any arguments that were given to the method. This way, the subclass can reuse methods of the parent class and it's not necessary to define them, but the subclass can also have methods of its own. 
An example: I could name a method speed_up for a Vehicle class and I could use it for a subclass called Bike. 


2. What is a gem?

Your answer: It is a bit of code, or a library of code in Ruby. Rails is an example of a gem. RSpec (the Ruby testing framework we use, is also a gem).

Researched answer: It is a package or library that contains a collection of reusable code. Gems include code that is written in Ruby but can also include other things like images, templates and documentation. 
Some popular gems are Rails, Sinatra, and RSpec. Here is more information about Ruby gems: https://guides.rubygems.org/rubygems-basics/

3. What is a relational database? Are there other kinds of databases?

Your answer: It's a database with tables that have IDs that relate. For example, one table might have a list of students and one might have a list of cohorts and those tables might relate through an ID of the students. Yes, there are more kinds of databases.

Researched answer: A relational database is a type of database that stores data in tables. Tables relate to each other and those relationships are defined by using foreign keys. Data in relational databases is organized in a way that can be easily updated, accessed and managed. 
Here are some examples of relational databases: MySQL, PostgreSQL, Microsoft SQL Server.
Relational databases are not the only kind of databases, but they are the most common. But there are many others. Here are some other types:  Hierarchical, Non-Relational, Object-oriented, Key-value stores, Document databases, etc. Here is a resource about database types: https://www.mongodb.com/databases/types

4. What are primary keys? Why are they important? 

Your answer: Primary keys are the keys (ID) that relates two tables. They are important because without them, the two tables wouldn't relate. They are what connects the two.

Researched answer: Primary keys are unique identifiers for each record in a relational database. They should contain a unique value for each row of data, they can not contain null values, and every row must have a primary key. They are used to make sure ever record can be uniquely identified and that no duplicate records exist. Without primary keys it would be much more difficult to create relationships between tables. 

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: The HTTP verbs are Get, Post, Put, Patch, and Delete. The following is how they relate to the CRUD actions. 

    CREATE: Create = POST
    READ: Display data = GET
    UPDATE: Replace old content with new content = PUT
    and Replacing things that are different = PATCH
    DELETE: Removing data = DELETE

Researched answer: HTTP verbs (or methods) are used to tell the desired action to be performed on a specific resource. The most common HTTP verbs are post, get, put, and delete. They correspond to create, read, update and delete. CRUD operations can be performed on a database. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: REST stands for Representational State Transfer. It's a web architecture style. RESTful routes are designed to map standard HTTP methods (like GET, POST, PUT, and DELETE) to CRUD (Create, Read, Update, and Delete) operations in a database. These routes are organized logically and in a consistent way. Each resource has a unique URL and a set of routes that correspond to CRUD operations on that resource. This allows for easier navigation and use of resources. Here is a resource: https://www.oreilly.com/library/view/restful-rails-development/9781491910849/ch04.html

2. Model validations: These are rules that are applied to a model's attributes so that the data stored in the model meets certain requirements. The validations are usually defined in the model itself. 
Here are some examples: checking to insure that a required field is present, ensuring that a field is a certain data type, or that its value is within a specific range. These validations are usually enforced before data is saved to the database. It's kind of like JEST testing but for databases.

3. Params: A data structure that holds all of the key-value pairs passed in the HTTP request. The params object is often used to extract data from the HTTP request and pass it to the backend for processing. 

4. ERB: This stands for Embedded Ruby. It is a system for Ruby that allows you to embed Ruby code insed of an HTML file. The code is executed when the file is rendered and the result gets inserted into the HTML. 
This allows for dynamic web pages that can change based on user input. Here is a resource: https://docs.ruby-lang.org/en/2.3.0/ERB.html

5. API: This stands for Application Programming Interface. It is a set of protocols and standards that define how software components should interact with each other. APIs define a set of functions or methods that a developer can use to access the functionality provided by a piece of software. APIs are often used to allow different applications to communicate with each other and share data. Here are some examples of APIs: https://medium.com/codex/15-fun-and-interesting-apis-to-use-for-your-next-coding-project-in-2022-86a4ff3a2742

