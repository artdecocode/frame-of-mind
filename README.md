# frame-of-mind

[![npm version](https://badge.fury.io/js/frame-of-mind.svg)](https://npmjs.org/package/frame-of-mind)

`frame-of-mind` adds a frame around strings.

```sh
yarn add -E frame-of-mind
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`frameOfMind(string: string, options?: Config): string`](#frameofmindstring-stringoptions-config-string)
  * [`Config`](#type-config)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import frameOfMind from 'frame-of-mind'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `frameOfMind(`<br/>&nbsp;&nbsp;`string: string,`<br/>&nbsp;&nbsp;`options?: Config,`<br/>`): string`

This function will add a frame around strings with single or multiple lines.

__<a name="type-config">`Config`</a>__: Options for the program.

|  Name   |   Type   |         Description         | Default |
| ------- | -------- | --------------------------- | ------- |
| padding | _number_ | The left and right padding. | `1`     |

```js
import frameOfMind from 'frame-of-mind'

const res = frameOfMind(
  `There are thousands upon thousands of students
who have practised meditation and obtained its fruits.
Do not doubt its possibilities because of the simplicity of the method.
If you can not find the truth right where you are,
where else do you expect to find it?`
)
```
```
┌─────────────────────────────────────────────────────────────────────────┐
│ There are thousands upon thousands of students                          │
│ who have practised meditation and obtained its fruits.                  │
│ Do not doubt its possibilities because of the simplicity of the method. │
│ If you can not find the truth right where you are,                      │
│ where else do you expect to find it?                                    │
└─────────────────────────────────────────────────────────────────────────┘
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

(c) [Art Deco][1] 2018

[1]: https://artdeco.bz

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>