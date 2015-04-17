

import React from 'react/addons'


const App = React.createClass({
  render() {
    return (
      <html>
        <head>
          <title>Isomorphic react app!</title>
          <meta charSet='utf-8' />
          <link href='/styles/app.css' rel='stylesheet' />
        </head>
        <body>
          <h1>Hello world!</h1>
        </body>
        <script src='/scripts/bundle.js'></script>
      </html>
    )
  }
})

export default App

if (typeof window !== 'undefined') {
  window.onload = function () {
    React.render(<App />, document);
  }
}
