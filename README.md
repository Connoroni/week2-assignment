# week2-assignment

**Reflection**
I achieved all the standard requirements, with a website that allows users to switch between 8 different images by clicking on their thumbnails. I was able to make the thumbnails focusable using tabIndex, and eventually figured out how to make it so pressing enter when focused would work as an event listener after looking at the JS code for Manny's example website. I made accessibility a major priority and included alt text for both the thumbnails and main images. I also added aria-labels to the two arrow buttons and these actually worked with tab and enter straight away, which I assume is a special property of buttons that my thumbnails don't have.

I designed the website for the size of my own laptop screen by default but added basic media queries to resize the thumbnails and thumbnail bar, and to shrink the main image to a certain extent but after a certain point the user must scroll to see the full image on smaller devices.

The main issues I ran into were:

- Getting the thumbnails to appear, which Manny solved by explaining to me that size measurements written in JS don't need 'px' after them
- Getting my event handlers to wait for a click instead of firing when I loaded the page, which ChatGPT eventually solved as detailed in the sources section below
- Getting the focused elements to respond to the enter key, which I solved by looking at Manny's example website as mentioned above

My main struggle with this assignment was the jargon used in online forums when I was searching for solutions to specific problems (primarily the issue of my events all firing immediately which took up most of my time and brainpower on the assignment). ChatGPT was helpful here in offering solutions in much simpler language when I explained my problems, so I guess from now on I'll use it in these situations when I know exactly what my problem is but can't find/understand the other solutions I find online.

I think my JS is probably very inefficient, but the only way I could understand to keep the thumbnails linked to the appropriate positions in the array was to create the thumb variables (thumb1, thumb2, etc.) but I had to then add 2 event listeners to each of these to make them work as intended. After looking at Manny's example website to solve my keydown problem, I realised I could've used a for of loop which would've meant the index was already stored in a variable to use elsewhere. I didn't realise this until I'd already written about 99% of my code, so I'm not going to change it for this assignment.

**Sources**

- Issues with event listeners firing immediately - https://stackoverflow.com/questions/35667267/addeventlistenerclick-firing-immediately https://stackoverflow.com/questions/10000083/javascript-event-handler-with-parameters
  I was having a problem with the bigImageHandler function executing immediately when I loaded the page instead of on clicking a thumbnail, which meant it ran through in order and always just displayed the final image in the array. The solution for this actually came from ChatGPT (which I now realise just repeated what the other sources said but in language I could understand, though I guess that's how LLMs work) telling me to not include the brackets after the function name in the event handler. I now had to work out how to get the image number to the function as an argument though, and ChatGPT gave me the solution for that too, with an anonymous function as the event handler that just runs the main function so that I can pass my arguments to it.

- Centering fixed div - https://stackoverflow.com/questions/2861247/center-aligning-a-fixed-position-div
  This was for the thumb-container as I wanted it displayed over the big-image-container so the big image was as large as possible without scrolling.

- Manny's website that I lifted the 'keydown' event listener from - https://image-galleryv2.vercel.app/
