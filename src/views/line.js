export class Line{
  
  newDate = null;
  newValue = null;

  data = [{
    name: '12/05',
    data: [900],
  }, {
    name: '13/06',
    data: [100]
  }, {
    name: '18/09',
    data: [500]
  }];


  default() {
    this.newDate = null;
    this.newValue = null;
  }

  newValueData(){
    if(typeof this.newValue == 'number'){
      this.data.unshift({
        name: this.newDate,
        data: [parseInt(this.newValue)]
      });
      this.default(); 
    } else{
      alert("Valor Deve ser Numero");
    }
      
  } //faltou eventListener, para dar update na tela. Vetor data esta sendo preenchido.

}
