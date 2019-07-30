export class App {

  configureRouter(config, router){
    config.title = 'Contacts';
    config.map([
      { route: ['', 'line'], moduleId: 'views/line',   title: 'Line' },
      { route: 'line',       moduleId: 'views/line',   name:'line',   nav:true, title:'Line Graph' }
    ]);

    this.router = router;
  }
}
