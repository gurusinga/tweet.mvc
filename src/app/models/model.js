import remove from 'lodash/remove';
import data from '../data/data';

class ApplicationModel {
  constructor() {
    'ngInject';

    // this.data stores data and new data
    this.data = data;
    // the input data is string, then it needs to be wrapped as an object.
    this.initModel = (newDataModel) => {
      return {
        id: new Date().getUTCMilliseconds(),
        postDate: Date.now(),
        title: newDataModel
      };
    };
  }

  // return data
  getModel() {
    return this.data;
  }

  // add new input data to this.data variable
  setModel(input) {
    if (input) {
      const isInitModel = this.initModel(input);
      this.data.push(isInitModel);
    }
  }

  // remove data from the input data by using remove method from
  // Lodash libray
  removeModel(whichModel) {
    remove(this.data, (items) => {
      return items.title === whichModel.title;
    });
  }
}

export default ApplicationModel;
