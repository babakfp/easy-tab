# Easy Tab

Easily create tab navigations.

## Production files

Path: `/dist`

- `/dist/easytab-dist.js`
- `/dist/easytab-dist.css`

## Usage

```js
	new EasyTab(container, activeIndex = 1)
```

```html
<div class="my-easytab">
	<li class="easytab__tab">Tab 1</li>
	<li class="easytab__tab">Tab 2</li>

	<div class="easytab__panel">Content 1</div>
	<div class="easytab__panel">Content 2</div>
</div>

<script>
	new EasyTab('.my-easytab')
	// Or
	new EasyTab(document.querySelector('.my-easytab'))
</script>

<!-- Multiple instances with one line of code -->

<script>
	const allEasytabs = document.querySelectorAll('.my-easytab')
	allEasytabs.forEach(el => new EasyTab(el))
</script>
```
