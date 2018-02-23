/**
 * This file is part of pigalle.core.base.error
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/**
 * @module error-base
 * @description A base to define custom error for the Pigalle framework.
 * @example
 *
 * const {ErrorBase} = require('@pigalle/core.base.error')
 *
 * // My custom error.
 * class CustomError extends ErrorBase {
 *
 * }
 *
 * throw new CustomError('Syntax error!') // ...throw my CustomError.
 *
 * throw CustomError.factory('Syntax error!) // ...another way using factory static method to throw an exception.
 *
 */

const {ExtendedError} = require('@9fv.io/extended-error')


/**
 * A base class for exceptions raised by the Pigalle framework.
 *
 * @class
 * @public
 */
class ErrorBase extends ExtendedError {

  /**
   * Factory method to create a new instance of {ErrorBase}
   *
   * @param args - The arguments.
   * @return {ErrorBase|*} An instance of {ErrorBase} or an instance derived class.
   * @static
   * @public
   */
  static factory(...args) {
    return new (this.prototype.constructor)(...args)
  }
}

module.exports = {}
module.exports.ErrorBase = ErrorBase
