# colors-lamp
This is a repository fulfilling a class requirement within UCF's Processes for Object-Oriented Software Development class, or POOSD.
The project is part of the first 3 weeks' lab -- to create a DigitalOcean LAMP (Linux, Apache, MySQL, PHP) droplet, and host a simple web application.
This web application is COLORS, showcasing login functionality and the ability to add and search for colors once logged in, linked to the database.

# Technologies Used
Our droplet uses a LAMP stack:
- Linux as the OS.
- Apache to serve the frontend and API endpoints.
- MySQL as the database storing Users and Colors tables.
- PHP for the REST-style API endpoints in `/api`: Login, AddColor, SearchColors.
- HTML/CSS/JavaScript for the frontend in `/public`.
- Git and Github for version control.

# High-level Setup Instructions
1. Clone this repo onto a LAMP server.
	- Ensure this project is in a web-served diretory (e.g. `/var/www/html`).
2. Create the MySQL database and tables.
	- Create a database named COP4331.
	- Create a `Users` table with `ID`, `firstname`, `lastname`, `Login`, `Password`.
	- Create a `Colors` table with `UserID`, and `Name`.

# How to run and access the applicaiton
1. Open the frontend
	- Navigate to the public site.
2. Log in
	- Use a record from the `Users` table.
3. Use the Colors UI


