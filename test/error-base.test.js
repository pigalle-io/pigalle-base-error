/**
 * This file is part of pigalle.core.base.error
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/* eslint-env mocha */

require('should')

const {ErrorBase} = require('../lib/error-base')

class ErrorChild extends ErrorBase {}

describe('Class {ErrorBase}', () => {
  it('should be a function', () => {
    (ErrorBase).should.be.a.Function()
  })
})

describe('Create a instance of {ErrorBase} using <new> keyword', () => {
  it('should be an object', () => {
    (new ErrorBase()).should.be.an.Object()
  })

  it('should be an instance of {ErrorBase}', () => {
    (new ErrorBase).should.be.an.instanceOf(ErrorBase)
  })
})

describe('Create a instance of {ErrorBase} using <factory> method', () => {
  it('should be an object', () => {
    (ErrorBase.factory()).should.be.an.Object()
  })

  it('should be an instance of {ErrorBase}', () => {
    (ErrorBase.factory()).should.be.an.instanceOf(ErrorBase)
  })
})

describe('Create a instance of a derived class from {ErrorBase} using <new> keyword', () => {
  it('should be an object', () => {
    (new ErrorChild()).should.be.an.Object()
  })

  it('should be an instance of {ErrorBase}', () => {
    (new ErrorChild).should.be.an.instanceOf(ErrorBase)
  })
})

describe('Create a instance of a derived class from {ErrorBase} using <factory> method', () => {
  it('should be an object', () => {
    (ErrorChild.factory()).should.be.an.Object()
  })

  it('should be an instance of {ErrorBase}', () => {
    (ErrorChild.factory()).should.be.an.instanceOf(ErrorBase)
  })
})

describe('Throw a instance of a derived class from {ErrorBase} using <new> method', () => {
  it('should throw ;-)', () => {
    (() => { throw new ErrorChild() }).should.throw(ErrorChild)
  })
})

describe('Throw a instance of a derived class from {ErrorBase} using <factory> method', () => {
  it('should throw ;-)', () => {
    (() => { throw ErrorChild.factory() }).should.throw(ErrorChild)
  })
})
