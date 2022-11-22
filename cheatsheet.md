---
title: Cheatsheet
permalink: cheatsheet/
profile: true
---

```
$('select').on('change', function() {
  alert( this.value );
});
```

```
const found_names = names.filter(v => v.name === "Joe" && v.age < 30);
```

```
$('#inputId').prop('readonly', true);
```
{% include footer.html %}
