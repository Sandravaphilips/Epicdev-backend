# Epicdev-backend

This was made as a solution to a coding challenge.

To run this code on your local server, install the dependencies and run __npm start__ on your terminal.
For production, it is hosted on [Heroku](https://epicdev.herokuapp.com/).

## Available Endpoints

### GET /suppliers/:id
It returns the details of the supplier with the specific ID, including their associated products.

### POST /suppliers
It allows you to add a new supplier. All fields are required and they are: __firstName, lastName, location and contactInfo__.

### POST /suppliers/:id/products
Through this endpoint, a supplier can add products to their profile. The fields that would be requested are: __name, sku(i.e the Stock Keeping Unit) and price__.

### DELETE /suppliers/:id
Deletes that supplier whose ID is specified.

### DELETE /products/:id
Deletes the specified product.
