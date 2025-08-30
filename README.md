# Movie Review Website

## Brief Description
This is a simple website project for writing and sharing movie reviews.  
It uses semantic HTML for structure, CSS for styling and layouting, and a bit of JavaScript for interactivity. The site is also responsive thanks to Flexbox and Media Queries.

## Key Features
- Semantic HTML for clean and accessible structure  
- CSS for styling and layouting:
  - Float (classic layouting)
  - Flexbox (modern layouting)
- Responsive design with Media Queries (works well on desktop, tablet, and mobile)  
- JavaScript to add interactivity  

## Build With
- HTML5  
- CSS3 (Float, Flexbox, Media Queries)  
- JavaScript  

## Project Goals
- Practice using semantic HTML  
- Apply both float and flexbox layouting in one project  
- Build a responsive website that adapts across different devices  
- Strengthen JavaScript basics for interactivity  

## Role of HTML
- Provides the main structure of the website:
  - Header with website title and navigation bar  
  - Main content with review articles (Synopsis, Spoiler Talk, Personal Rating, Conclusion)  
  - Sidebar with author profile  
  - Footer for closing info  
- Uses semantic tags like `<article>`, `<section>`, `<aside>`, and `<figure>`  
- Includes images for content and profile  
- Links external CSS (`style.css`) and JavaScript (`script.js`)  

## Role of CSS
- Global styling for fonts, colors, and layout reset  
- Layouting:
  - Float for two-column structure (content and sidebar)  
  - Flexbox for aligning header and navigation  
- Navigation design: black navbar with yellow text, sticky at the top  
- Responsive rules with Media Queries:
  - ≤1000px: content and sidebar stacked vertically  
  - ≤768px: navbar rearranged with flexbox  
  - ≤576px: navbar hidden off-screen and slides in when toggled  
- Visual enhancements like shadows, rounded corners, and object-fit for images  

## Role of JavaScript
- Handles mobile navigation (hamburger menu)  
- On screens smaller than 576px, the navbar is hidden by CSS  
- JavaScript listens for clicks on the menu toggle (hamburger icon)  
- Toggles the `slide` class on `nav ul` to make the navbar slide in and out  
- Adds interactivity and improves the mobile experience  

## Demo
https://mrnrasyad.github.io/ReviewBladeRunner2049/ 
