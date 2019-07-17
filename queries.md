# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
SELECT ProductName, CategoryName FROM [Products]
inner join categories on products.categoryID = categories.categoryID

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
SELECT OrderID, ShipperName FROM Orders
inner join shippers on orders.shipperID = shippers.shipperID
WHERE orderDate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
SELECT ProductName, Quantity FROM OrderDetails as O
inner join products as p on o.productID = p.productID
WHERE orderID = '10251'
ORDER by ProductName

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
SELECT OrderID, CustomerName, LastName as 'Employee Last Name' FROM Orders as O
inner join customers as c on o.customerID = c.customerID
inner join employees as e on o.employeeID = e.employeeID

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 