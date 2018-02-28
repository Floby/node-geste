node-geste
==========

> A small binary that calls a requirable jest exectuable

Why ?
-----

`jest` is widely used, but currently weighs 140MB. On certain projects you may have
a lot of different node packages relying on `jest` for their tests. This multiplies
the total amount of disk usage. I figured downloading `jest` just once was enough already.


How ?
-----

`geste` has no dependencies and only calls `require('jest')` or `require('jest/bin/jest')` depending
on the context. The [require algorithm](https://nodejs.org/dist/latest/docs/api/modules.html#modules_all_together)
is then played and gets you the nearest installed `jest`.

It is up to you to figure out how you want `jest` to be `require()`able.


License
-------

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018 Florent Jaby

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
