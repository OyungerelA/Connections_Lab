# Connections_Lab_Week6
Week 6 HW - Make a Node-Express app that serves a web page. This webpage should use an API that you need to fetch. The API should be from your server (a custom API). Make atleast 1 API that uses .params or .query.

## Planning and Process
I decided to create an API of the Interactive Media classes currently being taught this semester and display it on a webpage so students can easily search for courses based on the different factors. An entry in my JSON file looks like this, where each course has its name, professor, credit number, type, cluster type and class meeting day listed. 

```
  "Connections Lab" : {
      "professor": "Mathura Govindarajan",
      "credit": 4,
      "type": "elective",
      "cluster": "computational media",
      "date": "TueThu"
  }
```

When creating the JSON file, I wasn't able to figure out how to add the same class with different professor, as that would mean creating multiple objects with the same name. Thus, I decided to include only one section of each class if there was multiple. In the future, I hope to learn to include different versions of the same class in the JSON file. 

For the webpage, I added a query where the user is able to narrow down the courses based on the credit number, meeting days and cluster types. I also added a params API that gives the classes taught by a specified professor. While implementing these, I faced quite a lot of challenges. Although professor mentioned in class, I forgot that we are only able to send one reponse per request and I was repeatedly getting the error, "Error: Can't set headers after they are sent to the client" as I was calling multiple res.json() to send data for each of the queries. I fixed this by putting each of the queries in an if-statement so that only one is called at a time and to prevent from sending multiple responses at a time. 

In terms of serving the static webpage, I decided to add an input form for each query/param so that the user can specify what they are searching for, and based on that, I redirect the webpage to the webpages holding the data. For example, if the user enters "Michael Shiloh" in the input box asking about professor name, I redirect the user by calling the line of code

```
  window.location.replace(`http://localhost:8000/courses/michaelshiloh`);

```
which will bring the user to a webpage holding all the courses that professor Michael Shiloh is teaching. Since the user is being redirected to a different page, I thought about adding a "go back" button to each webpage, but wasn't sure how I was able to do it since the webpages for serving data can be numerous. Also, when I enter information on two input boxes back to back, I get an error, which I'm guessing is because I'm attempting to change the data on the webpage displayed. But regardless, the webpage works fine. This certainly is a very simple webpage and I want to implement other features and make it more easy and intuitive to use in the future when I get even more familiar with using node. 

