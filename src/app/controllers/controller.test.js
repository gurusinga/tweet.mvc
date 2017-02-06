import ApplicationController from './controller';
import app from '../app';

describe('Tweet MVC', () => {
  let controller;
  let $controller;
  let ApplicationModel;

  beforeEach(() => {
    window.module(app);
    window.module(($provide) => {
      $provide.value('ApplicationModel', {
        getModel: () => {
          return {
            then: () => {}
          };
        },
        setModel: () => {
          return {
            then: () => {}
          };
        },
        removeModel: () => {
          return {
            then: () => {}
          };
        }
      });
    });
  });

  beforeEach(inject((_$controller_, _ApplicationModel_) => {
    ApplicationModel = _ApplicationModel_;
    $controller = _$controller_;
  }));

  describe('Controller', () => {
    beforeEach(() => {

      spyOn(ApplicationModel, 'getModel').and.callThrough();
      spyOn(ApplicationModel, 'setModel').and.callThrough();
      spyOn(ApplicationModel, 'removeModel').and.callThrough();

      controller = $controller(ApplicationController, {
        ApplicationModel
      });
    });

    it('has correct controller`s name', () => {
      expect(ApplicationController.name).toEqual('ApplicationController');
    });

    it('calls getModel() service immediately', () => {
      controller.$onInit();
      expect(ApplicationModel.getModel).toHaveBeenCalled();
    });

    it('calls setModel() service immediately', () => {
      controller.onPost();
      expect(ApplicationModel.setModel).toHaveBeenCalled();
    });

    it('calls removeModel() service immediately', () => {
      controller.onDelete();
      expect(ApplicationModel.removeModel).toHaveBeenCalled();
    });
  });
});
