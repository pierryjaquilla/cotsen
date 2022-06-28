# cotsen

## Useful commands

```
http-server --ssl --cert ~/.localhost-ssl/localhost.crt --key ~/.localhost-ssl/localhost.key -p 8888
```

And then set a cookie value for `local` to load local changes.


### Start parcel in dev mode

```
npm run dev
```

```
parcel index.html
```

### Share server to public internet

```
ngrok http 1234
```
1234 is the port number


### HOW THE GITHUB IS LINKED TO THE COTSEN WEBSITE

it is linked into the block "CSS to hide navigation background color & search box" that should be display in everypages

```
LOGIN: The site URL is the same one we shared previously, https://cotsen.drupal.gwu.edu (log in at https://cotsen.drupal.gwu.edu/user, GW VPN required). Right now there is one user (karrer) so if you want an additional one, please work with Marie Eve or Chita to request an Affiliate NetID.

NAVIGATION: This will be managed via a custom block, found via Structure > Blocks. The site also comes with the "Utility Navigation" enabled at the very top; if you don't want this, you can delete the content called "Main Utility Links". 

FONTS: I created a Font Sample page for reference. Based on our last conversation I'd recommend the "Marketing Text" style for body copy and the "Testimonial" styles for pull quotes. These can be applied to text via the WYSIWYG "Styles" dropdown.

TEMPLATES: I know you'll be applying a number of customizations but it might be worth starting them off our existing bootstrap templates. You'll find those templates via these last 3 icons in the WYSIWYG (layout templates, tabs, accordions):  

ANIMATION: We have Ani.js loaded and you should be able to apply that throughout as desired.

IN GENERAL: Use the content type "General Content" for pages and at the bottom select the "Without sidebars" option. Try to do what you can via the WYSIWYG source code directly on pages and via Blocks; don't get bogged down in the other configuration/layout/template/Panelizer etc. options found in the Drupal admin as those will likely not work as expected.  

I'm copying Jill Pichocki, our front-end dev who is well practiced in CSS overrides on our Drupal 7 instance, and Natasha Mojica, our expert in all things GW Drupal. If you have any questions feel free to reach out by email or sign up for a Virtual Office Hours session. I'd also like to point you to the Drupal Demo website, and in particular these pages:  
WYSIWYG template samples
Font Awesome Icons

```
