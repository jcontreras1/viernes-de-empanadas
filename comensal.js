class Comensal extends HTMLElement{
	constructor(){
		super();
		this.name;
	}

	static get observedAttributes(){
		return ['name'];
	}

	attributeChangedCallback(nameAtr, oldValue, newValue){
		switch(nameAtr){
			case 'name' : 
			this.name = newValue;
			break;
		}
	}
	
	connectedCallback(){
		this.innerHTML = ` 
		
		<div class="card">
		<div class="card-body">
		<h4>Comensal: <strong>${this.name}</strong></h4>
		<hr>
		<selector-empanadas comensal="${this.name}"></selector-empanadas>
		</div>
		</div>
		`;
	}
}

window.customElements.define('comensal-element', Comensal);