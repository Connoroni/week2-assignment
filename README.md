# week2-assignment

**Reflection**

**Sources**

- Issues with event listeners firing immediately - https://stackoverflow.com/questions/35667267/addeventlistenerclick-firing-immediately https://stackoverflow.com/questions/10000083/javascript-event-handler-with-parameters
  I was having a problem with the bigImageHandler function executing immediately when I loaded the page instead of on clicking a thumbnail, which meant it ran through in order and always just displayed the final image in the array. The solution for this actually came from ChatGPT (which I now realise just repeated what the other sources said but in language I could understand, though I guess that's how LLMs work) telling me to not include the brackets after the function name in the event handler. I now had to work out how to get the image number to the function as an argument though, and ChatGPT gave me the solution for that too, with an anonymous function as the event handler that just runs the main function so that I can pass my arguments to it.

- Centering fixed div - https://stackoverflow.com/questions/2861247/center-aligning-a-fixed-position-div
  This was for the thumb-container as I wanted it displayed over the big-image-container so the big image was as large as possible without scrolling.
