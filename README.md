# Tekh website

The new public website for [tekh.co.uk](https://tekh.co.uk), designed as a fast, static site that can be hosted on GitHub Pages.

## Pages included

- Home
- What we do
- Sectors
- Work
- About
- Insights
- Contact
- Privacy placeholder

## Publishing on GitHub Pages

1. Create a new GitHub repository and upload this project.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. Push to the `main` or `master` branch. The included workflow builds and publishes the site automatically.

When you are ready to connect `tekh.co.uk`, add the custom domain in the same Pages settings screen and update the domain’s DNS records using GitHub’s instructions.

## Editing content

The main page content is in the `app` folder. Shared colours and styling are in `app/globals.css`. Image placeholders on the Work and About pages can be replaced once final photography and case-study artwork are available.

The contact form currently opens the visitor’s email application, which works on static hosting without collecting data. It can later be connected to a form service or CRM.
