<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# BLAS

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Base (i.e., lower-level) basic linear algebra subprograms (BLAS).



<section class="usage">

## Usage

To use in Observable,

```javascript
blas = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var blas = require( 'path/to/vendor/umd/blas-base/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-base@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.blas;
})();
</script>
```

#### blas

Namespace for "base" (i.e., lower-level) basic linear algebra subprograms (BLAS).

```javascript
var o = blas;
// returns {...}
```

### BLAS Level 1

<!-- <toc pattern="+(*asum|*axpy|*cabs|*copy|*dot*|*nrm2|*rot*|*scal|*swap)"> -->

<div class="namespace-toc">

-   <span class="signature">[`ccopy( N, x, strideX, y, strideY )`][@stdlib/blas/base/ccopy]</span><span class="delimiter">: </span><span class="description">copy values from one complex single-precision floating-point vector to another complex single-precision floating-point vector.</span>
-   <span class="signature">[`cswap( N, x, strideX, y, strideY )`][@stdlib/blas/base/cswap]</span><span class="delimiter">: </span><span class="description">interchange two complex single-precision floating-point vectors.</span>
-   <span class="signature">[`dasum( N, x, stride )`][@stdlib/blas/base/dasum]</span><span class="delimiter">: </span><span class="description">compute the sum of absolute values (_L1_ norm).</span>
-   <span class="signature">[`daxpy( N, alpha, x, strideX, y, strideY )`][@stdlib/blas/base/daxpy]</span><span class="delimiter">: </span><span class="description">multiply a vector `x` by a constant `alpha` and add the result to `y`.</span>
-   <span class="signature">[`dcopy( N, x, strideX, y, strideY )`][@stdlib/blas/base/dcopy]</span><span class="delimiter">: </span><span class="description">copy values from `x` into `y`.</span>
-   <span class="signature">[`ddot( N, x, strideX, y, strideY )`][@stdlib/blas/base/ddot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two double-precision floating-point vectors.</span>
-   <span class="signature">[`dnrm2( N, x, stride )`][@stdlib/blas/base/dnrm2]</span><span class="delimiter">: </span><span class="description">calculate the L2-norm of a double-precision floating-point vector.</span>
-   <span class="signature">[`drotg( a, b )`][@stdlib/blas/base/drotg]</span><span class="delimiter">: </span><span class="description">construct a Givens plane rotation.</span>
-   <span class="signature">[`dscal( N, alpha, x, stride )`][@stdlib/blas/base/dscal]</span><span class="delimiter">: </span><span class="description">multiply a double-precision floating-point vector `x` by a constant `alpha`.</span>
-   <span class="signature">[`dsdot( N, x, strideX, y, strideY )`][@stdlib/blas/base/dsdot]</span><span class="delimiter">: </span><span class="description">calculate the dot product with extended accumulation and result of two single-precision floating-point vectors.</span>
-   <span class="signature">[`dswap( N, x, strideX, y, strideY )`][@stdlib/blas/base/dswap]</span><span class="delimiter">: </span><span class="description">interchange two double-precision floating-point vectors.</span>
-   <span class="signature">[`gasum( N, x, stride )`][@stdlib/blas/base/gasum]</span><span class="delimiter">: </span><span class="description">compute the sum of absolute values (_L1_ norm).</span>
-   <span class="signature">[`gaxpy( N, alpha, x, strideX, y, strideY )`][@stdlib/blas/base/gaxpy]</span><span class="delimiter">: </span><span class="description">multiply `x` by a constant `alpha` and add the result to `y`.</span>
-   <span class="signature">[`gcopy( N, x, strideX, y, strideY )`][@stdlib/blas/base/gcopy]</span><span class="delimiter">: </span><span class="description">copy values from `x` into `y`.</span>
-   <span class="signature">[`gdot( N, x, strideX, y, strideY )`][@stdlib/blas/base/gdot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two vectors.</span>
-   <span class="signature">[`gnrm2( N, x, stride )`][@stdlib/blas/base/gnrm2]</span><span class="delimiter">: </span><span class="description">calculate the L2-norm of a vector.</span>
-   <span class="signature">[`gscal( N, alpha, x, stride )`][@stdlib/blas/base/gscal]</span><span class="delimiter">: </span><span class="description">multiply a vector `x` by a constant `alpha`.</span>
-   <span class="signature">[`gswap( N, x, strideX, y, strideY )`][@stdlib/blas/base/gswap]</span><span class="delimiter">: </span><span class="description">interchange two vectors.</span>
-   <span class="signature">[`sasum( N, x, stride )`][@stdlib/blas/base/sasum]</span><span class="delimiter">: </span><span class="description">compute the sum of absolute values (_L1_ norm).</span>
-   <span class="signature">[`saxpy( N, alpha, x, strideX, y, strideY )`][@stdlib/blas/base/saxpy]</span><span class="delimiter">: </span><span class="description">multiply a vector `x` by a constant `alpha` and add the result to `y`.</span>
-   <span class="signature">[`scopy( N, x, strideX, y, strideY )`][@stdlib/blas/base/scopy]</span><span class="delimiter">: </span><span class="description">copy values from `x` into `y`.</span>
-   <span class="signature">[`sdot( N, x, strideX, y, strideY )`][@stdlib/blas/base/sdot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two single-precision floating-point vectors.</span>
-   <span class="signature">[`sdsdot( N, scalar, x, strideX, y, strideY )`][@stdlib/blas/base/sdsdot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two single-precision floating-point vectors with extended accumulation.</span>
-   <span class="signature">[`snrm2( N, x, stride )`][@stdlib/blas/base/snrm2]</span><span class="delimiter">: </span><span class="description">calculate the L2-norm of a single-precision floating-point vector.</span>
-   <span class="signature">[`srotg( a, b )`][@stdlib/blas/base/srotg]</span><span class="delimiter">: </span><span class="description">construct a Givens plane rotation.</span>
-   <span class="signature">[`sscal( N, alpha, x, stride )`][@stdlib/blas/base/sscal]</span><span class="delimiter">: </span><span class="description">multiply a single-precision floating-point vector `x` by a constant `alpha`.</span>
-   <span class="signature">[`sswap( N, x, strideX, y, strideY )`][@stdlib/blas/base/sswap]</span><span class="delimiter">: </span><span class="description">interchange two single-precision floating-point vectors.</span>

</div>

<!-- </toc> -->

### Auxiliary BLAS

<!-- <toc pattern="+(*amax|*lsame|*xerbla*)"> -->

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-base@umd/browser.js"></script>
<script type="text/javascript">
(function () {

console.log( objectKeys( blas ) );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base

[test-image]: https://github.com/stdlib-js/blas-base/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/blas-base/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-base/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-base/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-base/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-base/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-base/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-base/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base/main/LICENSE

<!-- <toc-links> -->

[@stdlib/blas/base/ccopy]: https://github.com/stdlib-js/blas-base-ccopy/tree/umd

[@stdlib/blas/base/cswap]: https://github.com/stdlib-js/blas-base-cswap/tree/umd

[@stdlib/blas/base/dasum]: https://github.com/stdlib-js/blas-base-dasum/tree/umd

[@stdlib/blas/base/daxpy]: https://github.com/stdlib-js/blas-base-daxpy/tree/umd

[@stdlib/blas/base/dcopy]: https://github.com/stdlib-js/blas-base-dcopy/tree/umd

[@stdlib/blas/base/ddot]: https://github.com/stdlib-js/blas-base-ddot/tree/umd

[@stdlib/blas/base/dnrm2]: https://github.com/stdlib-js/blas-base-dnrm2/tree/umd

[@stdlib/blas/base/drotg]: https://github.com/stdlib-js/blas-base-drotg/tree/umd

[@stdlib/blas/base/dscal]: https://github.com/stdlib-js/blas-base-dscal/tree/umd

[@stdlib/blas/base/dsdot]: https://github.com/stdlib-js/blas-base-dsdot/tree/umd

[@stdlib/blas/base/dswap]: https://github.com/stdlib-js/blas-base-dswap/tree/umd

[@stdlib/blas/base/gasum]: https://github.com/stdlib-js/blas-base-gasum/tree/umd

[@stdlib/blas/base/gaxpy]: https://github.com/stdlib-js/blas-base-gaxpy/tree/umd

[@stdlib/blas/base/gcopy]: https://github.com/stdlib-js/blas-base-gcopy/tree/umd

[@stdlib/blas/base/gdot]: https://github.com/stdlib-js/blas-base-gdot/tree/umd

[@stdlib/blas/base/gnrm2]: https://github.com/stdlib-js/blas-base-gnrm2/tree/umd

[@stdlib/blas/base/gscal]: https://github.com/stdlib-js/blas-base-gscal/tree/umd

[@stdlib/blas/base/gswap]: https://github.com/stdlib-js/blas-base-gswap/tree/umd

[@stdlib/blas/base/sasum]: https://github.com/stdlib-js/blas-base-sasum/tree/umd

[@stdlib/blas/base/saxpy]: https://github.com/stdlib-js/blas-base-saxpy/tree/umd

[@stdlib/blas/base/scopy]: https://github.com/stdlib-js/blas-base-scopy/tree/umd

[@stdlib/blas/base/sdot]: https://github.com/stdlib-js/blas-base-sdot/tree/umd

[@stdlib/blas/base/sdsdot]: https://github.com/stdlib-js/blas-base-sdsdot/tree/umd

[@stdlib/blas/base/snrm2]: https://github.com/stdlib-js/blas-base-snrm2/tree/umd

[@stdlib/blas/base/srotg]: https://github.com/stdlib-js/blas-base-srotg/tree/umd

[@stdlib/blas/base/sscal]: https://github.com/stdlib-js/blas-base-sscal/tree/umd

[@stdlib/blas/base/sswap]: https://github.com/stdlib-js/blas-base-sswap/tree/umd

<!-- </toc-links> -->

</section>

<!-- /.links -->
