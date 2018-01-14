# [Hold Shift to Check Multiple Checkboxes](https://gk-hynes.github.io/checkboxes/)

A page for working on checkbox selection. Built for Wes Bos'
[JavaScript 30](https://javascript30.com/) course.

[![Screenshot of checkbox page](https://res.cloudinary.com/gerhynes/image/upload/v1515706202/Checkboxes_rlgwud.png)](https://gk-hynes.github.io/checkboxes/)

## Notes

Select all the checkboxes, loop over them and listen for a click.

When a box is checked run the `handleCheck` function.

Create a variable, `lastChecked`, to log the first box that is checked so that when the second box is checked while shift is held down you can know what the last box was. At the end of the function set `lastChecked` to `this` so that it will refer to the most recently checked checkbox.

Check if the shift key is down and a box is being checked.

```js
 if (e.shiftKey && this.checked) { run code }
```

Loop over every checkbox, look for the first one that was checked, start checking boxes, and stop checking when you hit the last box that was checked.

Don't try to figure out where in the DOM the checkboxes are, and which elements are inbetween. This is quite fragile.

Instead, create a variable `inBetween` and set it to `false`. When the loop reaches the first checked checkbox, set `inBetween` to `true` and start checking checkboxes. When the loop reaches the last checkbox, set `inBetween` to `false`.

If `inBetween` is `true` set `checkbox.checked` to `true`.

```js
checkboxes.forEach(checkbox => {
  if (checkbox === this || checkbox === lastChecked) {
    inBetween = !inBetween;
  }
  if (inBetween) {
    checkbox.checked = true;
  }
});
```

By checking if the loop is hitting `this` _or_ `lastChecked`, the function works from both top to bottom and bottom to top.

By using `inBetween = !inBetween` you can swap it from true to false or false to true.
