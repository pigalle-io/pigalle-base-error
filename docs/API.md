# API reference of :

A base class to defined custom exceptions raisable by the Pigalle framework.

---
&#x1F34E; **__Warning !__ Work in progress...**
---
## API

<a name="module_error-base"></a>

### error-base
A base to define custom error for the Pigalle framework.

**Example**  
```js
const {ErrorBase} = require('@pigalle/core.base.error')

// My custom error.
class CustomError extends ErrorBase {

}

throw new CustomError('Syntax error!') // ...throw my CustomError.

throw CustomError.factory('Syntax error!) // ...another way using factory static method to throw an exception.
```

* [error-base](#module_error-base)
    * [~ErrorBase](#module_error-base..ErrorBase)
        * [.factory(...args)](#module_error-base..ErrorBase.factory) ⇒ <code>ErrorBase</code> \| <code>\*</code>

<a name="module_error-base..ErrorBase"></a>

#### error-base~ErrorBase
A base class for exceptions raised by the Pigalle framework.

**Kind**: inner class of [<code>error-base</code>](#module_error-base)  
**Access**: public  
<a name="module_error-base..ErrorBase.factory"></a>

##### ErrorBase.factory(...args) ⇒ <code>ErrorBase</code> \| <code>\*</code>
Factory method to create a new instance of {ErrorBase}

**Kind**: static method of [<code>ErrorBase</code>](#module_error-base..ErrorBase)  
**Returns**: <code>ErrorBase</code> \| <code>\*</code> - An instance of {ErrorBase} or an instance derived class.  
**Access**: public  

| Param | Description |
| --- | --- |
| ...args | The arguments. |

## <a name="license"> License

>
> [The MIT License](https://opensource.org/licenses/MIT)
>
> Copyright (c) 2018 [SAS 9 Février](https://9fevrier.com/)
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
>

***

_Documentation generated on Fri, 23 Feb 2018 13:30:54 GMT_

**Copyright &copy; 2018 [SAS 9 Février](https://9fevrier.com/)**
