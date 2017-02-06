class ApplicationController {
  constructor(ApplicationModel) {
    'ngInject';

    // Local reference of injectable Model;
    this.ApplicationModel = ApplicationModel;
  }

  // Angular 1.5 specific life cycle hooks.
  // The method $onInit will be called after controller
  // on each element constructed and the binding is ready.
  $onInit() {
    this.initView();
  }

  // onPost method that accepts input data. If there's input data,
  // it will then call save method and pass the data
  onPost(inputModel) {
    this.save(inputModel);
    this.reset();
  }

  // onDelete method that accepts input data. If there's input data,
  // it will then invoke removeModel method from the Model
  // and pass the data to be deleted to Model
  onDelete(model) {
    this.ApplicationModel.removeModel(model);
  }

  // Save method that invokes setModel method that pass the data
  save(inputModel) {
    this.ApplicationModel.setModel(inputModel);
  }

  // A method that is called by $onInit to get available data.
  initView() {
    this.models = this.ApplicationModel.getModel();
  }

  // delete data in input text.
  reset() {
    this.inputModel = null;
  }
}

export default ApplicationController;
