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
* @name drotg
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/drotg}
*/
setReadOnly( blas, 'drotg', require( '@stdlib/blas-base-drotg' ) );

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
* @name dswap
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dswap}
*/
setReadOnly( blas, 'dswap', require( '@stdlib/blas-base-dswap' ) );

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
* @name matrixTriangles
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/matrix-triangles}
*/
setReadOnly( blas, 'matrixTriangles', require( '@stdlib/blas-base-matrix-triangles' ) );

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
* @name snrm2
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/snrm2}
*/
setReadOnly( blas, 'snrm2', require( '@stdlib/blas-base-snrm2' ) );

/**
* @name srotg
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/srotg}
*/
setReadOnly( blas, 'srotg', require( '@stdlib/blas-base-srotg' ) );

/**
* @name sscal
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/sscal}
*/
setReadOnly( blas, 'sscal', require( '@stdlib/blas-base-sscal' ) );

/**
* @name sswap
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/sswap}
*/
setReadOnly( blas, 'sswap', require( '@stdlib/blas-base-sswap' ) );

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
* @name zcopy
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/zcopy}
*/
setReadOnly( blas, 'zcopy', require( '@stdlib/blas-base-zcopy' ) );

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
