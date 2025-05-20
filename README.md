# Sunday Frontend Engineering Assessment

## Overview
This is a frontend engineering assessment for Sunday, focused on building a React-based application for a lawn care subscription service. The starter code provides a basic UI layout with product displays, but lacks the necessary interactivity.

## Considerations for a successful interview
- Please disable any AI autocomplete tools for the duration of the interview.
- We recommend using a VSCode-based IDE, as you can open a browser tab so the interviewer can see the app running. If you're using a different IDE, you can run the app locally and share your code, and the interviewer can run it in their browser at a later time after you submit.
- We are less concerned with the completeness of the solution, and more concerned with your approach to solving the problem and working with the interviewer.

## Challenge & Requirements

Your task is to implement the missing functionality in this application, allowing users to build a lawn care subscription plan by adding products to their cart and generating a shipment schedule based on the application dates of the products.

### Requirements
1. **Add interactivity to the product cards:**
   - Implement the "Add to Subscription" and "Add one time" functionality for each product
   - Only products with `isSubscribable: true` should be allowed to be added as recurring items
   - Products with `isSubscribable: false` should only be available as one-time purchases


2. **Implement cart functionality:**
   - Add state management for recurring and one-time items
   - Implement the ability to remove items from the cart
   - Calculate and display the monthly subscription total and the one-time purchase total

3. **Generate shipment plan:**
   - When the "Generate Lawn Plan" button is clicked, create a shipment schedule based on the application dates of the products in the cart
   - Each product should be assigned to a shipment that falls within its application window (`applicationStart` to `applicationEnd`)
   - Display the shipment schedule with appropriate dates and included products

### Acceptance Criteria

1. Users can add subscribable products to their recurring subscription
2. Users can add any product as a one-time purchase
3. Users can remove products from their cart
4. The application correctly calculates and displays totals
5. Clicking "Generate Lawn Plan" produces a logical shipment schedule based on product application dates
6. The UI is responsive and provides appropriate feedback to user actions

## Getting Started

1. Clone this repository
2. Run `npm install` or `yarn` to install dependencies
3. Run `npm run dev` or `yarn dev` to start the development server
4. Open your browser to the displayed URL (usually http://localhost:5173)

## Technical Notes

- This project uses React with Vite as the build tool
- Styling is done with plain CSS
- The product data is provided in `src/data/products.js`
- You are free to use any state management approach you prefer (useState, useReducer, context, etc.)
- You may add additional dependencies if needed, but try to keep the solution as lean as possible

## Evaluation Criteria

Your solution will be evaluated based on:

- Functionality: Does it meet all the requirements?
- Code quality: Is the code clean, well-organized, and maintainable?
- UI/UX considerations: Is the interface intuitive and responsive?
- Problem-solving approach: How did you tackle the requirements?
- Edge cases: Did you handle potential edge cases?

## Submitting Your Solution

When you're done, please:

1. Push your code to a GitHub repository
2. Include any instructions or notes in the README
3. Share the repository link with the hiring team

Feel free to ask any clarifying questions about the requirements during your pairing session. Good luck!
