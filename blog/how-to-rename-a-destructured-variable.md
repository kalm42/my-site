---
path: /blog/how-to-rename-a-destructed-variable
slug: /how-to-rename-a-destructed-variable
date: 2019-09-22T16:50:21.663Z
featured_image: /assets/howtorenameadestructedvariable.png
title: How to rename a destructed variable
---
# How to rename a destructed variable

This example is shameless stolen from [Wes Bos](https://wesbos.com/destructuring-renaming). Seriously, go check it out, and buy a tutorial from him. They're awesome. 

The object we will destruct.

```javascript
const person = { name: "John Snow", knows: null, alive: undefined,  social: { facebook: "johnoftheblack", twitter: "thekinginthenorth" }}
```

Now to destructure it.
```javascript
const { facebook: fb, twitter: tweet } = person.social
```
