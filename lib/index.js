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
* @name ccopy
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ccopy}
*/
setReadOnly( blas, 'ccopy', require( '@stdlib/blas-base-ccopy' ) );

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


// EXPORTS //

module.exports = blas;
