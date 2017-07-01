# webpack-examples
***

### Installing webpack

We can install webpack globally using the following command:
```
npm install webpack -g
```

To run the webpack in watch mode, use the following command : 
```
webpack --watch
```

We can also add a __watch__ key to webpack.config.js file and set it value to __true__

### Installing webpack-dev-server

We can install webpack server using the following command:

```
npm install webpack-dev-server -g
```

This helps us in running our app from a local web server.

Run the webpack server using the following command:

```
webpack-dev-server
```

### Useful commands

To run the webpack with different configuration file, use the following command :

```
webpack --config webpack-production.config.js -p
```

In the above command -p is used for minification of the output file.


