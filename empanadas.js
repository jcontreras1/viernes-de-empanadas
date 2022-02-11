class Empanadas extends HTMLElement{
	constructor(){
		super();
		this.comensal;
		this.empanadas = 
		{
			'ca' : 'carne',
			'po' : 'pollo',
			'jq' : 'jamon y queso',
			'ce' : 'queso y cebolla',
			'ka' : 'caprese',
			'ro' : 'roquefort',
			've' : 'verdura',
			'hu' : 'humita'
		};
	}

	static get observedAttributes(){
		return ['comensal'];
	}

	attributeChangedCallback(nameAtr, oldValue, newValue){
		switch(nameAtr){
			case 'comensal' : 
			this.comensal = newValue;
			break;
		}
	}

	connectedCallback(){
		for(var empanada in this.empanadas){
			this.innerHTML += `
			<div class="row">
			<div class="col-12 col-md-8">	
			${this.empanadas[empanada]}
			</div>
			<div class="col-12 col-md-4">	
			<input data-comensal="${this.comensal}" type="number" value="0" min="0" onkeyup="actualizar_empanadas(this);" class="form-control form-control-sm empanada_chg" data-empanada="${empanada}" step="1">
			</div>
			</div>

			`;
		}
	}
}

window.customElements.define('selector-empanadas', Empanadas);