/**
 * This file is part of pigalle.core.base.error
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

const ExtendableError = require('es6-error');

/**
 * A base class for throwing errors when using Pigalle framework.
 *
 * @class
 * @public
 */
class PigalleBaseError extends ExtendableError {

  /**
   * Create a new instance of {PigalleBaseError}.
   *
   * @param args - The arguments.
   */
  constructor(...args) {
    super(...args);
  }

}

module.exports = {};
module.exports.PigalleBaseError = PigalleBaseError;
