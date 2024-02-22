# Eutrius Bloglist

## Purpose

The purpose of this project is to create a bloglist site where users can view, add, delete, and interact with blog articles. Users can add new blogs, delete their own blogs, like blogs, and add comments to existing blogs.

## Major Functions

- Add and Delete Blogs: Only authenticated users can add and delete their own blog articles. Each blog entry will consist of a title, content, and author.
- Like Blogs: Users can like any blog article, and the blog with the most likes will be displayed at the top of the list.
- Add Comments: Users can add comments to any blog article.

## Technologies Used

- Frontend: Vite(React), React-router, Redux
- Backend: Node.js(Express)
- Database: MongoDB

## Getting Started

To run the application locally, follow these steps:

-- Clone the repository:

    git clone https://github.com/Eutrius/Bloglist.git

-- Navigate to the server directory:

    cd Bloglist

-- Install the dependencies on both end:

    cd client && npm install && cd ../server/ && npm install

-- Build the frontend:

    npm run build:ui

-- Start the web app:

    npm Start

-- Open your web browser and navigate to http://localhost:3003 to view the application.
