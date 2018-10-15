# frame-of-mind

[![npm version](https://badge.fury.io/js/frame-of-mind.svg)](https://npmjs.org/package/frame-of-mind)

`frame-of-mind` adds a frame around strings.

```sh
yarn add -E frame-of-mind
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`frameOfMind(arg1: string, options?: Config)`](#frameofmindarg1-stringoptions-config-void)
  * [`Config`](#type-config)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import frameOfMind from 'frame-of-mind'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `frameOfMind(`<br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`options?: Config,`<br/>`): void`

This function will add a frame around strings with single or multiple lines.

__<a name="type-config">`Config`</a>__: Options for the program.

|  Name   |   Type   |         Description         | Default |
| ------- | -------- | --------------------------- | ------- |
| padding | _number_ | The left and right padding. | `1`     |

```js
/* yarn example/ */
import frameOfMind from 'frame-of-mind'

(async () => {
  const res = await frameOfMind({
    text: 'example',
  })
  console.log(res)
})()
```
```

```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

(c) [Art Deco][1] 2018

[1]: https://artdeco.bz

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>