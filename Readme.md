
React URL Shortener App
=======================

This is a simple React-based URL Shortener frontend application. It allows users to enter long URLs and generate shortened versions, optionally with custom codes. Access to the app is protected using an access code login.

Features
--------

- ✅ Access code–based login system (code: CZypQK)
- 🔐 Session-based authentication using sessionStorage
- 📉 Shorten long URLs with optional custom short code
- 📋 View a live list of shortened URLs in a table
- 🔗 Clickable short URLs redirect to the original link
- 🌐 Responsive, clean UI built with Material UI

Tech Stack
----------

- React (Frontend framework)
- Vite (Fast build tool)
- Material UI (MUI) (Design components)
- JavaScript (Language)
- Session Storage (For login state)

Access Code
-----------

To access the application, enter the following access code on the login screen:

CZypQK

Project Structure
-----------------

/src
│
├── /components
│   ├── login.jsx             # Login form with access code
│   ├── UrlShortenerForm.jsx # Input form for long URL + custom code
│   └── UrlTable.jsx         # Displays table of shortened URLs
│
├── App.jsx                  # Main app file with routing and logic
└── main.jsx                 # Entry point (Vite default)

Installation & Running Locally
------------------------------

1. Clone the repository:
   git clone https://github.com/yourusername/url-shortener-app.git

2. Navigate into the folder:
   cd url-shortener-app

3. Install dependencies:
   npm install

4. Start the development server:
   npm run dev

Then open http://localhost:3000 in your browser.

Notes
-----

- This is a frontend-only project. No actual redirection or backend shortening API is implemented.
- The short URLs are mock URLs (e.g., https://short.ly/abc123) and do not persist after page refresh.

License
-------

This project is open-source and available under the MIT License.

Author
------

Himanshu Kumar  
12214259
Lovely Professional University  
https://github.com/himanshu11062003
