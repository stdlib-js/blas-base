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

```javascript
import blas from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base@v0.3.1-esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { assert, caxpy, ccopy, cscal, csrot, csscal, cswap, dasum, daxpy, dcabs1, dcopy, ddot, dgemm, dgemv, dger, diagonalTypeEnum2Str, diagonalTypeResolveEnum, diagonalTypeResolveStr, diagonalTypeStr2Enum, diagonalTypes, dnrm2, drot, drotg, drotm, dscal, dsdot, dspmv, dspr, dswap, dsymv, dsyr, dsyr2, dtrmv, dtrsv, dznrm2, gasum, gaxpy, gcopy, gdot, ggemm, ggemv, gger, gnrm2, gscal, gswap, gsyr, idamax, igamax, isamax, layoutEnum2Str, layoutResolveEnum, layoutResolveStr, layoutStr2Enum, layouts, matrixOrientationEnum2Str, matrixOrientationResolveEnum, matrixOrientationResolveStr, matrixOrientationStr2Enum, matrixOrientations, matrixTriangleEnum2Str, matrixTriangleResolveEnum, matrixTriangleResolveStr, matrixTriangleStr2Enum, matrixTriangles, operationSideEnum2Str, operationSideResolveEnum, operationSideResolveStr, operationSideStr2Enum, operationSides, sasum, saxpy, scabs1, scasum, scnrm2, scopy, sdot, sdsdot, sgemm, sgemv, sger, snrm2, srot, srotg, srotm, sscal, sspmv, sspr, sswap, ssymv, ssyr, ssyr2, strmv, strsv, transposeOperationEnum2Str, transposeOperationResolveEnum, transposeOperationResolveStr, transposeOperationStr2Enum, transposeOperations, wasm, zaxpy, zcopy, zdrot, zdscal, zscal, zswap } from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base@v0.3.1-esm/index.mjs';
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
-   <span class="signature">[`igamax( N, x, strideX )`][@stdlib/blas/base/igamax]</span><span class="delimiter">: </span><span class="description">find the index of the first element having the maximum absolute value.</span>
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

-   <span class="signature">[`dgemv( order, trans, M, N, α, A, LDA, x, sx, β, y, sy )`][@stdlib/blas/base/dgemv]</span><span class="delimiter">: </span><span class="description">perform one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A^T*x + β*y`.</span>
-   <span class="signature">[`dger( ord, M, N, α, x, sx, y, sy, A, lda )`][@stdlib/blas/base/dger]</span><span class="delimiter">: </span><span class="description">perform the rank 1 operation `A = α*x*y^T + A`.</span>
-   <span class="signature">[`dspmv( order, uplo, N, α, AP, x, sx, β, y, sy )`][@stdlib/blas/base/dspmv]</span><span class="delimiter">: </span><span class="description">perform the matrix-vector operation `y = α*A*x + β*y` where `α` and `β` are scalars, `x` and `y` are `N` element vectors and, `A` is an `N` by `N` symmetric matrix supplied in packed form.</span>
-   <span class="signature">[`dspr( order, uplo, N, α, x, sx, AP )`][@stdlib/blas/base/dspr]</span><span class="delimiter">: </span><span class="description">perform the symmetric rank 1 operation `A = α*x*x^T + A`.</span>
-   <span class="signature">[`dsymv( order, uplo, N, α, A, LDA, x, sx, β, y, sy )`][@stdlib/blas/base/dsymv]</span><span class="delimiter">: </span><span class="description">perform the matrix-vector operation `y = α*A*x + β*y` where `α` and `β` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix.</span>
-   <span class="signature">[`dsyr( order, uplo, N, α, x, sx, A, LDA )`][@stdlib/blas/base/dsyr]</span><span class="delimiter">: </span><span class="description">perform the symmetric rank 1 operation `A = α*x*x^T + A`.</span>
-   <span class="signature">[`dsyr2( order, uplo, N, α, x, sx, y, sy, A, LDA )`][@stdlib/blas/base/dsyr2]</span><span class="delimiter">: </span><span class="description">perform the symmetric rank 2 operation `A = α*x*y^T + α*y*x^T + A`.</span>
-   <span class="signature">[`dtrmv( order, uplo, trans, diag, N, A, LDA, x, sx )`][@stdlib/blas/base/dtrmv]</span><span class="delimiter">: </span><span class="description">perform one of the matrix-vector operations `x = A*x` or `x = A^T*x`.</span>
-   <span class="signature">[`dtrsv( order, uplo, trans, diag, N, A, LDA, x, sx )`][@stdlib/blas/base/dtrsv]</span><span class="delimiter">: </span><span class="description">solve one of the systems of equations `A*x = b` or `A^T*x = b`.</span>
-   <span class="signature">[`ggemv( order, trans, M, N, α, A, LDA, x, sx, β, y, sy )`][@stdlib/blas/base/ggemv]</span><span class="delimiter">: </span><span class="description">perform one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A^T*x + β*y`.</span>
-   <span class="signature">[`gger( order, M, N, α, x, sx, y, sy, A, lda )`][@stdlib/blas/base/gger]</span><span class="delimiter">: </span><span class="description">perform the rank 1 operation `A = α*x*y^T + A`.</span>
-   <span class="signature">[`gsyr( order, uplo, N, α, x, sx, A, LDA )`][@stdlib/blas/base/gsyr]</span><span class="delimiter">: </span><span class="description">perform the symmetric rank 1 operation `A = α*x*x^T + A`.</span>
-   <span class="signature">[`sgemv( order, trans, M, N, α, A, LDA, x, sx, β, y, sy )`][@stdlib/blas/base/sgemv]</span><span class="delimiter">: </span><span class="description">perform one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A^T*x + β*y`.</span>
-   <span class="signature">[`sger( order, M, N, α, x, sx, y, sy, A, lda )`][@stdlib/blas/base/sger]</span><span class="delimiter">: </span><span class="description">perform the rank 1 operation `A = α*x*y^T + A`.</span>
-   <span class="signature">[`sspmv( order, uplo, N, α, AP, x, sx, β, y, sy )`][@stdlib/blas/base/sspmv]</span><span class="delimiter">: </span><span class="description">perform the matrix-vector operation `y = α*A*x + β*y` where `α` and `β` are scalars, `x` and `y` are `N` element vectors and, `A` is an `N` by `N` symmetric matrix supplied in packed form.</span>
-   <span class="signature">[`sspr( order, uplo, N, α, x, sx, AP )`][@stdlib/blas/base/sspr]</span><span class="delimiter">: </span><span class="description">perform the symmetric rank 1 operation `A = α*x*x^T + A`.</span>
-   <span class="signature">[`ssymv( order, uplo, N, α, A, LDA, x, sx, β, y, sy )`][@stdlib/blas/base/ssymv]</span><span class="delimiter">: </span><span class="description">perform the matrix-vector operation `y = α*A*x + β*y`.</span>
-   <span class="signature">[`ssyr( order, uplo, N, α, x, sx, A, LDA )`][@stdlib/blas/base/ssyr]</span><span class="delimiter">: </span><span class="description">perform the symmetric rank 1 operation `A = α*x*x^T + A`.</span>
-   <span class="signature">[`ssyr2( order, uplo, N, α, x, sx, y, sy, A, LDA )`][@stdlib/blas/base/ssyr2]</span><span class="delimiter">: </span><span class="description">perform the symmetric rank 2 operation `A = α*x*y^T + α*y*x^T + A`.</span>
-   <span class="signature">[`strmv( order, uplo, trans, diag, N, A, LDA, x, sx )`][@stdlib/blas/base/strmv]</span><span class="delimiter">: </span><span class="description">perform one of the matrix-vector operations `x = A*x` or `x = A^T*x`.</span>
-   <span class="signature">[`strsv( order, uplo, trans, diag, N, A, LDA, x, sx )`][@stdlib/blas/base/strsv]</span><span class="delimiter">: </span><span class="description">solve one of the systems of equations `A*x = b` or `A^T*x = b`.</span>

</div>

<!-- </toc> -->

### BLAS Level 3

<!-- <toc pattern="+(*gemm|*hemm|*symm|*herk|*syrk|*her2k|*syr2k|*trmm|*trsm)"> -->

<div class="namespace-toc">

-   <span class="signature">[`dgemm( ord, ta, tb, M, N, K, α, A, lda, B, ldb, β, C, ldc )`][@stdlib/blas/base/dgemm]</span><span class="delimiter">: </span><span class="description">perform the matrix-matrix operation `C = α*op(A)*op(B) + β*C` where `op(X)` is one of the `op(X) = X`, or `op(X) = X^T`.</span>
-   <span class="signature">[`ggemm( ord, ta, tb, M, N, K, α, A, lda, B, ldb, β, C, ldc )`][@stdlib/blas/base/ggemm]</span><span class="delimiter">: </span><span class="description">perform the matrix-matrix operation `C = α*op(A)*op(B) + β*C` where `op(X)` is one of the `op(X) = X`, or `op(X) = X^T`.</span>
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

<!-- <toc pattern="+(*assert|*diagonal*|*layout*|*matrix*|*orientation*|*operation*|*transpose*)"> -->

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
-   <span class="signature">[`matrixOrientationEnum2Str( value )`][@stdlib/blas/base/matrix-orientation-enum2str]</span><span class="delimiter">: </span><span class="description">return the matrix orientation string associated with a matrix orientation enumeration constant.</span>
-   <span class="signature">[`matrixOrientationResolveEnum( value )`][@stdlib/blas/base/matrix-orientation-resolve-enum]</span><span class="delimiter">: </span><span class="description">return the enumeration constant associated with a supported matrix orientation value.</span>
-   <span class="signature">[`matrixOrientationResolveStr( value )`][@stdlib/blas/base/matrix-orientation-resolve-str]</span><span class="delimiter">: </span><span class="description">return the matrix orientation string associated with a supported matrix orientation value.</span>
-   <span class="signature">[`matrixOrientationStr2Enum( value )`][@stdlib/blas/base/matrix-orientation-str2enum]</span><span class="delimiter">: </span><span class="description">return the enumeration constant associated with a matrix orientation.</span>
-   <span class="signature">[`matrixOrientations()`][@stdlib/blas/base/matrix-orientations]</span><span class="delimiter">: </span><span class="description">BLAS matrix orientations.</span>
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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs';
import blas from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base@v0.3.1-esm/index.mjs';

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

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base

[test-image]: https://github.com/stdlib-js/blas-base/actions/workflows/test.yml/badge.svg?branch=v0.3.1
[test-url]: https://github.com/stdlib-js/blas-base/actions/workflows/test.yml?query=branch:v0.3.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

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

[@stdlib/blas/base/assert]: https://github.com/stdlib-js/blas-base-assert/tree/esm

[@stdlib/blas/base/diagonal-type-enum2str]: https://github.com/stdlib-js/blas-base-diagonal-type-enum2str/tree/esm

[@stdlib/blas/base/diagonal-type-resolve-enum]: https://github.com/stdlib-js/blas-base-diagonal-type-resolve-enum/tree/esm

[@stdlib/blas/base/diagonal-type-resolve-str]: https://github.com/stdlib-js/blas-base-diagonal-type-resolve-str/tree/esm

[@stdlib/blas/base/diagonal-type-str2enum]: https://github.com/stdlib-js/blas-base-diagonal-type-str2enum/tree/esm

[@stdlib/blas/base/diagonal-types]: https://github.com/stdlib-js/blas-base-diagonal-types/tree/esm

[@stdlib/blas/base/layout-enum2str]: https://github.com/stdlib-js/blas-base-layout-enum2str/tree/esm

[@stdlib/blas/base/layout-resolve-enum]: https://github.com/stdlib-js/blas-base-layout-resolve-enum/tree/esm

[@stdlib/blas/base/layout-resolve-str]: https://github.com/stdlib-js/blas-base-layout-resolve-str/tree/esm

[@stdlib/blas/base/layout-str2enum]: https://github.com/stdlib-js/blas-base-layout-str2enum/tree/esm

[@stdlib/blas/base/layouts]: https://github.com/stdlib-js/blas-base-layouts/tree/esm

[@stdlib/blas/base/matrix-orientation-enum2str]: https://github.com/stdlib-js/blas-base-matrix-orientation-enum2str/tree/esm

[@stdlib/blas/base/matrix-orientation-resolve-enum]: https://github.com/stdlib-js/blas-base-matrix-orientation-resolve-enum/tree/esm

[@stdlib/blas/base/matrix-orientation-resolve-str]: https://github.com/stdlib-js/blas-base-matrix-orientation-resolve-str/tree/esm

[@stdlib/blas/base/matrix-orientation-str2enum]: https://github.com/stdlib-js/blas-base-matrix-orientation-str2enum/tree/esm

[@stdlib/blas/base/matrix-orientations]: https://github.com/stdlib-js/blas-base-matrix-orientations/tree/esm

[@stdlib/blas/base/matrix-triangle-enum2str]: https://github.com/stdlib-js/blas-base-matrix-triangle-enum2str/tree/esm

[@stdlib/blas/base/matrix-triangle-resolve-enum]: https://github.com/stdlib-js/blas-base-matrix-triangle-resolve-enum/tree/esm

[@stdlib/blas/base/matrix-triangle-resolve-str]: https://github.com/stdlib-js/blas-base-matrix-triangle-resolve-str/tree/esm

[@stdlib/blas/base/matrix-triangle-str2enum]: https://github.com/stdlib-js/blas-base-matrix-triangle-str2enum/tree/esm

[@stdlib/blas/base/matrix-triangles]: https://github.com/stdlib-js/blas-base-matrix-triangles/tree/esm

[@stdlib/blas/base/operation-side-enum2str]: https://github.com/stdlib-js/blas-base-operation-side-enum2str/tree/esm

[@stdlib/blas/base/operation-side-resolve-enum]: https://github.com/stdlib-js/blas-base-operation-side-resolve-enum/tree/esm

[@stdlib/blas/base/operation-side-resolve-str]: https://github.com/stdlib-js/blas-base-operation-side-resolve-str/tree/esm

[@stdlib/blas/base/operation-side-str2enum]: https://github.com/stdlib-js/blas-base-operation-side-str2enum/tree/esm

[@stdlib/blas/base/operation-sides]: https://github.com/stdlib-js/blas-base-operation-sides/tree/esm

[@stdlib/blas/base/transpose-operation-enum2str]: https://github.com/stdlib-js/blas-base-transpose-operation-enum2str/tree/esm

[@stdlib/blas/base/transpose-operation-resolve-enum]: https://github.com/stdlib-js/blas-base-transpose-operation-resolve-enum/tree/esm

[@stdlib/blas/base/transpose-operation-resolve-str]: https://github.com/stdlib-js/blas-base-transpose-operation-resolve-str/tree/esm

[@stdlib/blas/base/transpose-operation-str2enum]: https://github.com/stdlib-js/blas-base-transpose-operation-str2enum/tree/esm

[@stdlib/blas/base/transpose-operations]: https://github.com/stdlib-js/blas-base-transpose-operations/tree/esm

[@stdlib/blas/base/dcabs1]: https://github.com/stdlib-js/blas-base-dcabs1/tree/esm

[@stdlib/blas/base/scabs1]: https://github.com/stdlib-js/blas-base-scabs1/tree/esm

[@stdlib/blas/base/dgemm]: https://github.com/stdlib-js/blas-base-dgemm/tree/esm

[@stdlib/blas/base/ggemm]: https://github.com/stdlib-js/blas-base-ggemm/tree/esm

[@stdlib/blas/base/sgemm]: https://github.com/stdlib-js/blas-base-sgemm/tree/esm

[@stdlib/blas/base/dgemv]: https://github.com/stdlib-js/blas-base-dgemv/tree/esm

[@stdlib/blas/base/dger]: https://github.com/stdlib-js/blas-base-dger/tree/esm

[@stdlib/blas/base/dspmv]: https://github.com/stdlib-js/blas-base-dspmv/tree/esm

[@stdlib/blas/base/dspr]: https://github.com/stdlib-js/blas-base-dspr/tree/esm

[@stdlib/blas/base/dsymv]: https://github.com/stdlib-js/blas-base-dsymv/tree/esm

[@stdlib/blas/base/dsyr]: https://github.com/stdlib-js/blas-base-dsyr/tree/esm

[@stdlib/blas/base/dsyr2]: https://github.com/stdlib-js/blas-base-dsyr2/tree/esm

[@stdlib/blas/base/dtrmv]: https://github.com/stdlib-js/blas-base-dtrmv/tree/esm

[@stdlib/blas/base/dtrsv]: https://github.com/stdlib-js/blas-base-dtrsv/tree/esm

[@stdlib/blas/base/ggemv]: https://github.com/stdlib-js/blas-base-ggemv/tree/esm

[@stdlib/blas/base/gger]: https://github.com/stdlib-js/blas-base-gger/tree/esm

[@stdlib/blas/base/gsyr]: https://github.com/stdlib-js/blas-base-gsyr/tree/esm

[@stdlib/blas/base/sgemv]: https://github.com/stdlib-js/blas-base-sgemv/tree/esm

[@stdlib/blas/base/sger]: https://github.com/stdlib-js/blas-base-sger/tree/esm

[@stdlib/blas/base/sspmv]: https://github.com/stdlib-js/blas-base-sspmv/tree/esm

[@stdlib/blas/base/sspr]: https://github.com/stdlib-js/blas-base-sspr/tree/esm

[@stdlib/blas/base/ssymv]: https://github.com/stdlib-js/blas-base-ssymv/tree/esm

[@stdlib/blas/base/ssyr]: https://github.com/stdlib-js/blas-base-ssyr/tree/esm

[@stdlib/blas/base/ssyr2]: https://github.com/stdlib-js/blas-base-ssyr2/tree/esm

[@stdlib/blas/base/strmv]: https://github.com/stdlib-js/blas-base-strmv/tree/esm

[@stdlib/blas/base/strsv]: https://github.com/stdlib-js/blas-base-strsv/tree/esm

[@stdlib/blas/base/caxpy]: https://github.com/stdlib-js/blas-base-caxpy/tree/esm

[@stdlib/blas/base/ccopy]: https://github.com/stdlib-js/blas-base-ccopy/tree/esm

[@stdlib/blas/base/cscal]: https://github.com/stdlib-js/blas-base-cscal/tree/esm

[@stdlib/blas/base/csrot]: https://github.com/stdlib-js/blas-base-csrot/tree/esm

[@stdlib/blas/base/csscal]: https://github.com/stdlib-js/blas-base-csscal/tree/esm

[@stdlib/blas/base/cswap]: https://github.com/stdlib-js/blas-base-cswap/tree/esm

[@stdlib/blas/base/dasum]: https://github.com/stdlib-js/blas-base-dasum/tree/esm

[@stdlib/blas/base/daxpy]: https://github.com/stdlib-js/blas-base-daxpy/tree/esm

[@stdlib/blas/base/dcopy]: https://github.com/stdlib-js/blas-base-dcopy/tree/esm

[@stdlib/blas/base/ddot]: https://github.com/stdlib-js/blas-base-ddot/tree/esm

[@stdlib/blas/base/dnrm2]: https://github.com/stdlib-js/blas-base-dnrm2/tree/esm

[@stdlib/blas/base/drot]: https://github.com/stdlib-js/blas-base-drot/tree/esm

[@stdlib/blas/base/drotg]: https://github.com/stdlib-js/blas-base-drotg/tree/esm

[@stdlib/blas/base/drotm]: https://github.com/stdlib-js/blas-base-drotm/tree/esm

[@stdlib/blas/base/dscal]: https://github.com/stdlib-js/blas-base-dscal/tree/esm

[@stdlib/blas/base/dsdot]: https://github.com/stdlib-js/blas-base-dsdot/tree/esm

[@stdlib/blas/base/dswap]: https://github.com/stdlib-js/blas-base-dswap/tree/esm

[@stdlib/blas/base/dznrm2]: https://github.com/stdlib-js/blas-base-dznrm2/tree/esm

[@stdlib/blas/base/gasum]: https://github.com/stdlib-js/blas-base-gasum/tree/esm

[@stdlib/blas/base/gaxpy]: https://github.com/stdlib-js/blas-base-gaxpy/tree/esm

[@stdlib/blas/base/gcopy]: https://github.com/stdlib-js/blas-base-gcopy/tree/esm

[@stdlib/blas/base/gdot]: https://github.com/stdlib-js/blas-base-gdot/tree/esm

[@stdlib/blas/base/gnrm2]: https://github.com/stdlib-js/blas-base-gnrm2/tree/esm

[@stdlib/blas/base/gscal]: https://github.com/stdlib-js/blas-base-gscal/tree/esm

[@stdlib/blas/base/gswap]: https://github.com/stdlib-js/blas-base-gswap/tree/esm

[@stdlib/blas/base/idamax]: https://github.com/stdlib-js/blas-base-idamax/tree/esm

[@stdlib/blas/base/igamax]: https://github.com/stdlib-js/blas-base-igamax/tree/esm

[@stdlib/blas/base/isamax]: https://github.com/stdlib-js/blas-base-isamax/tree/esm

[@stdlib/blas/base/sasum]: https://github.com/stdlib-js/blas-base-sasum/tree/esm

[@stdlib/blas/base/saxpy]: https://github.com/stdlib-js/blas-base-saxpy/tree/esm

[@stdlib/blas/base/scasum]: https://github.com/stdlib-js/blas-base-scasum/tree/esm

[@stdlib/blas/base/scnrm2]: https://github.com/stdlib-js/blas-base-scnrm2/tree/esm

[@stdlib/blas/base/scopy]: https://github.com/stdlib-js/blas-base-scopy/tree/esm

[@stdlib/blas/base/sdot]: https://github.com/stdlib-js/blas-base-sdot/tree/esm

[@stdlib/blas/base/sdsdot]: https://github.com/stdlib-js/blas-base-sdsdot/tree/esm

[@stdlib/blas/base/snrm2]: https://github.com/stdlib-js/blas-base-snrm2/tree/esm

[@stdlib/blas/base/srot]: https://github.com/stdlib-js/blas-base-srot/tree/esm

[@stdlib/blas/base/srotg]: https://github.com/stdlib-js/blas-base-srotg/tree/esm

[@stdlib/blas/base/srotm]: https://github.com/stdlib-js/blas-base-srotm/tree/esm

[@stdlib/blas/base/sscal]: https://github.com/stdlib-js/blas-base-sscal/tree/esm

[@stdlib/blas/base/sswap]: https://github.com/stdlib-js/blas-base-sswap/tree/esm

[@stdlib/blas/base/zaxpy]: https://github.com/stdlib-js/blas-base-zaxpy/tree/esm

[@stdlib/blas/base/zcopy]: https://github.com/stdlib-js/blas-base-zcopy/tree/esm

[@stdlib/blas/base/zdrot]: https://github.com/stdlib-js/blas-base-zdrot/tree/esm

[@stdlib/blas/base/zdscal]: https://github.com/stdlib-js/blas-base-zdscal/tree/esm

[@stdlib/blas/base/zscal]: https://github.com/stdlib-js/blas-base-zscal/tree/esm

[@stdlib/blas/base/zswap]: https://github.com/stdlib-js/blas-base-zswap/tree/esm

<!-- </toc-links> -->

</section>

<!-- /.links -->
