import viewTemplate from './view.html';

// Directive by aliasing controller name into viewer
// therefore in HTML page will be using viewer name.
export default () => {
  return {
    template: viewTemplate,
    controller: 'ApplicationController',
    controllerAs: 'viewer'
  };
};
