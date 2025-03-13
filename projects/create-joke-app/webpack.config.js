const { share, withModuleFederationPlugin } = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "createJokeApp",

  exposes: {
    "./Component": "./projects/create-joke-app/src/app/create-joke/create-joke.component.ts",
    "./Missions": "./projects/create-joke-app/src/app/missions/missions.component.ts",
  },

  shared: share({
    "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
  })

});