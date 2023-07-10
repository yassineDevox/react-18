# react-18 : Transitions

In order to distinguish between urgent and non-urgent updates, React has introduced a new concept called transition.

+ Transition updates move the user interface (UI) from one view to another.
+ Urgent updates reflect direct input, such as typing, clicking, pressing, etc.

So let me give you an example: if you are doing a task and another urgent task comes in that has a higher priority, react will stop that task and work on the higher priority task and then start that task again.