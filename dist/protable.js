/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(12);

var iterableToArray = __webpack_require__(13);

var unsupportedIterableToArray = __webpack_require__(14);

var nonIterableSpread = __webpack_require__(15);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 6 */
/***/ (function(module) {

module.exports = JSON.parse("{\"normal\":{\"classes\":[\"table\",\"table-striped\",\"table-bordered\"],\"thead\":{\"thClasses\":[\"align-middle\"]},\"pagination\":{\"containerElement\":\"ul\",\"containerClasses\":[\"pagination\"],\"btnWrapper\":\"li\",\"btnWrapperClasses\":[\"page-item\"],\"btnWrapperActiveClasses\":[\"active\"],\"btnClasses\":[\"page-link\"],\"rowsPerPage\":{\"selectClasses\":[\"form-control\"]}},\"search\":{\"classes\":[\"form-control\"]}},\"sm\":{\"classes\":[\"table\",\"table-sm\",\"table-striped\",\"table-bordered\"],\"thead\":{\"thClasses\":[\"align-middle\"]},\"pagination\":{\"containerElement\":\"ul\",\"containerClasses\":[\"pagination\",\"pagination-sm\"],\"btnWrapper\":\"li\",\"btnWrapperClasses\":[\"page-item\"],\"btnWrapperActiveClasses\":[\"active\"],\"btnClasses\":[\"page-link\"],\"rowsPerPage\":{\"selectClasses\":[\"form-control\",\"form-control-sm\"]}},\"search\":{\"classes\":[\"form-control\",\"form-control-sm\"]}}}");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),
/* 8 */
/***/ (function(module) {

module.exports = JSON.parse("{\"classes\":[\"ui\",\"celled\",\"striped\",\"table\"],\"pagination\":{\"containerClasses\":[\"ui\",\"pagination\",\"menu\"],\"btnElement\":\"a\",\"btnClasses\":[\"item\"],\"rowsPerPage\":{\"selectClasses\":[\"ui\",\"dropdown\"]}},\"search\":{\"wrapperElement\":\"div\",\"wrapperClasses\":[\"ui\",\"input\"]}}");

/***/ }),
/* 9 */
/***/ (function(module) {

module.exports = JSON.parse("{\"pagination\":{\"containerElement\":\"ul\",\"containerClasses\":[\"pagination\"],\"btnWrapper\":\"li\",\"btnElement\":\"a\",\"btnDisabledClasses\":[\"disabled\"],\"rowsPerPage\":{\"selectClasses\":[\"margin-0\"]}},\"search\":{\"classes\":[\"margin-0\"]}}");

/***/ }),
/* 10 */
/***/ (function(module) {

module.exports = JSON.parse("{\"classes\":[\"w-full\",\"table-auto\"],\"thead\":{\"thClasses\":[\"px-3\",\"py-2\",\"bg-gray-100\",\"border\"]},\"tbody\":{\"tdClasses\":[\"bg-even-200\",\"odd:bg-gray-200\",\"px-3\",\"py-2\",\"border\"]},\"tfoot\":{\"tdClasses\":[\"px-3\",\"py-2\",\"bg-gray-100\",\"border\"]},\"pagination\":{\"containerClasses\":[\"flex\"],\"btnClasses\":[\"px-2\",\"py-1\",\"border\"],\"btnActiveClasses\":[\"bg-gray-100\"],\"btnDisabledClasses\":[\"text-gray-500\"],\"rowsPerPage\":{\"selectClasses\":[\"px-2\",\"py-1\",\"border\"]}},\"search\":{\"classes\":[\"px-2\",\"py-1\",\"border\"]}}");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(7);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(7);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "fromArray", function() { return /* reexport */ from_array; });
__webpack_require__.d(__webpack_exports__, "fromTable", function() { return /* reexport */ from_dom_table; });
__webpack_require__.d(__webpack_exports__, "fromServer", function() { return /* reexport */ from_server; });
__webpack_require__.d(__webpack_exports__, "templateOptions", function() { return /* binding */ templateOptions; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(3);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(4);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(5);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(0);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(1);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(2);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ./src/components/table/Td.js





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Td_Td = /*#__PURE__*/function () {
  function Td(_ref) {
    var key = _ref.key,
        child = _ref.child,
        options = _ref.options;

    classCallCheck_default()(this, Td);

    this.key = key;

    if (child instanceof Node) {
      this.buildDOMFromNode(child);
    } else {
      this.buildDOMFromString(child);
    }

    this.options = _objectSpread({
      attrs: {
        colspan: 1
      },
      style: {},
      searchable: true
    }, options);

    this._applyAttributes();

    this._applyClasses();

    this._applyStyles();
  }

  createClass_default()(Td, [{
    key: "buildDOMFromString",
    value: function buildDOMFromString(child) {
      this.$dom = document.createElement('td');
      this.$dom.innerHTML = child === null || child === undefined ? '-' : child;
    }
  }, {
    key: "buildDOMFromNode",
    value: function buildDOMFromNode(node) {
      this.$dom = document.createElement('td');
      this.$dom.appendChild(node);
    }
  }, {
    key: "_applyClasses",
    value: function _applyClasses() {
      var _this$options$classes;

      if ((_this$options$classes = this.options.classes) === null || _this$options$classes === void 0 ? void 0 : _this$options$classes.length) {
        var _this$$dom$classList;

        (_this$$dom$classList = this.$dom.classList).add.apply(_this$$dom$classList, toConsumableArray_default()(this.options.classes));
      }
    }
  }, {
    key: "_applyAttributes",
    value: function _applyAttributes() {
      for (var attr in this.options.attrs) {
        this.$dom.setAttribute(attr, this.options.attrs[attr]);
      }
    }
  }, {
    key: "_applyStyles",
    value: function _applyStyles() {
      for (var style in this.options.style) {
        this.$dom.style[style] = this.options.style[style];
      }
    }
  }]);

  return Td;
}();

/* harmony default export */ var table_Td = (Td_Td);
// CONCATENATED MODULE: ./src/components/table/Th.js





function Th_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Th_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Th_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Th_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/**
 * Th Options
 * 
 * @typedef { Object } Th.Options
 * @property { Object } attrs - DOM attributes
 * @property { Number } attrs.colspan - colspan of this th
 */

/**
 * Th class
 *
 * @class Th
 */

var Th_Th = /*#__PURE__*/function () {
  /**
   * Creates an instance of Th.
   * 
   * @param { Object } payload
   * @param { string } payload.key
   * @param { string } payload.label
   * @param { ProTable } payload.proTable
   * @param { Th.Options } payload.options
   * @memberof Th
   */
  function Th(_ref) {
    var key = _ref.key,
        label = _ref.label,
        proTable = _ref.proTable,
        options = _ref.options;

    classCallCheck_default()(this, Th);

    this.key = key;
    this.label = label;
    this.proTable = proTable;
    this.$dom = document.createElement('th');
    /**
     * @type { Th.Options }
     */

    this.options = Th_objectSpread({
      attrs: {
        colspan: 1
      },
      orderabel: true
    }, options);

    this._createContainer();

    this._createSpan();

    this._applyAttributes();

    this._applyClasses();

    this._applyOrderable();
  }

  createClass_default()(Th, [{
    key: "_createContainer",
    value: function _createContainer() {
      this.$container = document.createElement('div');
      this.$container.style.display = 'flex';
      this.$container.style.justifyContent = 'space-between';
      this.$container.style.alignItems = 'center';
      this.$dom.appendChild(this.$container);
    }
  }, {
    key: "_applyAttributes",
    value: function _applyAttributes() {
      for (var attr in this.options.attrs) {
        this.$dom.setAttribute(attr, this.options.attrs[attr]);
      }
    }
  }, {
    key: "_applyClasses",
    value: function _applyClasses() {
      var _this$options$classes;

      if ((_this$options$classes = this.options.classes) === null || _this$options$classes === void 0 ? void 0 : _this$options$classes.length) {
        var _this$$dom$classList;

        (_this$$dom$classList = this.$dom.classList).add.apply(_this$$dom$classList, toConsumableArray_default()(this.options.classes));
      }
    }
  }, {
    key: "_createSpan",
    value: function _createSpan() {
      this.$spanLabel = document.createElement('span');
      this.$spanLabel.innerHTML = this.label || '-';
      this.$container.appendChild(this.$spanLabel);
    }
  }, {
    key: "_isOrderable",
    value: function _isOrderable() {
      return this.options.orderable && this.options.attrs.colspan === 1;
    }
  }, {
    key: "_applyOrderable",
    value: function _applyOrderable() {
      var _this = this;

      if (!this._isOrderable()) {
        return;
      }

      this.$container.style.cursor = 'pointer'; // caret top

      this.$spanTop = document.createElement('span');
      this.$spanTop.innerHTML = '▴';
      this.$spanTop.style.marginBottom = '-.3rem'; // caret bottom

      this.$spanBottom = document.createElement('span');
      this.$spanBottom.innerHTML = '▾';
      this.$spanBottom.style.marginTop = '-.3rem';
      this.$orderDom = document.createElement('div');
      this.$orderDom.appendChild(this.$spanTop);
      this.$orderDom.appendChild(this.$spanBottom);
      this.$orderDom.style.display = 'inline-flex';
      this.$orderDom.style.flexDirection = 'column';
      this.$orderDom.style.justifyContent = 'center';
      this.$orderDom.style.fontSize = '80%';
      this.$orderDom.style.height = '1rem';
      this.$orderDom.style.opacity = 0.3;
      this.$orderDom.style.marginLeft = '.5rem';
      this.$orderDom.style.userSelect = 'none';
      this.$container.appendChild(this.$orderDom);
      this.$dom.addEventListener('click', function (e) {
        _this._toggleOrder();
      });
    }
  }, {
    key: "_toggleOrder",
    value: function _toggleOrder() {
      var order = this.proTable.options.order;
      var payload = {
        key: this.key,
        direction: 'asc'
      };

      if (order.key === this.key) {
        payload.direction = order.direction === 'desc' ? 'asc' : 'desc';
      }

      this.proTable.setOrder(payload);
    }
  }, {
    key: "render",
    value: function render() {
      if (this._isOrderable()) {
        var order = this.proTable.options.order;
        this.$spanTop.style.visibility = order.key === this.key && order.direction === 'desc' ? 'hidden' : '';
        this.$spanBottom.style.visibility = order.key === this.key && order.direction === 'asc' ? 'hidden' : '';
      }
    }
  }]);

  return Th;
}();

/* harmony default export */ var table_Th = (Th_Th);
// CONCATENATED MODULE: ./src/components/table/Tr.js






var Tr_Tr = /*#__PURE__*/function () {
  /**
   * @param { Object } options
   * @param { string[] } options.classes
   */
  function Tr(options) {
    var _this$options, _this$options$classes;

    classCallCheck_default()(this, Tr);

    this.options = options;
    this.$dom = document.createElement('tr');
    this.childs = []; // apply classes

    if ((_this$options = this.options) === null || _this$options === void 0 ? void 0 : (_this$options$classes = _this$options.classes) === null || _this$options$classes === void 0 ? void 0 : _this$options$classes.length) {
      var _this$$dom$classList;

      (_this$$dom$classList = this.$dom.classList).add.apply(_this$$dom$classList, toConsumableArray_default()(this.options.classes));
    }
  }

  createClass_default()(Tr, [{
    key: "addTd",
    value: function addTd(_ref) {
      var key = _ref.key,
          label = _ref.label,
          options = _ref.options;
      var td = new table_Td({
        key: key,
        child: label,
        options: options
      });
      this.childs.push(td);
      this.$dom.appendChild(td.$dom);
    }
  }, {
    key: "pushTd",
    value: function pushTd(td) {
      this.childs.push(td);
      this.$dom.appendChild(td.$dom);
    }
  }, {
    key: "addTds",
    value: function addTds(array) {
      var _this = this;

      // _item = { key, label }
      array.forEach(function (_item) {
        _this.addTd(_item);
      });
      return this;
    }
  }, {
    key: "addTh",
    value: function addTh(column, options) {
      var th = new table_Th(column, options);
      this.childs.push(th);
      this.$dom.appendChild(th.$dom);
    }
  }, {
    key: "pushTh",
    value: function pushTh(th) {
      this.childs.push(th);
      this.$dom.appendChild(th.$dom);
    }
  }, {
    key: "addThs",
    value: function addThs(array) {
      var _this2 = this;

      array.forEach(function (_item) {
        _this2.addTh(_item);
      });
      return this;
    }
  }]);

  return Tr;
}();

/* harmony default export */ var table_Tr = (Tr_Tr);

// CONCATENATED MODULE: ./src/components/table/THead.js





function THead_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function THead_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { THead_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { THead_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




/**
 * @typedef { Object } THead.Options
 * @property { string[] } classes - `thead` classes
 * @property { string[] } trClasses - `thead > tr` classes
 * @property { string[] } thClasses - `thead > tr > th` classes
 */

/**
 * @class THead
 * @property { THead.Options } options
 */

var THead_THead = /*#__PURE__*/function () {
  /**
   * Creates an instance of THead.
   *
   * The params columns can be like: ["a", "b", { c: ["d", "e", "f"] }]
   * 
   * @param { Object } payload
   * @param { ProTable } payload.proTable
   * @param { THead.Options } payload.options
   * @memberof THead
   * @constructor
   */
  function THead(_ref) {
    var _this = this,
        _this$options,
        _this$options$classes;

    var proTable = _ref.proTable,
        options = _ref.options;

    classCallCheck_default()(this, THead);

    this.proTable = proTable;
    this.options = options;
    this.$dom = document.createElement('thead');
    this.trs = this.generateTrs(this.proTable.columns);

    this.columnsCount = function () {
      return _this.trs[0].childs.map(function (th) {
        return th.options.attrs.colspan;
      }).reduce(function (a, b) {
        return a + b;
      });
    }();

    console.log('trs', this.trs); // apply thead classes

    if ((_this$options = this.options) === null || _this$options === void 0 ? void 0 : (_this$options$classes = _this$options.classes) === null || _this$options$classes === void 0 ? void 0 : _this$options$classes.length) {
      var _this$$dom$classList;

      (_this$$dom$classList = this.$dom.classList).add.apply(_this$$dom$classList, toConsumableArray_default()(this.options.classes));
    } // append child


    this.trs.forEach(function (tr) {
      return _this.$dom.appendChild(tr.$dom);
    });
  }
  /**
   * This function will generate one <tr> tag if its simple.
   * But for complex headers, it will generate more than one <tr> tags.
   * 
   * @param { string[] } columns 
   * @returns { Tr[] } trs
   */


  createClass_default()(THead, [{
    key: "generateTrs",
    value: function generateTrs(columns) {
      var _this$options2;

      var trs = [];

      var _this$generateThs = this.generateThs(columns),
          ths = _this$generateThs.ths,
          childs = _this$generateThs.childs;

      var tr = new table_Tr({
        classes: (_this$options2 = this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.trClasses
      });
      ths.forEach(function (_th) {
        return tr.pushTh(_th);
      });
      trs.push(tr);
      console.log('childs', childs);

      if (Object.keys(childs).length) {
        trs = trs.concat(this.generateTrs(childs));
      } // add rowspan to th that has not colspan attr
      // and fix colspan as its child


      tr.childs.forEach(function (_th) {
        if (_th.options.attrs.colspan === 1) {
          _th.$dom.setAttribute('rowspan', trs.length);
        }
      });
      return trs;
    }
    /**
     * Generate th elements of the head
     * 
     * @param { Object } columns 
     */

  }, {
    key: "generateThs",
    value: function generateThs(columns) {
      var ths = [];
      var childs = {};

      for (var _key in columns) {
        var _this$options3;

        var _col = columns[_key];
        ths.push(new table_Th({
          key: _key,
          label: _col.label,
          proTable: this.proTable,
          options: {
            classes: (((_this$options3 = this.options) === null || _this$options3 === void 0 ? void 0 : _this$options3.thClasses) || []).concat(_col.classes),
            attrs: {
              colspan: this.getColspan(_col.childs)
            },
            orderable: typeof _col.orderable === 'boolean' ? !!_col.orderable : true
          }
        }));

        if (_col.childs) {
          childs = THead_objectSpread(THead_objectSpread({}, childs), _col.childs);
        }
      }

      return {
        ths: ths,
        childs: childs
      };
    }
    /**
     * Return the count of colspan of a given childs
     * 
     * @param { Object } childs 
     */

  }, {
    key: "getColspan",
    value: function getColspan(childs) {
      if (!childs) {
        return 1;
      }

      var length = Object.keys(childs).length;

      for (var _key in childs) {
        if (childs[_key].childs) {
          length += this.getColspan(childs[_key].childs);
        }
      }

      return length;
    }
  }, {
    key: "render",
    value: function render() {
      this.trs.forEach(function (_tr) {
        _tr.childs.forEach(function (_child) {
          return _child.render();
        });
      });
    }
  }]);

  return THead;
}();

/* harmony default export */ var table_THead = (THead_THead);
// CONCATENATED MODULE: ./src/components/table/TBody.js





function TBody_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function TBody_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { TBody_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { TBody_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




/**
 * TBody Options
 * 
 * @typedef { Object } TBody.Options
 * @property { string[] } classes - classes of tbody
 * @property { string[] } trClasses - classes of each tr
 * @property { string[] } tdClasses - classes of each td
 */

/**
 * @class TBody
 * @param { TBody.Options } options
 */

var TBody_TBody = /*#__PURE__*/function () {
  /**
   * Creates an instance of TBody.
   * 
   * @param { Object } payload
   * @param { ProTable } payload.proTable
   * @param { TBody.Options } payload.options
   * @memberof TBody
   */
  function TBody(_ref) {
    var _this$options, _this$options$classes;

    var proTable = _ref.proTable,
        options = _ref.options;

    classCallCheck_default()(this, TBody);

    this.$dom = document.createElement('tbody');
    this.proTable = proTable;
    this.options = options;
    this.generateTrs(); // apply tbody classes

    if ((_this$options = this.options) === null || _this$options === void 0 ? void 0 : (_this$options$classes = _this$options.classes) === null || _this$options$classes === void 0 ? void 0 : _this$options$classes.length) {
      var _this$$dom$classList;

      (_this$$dom$classList = this.$dom.classList).add.apply(_this$$dom$classList, toConsumableArray_default()(this.options.classes));
    }

    this.render();
  }

  createClass_default()(TBody, [{
    key: "generateTrs",
    value: function generateTrs() {
      var _this = this;

      var columns = this.proTable.columns;
      var rows = this.proTable.rows;
      this.trs = [];
      rows.forEach(function (_row) {
        var _this$options2;

        var tr = new table_Tr({
          classes: (_this$options2 = _this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.trClasses
        });
        tr.addTds(_this.generateTds(columns, _row));

        _this.trs.push(tr);
      });
      this.trs;
    }
    /**
     * Generate object array. The return of this function will next be
     * generated to object Tds
     * 
     * @param { Object } columns 
     * @param { Object[] } _row 
     */

  }, {
    key: "generateTds",
    value: function generateTds(columns, _row) {
      var tds = [];

      for (var _key in columns) {
        var _this$options3, _this$proTable$option, _this$proTable$option2;

        /**
         * the corresponding column of this row
         */
        var _col = columns[_key];
        /**
         * Row Content could be an array that consits with 2 items 
         *  - ['content', { classes: [...] }]
         *  - first item is the content
         *  - the second is the options
         * 
         * And could be just a string/Node
         */

        var rowContent = Array.isArray(_row[_key]) ? _row[_key][0] : _row[_key];
        var rowOptions = Array.isArray(_row[_key]) ? _row[_key][1] : {};

        if ((_this$options3 = this.options) === null || _this$options3 === void 0 ? void 0 : _this$options3.tdClasses) {
          var _this$options4;

          rowOptions.classes = (rowOptions.classes || []).concat((_this$options4 = this.options) === null || _this$options4 === void 0 ? void 0 : _this$options4.tdClasses);
        } // override content if user defines targetIndex


        if (Number.isInteger(_col.targetIndex)) {
          var contentTmp = _row[Object.keys(this.proTable.columns)[_col.targetIndex]];

          rowContent = Array.isArray(contentTmp) ? contentTmp[0] : contentTmp;
          rowOptions = TBody_objectSpread(TBody_objectSpread({}, rowOptions), Array.isArray(contentTmp) ? contentTmp[1] : {});
        } // override content if user defines contents callback


        if ((_this$proTable$option = this.proTable.options) === null || _this$proTable$option === void 0 ? void 0 : (_this$proTable$option2 = _this$proTable$option.contents) === null || _this$proTable$option2 === void 0 ? void 0 : _this$proTable$option2[_key]) {
          // we pass 2 params:
          // - rowContent: content for this specific cell
          // - _row: contents of the current row
          rowContent = this.proTable.options.contents[_key](rowContent, _row); // check if the callback return is [content, { classes: [...] }]

          if (Array.isArray(rowContent) && rowContent.length > 1) {
            var _rowContent$;

            rowOptions.classes = (rowOptions.classes || []).concat(((_rowContent$ = rowContent[1]) === null || _rowContent$ === void 0 ? void 0 : _rowContent$.classes) || []);
            rowContent = rowContent[0];
          }
        }

        if (_col.childs) {
          // call generateTds recursively
          tds = tds.concat(this.generateTds(_col.childs, _row[_key]));
        } else {
          tds.push({
            key: _key,
            label: rowContent,
            options: TBody_objectSpread(TBody_objectSpread({}, rowOptions), {}, {
              searchable: typeof _col.searchable === 'boolean' ? !!_col.searchable : true
            })
          });
        }
      } // console.log('generateTds', tds)


      return tds;
    }
    /**
     * rendering trs
     *
     * @memberof TBody
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // delete rendered trs
      while (this.$dom.lastChild) {
        this.$dom.removeChild(this.$dom.lastChild);
      }

      if (this.proTable.options.fromServer) {
        this.generateTrs();
        this.trs.forEach(function (_tr) {
          return _this2.$dom.appendChild(_tr.$dom);
        });
      } else {
        var limit = this.proTable.options.limit;
        var page = this.proTable.options.page;
        var start = (page - 1) * limit;
        this.filteredTrs.sort(this._sort.bind(this)).slice(start, this.proTable.options.limit * page).forEach(function (_tr) {
          return _this2.$dom.appendChild(_tr.$dom);
        });
      } // if there is no result for given keyword


      if (this.filteredTrs.length < 1 && this.proTable.options.keyword) {
        var _this$proTable$option3;

        var tr = new table_Tr();
        var td = new table_Td({
          child: ((_this$proTable$option3 = this.proTable.options.search) === null || _this$proTable$option3 === void 0 ? void 0 : _this$proTable$option3.notFoundText) || 'Not matching records found',
          options: {
            attrs: {
              colspan: this.proTable.thead.columnsCount
            },
            style: {
              textAlign: 'center'
            }
          }
        });
        tr.pushTd(td);
        this.$dom.appendChild(tr.$dom);
      }
    }
  }, {
    key: "_filter",

    /**
     * Filter by Tr
     *
     * @param { Tr } _tr
     * @memberof TBody
     */
    value: function _filter(_tr) {
      var keyword = this.proTable.options.keyword || '';
      return !!_tr.childs.find(function (_child) {
        var _child$$dom, _child$$dom$innerText, _child$$dom$innerText2;

        return _child.options.searchable && (_child === null || _child === void 0 ? void 0 : (_child$$dom = _child.$dom) === null || _child$$dom === void 0 ? void 0 : (_child$$dom$innerText = _child$$dom.innerText) === null || _child$$dom$innerText === void 0 ? void 0 : (_child$$dom$innerText2 = _child$$dom$innerText.toLowerCase()) === null || _child$$dom$innerText2 === void 0 ? void 0 : _child$$dom$innerText2.indexOf(keyword.toLowerCase())) > -1;
      });
    }
  }, {
    key: "_sort",
    value: function _sort(a, b) {
      var order = this.proTable.options.order;

      if (order.key) {
        var tdA = a.childs.find(function (_td) {
          return _td.key === order.key;
        });
        var tdB = b.childs.find(function (_td) {
          return _td.key === order.key;
        }); // check if the value is valid number or not

        var contentA = !isNaN(tdA.$dom.innerText) ? parseFloat(tdA.$dom.innerText) : tdA.$dom.innerText;
        var contentB = !isNaN(tdB.$dom.innerText) ? parseFloat(tdB.$dom.innerText) : tdB.$dom.innerText; // ascending

        if (order.direction === 'asc') {
          return contentA > contentB ? 1 : -1;
        } else {
          return contentA > contentB ? -1 : 1;
        }
      }

      return 0;
    }
  }, {
    key: "filteredTrs",
    get: function get() {
      return this.trs.filter(this._filter.bind(this));
    }
  }]);

  return TBody;
}();

/* harmony default export */ var table_TBody = (TBody_TBody);
// CONCATENATED MODULE: ./src/components/pagination/RowsPerPage.js





var RowsPerPage_RowsPerPage = /*#__PURE__*/function () {
  /**
   * 
   * @param { ProTable } proTable 
   */
  function RowsPerPage(proTable) {
    classCallCheck_default()(this, RowsPerPage);

    this.proTable = proTable;
    this.$dom = document.createElement('div');
    this.$dom.style.display = 'inline-flex';
    this.$dom.style.marginRight = '1rem';
    this.$dom.style.alignItems = 'center';

    this._createSpan();

    this._createSelect();
  }

  createClass_default()(RowsPerPage, [{
    key: "_createSpan",
    value: function _createSpan() {
      var _this$proTable$option, _this$proTable$option2, _this$proTable$option3;

      var span = document.createElement('span');
      span.innerText = ((_this$proTable$option = this.proTable.options) === null || _this$proTable$option === void 0 ? void 0 : (_this$proTable$option2 = _this$proTable$option.pagination) === null || _this$proTable$option2 === void 0 ? void 0 : (_this$proTable$option3 = _this$proTable$option2.rowsPerPage) === null || _this$proTable$option3 === void 0 ? void 0 : _this$proTable$option3.text) || 'Rows per page';
      span.style.marginRight = '1rem';
      this.$dom.appendChild(span);
    }
  }, {
    key: "_createSelect",
    value: function _createSelect() {
      var _options$pagination,
          _options$pagination$r,
          _options$pagination2,
          _options$pagination2$,
          _this = this;

      var options = this.proTable.options;
      var selectedLimit = options.limit;
      this.$select = document.createElement('select');
      this.$select.style.width = 'fit-content';

      if ((_options$pagination = options.pagination) === null || _options$pagination === void 0 ? void 0 : (_options$pagination$r = _options$pagination.rowsPerPage) === null || _options$pagination$r === void 0 ? void 0 : _options$pagination$r.selectClasses) {
        var _this$$select$classLi;

        (_this$$select$classLi = this.$select.classList).add.apply(_this$$select$classLi, toConsumableArray_default()(options.pagination.rowsPerPage.selectClasses));
      }

      var ranges = ((_options$pagination2 = options.pagination) === null || _options$pagination2 === void 0 ? void 0 : (_options$pagination2$ = _options$pagination2.rowsPerPage) === null || _options$pagination2$ === void 0 ? void 0 : _options$pagination2$.ranges) || [5, 10, 25, 50, 100, 250, 500]; // if selectedLimit doesn't exist in ranges array

      if (!ranges.find(function (_range) {
        return _range === selectedLimit;
      })) {
        ranges.push(selectedLimit);
      }

      ranges.sort(function (a, b) {
        return a - b;
      }).forEach(function (limit) {
        var option = document.createElement('option');
        option.value = limit;
        option.innerText = limit;
        option.selected = parseInt(selectedLimit) === limit;

        _this.$select.appendChild(option);
      });
      this.$select.addEventListener('change', function (e) {
        _this.proTable.setLimit(_this.$select.value);
      });
      this.$dom.appendChild(this.$select);
    }
  }]);

  return RowsPerPage;
}();

/* harmony default export */ var pagination_RowsPerPage = (RowsPerPage_RowsPerPage);
// CONCATENATED MODULE: ./src/components/pagination/SimplePagination.js






var SimplePagination_SimplePagination = /*#__PURE__*/function () {
  /**
   * Create SimplePagination
   * 
   * @param { ProTable ``} proTable
   * @memberof SimplePagination
   */
  function SimplePagination(proTable) {
    classCallCheck_default()(this, SimplePagination);

    this.proTable = proTable;
    this.$dom = document.createElement('div');
    this.$dom.style.display = 'flex';
    this.$dom.style.justifyContent = 'flex-end';
    this.$dom.style.alignItems = 'baseline';

    this._buildRowsPerPage();

    this._buildSpan();

    this._buildControls();

    this.render();
  }

  createClass_default()(SimplePagination, [{
    key: "_buildRowsPerPage",
    value: function _buildRowsPerPage() {
      this.rowsPerPage = new pagination_RowsPerPage(this.proTable);
      this.$dom.appendChild(this.rowsPerPage.$dom);
    }
  }, {
    key: "_buildSpan",
    value: function _buildSpan() {
      this.$span = document.createElement('span');
      this.$span.style.marginRight = '1rem';
      this.$dom.appendChild(this.$span);
    }
  }, {
    key: "_buildControls",
    value: function _buildControls() {
      var options = this.proTable.options;
      this.$controls = document.createElement(options.pagination.containerElement || 'div');
      this.$controls.style.margin = '0';

      if (options.pagination.containerClasses) {
        var _this$$controls$class;

        (_this$$controls$class = this.$controls.classList).add.apply(_this$$controls$class, toConsumableArray_default()(options.pagination.containerClasses));
      }

      this.$dom.appendChild(this.$controls);

      this._buildPrevButton();

      this._buildNextButton();
    }
  }, {
    key: "_buildNextButton",
    value: function _buildNextButton() {
      var _this = this;

      this.btnNext = this._buildButton('Next');
      this.$controls.appendChild(this.btnNext.$wrapper);
      this.btnNext.$btn.addEventListener('click', function (e) {
        _this.proTable.setPage(_this.proTable.options.page + 1);
      });
    }
  }, {
    key: "_buildPrevButton",
    value: function _buildPrevButton() {
      var _this2 = this;

      this.btnPrev = this._buildButton('Prev');
      this.$controls.appendChild(this.btnPrev.$wrapper);
      this.btnPrev.$btn.addEventListener('click', function (e) {
        _this2.proTable.setPage(_this2.proTable.options.page - 1);
      });
    }
    /**
     * Create DOM button
     * 
     * @returns { Object } object of $btn and $wrapper
     */

  }, {
    key: "_buildButton",
    value: function _buildButton(text) {
      var _options$pagination;

      var options = this.proTable.options;
      var $btn = document.createElement(((_options$pagination = options.pagination) === null || _options$pagination === void 0 ? void 0 : _options$pagination.btnElement) || 'button');
      $btn.innerText = text; // apply classes from options

      if (this.proTable.options.pagination.btnClasses) {
        var _$btn$classList;

        (_$btn$classList = $btn.classList).add.apply(_$btn$classList, toConsumableArray_default()(this.proTable.options.pagination.btnClasses));
      } // if there is a wrapper


      if (options.pagination.btnWrapper) {
        var $wrapper = document.createElement(options.pagination.btnWrapper);
        $wrapper.appendChild($btn);

        if (options.pagination.btnWrapperClasses) {
          var _$wrapper$classList;

          (_$wrapper$classList = $wrapper.classList).add.apply(_$wrapper$classList, toConsumableArray_default()(options.pagination.btnWrapperClasses));
        }

        return {
          $wrapper: $wrapper,
          $btn: $btn
        };
      }

      return {
        $btn: $btn,
        $wrapper: $btn
      };
    }
  }, {
    key: "render",
    value: function render() {
      var options = this.proTable.options;
      var limit = options.limit;
      var page = options.page;
      var start = (page - 1) * limit + 1;
      var to = start + limit - 1;
      var totalRows = this.proTable.tbody.filteredTrs.length;
      var lastPage = Math.ceil(totalRows / limit);
      this.$span.innerText = "".concat(start, "-").concat(to > totalRows ? totalRows : to, " of ").concat(totalRows);
      this.btnPrev.$btn.disabled = page === 1;
      this.btnNext.$btn.disabled = page === lastPage;

      if (page === 1) {
        var _options$pagination2, _options$pagination2$;

        this.btnPrev.$wrapper.classList.add('disabled');

        if ((_options$pagination2 = options.pagination) === null || _options$pagination2 === void 0 ? void 0 : (_options$pagination2$ = _options$pagination2.btnDisabledClasses) === null || _options$pagination2$ === void 0 ? void 0 : _options$pagination2$.length) {
          var _this$btnPrev$$btn$cl;

          (_this$btnPrev$$btn$cl = this.btnPrev.$btn.classList).add.apply(_this$btnPrev$$btn$cl, toConsumableArray_default()(options.pagination.btnDisabledClasses));
        }
      } else {
        var _options$pagination3, _options$pagination3$;

        this.btnPrev.$wrapper.classList.remove('disabled');

        if ((_options$pagination3 = options.pagination) === null || _options$pagination3 === void 0 ? void 0 : (_options$pagination3$ = _options$pagination3.btnDisabledClasses) === null || _options$pagination3$ === void 0 ? void 0 : _options$pagination3$.length) {
          var _this$btnPrev$$btn$cl2;

          (_this$btnPrev$$btn$cl2 = this.btnPrev.$btn.classList).remove.apply(_this$btnPrev$$btn$cl2, toConsumableArray_default()(options.pagination.btnDisabledClasses));
        }
      }

      if (page === lastPage) {
        var _options$pagination4, _options$pagination4$;

        this.btnNext.$wrapper.classList.add('disabled');

        if ((_options$pagination4 = options.pagination) === null || _options$pagination4 === void 0 ? void 0 : (_options$pagination4$ = _options$pagination4.btnDisabledClasses) === null || _options$pagination4$ === void 0 ? void 0 : _options$pagination4$.length) {
          var _this$btnNext$$btn$cl;

          (_this$btnNext$$btn$cl = this.btnNext.$btn.classList).add.apply(_this$btnNext$$btn$cl, toConsumableArray_default()(options.pagination.btnDisabledClasses));
        }
      } else {
        var _options$pagination5, _options$pagination5$;

        this.btnNext.$wrapper.classList.remove('disabled');

        if ((_options$pagination5 = options.pagination) === null || _options$pagination5 === void 0 ? void 0 : (_options$pagination5$ = _options$pagination5.btnDisabledClasses) === null || _options$pagination5$ === void 0 ? void 0 : _options$pagination5$.length) {
          var _this$btnNext$$btn$cl2;

          (_this$btnNext$$btn$cl2 = this.btnNext.$btn.classList).remove.apply(_this$btnNext$$btn$cl2, toConsumableArray_default()(options.pagination.btnDisabledClasses));
        }
      }
    }
  }]);

  return SimplePagination;
}();

/* harmony default export */ var pagination_SimplePagination = (SimplePagination_SimplePagination);
// CONCATENATED MODULE: ./src/helpers/pagination-pages.js
var getRange = function getRange(start, end) {
  return Array(end - start).fill().map(function (v, i) {
    return i + start;
  });
};

/* harmony default export */ var pagination_pages = (function (currentPage, totalPage) {
  var visiblePages = 10; // default

  if (visiblePages > totalPage) {
    visiblePages = totalPage;
  }

  var start = currentPage;

  if (currentPage <= Math.floor(visiblePages / 2)) {
    start = 1;
  } else {
    start = currentPage - Math.floor(visiblePages / 2);
  }

  if (start + visiblePages >= totalPage) {
    start = totalPage - visiblePages + 1;
  }

  return getRange(start, start + visiblePages);
});
// CONCATENATED MODULE: ./src/components/pagination/DefaultPagination.js






var DefaultPagination_DefaultPagination = /*#__PURE__*/function () {
  function DefaultPagination(proTable) {
    classCallCheck_default()(this, DefaultPagination);

    this.proTable = proTable;
    this.$dom = document.createElement('div');
    this.$dom.style.display = 'flex';
    this.$dom.style.justifyContent = 'space-between';
    this.$dom.style.alignItems = 'center';

    this._buildRowsPerPage();

    this._buildControls();

    this.render();
  }

  createClass_default()(DefaultPagination, [{
    key: "_buildRowsPerPage",
    value: function _buildRowsPerPage() {
      this.rowsPerPage = new pagination_RowsPerPage(this.proTable);
      this.$dom.appendChild(this.rowsPerPage.$dom);
    }
  }, {
    key: "_buildControls",
    value: function _buildControls() {
      var options = this.proTable.options;
      this.$controls = document.createElement(options.pagination.containerElement || 'div');
      this.$controls.style.margin = '0';

      if (options.pagination.containerClasses) {
        var _this$$controls$class;

        (_this$$controls$class = this.$controls.classList).add.apply(_this$$controls$class, toConsumableArray_default()(options.pagination.containerClasses));
      }

      this.$dom.appendChild(this.$controls);
      this.pageButtons = [];

      this._buildPrevButton();

      this._buildNextButton();

      this._buildPageButtons();
    }
  }, {
    key: "_buildNextButton",
    value: function _buildNextButton() {
      var _this = this;

      this.btnNext = this._buildButton('Next'); // apply classes from options

      if (this.proTable.options.pagination.btnClasses) {
        var _this$btnNext$$btn$cl;

        (_this$btnNext$$btn$cl = this.btnNext.$btn.classList).add.apply(_this$btnNext$$btn$cl, toConsumableArray_default()(this.proTable.options.pagination.btnClasses));
      }

      this.$controls.appendChild(this.btnNext.$wrapper);
      this.btnNext.$btn.addEventListener('click', function (e) {
        _this.proTable.setPage(_this.proTable.options.page + 1);
      });
    }
  }, {
    key: "_buildPrevButton",
    value: function _buildPrevButton() {
      var _this2 = this;

      this.btnPrev = this._buildButton('Prev'); // apply classes from options

      if (this.proTable.options.pagination.btnClasses) {
        var _this$btnPrev$$btn$cl;

        (_this$btnPrev$$btn$cl = this.btnPrev.$btn.classList).add.apply(_this$btnPrev$$btn$cl, toConsumableArray_default()(this.proTable.options.pagination.btnClasses));
      }

      this.$controls.appendChild(this.btnPrev.$wrapper);
      this.btnPrev.$btn.addEventListener('click', function (e) {
        _this2.proTable.setPage(_this2.proTable.options.page - 1);
      });
    }
  }, {
    key: "_buildPageButtons",
    value: function _buildPageButtons() {
      var _this3 = this;

      var options = this.proTable.options;
      var lastPage = this.proTable.lastPage;

      while (this.pageButtons.length) {
        var btn = this.pageButtons.pop();
        this.$controls.removeChild(btn.$wrapper);
      }

      pagination_pages(options.page, lastPage, 2).forEach(function (page) {
        var btn = _this3._buildButton(page);

        if (page === options.page) {
          btn.$btn.style.fontWeight = 800;

          if (options.pagination.btnActiveClasses) {
            var _btn$$btn$classList;

            (_btn$$btn$classList = btn.$btn.classList).add.apply(_btn$$btn$classList, toConsumableArray_default()(options.pagination.btnActiveClasses));
          }

          if (options.pagination.btnWrapperActiveClasses) {
            var _btn$$wrapper$classLi;

            (_btn$$wrapper$classLi = btn.$wrapper.classList).add.apply(_btn$$wrapper$classLi, toConsumableArray_default()(options.pagination.btnWrapperActiveClasses));
          }
        } // apply classes from options


        if (options.pagination.btnClasses) {
          var _btn$$btn$classList2;

          (_btn$$btn$classList2 = btn.$btn.classList).add.apply(_btn$$btn$classList2, toConsumableArray_default()(options.pagination.btnClasses));
        }

        btn.$btn.addEventListener('click', function (e) {
          _this3.proTable.setPage(page);
        });

        _this3.pageButtons.push(btn);

        _this3.$controls.insertBefore(btn.$wrapper, _this3.btnNext.$wrapper);
      });
    }
    /**
     * Create DOM button
     * 
     * @returns { Object } object of $btn and $wrapper
     */

  }, {
    key: "_buildButton",
    value: function _buildButton(text) {
      var _options$pagination;

      var options = this.proTable.options;
      var $btn = document.createElement(((_options$pagination = options.pagination) === null || _options$pagination === void 0 ? void 0 : _options$pagination.btnElement) || 'button');
      $btn.innerText = text; // if there is a wrapper

      if (options.pagination.btnWrapper) {
        var $wrapper = document.createElement(options.pagination.btnWrapper);
        $wrapper.appendChild($btn);

        if (options.pagination.btnWrapperClasses) {
          var _$wrapper$classList;

          (_$wrapper$classList = $wrapper.classList).add.apply(_$wrapper$classList, toConsumableArray_default()(options.pagination.btnWrapperClasses));
        }

        return {
          $wrapper: $wrapper,
          $btn: $btn
        };
      }

      return {
        $btn: $btn,
        $wrapper: $btn
      };
    }
  }, {
    key: "render",
    value: function render() {
      var options = this.proTable.options;
      var page = options.page;
      var lastPage = this.proTable.lastPage;
      this.btnPrev.$btn.disabled = page === 1;
      this.btnNext.$btn.disabled = page === lastPage;

      if (page === 1) {
        var _options$pagination2, _options$pagination2$;

        this.btnPrev.$wrapper.classList.add('disabled');

        if ((_options$pagination2 = options.pagination) === null || _options$pagination2 === void 0 ? void 0 : (_options$pagination2$ = _options$pagination2.btnDisabledClasses) === null || _options$pagination2$ === void 0 ? void 0 : _options$pagination2$.length) {
          var _this$btnPrev$$btn$cl2;

          (_this$btnPrev$$btn$cl2 = this.btnPrev.$btn.classList).add.apply(_this$btnPrev$$btn$cl2, toConsumableArray_default()(options.pagination.btnDisabledClasses));
        }
      } else {
        var _options$pagination3, _options$pagination3$;

        this.btnPrev.$wrapper.classList.remove('disabled');

        if ((_options$pagination3 = options.pagination) === null || _options$pagination3 === void 0 ? void 0 : (_options$pagination3$ = _options$pagination3.btnDisabledClasses) === null || _options$pagination3$ === void 0 ? void 0 : _options$pagination3$.length) {
          var _this$btnPrev$$btn$cl3;

          (_this$btnPrev$$btn$cl3 = this.btnPrev.$btn.classList).remove.apply(_this$btnPrev$$btn$cl3, toConsumableArray_default()(options.pagination.btnDisabledClasses));
        }
      }

      if (page === lastPage) {
        var _options$pagination4, _options$pagination4$;

        this.btnNext.$wrapper.classList.add('disabled');

        if ((_options$pagination4 = options.pagination) === null || _options$pagination4 === void 0 ? void 0 : (_options$pagination4$ = _options$pagination4.btnDisabledClasses) === null || _options$pagination4$ === void 0 ? void 0 : _options$pagination4$.length) {
          var _this$btnNext$$btn$cl2;

          (_this$btnNext$$btn$cl2 = this.btnNext.$btn.classList).add.apply(_this$btnNext$$btn$cl2, toConsumableArray_default()(options.pagination.btnDisabledClasses));
        }
      } else {
        var _options$pagination5, _options$pagination5$;

        this.btnNext.$wrapper.classList.remove('disabled');

        if ((_options$pagination5 = options.pagination) === null || _options$pagination5 === void 0 ? void 0 : (_options$pagination5$ = _options$pagination5.btnDisabledClasses) === null || _options$pagination5$ === void 0 ? void 0 : _options$pagination5$.length) {
          var _this$btnNext$$btn$cl3;

          (_this$btnNext$$btn$cl3 = this.btnNext.$btn.classList).remove.apply(_this$btnNext$$btn$cl3, toConsumableArray_default()(options.pagination.btnDisabledClasses));
        }
      }

      this._buildPageButtons();
    }
  }]);

  return DefaultPagination;
}();

/* harmony default export */ var pagination_DefaultPagination = (DefaultPagination_DefaultPagination);
// CONCATENATED MODULE: ./src/components/table/TFoot.js







/**
 * @typedef { Object } TFoot.Options
 * @property { string[] } classes - `tfoot` classes
 * @property { string[] } trClasses - `tfoot > tr` classes
 * @property { string[] } thClasses - `tfoot > tr > th` classes
 */

/**
 * @class TFoot
 * @property { TFoot.Options } options
 */

var TFoot_TFoot = /*#__PURE__*/function () {
  function TFoot(_ref) {
    var _this = this,
        _this$options,
        _this$options$classes;

    var proTable = _ref.proTable,
        options = _ref.options;

    classCallCheck_default()(this, TFoot);

    this.proTable = proTable;
    this.options = options;
    this.$dom = document.createElement('tfoot');
    this.trs = [];
    this.createPagination();
    this.trs.forEach(function (_tr) {
      return _this.$dom.appendChild(_tr.$dom);
    }); // apply tfoot classes

    if ((_this$options = this.options) === null || _this$options === void 0 ? void 0 : (_this$options$classes = _this$options.classes) === null || _this$options$classes === void 0 ? void 0 : _this$options$classes.length) {
      var _this$$dom$classList;

      (_this$$dom$classList = this.$dom.classList).add.apply(_this$$dom$classList, toConsumableArray_default()(this.options.classes));
    }
  }

  createClass_default()(TFoot, [{
    key: "createPagination",
    value: function createPagination() {
      var _this$options2, _this$options3;

      var options = this.proTable.options;

      if (this.proTable.totalRows < this.proTable.options.limit || !!!options.pagination) {
        return;
      }

      if (options.pagination === 'simple' || options.pagination.type === 'simple') {
        this.pagination = new pagination_SimplePagination(this.proTable);
      } else {
        this.pagination = new pagination_DefaultPagination(this.proTable);
      }

      var columnsCount = this.proTable.thead.columnsCount;
      var tr = new table_Tr({
        classes: (_this$options2 = this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.trClasses
      });
      var td = new table_Td({
        child: this.pagination.$dom,
        options: {
          classes: ((_this$options3 = this.options) === null || _this$options3 === void 0 ? void 0 : _this$options3.tdClasses) || [],
          attrs: {
            colspan: columnsCount
          },
          style: {
            textAlign: 'right'
          }
        }
      });
      tr.pushTd(td);
      this.trs.push(tr);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.pagination) {
        this.pagination.render();
      }
    }
  }]);

  return TFoot;
}();

/* harmony default export */ var table_TFoot = (TFoot_TFoot);
// CONCATENATED MODULE: ./src/components/search/Input.js





var Input_Input = /*#__PURE__*/function () {
  /**
   * 
   * @param { Object } payload
   * @param { ProTable } payload.proTable 
   */
  function Input(_ref) {
    var _this$proTable$option;

    var proTable = _ref.proTable;

    classCallCheck_default()(this, Input);

    this.proTable = proTable;

    this._createInput();

    if ((_this$proTable$option = this.proTable.options.search) === null || _this$proTable$option === void 0 ? void 0 : _this$proTable$option.wrapperElement) {
      this._createWrapper();

      this.$dom = this.$wrapper;
      this.$wrapper.appendChild(this.$input);
    } else {
      this.$dom = this.$input;
    }
  }

  createClass_default()(Input, [{
    key: "_createInput",
    value: function _createInput() {
      var _options$search, _options$search2;

      var options = this.proTable.options;
      this.$input = document.createElement('input');
      this.$input.type = 'text';
      this.$input.placeholder = ((_options$search = options.search) === null || _options$search === void 0 ? void 0 : _options$search.placeholder) || 'Search';
      this.$input.addEventListener('keyup', this._onKeyUp.bind(this)); // apply classes

      if ((_options$search2 = options.search) === null || _options$search2 === void 0 ? void 0 : _options$search2.classes) {
        var _this$$input$classLis;

        (_this$$input$classLis = this.$input.classList).add.apply(_this$$input$classLis, toConsumableArray_default()(options.search.classes));
      }

      this.$input.style.width = 'fit-content';
      this.$input.style.display = 'inline-block';
    }
  }, {
    key: "_createWrapper",
    value: function _createWrapper() {
      var _this$proTable$option2, _this$proTable$option3, _this$proTable$option4;

      this.$wrapper = document.createElement((_this$proTable$option2 = this.proTable.options.search) === null || _this$proTable$option2 === void 0 ? void 0 : _this$proTable$option2.wrapperElement);

      if ((_this$proTable$option3 = this.proTable.options.search) === null || _this$proTable$option3 === void 0 ? void 0 : (_this$proTable$option4 = _this$proTable$option3.wrapperClasses) === null || _this$proTable$option4 === void 0 ? void 0 : _this$proTable$option4.length) {
        var _this$$wrapper$classL, _this$proTable$option5;

        (_this$$wrapper$classL = this.$wrapper.classList).add.apply(_this$$wrapper$classL, toConsumableArray_default()((_this$proTable$option5 = this.proTable.options.search) === null || _this$proTable$option5 === void 0 ? void 0 : _this$proTable$option5.wrapperClasses));
      }
    }
  }, {
    key: "_onKeyUp",
    value: function _onKeyUp() {
      var _this = this;

      if (this.timeOut) {
        clearTimeout(this.timeOut);
      }

      this.timeOut = setTimeout(function () {
        _this.proTable.setKeyword(_this.$input.value);
      }, 300);
    }
  }]);

  return Input;
}();

/* harmony default export */ var search_Input = (Input_Input);
// CONCATENATED MODULE: ./src/components/Header.js





var Header_Header = /*#__PURE__*/function () {
  /**
   * @param { Object } payload
   * @param { ProTable } payload.proTable 
   */
  function Header(_ref) {
    var proTable = _ref.proTable;

    classCallCheck_default()(this, Header);

    this.proTable = proTable;
    this.$dom = document.createElement('header');

    this._applyStyles();

    if (this.proTable.options.search !== false) {
      this._createSearch();
    }
  }

  createClass_default()(Header, [{
    key: "_applyStyles",
    value: function _applyStyles() {
      this.$dom.style.textAlign = 'right';
      this.$dom.style.marginBottom = '1rem';
    }
  }, {
    key: "_createSearch",
    value: function _createSearch() {
      this.search = new search_Input({
        proTable: this.proTable
      });
      this.$dom.appendChild(this.search.$dom);
    }
  }]);

  return Header;
}();

/* harmony default export */ var components_Header = (Header_Header);
// CONCATENATED MODULE: ./src/components/table/ProTable.js







function ProTable_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ProTable_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ProTable_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ProTable_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





/**
 * ProTable Options
 * 
 * @typedef { Object } ProTable.Options
 * @property { string[] } classes - Classes name of the table
 * @property { Thead.Options } thead - Thead
 * @property { Object } tbody - TBody
 * @property { TFoot.Options } tfoot - Tfoot
 * @property { Object } columns - Custom columns of table
 * @property { Object } contents
 * @property { Number } limit - page limit
 * @property { Boolean } fromServer 
 * @property { String } keyword for searching purpose
 * @property { Object } order
 * @property { String } order.key order key
 * @property { String } order.direction direction 'asc' or 'desc'
 * @property { Object } pagination - Pagination specific options
 * @property { string } pagination.type - Pagination type
 * @property { Object } pagination.rowsPerPage - Pagination rows per page options
 * @property { string } pagination.rowsPerPage.text - Pagination rows per page text
 * @property { string[] } pagination.rowsPerPage.selectClasses
 * @property { Number[] } pagination.rowsPerPage.ranges
 * @property { Object } search
 * @property { string } search.placeholder
 * @property { string[] } search.classes
 * @property { string } search.notFoundText
 */

/**
 * ProTable class
 *
 * @class ProTable
 * @property { ProTable.Options } options
 */

var ProTable_ProTable = /*#__PURE__*/function () {
  /**
   * Creates an instance of ProTable.
   * @param { string } selector - DOM selector where the ProTable should replace
   * @param { ProTable.Options } options
   * @memberof ProTable
   */
  function ProTable(selector, options) {
    classCallCheck_default()(this, ProTable);

    this.selector = selector;
    /**
     * @type ProTable.Options
     */

    var defaultOptions = {
      classes: [],
      thead: {},
      limit: 10,
      page: 1,
      fromServer: false,
      keyword: null,
      pagination: {
        type: 'default'
      },
      order: {
        key: null,
        direction: null
      }
    };
    /**
     * @type { ProTable.Options }
     */

    this.options = ProTable_objectSpread(ProTable_objectSpread({}, defaultOptions), options);
    this.thead = null;
    this.tbody = null;
    this.$dom = document.createElement('section');
    this.$dom.classList.add('protable');
    this._listeners = {};
  }

  createClass_default()(ProTable, [{
    key: "generateTable",
    value: function generateTable(_ref) {
      var columns = _ref.columns,
          rows = _ref.rows;
      this.$table = document.createElement('table');
      this.$dom.appendChild(this.$table);
      this.setColumns(columns);
      this.setRows(rows);

      this._generateHeader();

      this._generateThead();

      this._generateTbody();

      this._generateTFoot(); // apply options


      if (this.options.classes) {
        var _this$$table$classLis;

        (_this$$table$classLis = this.$table.classList).add.apply(_this$$table$classLis, toConsumableArray_default()(this.options.classes));
      }
    }
  }, {
    key: "setColumns",
    value: function setColumns(columns) {
      this.columns = this._formatColumns(columns);

      if (this.options.columns) {
        // merging
        for (var _key in this.options.columns) {
          var _col = this.options.columns[_key];

          if (Number.isInteger(_col.targetIndex)) {
            var _targetKey = Object.keys(this.columns)[_col.targetIndex];

            this.columns[_targetKey] = ProTable_objectSpread(ProTable_objectSpread({}, this.columns[_targetKey]), _col);
          } else if (this.columns[_key]) {
            this.columns[_key] = ProTable_objectSpread(ProTable_objectSpread({}, this.columns[_key]), _col);
          }
        }
      }
    }
  }, {
    key: "setRows",
    value: function setRows(rows) {
      this.rows = rows;
    }
  }, {
    key: "_formatColumns",
    value: function _formatColumns(columns) {
      var _this = this;

      // if columns is Object, return as is
      if (columns !== null && columns.constructor === Object) {
        return columns;
      }

      var formatted = {};
      columns.forEach(function (_col) {
        if (_col !== null && _col.constructor === Object) {
          var key = Object.keys(_col)[0];
          formatted[key] = {
            label: "".concat(key[0].toUpperCase()).concat(key.substr(1)),
            childs: _this._formatColumns(Object.values(_col)[0])
          };
        } else {
          formatted[_col] = {
            label: "".concat(_col[0].toUpperCase()).concat(_col.substr(1))
          };
        }
      });
      return formatted;
    }
  }, {
    key: "_generateHeader",
    value: function _generateHeader() {
      this.header = new components_Header({
        proTable: this
      });
      this.$dom.prepend(this.header.$dom);
    }
  }, {
    key: "_generateThead",
    value: function _generateThead() {
      this.thead = new table_THead({
        proTable: this,
        options: this.options.thead
      });
      this.$table.appendChild(this.thead.$dom);
    }
  }, {
    key: "_generateTbody",
    value: function _generateTbody() {
      if (this.tbody) {
        this.$table.removeChild(this.tbody.$dom);
      }

      this.tbody = new table_TBody({
        proTable: this,
        options: this.options.tbody
      });
      this.$table.appendChild(this.tbody.$dom);
    }
  }, {
    key: "_generateTFoot",
    value: function _generateTFoot() {
      if (this.tfoot) {
        this.$table.removeChild(this.tfoot.$dom);
      }

      this.tfoot = new table_TFoot({
        proTable: this,
        options: this.options.tfoot
      });
      this.$table.appendChild(this.tfoot.$dom);
    }
  }, {
    key: "setKeyword",
    value: function setKeyword(keyword) {
      this.options.keyword = keyword;
      this.setPage(1);
    }
  }, {
    key: "setPage",
    value: function () {
      var _setPage = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(page) {
        var _this$tbody, _this$tfoot;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.options.page = page;

                if (page < 1) {
                  this.options.page = 1;
                }

                if (!this.options.fromServer) {
                  (_this$tbody = this.tbody) === null || _this$tbody === void 0 ? void 0 : _this$tbody.render();
                  (_this$tfoot = this.tfoot) === null || _this$tfoot === void 0 ? void 0 : _this$tfoot.render();
                }

                this.emit('pageChanged', page);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setPage(_x) {
        return _setPage.apply(this, arguments);
      }

      return setPage;
    }()
  }, {
    key: "setLimit",
    value: function setLimit(limit) {
      this.options.page = 1;
      this.options.limit = parseInt(limit);
      this.setPage(1);
    }
  }, {
    key: "setOrder",
    value: function setOrder(_ref2) {
      var key = _ref2.key,
          direction = _ref2.direction;
      this.options.order = {
        key: key,
        direction: direction
      };
      this.thead.render();
      this.setPage(1);
    }
  }, {
    key: "on",

    /**
     * Set listener to the ProTable. The listener will called
     * by using emit() function
     *
     * @param { String } event 
     * @param { Function } listener 
     */
    value: function on(event, listener) {
      if (!this._listeners[event]) {
        this._listeners[event] = [];
      }

      this._listeners[event].push(listener);
    }
    /**
     * Trigger an event
     * 
     * @param { String } event 
     */

  }, {
    key: "emit",
    value: function emit(event, payload) {
      var _this$_listeners$even;

      if ((_this$_listeners$even = this._listeners[event]) === null || _this$_listeners$even === void 0 ? void 0 : _this$_listeners$even.length) {
        this._listeners[event].forEach(function (callback) {
          return callback(payload);
        });
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      document.querySelector(this.selector).appendChild(this.$dom);
    }
  }, {
    key: "totalRows",
    get: function get() {
      if (this.options.fromServer) {
        return this.options.totalRows;
      }

      return this.tbody.trs.length;
    }
  }, {
    key: "totalFilteredRows",
    get: function get() {
      if (this.options.fromServer) {
        return this.options.totalRows;
      }

      return this.tbody.filteredTrs.length;
    }
  }, {
    key: "lastPage",
    get: function get() {
      if (this.options.fromServer) {
        return this.options.lastPage;
      }

      return Math.ceil(this.totalFilteredRows / this.options.limit);
    }
  }]);

  return ProTable;
}();

/* harmony default export */ var table_ProTable = (ProTable_ProTable);
// CONCATENATED MODULE: ./src/helpers/from-array.js


/**
 * @typedef { Object } FromArray.Data
 * @property { string[]|Object } columns
 * @property { Object[] } rows
 */

/**
 * Helper to create instance of ProTable using array data
 * 
 * @param { string | Node } elId 
 * @param { array | FromArray.Data } data 
 * @param { ProTable.Options } options 
 */

var from_array_fromArray = function fromArray(elId, data, options) {
  var columns = data.columns || from_array_generateColumns(data);
  console.log('fromArray', columns);
  var proTable = new table_ProTable(elId, options);
  proTable.generateTable({
    columns: columns,
    rows: data.rows || data
  });

  if (elId) {
    proTable.draw();
  }

  return proTable;
};
/**
 * Generate column from an objects[]
 * 
 * It will return array such:
 *  - ['no', 'name', 'city'] - for simple headers
 *  - ['name', { birth: ['day', 'month', 'year'] }, 'city'] - for complex headers
 * 
 * @param [{ key: value }, { key: value }] array
 * @returns { String[] }
 */


var from_array_generateColumns = function generateColumns(array) {
  var columns = [];
  var objectColumns = [];
  array.forEach(function (_item) {
    var _loop = function _loop(key) {
      if (!columns.find(function (_column) {
        return _column === key;
      })) {
        // check wheter the value is an object
        if (_item[key] !== null && _item[key].constructor === Object) {
          // call generateColumns recursively
          if (!objectColumns.find(function (_objectColumn) {
            return _objectColumn === key;
          })) {
            objectColumns.push(key);
            columns.push(defineProperty_default()({}, key, generateColumns([_item[key]])));
          }
        } else {
          columns.push(key);
        }
      }
    };

    for (var key in _item) {
      _loop(key);
    }
  });
  return columns;
};


/* harmony default export */ var from_array = (from_array_fromArray);
// CONCATENATED MODULE: ./src/helpers/from-dom-table.js


function from_dom_table_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function from_dom_table_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { from_dom_table_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { from_dom_table_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var from_dom_table_fromDOMTable = function fromDOMTable(selector, options) {
  var dom = document.querySelector(selector);
  var columns = getColumnsFromDom(dom);
  var rows = getRowsFromDom(dom, columns);
  console.log({
    columns: columns
  });
  options = from_dom_table_objectSpread({
    classes: Array.from(dom.classList)
  }, options);
  var proTable = new table_ProTable(null, options);
  proTable.generateTable({
    columns: columns,
    rows: rows
  }); // replace the dom input

  dom.replaceWith(proTable.$dom);
  return proTable;
};

function getColumnsFromDom(table) {
  var firstTr = table.querySelector('thead tr');
  var columns = {};
  Array.from(firstTr.children).forEach(function (_child) {
    columns[_child.innerHTML.trim()] = {
      label: _child.innerHTML,
      classes: Array.from(_child.classList)
    };
  });
  return columns;
}

function getRowsFromDom(table, columns) {
  var trs = table.querySelectorAll('tbody tr');
  return Array.from(trs).map(function (_tr) {
    var row = {};
    Object.keys(columns).forEach(function (_column, _index) {
      row[_column] = [_tr.children[_index].innerHTML, {
        classes: Array.from(_tr.children[_index].classList)
      }];
    });
    return row;
  });
}

/* harmony default export */ var from_dom_table = (from_dom_table_fromDOMTable);
// CONCATENATED MODULE: ./src/helpers/from-server.js




/**
 * @typedef { Object } Callbacks
 * @property { Function } url - callback to return a url. It get a page param
 * @property { Function } success
 * @property { ProTable.Options } options
 */

/**
 * 
 * @param { String | HTMLElement } elId 
 * @param { Callbacks } callbacks 
 */

var from_server_fromServer = function fromServer(elId, _ref) {
  var url = _ref.url,
      success = _ref.success,
      options = _ref.options;
  var proTable = new table_ProTable(elId, options);
  proTable.options.fromServer = true;
  var firstLoad = true;
  proTable.on('pageChanged', /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(page) {
      var query, response, result, columns;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = {
                page: page,
                limit: proTable.options.limit,
                search: proTable.options.keyword,
                order: proTable.options.order
              };
              _context.next = 3;
              return fetch(url(query));

            case 3:
              response = _context.sent;
              _context.next = 6;
              return success === null || success === void 0 ? void 0 : success(response, query);

            case 6:
              _context.t0 = _context.sent;

              if (_context.t0) {
                _context.next = 11;
                break;
              }

              _context.next = 10;
              return response.json();

            case 10:
              _context.t0 = _context.sent;

            case 11:
              result = _context.t0;
              proTable.options.totalRows = parseInt(result.meta.total_rows);
              proTable.options.lastPage = parseInt(result.meta.last_page);

              if (firstLoad) {
                columns = result.data.columns || from_array_generateColumns(result.data);
                proTable.generateTable({
                  columns: columns,
                  rows: result.data.rows || result.data
                });
                firstLoad = false;
              } else {
                proTable.setRows(result.data.rows || result.data);
                proTable.tbody.render();
                proTable.tfoot.render();
                console.log('server', proTable);
              }

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
  proTable.emit('pageChanged', 1);

  if (elId) {
    proTable.draw();
  }

  console.log('server', proTable);
  return proTable;
};

/* harmony default export */ var from_server = (from_server_fromServer);
// EXTERNAL MODULE: ./src/const/bootstrap-options.json
var bootstrap_options = __webpack_require__(6);

// EXTERNAL MODULE: ./src/const/semantic-ui-options.json
var semantic_ui_options = __webpack_require__(8);

// EXTERNAL MODULE: ./src/const/foundation.json
var foundation = __webpack_require__(9);

// EXTERNAL MODULE: ./src/const/tailwind.json
var tailwind = __webpack_require__(10);

// CONCATENATED MODULE: ./src/index.js







var templateOptions = {
  bootstrap: bootstrap_options.normal,
  bootstrapSm: bootstrap_options.sm,
  semanticUI: semantic_ui_options,
  foundation: foundation,
  tailwind: tailwind
};
window.ProTable = {
  fromArray: from_array,
  fromTable: from_dom_table,
  fromServer: from_server,
  templateOptions: templateOptions
};
/* harmony default export */ var src = __webpack_exports__["default"] = ({
  fromArray: from_array,
  fromTable: from_dom_table,
  fromServer: from_server,
  templateOptions: templateOptions
});


/***/ })
/******/ ]);
//# sourceMappingURL=protable.js.map