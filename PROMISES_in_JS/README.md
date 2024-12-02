# Key Takeaways:

1. Promises comes as a result of asynchronous tasks in JS.
2. While calling external JSON Data through fetch() (which is a built-in promise), we get a promise on console.
3. await can only be used with async ⚠️.
4. For better output of json data we can use the console.log statement as:
```
console.log(await resultFromServer.json());
```