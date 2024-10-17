# Portfolio website

This repository is used to to host the portfolio website of the artist, and my mom, [Elly Stolwijk](http://www.ellystolwijk.nl). This website was designed 'by hand' using bare-bones, HTML and CSS code.

# Notes for website updates

## Banner dimensions

- Banners, 'jaarknoppen', are 256 x 256 pixels.

## Images

Image resizing and renaming is done in batch mode of the IrfanView program.

- Images need to be saved with the format `name_###.jpg` (large images) and `name_s_###.jpg` (thumbnail images).
- The thumbnails are resized to 300 px width
- The large images are resized to 1000 px width

# Suggestions for improvement

- It's probably worth it to write a small Python script to replace manual batch processing of new images.
- The number of pages is increasing, and because they are stored in the root directory, this is a bit messy. It would be nice to move all `.html` pages to a new subfolder. However, all links on all pages then need to be updated.
- Moving the entire website to WordPress or a static site generator (think Quarto, or Hugo) would make updating the website much easier.
