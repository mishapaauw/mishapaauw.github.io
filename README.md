# Portfolio website

This repository is used to to host the portfolio website of the artist, and my mom, [Elly Stolwijk](http://www.ellystolwijk.nl). This website was designed 'by hand' using bare-bones, HTML and CSS code, before I learned anything about static site generators like Quarto or Hugo. 

# Notes for website updates

## Banner dimensions

- Banners, 'jaarknoppen', are 256 x 256 pixels.

## Images

Image resizing and renaming is done in batch mode of the IrfanView program. It's probably worth it to write a small Python script to avoid this.

- Images need to be saved with the format `name_###.jpg` (large images) and `name_s_###.jpg` (thumbnail images).
- The thumbnails are resized to 300 px width
- The large images are resized to 1000 px width

