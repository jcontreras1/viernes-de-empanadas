class Pedido extends HTMLElement{
	constructor(){
		super();
		this.pedido;
	}

	static get observedAttributes(){
		return ['pedido'];
	}

	attributeChangedCallback(nameAtr, oldValue, newValue){
		switch(nameAtr){
			case 'pedido' : 
			this.pedido = JSON.parse(newValue);
			break;
		}
	}
	
	connectedCallback(){
		
		let cantidades = "";
		for(var empanada in this.pedido){
			cantidades += '<h5>' + empanada + ' <span class="badge bg-primary">' + this.pedido[empanada] + '</span></h5>';
		}

		this.innerHTML = `	
		<div class="card">
		<div class="card-body">
		<h3>Llamar al 4450909 y Pedir:</h3>
		<hr>
		${cantidades}
		</div>
		</div>
		`;
	}
}

window.customElements.define('pedido-element', Pedido);