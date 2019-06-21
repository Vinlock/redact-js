import redact from './redact';

describe('RedactObject', function() {
  it('should redact password keys', function() {
    const log = {
      password: 'dasfadsfadsf',
      checker: [
        {
          password: 'asdeqwqgcasd',
        },
        {
          password: 'adasdasdsa',
          nonPassword: 'adasdasdas',
        },
      ],
      passwords: {
        password: 'fadsfadsf',
      },
      itall: {
        password: 'asdasdasd',
      },
      go: {
        password: {
          password: [
            'go',
          ],
        },
      },
    };

    expect(redact(log, { keys: [ 'password' ] })).toEqual({
      password: '[REDACTED]',
      checker: [
        {
          password: '[REDACTED]',
        },
        {
          password: '[REDACTED]',
          nonPassword: 'adasdasdas',
        },
      ],
      passwords: {
        password: '[REDACTED]',
      },
      itall: {
        password: '[REDACTED]',
      },
      go: {
        password: '[REDACTED]',
      },
    });
  });
});
