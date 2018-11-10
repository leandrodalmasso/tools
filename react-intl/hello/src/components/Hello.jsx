import React from 'react';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

// function Hello() {
//   return (
//     <h1>
//       <FormattedMessage
//         defaultMessage="Hello!"
//         id="app.title"
//       />
//     </h1>
//   );
// }

// export default Hello;

function Hello({ intl }) {
  return (
    <h1>
      {intl.formatMessage({
        id: 'app.title',
        defaultMessage: 'Hello!'
      })}
    </h1>
  );
}

Hello.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(Hello);
