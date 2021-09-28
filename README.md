# react-flash
With a test driven development approach, my first goal was to get the main functionality of the application up and running by creating the appropriate API call(s) with the input and dropdown values.

Once I was able to the retrieve the data from the API, I pulled the information I needed from the data object and rendered the results within 2 components - one for users and the other for repositories.

After creating the structure for each search result, I applied CSS styling using Sass for efficiency. I also used the native CSS grid features to create a responsive 2 and 3 column layout.

Once the application was styled to my liking, I went back into the application to apply the feature enhancements suggested in the instructions –

Using lodash, I was able to retrieve the updated amount of characters typed into the input field.
- Wrapped the API call in a condition to only execute when there is 3 or more characters in the input field
- If the input field has less than 3 characters or is cleared, there are no search results

Given more time, I would have liked to implement the following –

- If there is a value in the input field, update the search results when the user changes the entity type from the dropdown
- Create a Typescript interface (integrate and leverage TS more throughout the application)
- Use React Hooks for more current/modern implementation
- Use life cycles to display the different states of the application - loading data, error states, etc.
- Error handling & validation
  - Remove any spaces that may be entered into the input field
  - Check for unwanted non-aplhanumeric characters 
- Add filtering and sorting functionality
- Add a lazy load feature - load the initial amount of results to display. When the user scrolls down the page and reaches the last result, load in another batch of search results. 
- Retrieve the users location (had trouble finding it in the API documentation. probably just need to add an additional query to my call)

Overall experience – great excercise and I learned a lot as I was developing :)
