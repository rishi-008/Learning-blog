# Responsively Designed Learning Blog Website
## Problems Faced
- Using CSS Grid to create a responsive website produced the following challenges:
    - The padding for the last CSS Grid element in the CSS Grid wasn't appearing on the screen hence causing the last element's bottom to touch the footer. I figured that the reason for this was because I had set the height of the CSS Grid to 100vh and despite believing that the height of the CSS Grid would be able to contain all the elements, I realized that the solution was to set the height to 80vh or something around that number to account for the footer which occupied a portion of the vh.
    - I had set one of the grid items to position: relative and this caused that element to overlap with other elements