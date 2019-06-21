# Redakt Object

## Installation
```bash
# With Yarn
yarn add redakt

# With NPM 
npm install redakt
```

## Usage
```js
import redakt from 'redakt';

const objWithSecrets = {
  password: 'THISISMYPASSWORD',
};

const redactedObject = redakt(objWithSecrets, {
  enabled: true,
  replace: '[REDACTED]',
  keys: [
    'password',
  ],
});

console.log(redactedObject);
// {
//    password: '[REDACTED]'
// }
```

## Parameters

### Element `Object` or `JSON`
Redact's first parameter is the object or JSON string that you would like to recursively redact.

### Options `Object`
Redact's second parameter is the options object.

| Parameter  | Type | Default | Description |
|---|---|---|---|
| `enabled`  | `Boolean` | `true` | Enable or disable redaction. |
| `replace` | `String` | `"[REDACTED]"` | String to replace redacted values. |
| `keys` | `Array` | `[]` | List of keys to redact |
