### Tic-Tac-toe App
This Tic-Tac-Toe app utilizes the concept of event handling in JavaScript, which consists of three stages:

1. Event Capturing: The event travels from the top of the DOM tree down to the target node. During this phase, event listeners set for the capturing phase (capture parameter 
                    set to true) can intercept the event before it reaches its target.
2. Event Targeting: This phase is when the event reaches the target node, the specific element where the event was originally triggered. The event is handled by event 
                    listeners directly attached to the target node.
3. Event Bubbling: The event bubbles up from the target node to the top of the DOM tree. Event listeners set for the bubbling phase (default behavior) can intercept the 
                   event as it propagates up through the ancestors of the target node.

While event bubbling is often avoided using event propagation control, it can be advantageous in certain scenarios through a technique called Event Delegation.

### Event Delegation

Event delegation leverages event bubbling to simplify event handling. Instead of attaching event handlers to each child node, a single event handler is attached to a parent node. When an event occurs on a child node, it bubbles up to the parent, where it can be captured and handled using `event.target`.

### Application in Tic-Tac-Toe

In this Tic-Tac-Toe game, event delegation is employed to handle clicks on the game board. By attaching a single event listener to the parent container of the board, we can manage clicks on any of the individual cells. This approach reduces the need for multiple event listeners and streamlines the event handling process.
