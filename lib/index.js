/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace blas
*/
var blas = {};

/**
* @name assert
* @memberof blas
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/blas/base/assert}
*/
setReadOnly( blas, 'assert', require( '@stdlib/blas-base-assert' ) );

/**
* @name caxpy
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/caxpy}
*/
setReadOnly( blas, 'caxpy', require( '@stdlib/blas-base-caxpy' ) );

/**
* @name ccopy
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ccopy}
*/
setReadOnly( blas, 'ccopy', require( '@stdlib/blas-base-ccopy' ) );

/**
* @name cscal
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/cscal}
*/
setReadOnly( blas, 'cscal', require( '@stdlib/blas-base-cscal' ) );

/**
* @name csrot
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/csrot}
*/
setReadOnly( blas, 'csrot', require( '@stdlib/blas-base-csrot' ) );

/**
* @name csscal
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/csscal}
*/
setReadOnly( blas, 'csscal', require( '@stdlib/blas-base-csscal' ) );

/**
* @name cswap
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/cswap}
*/
setReadOnly( blas, 'cswap', require( '@stdlib/blas-base-cswap' ) );

/**
* @name dasum
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dasum}
*/
setReadOnly( blas, 'dasum', require( '@stdlib/blas-base-dasum' ) );

/**
* @name daxpy
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/daxpy}
*/
setReadOnly( blas, 'daxpy', require( '@stdlib/blas-base-daxpy' ) );

/**
* @name dcabs1
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dcabs1}
*/
setReadOnly( blas, 'dcabs1', require( '@stdlib/blas-base-dcabs1' ) );

/**
* @name dcopy
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dcopy}
*/
setReadOnly( blas, 'dcopy', require( '@stdlib/blas-base-dcopy' ) );

/**
* @name ddot
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ddot}
*/
setReadOnly( blas, 'ddot', require( '@stdlib/blas-base-ddot' ) );

/**
* @name dgemm
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dgemm}
*/
setReadOnly( blas, 'dgemm', require( '@stdlib/blas-base-dgemm' ) );

/**
* @name dgemv
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dgemv}
*/
setReadOnly( blas, 'dgemv', require( '@stdlib/blas-base-dgemv' ) );

/**
* @name dger
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dger}
*/
setReadOnly( blas, 'dger', require( '@stdlib/blas-base-dger' ) );

/**
* @name diagonalTypeEnum2Str
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/diagonal-type-enum2str}
*/
setReadOnly( blas, 'diagonalTypeEnum2Str', require( '@stdlib/blas-base-diagonal-type-enum2str' ) );

/**
* @name diagonalTypeResolveEnum
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/diagonal-type-resolve-enum}
*/
setReadOnly( blas, 'diagonalTypeResolveEnum', require( '@stdlib/blas-base-diagonal-type-resolve-enum' ) );

/**
* @name diagonalTypeResolveStr
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/diagonal-type-resolve-str}
*/
setReadOnly( blas, 'diagonalTypeResolveStr', require( '@stdlib/blas-base-diagonal-type-resolve-str' ) );

/**
* @name diagonalTypeStr2Enum
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/diagonal-type-str2enum}
*/
setReadOnly( blas, 'diagonalTypeStr2Enum', require( '@stdlib/blas-base-diagonal-type-str2enum' ) );

/**
* @name diagonalTypes
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/diagonal-types}
*/
setReadOnly( blas, 'diagonalTypes', require( '@stdlib/blas-base-diagonal-types' ) );

/**
* @name dnrm2
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dnrm2}
*/
setReadOnly( blas, 'dnrm2', require( '@stdlib/blas-base-dnrm2' ) );

/**
* @name drot
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/drot}
*/
setReadOnly( blas, 'drot', require( '@stdlib/blas-base-drot' ) );

/**
* @name drotg
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/drotg}
*/
setReadOnly( blas, 'drotg', require( '@stdlib/blas-base-drotg' ) );

/**
* @name drotm
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/drotm}
*/
setReadOnly( blas, 'drotm', require( '@stdlib/blas-base-drotm' ) );

/**
* @name dscal
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dscal}
*/
setReadOnly( blas, 'dscal', require( '@stdlib/blas-base-dscal' ) );

/**
* @name dsdot
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dsdot}
*/
setReadOnly( blas, 'dsdot', require( '@stdlib/blas-base-dsdot' ) );

/**
* @name dspmv
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dspmv}
*/
setReadOnly( blas, 'dspmv', require( '@stdlib/blas-base-dspmv' ) );

/**
* @name dspr
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dspr}
*/
setReadOnly( blas, 'dspr', require( '@stdlib/blas-base-dspr' ) );

/**
* @name dswap
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dswap}
*/
setReadOnly( blas, 'dswap', require( '@stdlib/blas-base-dswap' ) );

/**
* @name dsymv
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dsymv}
*/
setReadOnly( blas, 'dsymv', require( '@stdlib/blas-base-dsymv' ) );

/**
* @name dsyr
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dsyr}
*/
setReadOnly( blas, 'dsyr', require( '@stdlib/blas-base-dsyr' ) );

/**
* @name dsyr2
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dsyr2}
*/
setReadOnly( blas, 'dsyr2', require( '@stdlib/blas-base-dsyr2' ) );

/**
* @name dtrmv
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dtrmv}
*/
setReadOnly( blas, 'dtrmv', require( '@stdlib/blas-base-dtrmv' ) );

/**
* @name dtrsv
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dtrsv}
*/
setReadOnly( blas, 'dtrsv', require( '@stdlib/blas-base-dtrsv' ) );

/**
* @name dznrm2
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dznrm2}
*/
setReadOnly( blas, 'dznrm2', require( '@stdlib/blas-base-dznrm2' ) );

/**
* @name gasum
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/gasum}
*/
setReadOnly( blas, 'gasum', require( '@stdlib/blas-base-gasum' ) );

/**
* @name gaxpy
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/gaxpy}
*/
setReadOnly( blas, 'gaxpy', require( '@stdlib/blas-base-gaxpy' ) );

/**
* @name gcopy
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/gcopy}
*/
setReadOnly( blas, 'gcopy', require( '@stdlib/blas-base-gcopy' ) );

/**
* @name gdot
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/gdot}
*/
setReadOnly( blas, 'gdot', require( '@stdlib/blas-base-gdot' ) );

/**
* @name gger
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/gger}
*/
setReadOnly( blas, 'gger', require( '@stdlib/blas-base-gger' ) );

/**
* @name gnrm2
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/gnrm2}
*/
setReadOnly( blas, 'gnrm2', require( '@stdlib/blas-base-gnrm2' ) );

/**
* @name gscal
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/gscal}
*/
setReadOnly( blas, 'gscal', require( '@stdlib/blas-base-gscal' ) );

/**
* @name gswap
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/gswap}
*/
setReadOnly( blas, 'gswap', require( '@stdlib/blas-base-gswap' ) );

/**
* @name idamax
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/idamax}
*/
setReadOnly( blas, 'idamax', require( '@stdlib/blas-base-idamax' ) );

/**
* @name igamax
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/igamax}
*/
setReadOnly( blas, 'igamax', require( '@stdlib/blas-base-igamax' ) );

/**
* @name isamax
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/isamax}
*/
setReadOnly( blas, 'isamax', require( '@stdlib/blas-base-isamax' ) );

/**
* @name layoutEnum2Str
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/layout-enum2str}
*/
setReadOnly( blas, 'layoutEnum2Str', require( '@stdlib/blas-base-layout-enum2str' ) );

/**
* @name layoutResolveEnum
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/layout-resolve-enum}
*/
setReadOnly( blas, 'layoutResolveEnum', require( '@stdlib/blas-base-layout-resolve-enum' ) );

/**
* @name layoutResolveStr
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/layout-resolve-str}
*/
setReadOnly( blas, 'layoutResolveStr', require( '@stdlib/blas-base-layout-resolve-str' ) );

/**
* @name layoutStr2Enum
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/layout-str2enum}
*/
setReadOnly( blas, 'layoutStr2Enum', require( '@stdlib/blas-base-layout-str2enum' ) );

/**
* @name layouts
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/layouts}
*/
setReadOnly( blas, 'layouts', require( '@stdlib/blas-base-layouts' ) );

/**
* @name matrixOrientationEnum2Str
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/matrix-orientation-enum2str}
*/
setReadOnly( blas, 'matrixOrientationEnum2Str', require( '@stdlib/blas-base-matrix-orientation-enum2str' ) );

/**
* @name matrixOrientationResolveEnum
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/matrix-orientation-resolve-enum}
*/
setReadOnly( blas, 'matrixOrientationResolveEnum', require( '@stdlib/blas-base-matrix-orientation-resolve-enum' ) );

/**
* @name matrixOrientationResolveStr
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/matrix-orientation-resolve-str}
*/
setReadOnly( blas, 'matrixOrientationResolveStr', require( '@stdlib/blas-base-matrix-orientation-resolve-str' ) );

/**
* @name matrixOrientationStr2Enum
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/matrix-orientation-str2enum}
*/
setReadOnly( blas, 'matrixOrientationStr2Enum', require( '@stdlib/blas-base-matrix-orientation-str2enum' ) );

/**
* @name matrixOrientations
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/matrix-orientations}
*/
setReadOnly( blas, 'matrixOrientations', require( '@stdlib/blas-base-matrix-orientations' ) );

/**
* @name matrixTriangleEnum2Str
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/matrix-triangle-enum2str}
*/
setReadOnly( blas, 'matrixTriangleEnum2Str', require( '@stdlib/blas-base-matrix-triangle-enum2str' ) );

/**
* @name matrixTriangleResolveEnum
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/matrix-triangle-resolve-enum}
*/
setReadOnly( blas, 'matrixTriangleResolveEnum', require( '@stdlib/blas-base-matrix-triangle-resolve-enum' ) );

/**
* @name matrixTriangleResolveStr
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/matrix-triangle-resolve-str}
*/
setReadOnly( blas, 'matrixTriangleResolveStr', require( '@stdlib/blas-base-matrix-triangle-resolve-str' ) );

/**
* @name matrixTriangleStr2Enum
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/matrix-triangle-str2enum}
*/
setReadOnly( blas, 'matrixTriangleStr2Enum', require( '@stdlib/blas-base-matrix-triangle-str2enum' ) );

/**
* @name matrixTriangles
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/matrix-triangles}
*/
setReadOnly( blas, 'matrixTriangles', require( '@stdlib/blas-base-matrix-triangles' ) );

/**
* @name operationSideEnum2Str
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/operation-side-enum2str}
*/
setReadOnly( blas, 'operationSideEnum2Str', require( '@stdlib/blas-base-operation-side-enum2str' ) );

/**
* @name operationSideResolveEnum
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/operation-side-resolve-enum}
*/
setReadOnly( blas, 'operationSideResolveEnum', require( '@stdlib/blas-base-operation-side-resolve-enum' ) );

/**
* @name operationSideResolveStr
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/operation-side-resolve-str}
*/
setReadOnly( blas, 'operationSideResolveStr', require( '@stdlib/blas-base-operation-side-resolve-str' ) );

/**
* @name operationSideStr2Enum
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/operation-side-str2enum}
*/
setReadOnly( blas, 'operationSideStr2Enum', require( '@stdlib/blas-base-operation-side-str2enum' ) );

/**
* @name operationSides
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/operation-sides}
*/
setReadOnly( blas, 'operationSides', require( '@stdlib/blas-base-operation-sides' ) );

/**
* @name sasum
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/sasum}
*/
setReadOnly( blas, 'sasum', require( '@stdlib/blas-base-sasum' ) );

/**
* @name saxpy
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/saxpy}
*/
setReadOnly( blas, 'saxpy', require( '@stdlib/blas-base-saxpy' ) );

/**
* @name scabs1
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/scabs1}
*/
setReadOnly( blas, 'scabs1', require( '@stdlib/blas-base-scabs1' ) );

/**
* @name scasum
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/scasum}
*/
setReadOnly( blas, 'scasum', require( '@stdlib/blas-base-scasum' ) );

/**
* @name scnrm2
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/scnrm2}
*/
setReadOnly( blas, 'scnrm2', require( '@stdlib/blas-base-scnrm2' ) );

/**
* @name scopy
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/scopy}
*/
setReadOnly( blas, 'scopy', require( '@stdlib/blas-base-scopy' ) );

/**
* @name sdot
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/sdot}
*/
setReadOnly( blas, 'sdot', require( '@stdlib/blas-base-sdot' ) );

/**
* @name sdsdot
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/sdsdot}
*/
setReadOnly( blas, 'sdsdot', require( '@stdlib/blas-base-sdsdot' ) );

/**
* @name sgemm
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/sgemm}
*/
setReadOnly( blas, 'sgemm', require( '@stdlib/blas-base-sgemm' ) );

/**
* @name sgemv
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/sgemv}
*/
setReadOnly( blas, 'sgemv', require( '@stdlib/blas-base-sgemv' ) );

/**
* @name sger
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/sger}
*/
setReadOnly( blas, 'sger', require( '@stdlib/blas-base-sger' ) );

/**
* @name snrm2
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/snrm2}
*/
setReadOnly( blas, 'snrm2', require( '@stdlib/blas-base-snrm2' ) );

/**
* @name srot
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/srot}
*/
setReadOnly( blas, 'srot', require( '@stdlib/blas-base-srot' ) );

/**
* @name srotg
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/srotg}
*/
setReadOnly( blas, 'srotg', require( '@stdlib/blas-base-srotg' ) );

/**
* @name srotm
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/srotm}
*/
setReadOnly( blas, 'srotm', require( '@stdlib/blas-base-srotm' ) );

/**
* @name sscal
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/sscal}
*/
setReadOnly( blas, 'sscal', require( '@stdlib/blas-base-sscal' ) );

/**
* @name sspmv
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/sspmv}
*/
setReadOnly( blas, 'sspmv', require( '@stdlib/blas-base-sspmv' ) );

/**
* @name sspr
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/sspr}
*/
setReadOnly( blas, 'sspr', require( '@stdlib/blas-base-sspr' ) );

/**
* @name sswap
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/sswap}
*/
setReadOnly( blas, 'sswap', require( '@stdlib/blas-base-sswap' ) );

/**
* @name ssymv
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ssymv}
*/
setReadOnly( blas, 'ssymv', require( '@stdlib/blas-base-ssymv' ) );

/**
* @name ssyr
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ssyr}
*/
setReadOnly( blas, 'ssyr', require( '@stdlib/blas-base-ssyr' ) );

/**
* @name ssyr2
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ssyr2}
*/
setReadOnly( blas, 'ssyr2', require( '@stdlib/blas-base-ssyr2' ) );

/**
* @name strmv
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/strmv}
*/
setReadOnly( blas, 'strmv', require( '@stdlib/blas-base-strmv' ) );

/**
* @name strsv
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/strsv}
*/
setReadOnly( blas, 'strsv', require( '@stdlib/blas-base-strsv' ) );

/**
* @name transposeOperationEnum2Str
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/transpose-operation-enum2str}
*/
setReadOnly( blas, 'transposeOperationEnum2Str', require( '@stdlib/blas-base-transpose-operation-enum2str' ) );

/**
* @name transposeOperationResolveEnum
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/transpose-operation-resolve-enum}
*/
setReadOnly( blas, 'transposeOperationResolveEnum', require( '@stdlib/blas-base-transpose-operation-resolve-enum' ) );

/**
* @name transposeOperationResolveStr
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/transpose-operation-resolve-str}
*/
setReadOnly( blas, 'transposeOperationResolveStr', require( '@stdlib/blas-base-transpose-operation-resolve-str' ) );

/**
* @name transposeOperationStr2Enum
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/transpose-operation-str2enum}
*/
setReadOnly( blas, 'transposeOperationStr2Enum', require( '@stdlib/blas-base-transpose-operation-str2enum' ) );

/**
* @name transposeOperations
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/transpose-operations}
*/
setReadOnly( blas, 'transposeOperations', require( '@stdlib/blas-base-transpose-operations' ) );

/**
* @name wasm
* @memberof blas
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/blas/base/wasm}
*/
setReadOnly( blas, 'wasm', require( '@stdlib/blas-base-wasm' ) );

/**
* @name zaxpy
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/zaxpy}
*/
setReadOnly( blas, 'zaxpy', require( '@stdlib/blas-base-zaxpy' ) );

/**
* @name zcopy
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/zcopy}
*/
setReadOnly( blas, 'zcopy', require( '@stdlib/blas-base-zcopy' ) );

/**
* @name zdrot
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/zdrot}
*/
setReadOnly( blas, 'zdrot', require( '@stdlib/blas-base-zdrot' ) );

/**
* @name zdscal
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/zdscal}
*/
setReadOnly( blas, 'zdscal', require( '@stdlib/blas-base-zdscal' ) );

/**
* @name zscal
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/zscal}
*/
setReadOnly( blas, 'zscal', require( '@stdlib/blas-base-zscal' ) );

/**
* @name zswap
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/zswap}
*/
setReadOnly( blas, 'zswap', require( '@stdlib/blas-base-zswap' ) );


// EXPORTS //

module.exports = blas;
