import ApplicationController from '../controllers/controller';
import ApplicationTemplate from './view.html';
import ApplicationView from './view';
import app from '../app';

describe('Tweet MVC', () => {
  let directive;

  beforeEach(() => {
    window.module(app);
  });

  describe('View', () => {
    const ApplicationViewMock = new ApplicationView();

    it('contains `list-group--tweet` element', () => {
      expect(ApplicationTemplate).toContain('list-group--tweet');
    });

    it('uses the right template',() => {
      expect(ApplicationViewMock.template).toEqual(ApplicationTemplate);
    });

    it('uses the correct controller alias', () => {
      expect(ApplicationViewMock.controllerAs).toBe('viewer');
    });

    it('calls the right controller', () => {
      expect(ApplicationViewMock.controller).toEqual(ApplicationController.name);
    });
  });
});
