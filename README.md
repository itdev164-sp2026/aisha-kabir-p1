-- Blooming Motherhood --

    A modern motherhood blog built with Gatsby and Contentful, designed to share reflections, encouragement, and real experiences of motherhood in a clean and elegant interface.
  
-- Project Description --

    Blooming Motherhood is a blog application that allows users to browse and read articles about motherhood, personal growth, and parenting.

    The site is powered by Gatsby for fast performance and Contentful as a headless CMS for managing content. This setup allows for dynamic content updates while maintaining a structured and scalable front-end architecture.

    The goal of this project is to demonstrate:

    ~ integration of a CMS with a React-based framework
    ~ component-based design
    ~ clean UI/UX with styled components
    ~ modern web development practices

-- Features --

    ~ Homepage displaying blog posts
    ~ Dynamic blog post pages
    ~ Navigation bar (Home, About, Contact)
    ~ Hero images for each post
    ~ Card-based layout with hover effects
    ~ “Read More” links for full articles
    ~ Back-to-home navigation
    ~ Content managed via Contentful CMS
    ~ Responsive design
    ~ Styled Components for styling
    ~ Footer with site and author info

-- Technologies Used --

    ~ React
    ~ Gatsby
    ~ Styled Components
    ~ Contentful CMS

-- Installation & Setup --

    1. Clone the repository:
          git clone https://github.com/itdev164-sp2026/aisha-kabir-p1.git
          cd aisha-kabir-p1

    2. Install dependencies:
          npm install
    
    3. Start development server:
          gatsby develop

    4. Open in browser:
          http://localhost:8000

-- Contentful Setup --

  To connect Contentful:

    1. Create a Contentful space
    2. Add content model for blog posts
    3. Add your API keys in .env:

        CONTENTFUL_SPACE_ID=your_space_id
        CONTENTFUL_ACCESS_TOKEN=your_access_token

-- Project Structure --

      src/

        components/

          header.js

          layout.js

          seo.js

          themes/
          
        pages/
        
          index.js
          about.js
          contact.js
          
        templates/
          motherhood-post.js

-- Author --

  Aisha Kabir

-- Notes --

  This project was created as part of ITDEV-164 - Web Programming 2 to demonstrate modern web development practices using Gatsby and a headless CMS.