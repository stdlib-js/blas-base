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

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-base
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var blas = require( '@stdlib/blas-base' );
```

#### blas

Namespace for "base" (i.e., lower-level) basic linear algebra subprograms (BLAS).

```javascript
var o = blas;
// returns {...}
```

### BLAS Level 1

<!-- <toc pattern="+(*amax|*asum|*axpy|*copy|*dot*|*imax1|*nrm2|*rot*|*scal|*sum1|*swap)"> -->

<div class="namespace-toc">

-   <span class="signature">[`caxpy( N, alpha, x, strideX, y, strideY )`][@stdlib/blas/base/caxpy]</span><span class="delimiter">: </span><span class="description">scale a single-precision complex floating-point vector by a single-precision complex floating-point constant and add the result to a single-precision complex floating-point vector.</span>
-   <span class="signature">[`ccopy( N, x, strideX, y, strideY )`][@stdlib/blas/base/ccopy]</span><span class="delimiter">: </span><span class="description">copy values from one complex single-precision floating-point vector to another complex single-precision floating-point vector.</span>
-   <span class="signature">[`cscal( N, alpha, x, strideX )`][@stdlib/blas/base/cscal]</span><span class="delimiter">: </span><span class="description">scales a single-precision complex floating-point vector by a single-precision complex floating-point constant.</span>
-   <span class="signature">[`csrot( N, x, strideX, y, strideY, c, s )`][@stdlib/blas/base/csrot]</span><span class="delimiter">: </span><span class="description">apply a plane rotation.</span>
-   <span class="signature">[`csscal( N, alpha, x, strideX )`][@stdlib/blas/base/csscal]</span><span class="delimiter">: </span><span class="description">scale a single-precision complex floating-point vector by a single-precision floating-point constant.</span>
-   <span class="signature">[`cswap( N, x, strideX, y, strideY )`][@stdlib/blas/base/cswap]</span><span class="delimiter">: </span><span class="description">interchange two complex single-precision floating-point vectors.</span>
-   <span class="signature">[`dasum( N, x, stride )`][@stdlib/blas/base/dasum]</span><span class="delimiter">: </span><span class="description">compute the sum of absolute values (_L1_ norm).</span>
-   <span class="signature">[`daxpy( N, alpha, x, strideX, y, strideY )`][@stdlib/blas/base/daxpy]</span><span class="delimiter">: </span><span class="description">multiply a vector `x` by a constant `alpha` and add the result to `y`.</span>
-   <span class="signature">[`dcopy( N, x, strideX, y, strideY )`][@stdlib/blas/base/dcopy]</span><span class="delimiter">: </span><span class="description">copy values from `x` into `y`.</span>
-   <span class="signature">[`ddot( N, x, strideX, y, strideY )`][@stdlib/blas/base/ddot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two double-precision floating-point vectors.</span>
-   <span class="signature">[`dnrm2( N, x, stride )`][@stdlib/blas/base/dnrm2]</span><span class="delimiter">: </span><span class="description">calculate the L2-norm of a double-precision floating-point vector.</span>
-   <span class="signature">[`drot( N, x, strideX, y, strideY, c, s )`][@stdlib/blas/base/drot]</span><span class="delimiter">: </span><span class="description">apply a plane rotation.</span>
-   <span class="signature">[`drotg( a, b )`][@stdlib/blas/base/drotg]</span><span class="delimiter">: </span><span class="description">construct a Givens plane rotation.</span>
-   <span class="signature">[`drotm( N, x, strideX, y, strideY, param )`][@stdlib/blas/base/drotm]</span><span class="delimiter">: </span><span class="description">apply a modified Givens plane rotation.</span>
-   <span class="signature">[`dscal( N, alpha, x, stride )`][@stdlib/blas/base/dscal]</span><span class="delimiter">: </span><span class="description">multiply a double-precision floating-point vector `x` by a constant `alpha`.</span>
-   <span class="signature">[`dsdot( N, x, strideX, y, strideY )`][@stdlib/blas/base/dsdot]</span><span class="delimiter">: </span><span class="description">calculate the dot product with extended accumulation and result of two single-precision floating-point vectors.</span>
-   <span class="signature">[`dswap( N, x, strideX, y, strideY )`][@stdlib/blas/base/dswap]</span><span class="delimiter">: </span><span class="description">interchange two double-precision floating-point vectors.</span>
-   <span class="signature">[`dznrm2( N, x, strideX )`][@stdlib/blas/base/dznrm2]</span><span class="delimiter">: </span><span class="description">compute the L2-norm of a complex double-precision floating-point vector.</span>
-   <span class="signature">[`gasum( N, x, stride )`][@stdlib/blas/base/gasum]</span><span class="delimiter">: </span><span class="description">compute the sum of absolute values (_L1_ norm).</span>
-   <span class="signature">[`gaxpy( N, alpha, x, strideX, y, strideY )`][@stdlib/blas/base/gaxpy]</span><span class="delimiter">: </span><span class="description">multiply `x` by a constant `alpha` and add the result to `y`.</span>
-   <span class="signature">[`gcopy( N, x, strideX, y, strideY )`][@stdlib/blas/base/gcopy]</span><span class="delimiter">: </span><span class="description">copy values from `x` into `y`.</span>
-   <span class="signature">[`gdot( N, x, strideX, y, strideY )`][@stdlib/blas/base/gdot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two vectors.</span>
-   <span class="signature">[`gnrm2( N, x, stride )`][@stdlib/blas/base/gnrm2]</span><span class="delimiter">: </span><span class="description">calculate the L2-norm of a vector.</span>
-   <span class="signature">[`gscal( N, alpha, x, stride )`][@stdlib/blas/base/gscal]</span><span class="delimiter">: </span><span class="description">multiply a vector by a scalar constant.</span>
-   <span class="signature">[`gswap( N, x, strideX, y, strideY )`][@stdlib/blas/base/gswap]</span><span class="delimiter">: </span><span class="description">interchange two vectors.</span>
-   <span class="signature">[`idamax( N, x, strideX )`][@stdlib/blas/base/idamax]</span><span class="delimiter">: </span><span class="description">find the index of the first element having the maximum absolute value.</span>
-   <span class="signature">[`isamax( N, x, strideX )`][@stdlib/blas/base/isamax]</span><span class="delimiter">: </span><span class="description">find the index of the first element having the maximum absolute value.</span>
-   <span class="signature">[`sasum( N, x, stride )`][@stdlib/blas/base/sasum]</span><span class="delimiter">: </span><span class="description">compute the sum of absolute values (_L1_ norm).</span>
-   <span class="signature">[`saxpy( N, alpha, x, strideX, y, strideY )`][@stdlib/blas/base/saxpy]</span><span class="delimiter">: </span><span class="description">multiply a vector `x` by a constant `alpha` and add the result to `y`.</span>
-   <span class="signature">[`scasum( N, x, strideX )`][@stdlib/blas/base/scasum]</span><span class="delimiter">: </span><span class="description">compute the sum of the absolute values of the real and imaginary components of a single-precision complex floating-point vector.</span>
-   <span class="signature">[`scnrm2( N, x, strideX )`][@stdlib/blas/base/scnrm2]</span><span class="delimiter">: </span><span class="description">compute the L2-norm of a complex single-precision floating-point vector.</span>
-   <span class="signature">[`scopy( N, x, strideX, y, strideY )`][@stdlib/blas/base/scopy]</span><span class="delimiter">: </span><span class="description">copy values from `x` into `y`.</span>
-   <span class="signature">[`sdot( N, x, strideX, y, strideY )`][@stdlib/blas/base/sdot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two single-precision floating-point vectors.</span>
-   <span class="signature">[`sdsdot( N, scalar, x, strideX, y, strideY )`][@stdlib/blas/base/sdsdot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two single-precision floating-point vectors with extended accumulation.</span>
-   <span class="signature">[`snrm2( N, x, stride )`][@stdlib/blas/base/snrm2]</span><span class="delimiter">: </span><span class="description">calculate the L2-norm of a single-precision floating-point vector.</span>
-   <span class="signature">[`srot( N, x, strideX, y, strideY, c, s )`][@stdlib/blas/base/srot]</span><span class="delimiter">: </span><span class="description">apply a plane rotation.</span>
-   <span class="signature">[`srotg( a, b )`][@stdlib/blas/base/srotg]</span><span class="delimiter">: </span><span class="description">construct a Givens plane rotation.</span>
-   <span class="signature">[`srotm( N, x, strideX, y, strideY, param )`][@stdlib/blas/base/srotm]</span><span class="delimiter">: </span><span class="description">apply a modified Givens plane rotation.</span>
-   <span class="signature">[`sscal( N, alpha, x, stride )`][@stdlib/blas/base/sscal]</span><span class="delimiter">: </span><span class="description">multiply a single-precision floating-point vector `x` by a constant `alpha`.</span>
-   <span class="signature">[`sswap( N, x, strideX, y, strideY )`][@stdlib/blas/base/sswap]</span><span class="delimiter">: </span><span class="description">interchange two single-precision floating-point vectors.</span>
-   <span class="signature">[`zaxpy( N, alpha, x, strideX, y, strideY )`][@stdlib/blas/base/zaxpy]</span><span class="delimiter">: </span><span class="description">scale a double-precision complex floating-point vector by a double-precision complex floating-point constant and add the result to a double-precision complex floating-point vector.</span>
-   <span class="signature">[`zcopy( N, x, strideX, y, strideY )`][@stdlib/blas/base/zcopy]</span><span class="delimiter">: </span><span class="description">copy values from one complex double-precision floating-point vector to another complex double-precision floating-point vector.</span>
-   <span class="signature">[`zdrot( N, x, strideX, y, strideY, c, s )`][@stdlib/blas/base/zdrot]</span><span class="delimiter">: </span><span class="description">apply a plane rotation.</span>
-   <span class="signature">[`zdscal( N, alpha, x, strideX )`][@stdlib/blas/base/zdscal]</span><span class="delimiter">: </span><span class="description">scale a double-precision complex floating-point vector by a double-precision floating-point constant.</span>
-   <span class="signature">[`zscal( N, alpha, x, strideX )`][@stdlib/blas/base/zscal]</span><span class="delimiter">: </span><span class="description">scales a double-precision complex floating-point vector by a double-precision complex floating-point constant.</span>
-   <span class="signature">[`zswap( N, x, strideX, y, strideY )`][@stdlib/blas/base/zswap]</span><span class="delimiter">: </span><span class="description">interchange two complex double-precision floating-point vectors.</span>

</div>

<!-- </toc> -->

### BLAS Level 2

<!-- <toc pattern="+(*gemv|*ger|*hemv|*symv|*her*|*syr*|*trmv|*trsv|*pmv|*hpmv|*spmv|*hpr*|*spr*|*tmpv|*tpsv|*gbmv|*hbmv|*sbmv|*tbmv|*tbsv)"> -->

<div class="namespace-toc">

-   <span class="signature">[`dgemv( ord, trans, M, N, α, A, LDA, x, sx, β, y, sy )`][@stdlib/blas/base/dgemv]</span><span class="delimiter">: </span><span class="description">perform one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A**T*x + β*y`.</span>
-   <span class="signature">[`dspmv( order, uplo, N, α, AP, x, sx, β, y, sy )`][@stdlib/blas/base/dspmv]</span><span class="delimiter">: </span><span class="description">perform the matrix-vector operation `y = α*A*x + β*y` where `α` and `β` are scalars, `x` and `y` are `N` element vectors and, `A` is an `N` by `N` symmetric matrix supplied in packed form.</span>
-   <span class="signature">[`dspr( order, uplo, N, α, x, sx, AP )`][@stdlib/blas/base/dspr]</span><span class="delimiter">: </span><span class="description">perform the symmetric rank 1 operation `A = α*x*x^T + A`.</span>
-   <span class="signature">[`dsymv( order, uplo, N, α, A, LDA, x, sx, β, y, sy )`][@stdlib/blas/base/dsymv]</span><span class="delimiter">: </span><span class="description">perform the matrix-vector operation `y = α*A*x + β*y` where `α` and `β` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix.</span>
-   <span class="signature">[`dsyr( order, uplo, N, α, x, sx, A, LDA )`][@stdlib/blas/base/dsyr]</span><span class="delimiter">: </span><span class="description">perform the symmetric rank 1 operation `A = α*x*x^T + A`.</span>
-   <span class="signature">[`dsyr2( order, uplo, N, α, x, sx, y, sy, A, LDA )`][@stdlib/blas/base/dsyr2]</span><span class="delimiter">: </span><span class="description">perform the symmetric rank 2 operation `A = α*x*y^T + α*y*x^T + A`.</span>
-   <span class="signature">[`dtrmv( order, uplo, trans, diag, N, A, LDA, x, sx )`][@stdlib/blas/base/dtrmv]</span><span class="delimiter">: </span><span class="description">perform one of the matrix-vector operations `x = A*x` or `x = A^T*x`.</span>
-   <span class="signature">[`dtrsv( order, uplo, trans, diag, N, A, LDA, x, sx )`][@stdlib/blas/base/dtrsv]</span><span class="delimiter">: </span><span class="description">solve one of the systems of equations `A*x = b` or `A^T*x = b`.</span>
-   <span class="signature">[`sgemv( ord, trans, M, N, α, A, LDA, x, sx, β, y, sy )`][@stdlib/blas/base/sgemv]</span><span class="delimiter">: </span><span class="description">perform one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A^T*x + β*y`.</span>
-   <span class="signature">[`sspmv( order, uplo, N, α, AP, x, sx, β, y, sy )`][@stdlib/blas/base/sspmv]</span><span class="delimiter">: </span><span class="description">perform the matrix-vector operation `y = α*A*x + β*y` where `α` and `β` are scalars, `x` and `y` are `N` element vectors and, `A` is an `N` by `N` symmetric matrix supplied in packed form.</span>
-   <span class="signature">[`sspr( order, uplo, N, α, x, sx, AP )`][@stdlib/blas/base/sspr]</span><span class="delimiter">: </span><span class="description">perform the symmetric rank 1 operation `A = α*x*x^T + A`.</span>
-   <span class="signature">[`ssymv( order, uplo, N, α, A, LDA, x, sx, β, y, sy )`][@stdlib/blas/base/ssymv]</span><span class="delimiter">: </span><span class="description">perform the matrix-vector operation `y = α*A*x + β*y` where `α` and `β` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix.</span>
-   <span class="signature">[`ssyr( order, uplo, N, α, x, sx, A, LDA )`][@stdlib/blas/base/ssyr]</span><span class="delimiter">: </span><span class="description">perform the symmetric rank 1 operation `A = α*x*x**T + A`.</span>
-   <span class="signature">[`ssyr2( order, uplo, N, α, x, sx, y, sy, A, LDA )`][@stdlib/blas/base/ssyr2]</span><span class="delimiter">: </span><span class="description">perform the symmetric rank 2 operation `A = α*x*y^T + α*y*x^T + A`.</span>
-   <span class="signature">[`strmv( order, uplo, trans, diag, N, A, LDA, x, sx )`][@stdlib/blas/base/strmv]</span><span class="delimiter">: </span><span class="description">perform one of the matrix-vector operations `x = A*x` or `x = A^T*x`.</span>
-   <span class="signature">[`strsv( order, uplo, trans, diag, N, A, LDA, x, sx )`][@stdlib/blas/base/strsv]</span><span class="delimiter">: </span><span class="description">solve one of the systems of equations `A*x = b` or `A^T*x = b`.</span>

</div>

<!-- </toc> -->

### BLAS Level 3

<!-- <toc pattern="+(*gemm|*hemm|*symm|*herk|*syrk|*her2k|*syr2k|*trmm|*trsm)"> -->

<div class="namespace-toc">

-   <span class="signature">[`dgemm( ord, ta, tb, M, N, K, α, A, lda, B, ldb, β, C, ldc )`][@stdlib/blas/base/dgemm]</span><span class="delimiter">: </span><span class="description">perform the matrix-matrix operation `C = α*op(A)*op(B) + β*C` where `op(X)` is one of the `op(X) = X`, or `op(X) = X^T`.</span>
-   <span class="signature">[`sgemm( ord, ta, tb, M, N, K, α, A, lda, B, ldb, β, C, ldc )`][@stdlib/blas/base/sgemm]</span><span class="delimiter">: </span><span class="description">perform the matrix-matrix operation `C = α*op(A)*op(B) + β*C` where `op(X)` is one of the `op(X) = X`, or `op(X) = X^T`.</span>

</div>

<!-- </toc> -->

### Scalar Operations

<!-- <toc pattern="+(*abs1)"> -->

<div class="namespace-toc">

-   <span class="signature">[`dcabs1( z )`][@stdlib/blas/base/dcabs1]</span><span class="delimiter">: </span><span class="description">compute the sum of the absolute values of the real part and imaginary components of a double-precision complex floating-point number.</span>
-   <span class="signature">[`scabs1( z )`][@stdlib/blas/base/scabs1]</span><span class="delimiter">: </span><span class="description">compute the sum of the absolute values of the real and imaginary components of a single-precision complex floating-point number.</span>

</div>

<!-- </toc> -->

### Auxiliary BLAS

<!-- <toc pattern="+(*lsame|*xerbla)"> -->

<!-- </toc> -->

### Utilities

<!-- <toc pattern="+(*assert|*diagonal*|*layout*|*matrix*|*operation*|*transpose*)"> -->

<div class="namespace-toc">

-   <span class="signature">[`assert`][@stdlib/blas/base/assert]</span><span class="delimiter">: </span><span class="description">base BLAS assertion utilities.</span>
-   <span class="signature">[`diagonalTypeEnum2Str( value )`][@stdlib/blas/base/diagonal-type-enum2str]</span><span class="delimiter">: </span><span class="description">return the BLAS diagonal type string associated with a BLAS diagonal type enumeration constant.</span>
-   <span class="signature">[`diagonalTypeResolveEnum( value )`][@stdlib/blas/base/diagonal-type-resolve-enum]</span><span class="delimiter">: </span><span class="description">return the enumeration constant associated with a supported BLAS diagonal type value.</span>
-   <span class="signature">[`diagonalTypeResolveStr( value )`][@stdlib/blas/base/diagonal-type-resolve-str]</span><span class="delimiter">: </span><span class="description">return the diagonal type string associated with a supported BLAS diagonal type value.</span>
-   <span class="signature">[`diagonalTypeStr2Enum( diagonal )`][@stdlib/blas/base/diagonal-type-str2enum]</span><span class="delimiter">: </span><span class="description">return the enumeration constant associated with a BLAS diagonal type.</span>
-   <span class="signature">[`diagonalTypes()`][@stdlib/blas/base/diagonal-types]</span><span class="delimiter">: </span><span class="description">BLAS diagonal element types.</span>
-   <span class="signature">[`layoutEnum2Str( layout )`][@stdlib/blas/base/layout-enum2str]</span><span class="delimiter">: </span><span class="description">return the BLAS memory layout string associated with a BLAS memory layout enumeration constant.</span>
-   <span class="signature">[`layoutResolveEnum( layout )`][@stdlib/blas/base/layout-resolve-enum]</span><span class="delimiter">: </span><span class="description">return the enumeration constant associated with a supported BLAS memory layout value.</span>
-   <span class="signature">[`layoutResolveStr( layout )`][@stdlib/blas/base/layout-resolve-str]</span><span class="delimiter">: </span><span class="description">return the layout string associated with a supported BLAS memory layout value.</span>
-   <span class="signature">[`layoutStr2Enum( layout )`][@stdlib/blas/base/layout-str2enum]</span><span class="delimiter">: </span><span class="description">return the enumeration constant associated with a BLAS memory layout string.</span>
-   <span class="signature">[`layouts()`][@stdlib/blas/base/layouts]</span><span class="delimiter">: </span><span class="description">BLAS memory layouts.</span>
-   <span class="signature">[`matrixTriangleEnum2Str( value )`][@stdlib/blas/base/matrix-triangle-enum2str]</span><span class="delimiter">: </span><span class="description">return the BLAS matrix triangle string associated with a BLAS matrix triangle enumeration constant.</span>
-   <span class="signature">[`matrixTriangleResolveEnum( value )`][@stdlib/blas/base/matrix-triangle-resolve-enum]</span><span class="delimiter">: </span><span class="description">return the enumeration constant associated with a supported BLAS matrix triangle value.</span>
-   <span class="signature">[`matrixTriangleResolveStr( value )`][@stdlib/blas/base/matrix-triangle-resolve-str]</span><span class="delimiter">: </span><span class="description">return the matrix triangle string associated with a supported BLAS matrix triangle value.</span>
-   <span class="signature">[`matrixTriangleStr2Enum( operation )`][@stdlib/blas/base/matrix-triangle-str2enum]</span><span class="delimiter">: </span><span class="description">return the enumeration constant associated with a BLAS matrix triangle.</span>
-   <span class="signature">[`matrixTriangles()`][@stdlib/blas/base/matrix-triangles]</span><span class="delimiter">: </span><span class="description">BLAS matrix triangles.</span>
-   <span class="signature">[`operationSideEnum2Str( operation )`][@stdlib/blas/base/operation-side-enum2str]</span><span class="delimiter">: </span><span class="description">return the BLAS operation side string associated with a BLAS operation side enumeration constant.</span>
-   <span class="signature">[`operationSideResolveEnum( operation )`][@stdlib/blas/base/operation-side-resolve-enum]</span><span class="delimiter">: </span><span class="description">return the enumeration constant associated with a supported BLAS operation side value.</span>
-   <span class="signature">[`operationSideResolveStr( operation )`][@stdlib/blas/base/operation-side-resolve-str]</span><span class="delimiter">: </span><span class="description">return the operation side string associated with a supported BLAS operation side value.</span>
-   <span class="signature">[`operationSideStr2Enum( operation )`][@stdlib/blas/base/operation-side-str2enum]</span><span class="delimiter">: </span><span class="description">return the enumeration constant associated with a BLAS operation side.</span>
-   <span class="signature">[`operationSides()`][@stdlib/blas/base/operation-sides]</span><span class="delimiter">: </span><span class="description">BLAS operation sides.</span>
-   <span class="signature">[`transposeOperationEnum2Str( operation )`][@stdlib/blas/base/transpose-operation-enum2str]</span><span class="delimiter">: </span><span class="description">return the BLAS transpose operation string associated with a BLAS transpose operation enumeration constant.</span>
-   <span class="signature">[`transposeOperationResolveEnum( operation )`][@stdlib/blas/base/transpose-operation-resolve-enum]</span><span class="delimiter">: </span><span class="description">return the enumeration constant associated with a supported BLAS transpose operation value.</span>
-   <span class="signature">[`transposeOperationResolveStr( operation )`][@stdlib/blas/base/transpose-operation-resolve-str]</span><span class="delimiter">: </span><span class="description">return the transpose operation string associated with a supported BLAS transpose operation value.</span>
-   <span class="signature">[`transposeOperationStr2Enum( operation )`][@stdlib/blas/base/transpose-operation-str2enum]</span><span class="delimiter">: </span><span class="description">return the enumeration constant associated with a BLAS transpose operation.</span>
-   <span class="signature">[`transposeOperations()`][@stdlib/blas/base/transpose-operations]</span><span class="delimiter">: </span><span class="description">BLAS transpose operations.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils-keys' );
var blas = require( '@stdlib/blas-base' );

console.log( objectKeys( blas ) );
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

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base

[test-image]: https://github.com/stdlib-js/blas-base/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-base/actions/workflows/test.yml?query=branch:main

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

[@stdlib/blas/base/assert]: https://github.com/stdlib-js/blas-base-assert

[@stdlib/blas/base/diagonal-type-enum2str]: https://github.com/stdlib-js/blas-base-diagonal-type-enum2str

[@stdlib/blas/base/diagonal-type-resolve-enum]: https://github.com/stdlib-js/blas-base-diagonal-type-resolve-enum

[@stdlib/blas/base/diagonal-type-resolve-str]: https://github.com/stdlib-js/blas-base-diagonal-type-resolve-str

[@stdlib/blas/base/diagonal-type-str2enum]: https://github.com/stdlib-js/blas-base-diagonal-type-str2enum

[@stdlib/blas/base/diagonal-types]: https://github.com/stdlib-js/blas-base-diagonal-types

[@stdlib/blas/base/layout-enum2str]: https://github.com/stdlib-js/blas-base-layout-enum2str

[@stdlib/blas/base/layout-resolve-enum]: https://github.com/stdlib-js/blas-base-layout-resolve-enum

[@stdlib/blas/base/layout-resolve-str]: https://github.com/stdlib-js/blas-base-layout-resolve-str

[@stdlib/blas/base/layout-str2enum]: https://github.com/stdlib-js/blas-base-layout-str2enum

[@stdlib/blas/base/layouts]: https://github.com/stdlib-js/blas-base-layouts

[@stdlib/blas/base/matrix-triangle-enum2str]: https://github.com/stdlib-js/blas-base-matrix-triangle-enum2str

[@stdlib/blas/base/matrix-triangle-resolve-enum]: https://github.com/stdlib-js/blas-base-matrix-triangle-resolve-enum

[@stdlib/blas/base/matrix-triangle-resolve-str]: https://github.com/stdlib-js/blas-base-matrix-triangle-resolve-str

[@stdlib/blas/base/matrix-triangle-str2enum]: https://github.com/stdlib-js/blas-base-matrix-triangle-str2enum

[@stdlib/blas/base/matrix-triangles]: https://github.com/stdlib-js/blas-base-matrix-triangles

[@stdlib/blas/base/operation-side-enum2str]: https://github.com/stdlib-js/blas-base-operation-side-enum2str

[@stdlib/blas/base/operation-side-resolve-enum]: https://github.com/stdlib-js/blas-base-operation-side-resolve-enum

[@stdlib/blas/base/operation-side-resolve-str]: https://github.com/stdlib-js/blas-base-operation-side-resolve-str

[@stdlib/blas/base/operation-side-str2enum]: https://github.com/stdlib-js/blas-base-operation-side-str2enum

[@stdlib/blas/base/operation-sides]: https://github.com/stdlib-js/blas-base-operation-sides

[@stdlib/blas/base/transpose-operation-enum2str]: https://github.com/stdlib-js/blas-base-transpose-operation-enum2str

[@stdlib/blas/base/transpose-operation-resolve-enum]: https://github.com/stdlib-js/blas-base-transpose-operation-resolve-enum

[@stdlib/blas/base/transpose-operation-resolve-str]: https://github.com/stdlib-js/blas-base-transpose-operation-resolve-str

[@stdlib/blas/base/transpose-operation-str2enum]: https://github.com/stdlib-js/blas-base-transpose-operation-str2enum

[@stdlib/blas/base/transpose-operations]: https://github.com/stdlib-js/blas-base-transpose-operations

[@stdlib/blas/base/dcabs1]: https://github.com/stdlib-js/blas-base-dcabs1

[@stdlib/blas/base/scabs1]: https://github.com/stdlib-js/blas-base-scabs1

[@stdlib/blas/base/dgemm]: https://github.com/stdlib-js/blas-base-dgemm

[@stdlib/blas/base/sgemm]: https://github.com/stdlib-js/blas-base-sgemm

[@stdlib/blas/base/dgemv]: https://github.com/stdlib-js/blas-base-dgemv

[@stdlib/blas/base/dspmv]: https://github.com/stdlib-js/blas-base-dspmv

[@stdlib/blas/base/dspr]: https://github.com/stdlib-js/blas-base-dspr

[@stdlib/blas/base/dsymv]: https://github.com/stdlib-js/blas-base-dsymv

[@stdlib/blas/base/dsyr]: https://github.com/stdlib-js/blas-base-dsyr

[@stdlib/blas/base/dsyr2]: https://github.com/stdlib-js/blas-base-dsyr2

[@stdlib/blas/base/dtrmv]: https://github.com/stdlib-js/blas-base-dtrmv

[@stdlib/blas/base/dtrsv]: https://github.com/stdlib-js/blas-base-dtrsv

[@stdlib/blas/base/sgemv]: https://github.com/stdlib-js/blas-base-sgemv

[@stdlib/blas/base/sspmv]: https://github.com/stdlib-js/blas-base-sspmv

[@stdlib/blas/base/sspr]: https://github.com/stdlib-js/blas-base-sspr

[@stdlib/blas/base/ssymv]: https://github.com/stdlib-js/blas-base-ssymv

[@stdlib/blas/base/ssyr]: https://github.com/stdlib-js/blas-base-ssyr

[@stdlib/blas/base/ssyr2]: https://github.com/stdlib-js/blas-base-ssyr2

[@stdlib/blas/base/strmv]: https://github.com/stdlib-js/blas-base-strmv

[@stdlib/blas/base/strsv]: https://github.com/stdlib-js/blas-base-strsv

[@stdlib/blas/base/caxpy]: https://github.com/stdlib-js/blas-base-caxpy

[@stdlib/blas/base/ccopy]: https://github.com/stdlib-js/blas-base-ccopy

[@stdlib/blas/base/cscal]: https://github.com/stdlib-js/blas-base-cscal

[@stdlib/blas/base/csrot]: https://github.com/stdlib-js/blas-base-csrot

[@stdlib/blas/base/csscal]: https://github.com/stdlib-js/blas-base-csscal

[@stdlib/blas/base/cswap]: https://github.com/stdlib-js/blas-base-cswap

[@stdlib/blas/base/dasum]: https://github.com/stdlib-js/blas-base-dasum

[@stdlib/blas/base/daxpy]: https://github.com/stdlib-js/blas-base-daxpy

[@stdlib/blas/base/dcopy]: https://github.com/stdlib-js/blas-base-dcopy

[@stdlib/blas/base/ddot]: https://github.com/stdlib-js/blas-base-ddot

[@stdlib/blas/base/dnrm2]: https://github.com/stdlib-js/blas-base-dnrm2

[@stdlib/blas/base/drot]: https://github.com/stdlib-js/blas-base-drot

[@stdlib/blas/base/drotg]: https://github.com/stdlib-js/blas-base-drotg

[@stdlib/blas/base/drotm]: https://github.com/stdlib-js/blas-base-drotm

[@stdlib/blas/base/dscal]: https://github.com/stdlib-js/blas-base-dscal

[@stdlib/blas/base/dsdot]: https://github.com/stdlib-js/blas-base-dsdot

[@stdlib/blas/base/dswap]: https://github.com/stdlib-js/blas-base-dswap

[@stdlib/blas/base/dznrm2]: https://github.com/stdlib-js/blas-base-dznrm2

[@stdlib/blas/base/gasum]: https://github.com/stdlib-js/blas-base-gasum

[@stdlib/blas/base/gaxpy]: https://github.com/stdlib-js/blas-base-gaxpy

[@stdlib/blas/base/gcopy]: https://github.com/stdlib-js/blas-base-gcopy

[@stdlib/blas/base/gdot]: https://github.com/stdlib-js/blas-base-gdot

[@stdlib/blas/base/gnrm2]: https://github.com/stdlib-js/blas-base-gnrm2

[@stdlib/blas/base/gscal]: https://github.com/stdlib-js/blas-base-gscal

[@stdlib/blas/base/gswap]: https://github.com/stdlib-js/blas-base-gswap

[@stdlib/blas/base/idamax]: https://github.com/stdlib-js/blas-base-idamax

[@stdlib/blas/base/isamax]: https://github.com/stdlib-js/blas-base-isamax

[@stdlib/blas/base/sasum]: https://github.com/stdlib-js/blas-base-sasum

[@stdlib/blas/base/saxpy]: https://github.com/stdlib-js/blas-base-saxpy

[@stdlib/blas/base/scasum]: https://github.com/stdlib-js/blas-base-scasum

[@stdlib/blas/base/scnrm2]: https://github.com/stdlib-js/blas-base-scnrm2

[@stdlib/blas/base/scopy]: https://github.com/stdlib-js/blas-base-scopy

[@stdlib/blas/base/sdot]: https://github.com/stdlib-js/blas-base-sdot

[@stdlib/blas/base/sdsdot]: https://github.com/stdlib-js/blas-base-sdsdot

[@stdlib/blas/base/snrm2]: https://github.com/stdlib-js/blas-base-snrm2

[@stdlib/blas/base/srot]: https://github.com/stdlib-js/blas-base-srot

[@stdlib/blas/base/srotg]: https://github.com/stdlib-js/blas-base-srotg

[@stdlib/blas/base/srotm]: https://github.com/stdlib-js/blas-base-srotm

[@stdlib/blas/base/sscal]: https://github.com/stdlib-js/blas-base-sscal

[@stdlib/blas/base/sswap]: https://github.com/stdlib-js/blas-base-sswap

[@stdlib/blas/base/zaxpy]: https://github.com/stdlib-js/blas-base-zaxpy

[@stdlib/blas/base/zcopy]: https://github.com/stdlib-js/blas-base-zcopy

[@stdlib/blas/base/zdrot]: https://github.com/stdlib-js/blas-base-zdrot

[@stdlib/blas/base/zdscal]: https://github.com/stdlib-js/blas-base-zdscal

[@stdlib/blas/base/zscal]: https://github.com/stdlib-js/blas-base-zscal

[@stdlib/blas/base/zswap]: https://github.com/stdlib-js/blas-base-zswap

<!-- </toc-links> -->

</section>

<!-- /.links -->
