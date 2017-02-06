import Model from './model';
// import data from '../data/data';

describe('Tweet MVC', () => {
  describe('Model', () => {
    const model = new Model();
    const initFakeModel = (newDataModel) => {
      return {
        id: new Date().getUTCMilliseconds(),
        postDate: Date.now(),
        title: newDataModel
      }
    };

    beforeEach(() => {
      spyOn(Date, 'now').and.callFake(() => 1485688763875);
      spyOn(Date.prototype, 'getUTCMilliseconds').and.callFake(() => 0);
    });

    it('gets fake data', () => {
      const fakeModelObject = initFakeModel('Ea sunt proident cillum aute.');
      expect(model.getModel()).toEqual([ fakeModelObject ]);
    });

    it('sets data', () => {
      const fakeModelArray = [initFakeModel('Ea sunt proident cillum aute.')];
      fakeModelArray.push({ id: 0, postDate: 1485688763875, title: 'fakeModelTwo' });
      model.setModel('fakeModelTwo');
      expect(model.data).toEqual(fakeModelArray);
    });

    it('removes data', () => {
      model.removeModel(
        { id: 0, postDate: 1485688763875, title: 'Ea sunt proident cillum aute.' }
      );
      model.removeModel(
        { id: 0, postDate: 1485688763875, title: 'fakeModelTwo' }
      );
      expect(model.data).toEqual([]);
    });

    it('has 3 types of key name', () => {
      const modelKeyName = ['id', 'postDate', 'title'];
      const availableKey = (data) => {
        return Object.keys(data).sort();
      };
      expect(availableKey(model.initModel())).toEqual(modelKeyName.sort());
    });
  });
});
