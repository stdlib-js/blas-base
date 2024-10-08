/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import assert = require( '@stdlib/blas-base-assert' );
import ccopy = require( '@stdlib/blas-base-ccopy' );
import cscal = require( '@stdlib/blas-base-cscal' );
import cswap = require( '@stdlib/blas-base-cswap' );
import dasum = require( '@stdlib/blas-base-dasum' );
import daxpy = require( '@stdlib/blas-base-daxpy' );
import dcabs1 = require( '@stdlib/blas-base-dcabs1' );
import dcopy = require( '@stdlib/blas-base-dcopy' );
import ddot = require( '@stdlib/blas-base-ddot' );
import diagonalTypeEnum2Str = require( '@stdlib/blas-base-diagonal-type-enum2str' );
import diagonalTypeResolveEnum = require( '@stdlib/blas-base-diagonal-type-resolve-enum' );
import diagonalTypeResolveStr = require( '@stdlib/blas-base-diagonal-type-resolve-str' );
import diagonalTypeStr2Enum = require( '@stdlib/blas-base-diagonal-type-str2enum' );
import diagonalTypes = require( '@stdlib/blas-base-diagonal-types' );
import dnrm2 = require( '@stdlib/blas-base-dnrm2' );
import drotg = require( '@stdlib/blas-base-drotg' );
import dscal = require( '@stdlib/blas-base-dscal' );
import dsdot = require( '@stdlib/blas-base-dsdot' );
import dswap = require( '@stdlib/blas-base-dswap' );
import gasum = require( '@stdlib/blas-base-gasum' );
import gaxpy = require( '@stdlib/blas-base-gaxpy' );
import gcopy = require( '@stdlib/blas-base-gcopy' );
import gdot = require( '@stdlib/blas-base-gdot' );
import gnrm2 = require( '@stdlib/blas-base-gnrm2' );
import gscal = require( '@stdlib/blas-base-gscal' );
import gswap = require( '@stdlib/blas-base-gswap' );
import idamax = require( '@stdlib/blas-base-idamax' );
import isamax = require( '@stdlib/blas-base-isamax' );
import layoutEnum2Str = require( '@stdlib/blas-base-layout-enum2str' );
import layoutResolveEnum = require( '@stdlib/blas-base-layout-resolve-enum' );
import layoutResolveStr = require( '@stdlib/blas-base-layout-resolve-str' );
import layoutStr2Enum = require( '@stdlib/blas-base-layout-str2enum' );
import layouts = require( '@stdlib/blas-base-layouts' );
import matrixTriangleEnum2Str = require( '@stdlib/blas-base-matrix-triangle-enum2str' );
import matrixTriangleResolveEnum = require( '@stdlib/blas-base-matrix-triangle-resolve-enum' );
import matrixTriangleResolveStr = require( '@stdlib/blas-base-matrix-triangle-resolve-str' );
import matrixTriangleStr2Enum = require( '@stdlib/blas-base-matrix-triangle-str2enum' );
import matrixTriangles = require( '@stdlib/blas-base-matrix-triangles' );
import operationSideEnum2Str = require( '@stdlib/blas-base-operation-side-enum2str' );
import operationSideResolveEnum = require( '@stdlib/blas-base-operation-side-resolve-enum' );
import operationSideResolveStr = require( '@stdlib/blas-base-operation-side-resolve-str' );
import operationSideStr2Enum = require( '@stdlib/blas-base-operation-side-str2enum' );
import operationSides = require( '@stdlib/blas-base-operation-sides' );
import sasum = require( '@stdlib/blas-base-sasum' );
import saxpy = require( '@stdlib/blas-base-saxpy' );
import scabs1 = require( '@stdlib/blas-base-scabs1' );
import scopy = require( '@stdlib/blas-base-scopy' );
import sdot = require( '@stdlib/blas-base-sdot' );
import sdsdot = require( '@stdlib/blas-base-sdsdot' );
import snrm2 = require( '@stdlib/blas-base-snrm2' );
import srotg = require( '@stdlib/blas-base-srotg' );
import sscal = require( '@stdlib/blas-base-sscal' );
import sswap = require( '@stdlib/blas-base-sswap' );
import transposeOperationEnum2Str = require( '@stdlib/blas-base-transpose-operation-enum2str' );
import transposeOperationResolveEnum = require( '@stdlib/blas-base-transpose-operation-resolve-enum' );
import transposeOperationResolveStr = require( '@stdlib/blas-base-transpose-operation-resolve-str' );
import transposeOperationStr2Enum = require( '@stdlib/blas-base-transpose-operation-str2enum' );
import transposeOperations = require( '@stdlib/blas-base-transpose-operations' );
import zcopy = require( '@stdlib/blas-base-zcopy' );
import zswap = require( '@stdlib/blas-base-zswap' );

/**
* Interface describing the `base` namespace.
*/
interface Namespace {
	/**
	* Base BLAS assertion utilities.
	*/
	assert: typeof assert;

	/**
	* Copies values from one complex single-precision floating-point vector to another complex single-precision floating-point vector.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - output array
	* @param strideY - `y` stride length
	* @returns output array
	*
	* @example
	* var Complex64Array = require( '@stdlib/array-complex64' );
	* var realf = require( '@stdlib/complex-float32-real' );
	* var imagf = require( '@stdlib/complex-float32-imag' );
	*
	* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Complex64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	*
	* ns.ccopy( x.length, x, 1, y, 1 );
	*
	* var z = y.get( 0 );
	* // returns <Complex64>
	*
	* var re = realf( z );
	* // returns 1.0
	*
	* var im = imagf( z );
	* // returns 2.0
	*
	* @example
	* var Complex64Array = require( '@stdlib/array-complex64' );
	* var realf = require( '@stdlib/complex-float32-real' );
	* var imagf = require( '@stdlib/complex-float32-imag' );
	*
	* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Complex64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	*
	* ns.ccopy.ndarray( x.length, x, 1, 0, y, 1, 0 );
	*
	* var z = y.get( 0 );
	* // returns <Complex64>
	*
	* var re = realf( z );
	* // returns 1.0
	*
	* var im = imagf( z );
	* // returns 2.0
	*/
	ccopy: typeof ccopy;

	/**
	* Scales a single-precision complex floating-point vector by a single-precision complex floating-point constant.
	*
	* @param N - number of indexed elements
	* @param ca - scalar constant
	* @param cx - input array
	* @param strideX - `cx` stride length
	* @returns input array
	*
	* @example
	* var Complex64Array = require( '@stdlib/array-complex64' );
	* var Complex64 = require( '@stdlib/complex-float32-ctor' );
	* var realf = require( '@stdlib/complex-float32-real' );
	* var imagf = require( '@stdlib/complex-float32-imag' );
	*
	* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var ca = new Complex64( 2.0, 2.0 );
	*
	* ns.cscal( 3, ca, cx, 1 );
	*
	* var z = cx.get( 0 );
	* // returns <Complex64>
	*
	* var re = realf( z );
	* // returns -2.0
	*
	* var im = imagf( z );
	* // returns 6.0
	*
	* @example
	* var Complex64Array = require( '@stdlib/array-complex64' );
	* var Complex64 = require( '@stdlib/complex-float32-ctor' );
	* var realf = require( '@stdlib/complex-float32-real' );
	* var imagf = require( '@stdlib/complex-float32-imag' );
	*
	* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var ca = new Complex64( 2.0, 2.0 );
	*
	* ns.cscal.ndarray( 2, ca, cx, 1, 0 );
	*
	* var z = cx.get( 0 );
	* // returns <Complex64>
	*
	* var re = realf( z );
	* // returns -2.0
	*
	* var im = imagf( z );
	* // returns 6.0
	*/
	cscal: typeof cscal;

	/**
	* Interchanges two complex single-precision floating-point vectors.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Complex64Array = require( '@stdlib/array-complex64' );
	* var realf = require( '@stdlib/complex-float32-real' );
	* var imagf = require( '@stdlib/complex-float32-imag' );
	*
	* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Complex64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	*
	* ns.cswap( x.length, x, 1, y, 1 );
	*
	* var z = y.get( 0 );
	* // returns <Complex64>
	*
	* var re = realf( z );
	* // returns 1.0
	*
	* var im = imagf( z );
	* // returns 2.0
	*
	* z = x.get( 0 );
	* // returns <Complex64>
	*
	* re = realf( z );
	* // returns 7.0
	*
	* im = imagf( z );
	* // returns 8.0
	*
	* @example
	* var Complex64Array = require( '@stdlib/array-complex64' );
	* var realf = require( '@stdlib/complex-float32-real' );
	* var imagf = require( '@stdlib/complex-float32-imag' );
	*
	* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Complex64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	*
	* ns.cswap.ndarray( x.length, x, 1, 0, y, 1, 0 );
	*
	* var z = y.get( 0 );
	* // returns <Complex64>
	*
	* var re = realf( z );
	* // returns 1.0
	*
	* var im = imagf( z );
	* // returns 2.0
	*
	* z = x.get( 0 );
	* // returns <Complex64>
	*
	* re = realf( z );
	* // returns 7.0
	*
	* im = imagf( z );
	* // returns 8.0
	*/
	cswap: typeof cswap;

	/**
	* Computes the sum of the absolute values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns sum of absolute values
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
	*
	* var z = ns.dasum( x.length, x, 1 );
	* // returns 15.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
	*
	* var z = ns.dasum.ndarray( x.length, x, 1, 0 );
	* // returns 21.0
	*/
	dasum: typeof dasum;

	/**
	* Multiplies a vector `x` by a constant `alpha` and adds the result to `y`.
	*
	* @param N - number of indexed elements
	* @param alpha - constant
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - output array
	* @param strideY - `y` stride length
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	*
	* ns.daxpy( x.length, 5.0, x, 1, y, 1 );
	* // y => <Float64Array>[ 6.0, 11.0, 16.0, 21.0, 26.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	*
	* ns.daxpy.ndarray( x.length, 5.0, x, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 6.0, 11.0, 16.0, 21.0, 26.0 ]
	*/
	daxpy: typeof daxpy;

	/**
	* Computes the sum of the absolute values of the real and imaginary components of a double-precision complex floating-point number.
	*
	* @param z - complex number
	* @returns result
	*
	* @example
	* var Complex128 = require( '@stdlib/complex-float64-ctor' );
	*
	* var v = ns.dcabs1( new Complex128( 5.0, -3.0 ) );
	* // returns 8.0
	*/
	dcabs1: typeof dcabs1;

	/**
	* Copies values from `x` into `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - output array
	* @param strideY - `y` stride length
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	*
	* ns.dcopy( x.length, x, 1, y, 1 );
	* // y => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	*
	* ns.dcopy.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*/
	dcopy: typeof dcopy;

	/**
	* Computes the dot product of `x` and `y`.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns dot product
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
	* var y = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
	*
	* var z = ns.ddot( x.length, x, 1, y, 1 );
	* // returns -5.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
	* var y = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
	*
	* var z = ns.ddot.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // returns -5.0
	*/
	ddot: typeof ddot;

	/**
	* Returns the BLAS diagonal type string associated with a BLAS diagonal type enumeration constant.
	*
	* @param value - enumeration constant
	* @returns diagonal type string
	*
	* @example
	* var str2enum = require( '@stdlib/blas-base-diagonal-type-str2enum' );
	*
	* var v = str2enum( 'unit' );
	* // returns <number>
	*
	* var s = ns.diagonalTypeEnum2Str( v );
	* // returns 'unit'
	*/
	diagonalTypeEnum2Str: typeof diagonalTypeEnum2Str;

	/**
	* Returns the enumeration constant associated with a BLAS diagonal type value.
	*
	* ## Notes
	*
	* -   Downstream consumers of this function should **not** rely on specific integer values (e.g., `UNIT == 0`). Instead, the function should be used in an opaque manner.
	*
	* @param value - diagonal type value
	* @returns enumeration constant
	*
	* @example
	* var v = ns.diagonalTypeResolveEnum( 'non-unit' );
	* // returns <number>
	*/
	diagonalTypeResolveEnum: typeof diagonalTypeResolveEnum;

	/**
	* Returns the diagonal type string associated with a BLAS diagonal type value.
	*
	* @param value - diagonal type value
	* @returns diagonal type string
	*
	* @example
	* var str2enum = require( '@stdlib/blas-base-diagonal-type-str2enum' );
	*
	* var v = ns.diagonalTypeResolveStr( str2enum( 'unit' ) );
	* // returns 'unit'
	*/
	diagonalTypeResolveStr: typeof diagonalTypeResolveStr;

	/**
	* Returns the enumeration constant associated with a BLAS diagonal type.
	*
	* ## Notes
	*
	* -   Downstream consumers of this function should **not** rely on specific integer values (e.g., `UNIT == 0`). Instead, the function should be used in an opaque manner.
	*
	* @param diagonal - diagonal type
	* @returns enumeration constant
	*
	* @example
	* var v = ns.diagonalTypeStr2Enum( 'unit' );
	* // returns <number>
	*/
	diagonalTypeStr2Enum: typeof diagonalTypeStr2Enum;

	/**
	* Returns a list of diagonal element types.
	*
	* @returns list of diagonal element types
	*
	* @example
	* var list = ns.diagonalTypes();
	* // e.g., returns [ 'non-unit', 'unit' ]
	*/
	diagonalTypes: typeof diagonalTypes;

	/**
	* Computes the L2-norm of a double-precision floating-point vector.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns L2-norm
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var z = ns.dnrm2( x.length, x, 1 );
	* // returns 3.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var z = ns.dnrm2.ndarray( x.length, x, 1, 0 );
	* // returns 3.0
	*/
	dnrm2: typeof dnrm2;

	/**
	* Constructs a Givens plane rotation.
	*
	* @param a - rotational elimination parameter
	* @param b - rotational elimination parameter
	* @returns output array
	*
	* @example
	* var out = ns.drotg( 0.0, 2.0 );
	* // returns <Float64Array>[ 2.0, 1.0, 0.0, 1.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var out = new Float64Array( 4 );
	* var y = ns.drotg.assign( 0.0, 2.0, out, 1, 0 );
	* // returns <Float64Array>[ 2.0, 1.0, 0.0, 1.0 ]
	*
	* var bool = ( y === out );
	* // returns true
	*/
	drotg: typeof drotg;

	/**
	* Multiplies a double-precision floating-point vector `x` by a constant `alpha`.
	*
	* @param N - number of indexed elements
	* @param alpha - constant
	* @param x - input array
	* @param stride - stride length
	* @returns input array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	*
	* ns.dscal( x.length, 5.0, x, 1 );
	* // x => <Float64Array>[ -10.0, 5.0, 15.0, -25.0, 20.0, 0.0, -5.0, -15.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	*
	* ns.dscal.ndarray( x.length, 5.0, x, 1, 0 );
	* // x => <Float64Array>[ -10.0, 5.0, 15.0, -25.0, 20.0, 0.0, -5.0, -15.0 ]
	*/
	dscal: typeof dscal;

	/**
	* Computes the dot product of `x` and `y` with extended accumulation and result.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns dot product
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
	* var y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
	*
	* var z = ns.dsdot( x.length, x, 1, y, 1 );
	* // returns -5.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
	* var y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
	*
	* var z = ns.dsdot.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // returns -5.0
	*/
	dsdot: typeof dsdot;

	/**
	* Interchanges two double-precision floating-point vectors.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	*
	* ns.dswap( x.length, x, 1, y, 1 );
	* // x => <Float64Array>[ 6.0, 7.0, 8.0, 9.0, 10.0 ]
	* // y => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	*
	* ns.dswap.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // x => <Float64Array>[ 6.0, 7.0, 8.0, 9.0, 10.0 ]
	* // y => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*/
	dswap: typeof dswap;

	/**
	* Computes the sum of the absolute values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns sum of absolute values
	*
	* @example
	* var x = [ 2.0, 6.0, -1.0, -4.0, 8.0 ];
	*
	* var z = ns.gasum( x.length, x, 1 );
	* // returns 15.0
	*
	* @example
	* var x = [ 2.0, 6.0, -1.0, -4.0, 8.0 ];
	*
	* var z = ns.gasum.ndarray( x.length, x, 1, 0 );
	* // returns 21.0
	*/
	gasum: typeof gasum;

	/**
	* Multiplies `x` by a constant `alpha` and adds the result to `y`.
	*
	* @param N - number of indexed elements
	* @param alpha - constant
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - output array
	* @param strideY - `y` stride length
	* @returns output array
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];
	*
	* ns.gaxpy( x.length, 5.0, x, 1, y, 1 );
	* // y => [ 6.0, 11.0, 16.0, 21.0, 26.0 ]
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];
	*
	* ns.gaxpy.ndarray( x.length, 5.0, x, 1, 0, y, 1, 0 );
	* // y => [ 6.0, 11.0, 16.0, 21.0, 26.0 ]
	*/
	gaxpy: typeof gaxpy;

	/**
	* Copies values from `x` into `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - output array
	* @param strideY - `y` stride length
	* @returns output array
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];
	*
	* ns.gcopy( x.length, x, 1, y, 1 );
	* // y => [ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];
	*
	* ns.gcopy.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => [ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*/
	gcopy: typeof gcopy;

	/**
	* Computes the dot product of two vectors.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns dot product
	*
	* @example
	* var x = [ 4.0, 2.0, -3.0, 5.0, -1.0 ];
	* var y = [ 2.0, 6.0, -1.0, -4.0, 8.0 ];
	*
	* var z = ns.gdot( x.length, x, 1, y, 1 );
	* // returns -5.0
	*
	* @example
	* var x = [ 4.0, 2.0, -3.0, 5.0, -1.0 ];
	* var y = [ 2.0, 6.0, -1.0, -4.0, 8.0 ];
	*
	* var z = ns.gdot.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // returns -5.0
	*/
	gdot: typeof gdot;

	/**
	* Computes the L2-norm of a vector.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns L2-norm
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var z = ns.gnrm2( x.length, x, 1 );
	* // returns 3.0
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var z = ns.gnrm2.ndarray( x.length, x, 1, 0 );
	* // returns 3.0
	*/
	gnrm2: typeof gnrm2;

	/**
	* Multiplies a vector `x` by a constant `alpha`.
	*
	* @param N - number of indexed elements
	* @param alpha - constant
	* @param x - input array
	* @param stride - stride length
	* @returns input array
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* ns.gscal( x.length, 5.0, x, 1 );
	* // x => [ -10.0, 5.0, 15.0, -25.0, 20.0, 0.0, -5.0, -15.0 ]
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* ns.gscal.ndarray( x.length, 5.0, x, 1, 0 );
	* // x => [ -10.0, 5.0, 15.0, -25.0, 20.0, 0.0, -5.0, -15.0 ]
	*/
	gscal: typeof gscal;

	/**
	* Interchanges vectors `x` and `y`.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];
	*
	* ns.gswap( x.length, x, 1, y, 1 );
	* // x => [ 6.0, 7.0, 8.0, 9.0, 10.0 ]
	* // y => [ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];
	*
	* ns.gswap.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // x => [ 6.0, 7.0, 8.0, 9.0, 10.0 ]
	* // y => [ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*/
	gswap: typeof gswap;

	/**
	* Finds the index of the first element having the maximum absolute value.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @returns index value
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	*
	* var idx = ns.idamax( 4, x, 2 );
	* // returns 2
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	*
	* var idx = ns.idamax.ndarray( x.length, x, 1, 0 );
	* // returns 3
	*/
	idamax: typeof idamax;

	/**
	* Finds the index of the first element having the maximum absolute value.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @returns index value
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	*
	* var idx = ns.isamax( 4, x, 2 );
	* // returns 2
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	*
	* var idx = ns.isamax.ndarray( x.length, x, 1, 0 );
	* // returns 3
	*/
	isamax: typeof isamax;

	/**
	* Returns the BLAS memory layout string associated with a BLAS memory layout enumeration constant.
	*
	* @param layout - enumeration constant
	* @returns layout string
	*
	* @example
	* var str2enum = require( '@stdlib/blas-base-layout-str2enum' );
	*
	* var v = str2enum( 'row-major' );
	* // returns <number>
	*
	* var s = ns.layoutEnum2Str( v );
	* // returns 'row-major'
	*/
	layoutEnum2Str: typeof layoutEnum2Str;

	/**
	* Returns the enumeration constant associated with a BLAS memory layout value.
	*
	* ## Notes
	*
	* -   Downstream consumers of this function should **not** rely on specific integer values (e.g., `ROW_MAJOR == 0`). Instead, the function should be used in an opaque manner.
	*
	* @param layout - layout value
	* @returns enumeration constant
	*
	* @example
	* var v = ns.layoutResolveEnum( 'row-major' );
	* // returns <number>
	*/
	layoutResolveEnum: typeof layoutResolveEnum;

	/**
	* Returns the layout string associated with a BLAS memory layout value.
	*
	* @param layout - layout value
	* @returns layout string
	*
	* @example
	* var str2enum = require( '@stdlib/blas-base-layout-str2enum' );
	*
	* var v = ns.layoutResolveStr( str2enum( 'row-major' ) );
	* // returns 'row-major'
	*/
	layoutResolveStr: typeof layoutResolveStr;

	/**
	* Returns the enumeration constant associated with a BLAS memory layout string.
	*
	* ## Notes
	*
	* -   Downstream consumers of this function should **not** rely on specific integer values (e.g., `ROW_MAJOR == 0`). Instead, the function should be used in an opaque manner.
	*
	* @param layout - memory layout string
	* @returns enumeration constant
	*
	* @example
	* var v = ns.layoutStr2Enum( 'row-major' );
	* // returns <number>
	*/
	layoutStr2Enum: typeof layoutStr2Enum;

	/**
	* Returns a list of memory layouts.
	*
	* @returns list of memory layouts
	*
	* @example
	* var list = ns.layouts();
	* // e.g., returns [ 'row-major', 'column-major' ]
	*/
	layouts: typeof layouts;

	/**
	* Returns the BLAS matrix triangle string associated with a BLAS matrix triangle enumeration constant.
	*
	* @param value - enumeration constant
	* @returns matrix triangle string
	*
	* @example
	* var str2enum = require( '@stdlib/blas-base-matrix-triangle-str2enum' );
	*
	* var v = str2enum( 'upper' );
	* // returns <number>
	*
	* var s = ns.matrixTriangleEnum2Str( v );
	* // returns 'upper'
	*/
	matrixTriangleEnum2Str: typeof matrixTriangleEnum2Str;

	/**
	* Returns the enumeration constant associated with a BLAS matrix triangle value.
	*
	* ## Notes
	*
	* -   Downstream consumers of this function should **not** rely on specific integer values (e.g., `UPPER == 0`). Instead, the function should be used in an opaque manner.
	*
	* @param value - matrix triangle value
	* @returns enumeration constant
	*
	* @example
	* var v = ns.matrixTriangleResolveEnum( 'lower' );
	* // returns <number>
	*/
	matrixTriangleResolveEnum: typeof matrixTriangleResolveEnum;

	/**
	* Returns the matrix triangle string associated with a BLAS matrix triangle value.
	*
	* @param value - matrix triangle value
	* @returns matrix triangle string
	*
	* @example
	* var str2enum = require( '@stdlib/blas-base-matrix-triangle-str2enum' );
	*
	* var v = ns.matrixTriangleResolveStr( str2enum( 'upper' ) );
	* // returns 'upper'
	*/
	matrixTriangleResolveStr: typeof matrixTriangleResolveStr;

	/**
	* Returns the enumeration constant associated with a BLAS matrix triangle.
	*
	* ## Notes
	*
	* -   Downstream consumers of this function should **not** rely on specific integer values (e.g., `UPPER == 0`). Instead, the function should be used in an opaque manner.
	*
	* @param value - matrix triangle string
	* @returns enumeration constant
	*
	* @example
	* var v = ns.matrixTriangleStr2Enum( 'upper' );
	* // returns <number>
	*/
	matrixTriangleStr2Enum: typeof matrixTriangleStr2Enum;

	/**
	* Returns a list of matrix triangles.
	*
	* @returns list of matrix triangles
	*
	* @example
	* var list = ns.matrixTriangles();
	* // e.g., returns [ 'upper', 'lower' ]
	*/
	matrixTriangles: typeof matrixTriangles;

	/**
	* Returns the BLAS operation side string associated with a BLAS operation side enumeration constant.
	*
	* @param operation - enumeration constant
	* @returns operation string
	*
	* @example
	* var str2enum = require( '@stdlib/blas-base-operation-side-str2enum' );
	*
	* var v = str2enum( 'left' );
	* // returns <number>
	*
	* var s = ns.operationSideEnum2Str( v );
	* // returns 'left'
	*/
	operationSideEnum2Str: typeof operationSideEnum2Str;

	/**
	* Returns the enumeration constant associated with a BLAS operation side value.
	*
	* ## Notes
	*
	* -   Downstream consumers of this function should **not** rely on specific integer values (e.g., `LEFT == 0`). Instead, the function should be used in an opaque manner.
	*
	* @param operation - operation value
	* @returns enumeration constant
	*
	* @example
	* var v = ns.operationSideResolveEnum( 'right' );
	* // returns <number>
	*/
	operationSideResolveEnum: typeof operationSideResolveEnum;

	/**
	* Returns the operation side string associated with a BLAS operation side value.
	*
	* @param operation - operation value
	* @returns operation side string
	*
	* @example
	* var str2enum = require( '@stdlib/blas-base-operation-side-str2enum' );
	*
	* var v = ns.operationSideResolveStr( str2enum( 'left' ) );
	* // returns 'left'
	*/
	operationSideResolveStr: typeof operationSideResolveStr;

	/**
	* Returns the enumeration constant associated with a BLAS operation side.
	*
	* ## Notes
	*
	* -   Downstream consumers of this function should **not** rely on specific integer values (e.g., `LEFT == 0`). Instead, the function should be used in an opaque manner.
	*
	* @param operation - operation side
	* @returns enumeration constant
	*
	* @example
	* var v = ns.operationSideStr2Enum( 'left' );
	* // returns <number>
	*/
	operationSideStr2Enum: typeof operationSideStr2Enum;

	/**
	* Returns a list of operation sides.
	*
	* @returns list of operation sides
	*
	* @example
	* var list = ns.operationSides();
	* // e.g., returns [ 'left', 'right' ]
	*/
	operationSides: typeof operationSides;

	/**
	* Computes the sum of the absolute values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns sum of absolute values
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
	*
	* var z = ns.sasum( x.length, x, 1 );
	* // returns 15.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
	*
	* var z = ns.sasum.ndarray( x.length, x, 1, 0 );
	* // returns 21.0
	*/
	sasum: typeof sasum;

	/**
	* Multiplies a vector `x` by a constant `alpha` and adds the result to `y`.
	*
	* @param N - number of indexed elements
	* @param alpha - constant
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - output array
	* @param strideY - `y` stride length
	* @returns output array
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	*
	* ns.saxpy( x.length, 5.0, x, 1, y, 1 );
	* // y => <Float32Array>[ 6.0, 11.0, 16.0, 21.0, 26.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	*
	* ns.saxpy.ndarray( x.length, 5.0, x, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ 6.0, 11.0, 16.0, 21.0, 26.0 ]
	*/
	saxpy: typeof saxpy;

	/**
	* Computes the sum of the absolute values of the real and imaginary components of a single-precision complex floating-point number.
	*
	* @param c - complex number
	* @returns result
	*
	* @example
	* var Complex64 = require( '@stdlib/complex-float32-ctor' );
	*
	* var v = ns.scabs1( new Complex64( 5.0, -3.0 ) );
	* // returns 8.0
	*/
	scabs1: typeof scabs1;

	/**
	* Copies values from `x` into `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - output array
	* @param strideY - `y` stride length
	* @returns output array
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	*
	* ns.scopy( x.length, x, 1, y, 1 );
	* // y => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	*
	* ns.scopy.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*/
	scopy: typeof scopy;

	/**
	* Computes the dot product of `x` and `y`.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns dot product
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
	* var y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
	*
	* var z = ns.sdot( x.length, x, 1, y, 1 );
	* // returns -5.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
	* var y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
	*
	* var z = ns.sdot.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // returns -5.0
	*/
	sdot: typeof sdot;

	/**
	* Computes the dot product of two single-precision floating-point vectors with extended accumulation.
	*
	* @param N - number of indexed elements
	* @param scalar - scalar constant added to dot product
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns dot product
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
	* var y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
	*
	* var z = ns.sdsdot( x.length, 0.0, x, 1, y, 1 );
	* // returns -5.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
	* var y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
	*
	* var z = ns.sdsdot.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
	* // returns -5.0
	*/
	sdsdot: typeof sdsdot;

	/**
	* Computes the L2-norm of a single-precision floating-point vector.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns L2-norm
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var z = ns.snrm2( x.length, x, 1 );
	* // returns 3.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var z = ns.snrm2.ndarray( x.length, x, 1, 0 );
	* // returns 3.0
	*/
	snrm2: typeof snrm2;

	/**
	* Constructs a Givens plane rotation.
	*
	* @param a - rotational elimination parameter
	* @param b - rotational elimination parameter
	* @returns output array
	*
	* @example
	* var out = ns.srotg( 0.0, 2.0 );
	* // returns <Float32Array>[ 2.0, 1.0, 0.0, 1.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var out = new Float32Array( 4 );
	* var y = ns.srotg.assign( 0.0, 2.0, out, 1, 0 );
	* // returns <Float32Array>[ 2.0, 1.0, 0.0, 1.0 ]
	*
	* var bool = ( y === out );
	* // returns true
	*/
	srotg: typeof srotg;

	/**
	* Multiplies a single-precision floating-point vector `x` by a constant `alpha`.
	*
	* @param N - number of indexed elements
	* @param alpha - constant
	* @param x - input array
	* @param stride - stride length
	* @returns input array
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	*
	* ns.sscal( x.length, 5.0, x, 1 );
	* // x => <Float32Array>[ -10.0, 5.0, 15.0, -25.0, 20.0, 0.0, -5.0, -15.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	*
	* ns.sscal.ndarray( x.length, 5.0, x, 1, 0 );
	* // x => <Float32Array>[ -10.0, 5.0, 15.0, -25.0, 20.0, 0.0, -5.0, -15.0 ]
	*/
	sscal: typeof sscal;

	/**
	* Interchanges two single-precision floating-point vectors.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	*
	* ns.sswap( x.length, x, 1, y, 1 );
	* // x => <Float32Array>[ 6.0, 7.0, 8.0, 9.0, 10.0 ]
	* // y => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	*
	* ns.sswap.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // x => <Float32Array>[ 6.0, 7.0, 8.0, 9.0, 10.0 ]
	* // y => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*/
	sswap: typeof sswap;

	/**
	* Returns the BLAS transpose operation string associated with a BLAS transpose operation enumeration constant.
	*
	* @param operation - enumeration constant
	* @returns operation string
	*
	* @example
	* var str2enum = require( '@stdlib/blas-base-transpose-operation-str2enum' );
	*
	* var v = str2enum( 'transpose' );
	* // returns <number>
	*
	* var s = ns.transposeOperationEnum2Str( v );
	* // returns 'transpose'
	*/
	transposeOperationEnum2Str: typeof transposeOperationEnum2Str;

	/**
	* Returns the enumeration constant associated with a BLAS transpose operation value.
	*
	* ## Notes
	*
	* -   Downstream consumers of this function should **not** rely on specific integer values (e.g., `TRANSPOSE == 0`). Instead, the function should be used in an opaque manner.
	*
	* @param operation - operation value
	* @returns enumeration constant
	*
	* @example
	* var v = ns.transposeOperationResolveEnum( 'conjugate-transpose' );
	* // returns <number>
	*/
	transposeOperationResolveEnum: typeof transposeOperationResolveEnum;

	/**
	* Returns the transpose operation string associated with a BLAS transpose operation value.
	*
	* @param operation - operation value
	* @returns transpose operation string
	*
	* @example
	* var str2enum = require( '@stdlib/blas-base-transpose-operation-str2enum' );
	*
	* var v = ns.transposeOperationResolveStr( str2enum( 'transpose' ) );
	* // returns 'transpose'
	*/
	transposeOperationResolveStr: typeof transposeOperationResolveStr;

	/**
	* Returns the enumeration constant associated with a BLAS transpose operation.
	*
	* ## Notes
	*
	* -   Downstream consumers of this function should **not** rely on specific integer values (e.g., `TRANSPOSE == 0`). Instead, the function should be used in an opaque manner.
	*
	* @param operation - transpose operation
	* @returns enumeration constant
	*
	* @example
	* var v = ns.transposeOperationStr2Enum( 'transpose' );
	* // returns <number>
	*/
	transposeOperationStr2Enum: typeof transposeOperationStr2Enum;

	/**
	* Returns a list of transpose operations.
	*
	* @returns list of transpose operations
	*
	* @example
	* var list = ns.transposeOperations();
	* // e.g., returns [ 'no-transpose', 'transpose', 'conjugate-transpose' ]
	*/
	transposeOperations: typeof transposeOperations;

	/**
	* Copies values from one complex double-precision floating-point vector to another complex double-precision floating-point vector.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - output array
	* @param strideY - `y` stride length
	* @returns output array
	*
	* @example
	* var Complex128Array = require( '@stdlib/array-complex128' );
	* var real = require( '@stdlib/complex-float64-real' );
	* var imag = require( '@stdlib/complex-float64-imag' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Complex128Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	*
	* ns.zcopy( x.length, x, 1, y, 1 );
	*
	* var z = y.get( 0 );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns 1.0
	*
	* var im = imag( z );
	* // returns 2.0
	*
	* @example
	* var Complex128Array = require( '@stdlib/array-complex128' );
	* var real = require( '@stdlib/complex-float64-real' );
	* var imag = require( '@stdlib/complex-float64-imag' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Complex128Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	*
	* ns.zcopy.ndarray( x.length, x, 1, 0, y, 1, 0 );
	*
	* var z = y.get( 0 );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns 1.0
	*
	* var im = imag( z );
	* // returns 2.0
	*/
	zcopy: typeof zcopy;

	/**
	* Interchanges two complex double-precision floating-point vectors.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Complex128Array = require( '@stdlib/array-complex128' );
	* var real = require( '@stdlib/complex-float64-real' );
	* var imag = require( '@stdlib/complex-float64-imag' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Complex128Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	*
	* ns.zswap( x.length, x, 1, y, 1 );
	*
	* var z = y.get( 0 );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns 1.0
	*
	* var im = imag( z );
	* // returns 2.0
	*
	* z = x.get( 0 );
	* // returns <Complex128>
	*
	* re = real( z );
	* // returns 7.0
	*
	* im = imag( z );
	* // returns 8.0
	*
	* @example
	* var Complex128Array = require( '@stdlib/array-complex128' );
	* var real = require( '@stdlib/complex-float64-real' );
	* var imag = require( '@stdlib/complex-float64-imag' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Complex128Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	*
	* ns.zswap.ndarray( x.length, x, 1, 0, y, 1, 0 );
	*
	* var z = y.get( 0 );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns 1.0
	*
	* var im = imag( z );
	* // returns 2.0
	*
	* z = x.get( 0 );
	* // returns <Complex128>
	*
	* re = real( z );
	* // returns 7.0
	*
	* im = imag( z );
	* // returns 8.0
	*/
	zswap: typeof zswap;
}

/**
* Base (i.e., lower-level) basic linear algebra subprograms (BLAS).
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
