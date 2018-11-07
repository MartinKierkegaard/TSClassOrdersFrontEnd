# Webpack - TypeScript - SCSS
this project is a beginner-friendly introduction to Webpack, Type Script and SCSS.
This includes a simple webpack configuration including TypeScript and SCSS transporation

## How to use a typescript class to store data
```

move into your newly created folder and install all dependencies (node modules)
```console
npm install
```

### Start Developing
You run the project example in the src folder
```console
npm run watch
```
Your browser should no show the index.htm and automatically refresh when you do changes in the src folder.
Remember that your src files are automatically transpiles and or copied to the dist folder and then showed from there

### Deployment
When your project is ready for deployment you should use webpack in production mode by writing this in the console
```console
npm run webpack:prod
```
That will minify your code and make is production ready

### Author
Martin Kierkegaard
