## Vue.Shop

This project showcases a Vue.js application with Vuex state management. It includes a sample Express server for state persistence and local storage.

 # Project Overview
This application features a shopping cart, wishlist, and comparison functionality, all managed via Vuex. The user data is stored and managed within the Vuex store, with state persistence using local storage and a sample Express server. 

# Technologies Used
**Progressive :**JavaScript framework for building user interfaces.
**Vuex:** State management pattern and library for Vue.js applications.
**Express:** Web application framework for Node.js.
**LocalStorage:** For state persistence on the client-side.
 # Setup Instructions
## Prerequisites
-Node.js (v14 or higher)
-npm (v6 or higher)
-Vue CLI (for project setup)
-Project Setup
Clone the Repository



git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
Install Dependencies



# npm install
Setup the Express Server

Navigate to the server directory and install dependencies:



# npm install
Run the Express Server



# npm start


# Run the Vue.js Application

Navigate back to the root project directory and start the Vue development server:



cd ..
# npm run serve


# Vuex Store Overview
The Vuex store manages the following state:

**selectedCategory:** The currently selected product category.
**sortOption:** The current sorting option for products.
**searchTerm:** The current search term used.
**cart:** Array of products in the cart.
**wishlist:** Array of products in the wishlist.
**user:** The current user object.
**usersData:** Data associated with all users.
**currentUser:** The currently logged-in user.
**isAuthenticated:** Authentication status of the user.
**comparisonList:** List of products for comparison.
cartCount, wishlistCount, comparisonCount: Counts of items in the respective lists.
**redirectAfterLogin:** Path to redirect to after login.
Mutations
Mutations modify the state and include operations like:

## resetWishlist: Clears the wishlist for the current user.
addToCart: Adds a product to the cart.
**removeFromCart:** Removes a product from the cart.
**clearCart:** Empties the cart.
**addToWishlist:** Adds a product to the wishlist.
**removeFromWishlist:** Removes a product from the wishlist.
**addToComparison:** Adds a product to the comparison list.
removeFromComparison:** Removes a product from the comparison list.
**setUser:** Sets the current user and initializes user data.
**logout:** Logs out the user and resets counts.
**restoreCounts:** Restores cart, wishlist, and comparison counts after login.
## Actions
Actions perform asynchronous operations:


## Getters
Getters provide computed values based on the state:

getRedirectAfterLogin
getSelectedCategory
getSortOption
getSearchTerm
cartTotal
getCart
getWishlist
isAuthenticated
comparisonList
## Usage
Adding/Removing Products: Use the Vuex mutations to manage products in the cart, wishlist, and comparison list.
User Authentication: Manage user state and authentication status using the setUser and logout mutations.

# Videos 
[vercel](https://final-project-drab-theta.vercel.app/)
[CodeExplanation](https://drive.google.com/drive/folders/1BMq9Tfbji0dCtuS-SOCCw53aV3wLHd7I?usp=drive_link)
