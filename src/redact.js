import Validation from './lib/Validation';

/**
 * Redact Variables
 * @param {*} element
 * @param {Object} options Options
 * @param {Boolean} [options.enabled=true] Redaction Enabled
 * @param {String} [options.replace="[REDACTED]"] String to replace with.
 * @param {Array} options.keys Object Keys to redact.
 * @returns {*}
 */
const redact = (element, options = {}) => {
  options = Object.assign({
    enabled: true,
    replace: '[REDACTED]',
    keys: [],
  }, options);
  if (options.enabled && options.keys.length) {
    // JSON Check
    let json = null;
    if (Validation.isString(element)) {
      try {
        json = JSON.parse(element);
      } catch (e) {
        json = null;
      }
    }
    if (json) return JSON.stringify(redact(element, options));

    // Object Check
    if (Validation.isObject(element)) {
      const objectKeys = Object.keys(element);
      objectKeys.forEach(function (key) {
        if (options.keys.indexOf(key) !== -1) {
          element[ key ] = options.replace;
        } else {
          element[ key ] = redact(element[ key ], options);
        }
      });
      return element;
    }

    // Array Check
    if (Validation.isArray(element)) {
      element = element.map(arrayElement => redact(arrayElement, options));
    }
  }

  return element;
};

export default redact;
