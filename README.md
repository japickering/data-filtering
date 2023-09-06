# Harnessing JavaScript Filter and Reduce for data processing scenarios

Software developers like myself have developed the sought after skills to write software applications to collect large data sets and manipulate them in ways that would otherwse be highly time consuming by conventional means, particularly for data analytics and marketing purposes.

By leveraging JavaScript methods known as filter() and reduce() on big datasets we can do things such as tracking how many times a customers from a certain demographic has clicked on a social media post, or replied to a product review within a given time period. Big tech companies, refer to these collection of interactions over time as 'Engagement'. That is the basis for how big tech keeps tabs on what customers have seen in featured ads, or what products and services they have been exposed to while logged in to their platforms.

So imagine you're a software developer making a contacts app that describes them as serialised objects. Let's call this contacts data 'accounts' and assign a unique ID to every object.

# Running the code

Please refer to the code in this repository to see an example demo of this implementation.
Clone the repo and ensure you have the current version of NodeJS installed.
Next run the command in a Mac OS termimal or Linux shell like so:
`node index.js`

# Some final thoughts on scnearios and potential use cases

Let's say we wish to filter customers accounts by people that match the first few letters. This is a feature often used in contacts apps developed by the big tech giants. Let's also say in a Marketing scenario where we've been asked to generate pie charts or graphs for the next client presentation, and we need to find the total ages of those filtered contacts. We can run the Array.map() method on the subsequent filtered customer array to get a new array of numbers representing those ages and then run Array.reduce() on that to provide the sum of all those customer ages.

Extending this code then, becomes a matter of how you organise and label your customer account data, and which data points need extracting so that customer experience patterns can be visualised over time. In my experience of contracting, Excel spreadsheets and line graphs don't communicate concepts well to most people, so effective data visualisation combined with great UI design is crucial in today's world of digitial services economy.
