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

# BLAS

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Base (i.e., lower-level) basic linear algebra subprograms (BLAS).



<section class="usage">

## Usage

```javascript
import blas from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base@v0.0.7-esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { ccopy, cswap, dasum, daxpy, dcopy, ddot, dnrm2, dscal, dsdot, dswap, gasum, gaxpy, gcopy, gdot, gnrm2, gscal, gswap, sasum, saxpy, scopy, sdot, sdsdot, snrm2, sscal, sswap } from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base@v0.0.7-esm/index.mjs';
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
<script type="module">

import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs';
import blas from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base@v0.0.7-esm/index.mjs';

console.log( objectKeys( blas ) );

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

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base

[test-image]: https://github.com/stdlib-js/blas-base/actions/workflows/test.yml/badge.svg?branch=v0.0.7
[test-url]: https://github.com/stdlib-js/blas-base/actions/workflows/test.yml?query=branch:v0.0.7

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base/tree/deno
[umd-url]: https://github.com/stdlib-js/blas-base/tree/umd
[esm-url]: https://github.com/stdlib-js/blas-base/tree/esm
[branches-url]: https://github.com/stdlib-js/blas-base/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base/main/LICENSE

<!-- <toc-links> -->

[@stdlib/blas/base/ccopy]: https://github.com/stdlib-js/blas-base-ccopy/tree/esm

[@stdlib/blas/base/cswap]: https://github.com/stdlib-js/blas-base-cswap/tree/esm

[@stdlib/blas/base/dasum]: https://github.com/stdlib-js/blas-base-dasum/tree/esm

[@stdlib/blas/base/daxpy]: https://github.com/stdlib-js/blas-base-daxpy/tree/esm

[@stdlib/blas/base/dcopy]: https://github.com/stdlib-js/blas-base-dcopy/tree/esm

[@stdlib/blas/base/ddot]: https://github.com/stdlib-js/blas-base-ddot/tree/esm

[@stdlib/blas/base/dnrm2]: https://github.com/stdlib-js/blas-base-dnrm2/tree/esm

[@stdlib/blas/base/dscal]: https://github.com/stdlib-js/blas-base-dscal/tree/esm

[@stdlib/blas/base/dsdot]: https://github.com/stdlib-js/blas-base-dsdot/tree/esm

[@stdlib/blas/base/dswap]: https://github.com/stdlib-js/blas-base-dswap/tree/esm

[@stdlib/blas/base/gasum]: https://github.com/stdlib-js/blas-base-gasum/tree/esm

[@stdlib/blas/base/gaxpy]: https://github.com/stdlib-js/blas-base-gaxpy/tree/esm

[@stdlib/blas/base/gcopy]: https://github.com/stdlib-js/blas-base-gcopy/tree/esm

[@stdlib/blas/base/gdot]: https://github.com/stdlib-js/blas-base-gdot/tree/esm

[@stdlib/blas/base/gnrm2]: https://github.com/stdlib-js/blas-base-gnrm2/tree/esm

[@stdlib/blas/base/gscal]: https://github.com/stdlib-js/blas-base-gscal/tree/esm

[@stdlib/blas/base/gswap]: https://github.com/stdlib-js/blas-base-gswap/tree/esm

[@stdlib/blas/base/sasum]: https://github.com/stdlib-js/blas-base-sasum/tree/esm

[@stdlib/blas/base/saxpy]: https://github.com/stdlib-js/blas-base-saxpy/tree/esm

[@stdlib/blas/base/scopy]: https://github.com/stdlib-js/blas-base-scopy/tree/esm

[@stdlib/blas/base/sdot]: https://github.com/stdlib-js/blas-base-sdot/tree/esm

[@stdlib/blas/base/sdsdot]: https://github.com/stdlib-js/blas-base-sdsdot/tree/esm

[@stdlib/blas/base/snrm2]: https://github.com/stdlib-js/blas-base-snrm2/tree/esm

[@stdlib/blas/base/sscal]: https://github.com/stdlib-js/blas-base-sscal/tree/esm

[@stdlib/blas/base/sswap]: https://github.com/stdlib-js/blas-base-sswap/tree/esm

<!-- </toc-links> -->

</section>

<!-- /.links -->
