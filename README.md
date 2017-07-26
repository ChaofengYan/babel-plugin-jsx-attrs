# babel-plugin-jsx-attrs

[![Travis][travis-badge]][travis]
[![npm package][npm-badge]][npm]

Transforms JSX any attributes according to specified rules .

## Example

Converts

```javascript
<div id="test" class="test">
  <label for="test">Test</label>
</div>
```

(roughly) to

```javascript
<div id="test" className="prefix-test">
  <label htmlFor="test">Test</label>
</div>;
```

## Installation & Usage

Install the plugin:

```
npm install --save-dev babel-plugin-jsx-attrs
```

Then edit your `.babelrc` to include `jsx-attrs`:

```json
{
  "plugins": [["jsx-attrs",options]]
}
```

### options

`options` must be object.

```javascript
{
  "for":"htmlFor"  // replace attribute name only
}
```

```javascript
{
  "class":{       // replace attribute name & value
    "name":"className",
    "value":"prefix-{value}"   //  "{value}" will be replaced by the real value
  }
}
```