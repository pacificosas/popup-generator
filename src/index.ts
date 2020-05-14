import { css } from './css'

interface IpopupOptions{
	open:boolean;
	closeOnClickOf:string;
	html:string;
	overlaycolor:string;
	overlayCss?:any;
	popupCss?:any;
}

class PacificaPopup{

	private overlayStyle:any;
	private popupStyle:any;
	private elements:any;
	private isOpen:boolean;

	public closeObject:HTMLElement

	constructor(public options:IpopupOptions){

		this.overlayStyle={
			position:'absolute',
			top:'0',
			lef:'0',
			bottom:'0',
			right:'0',
			left:'0',
			background:options.overlaycolor || '#2f2f2f6e'
		}
		this.popupStyle={
			background:'white',
        	position: 'absolute',
        	top: '50%',
        	left: '50%',
        	transform: 'translateX(-50%) translateY(-50%)',
			padding:'1em'
		}
		this.build()

		css(this.elements.overlay,this.options.overlayCss.default || {})
		css(this.elements.popup,this.options.popupCss.default || {})
		this.applyMediaQuerys()

		window.addEventListener('resize',()=>{

			this.applyMediaQuerys()
		})

		if(this.options.open){

			this.open()
		}

		if(this.options.closeOnClickOf){

			if (this.options.closeOnClickOf == "this") {
				this.bindCloseTo(this.elements.overlay)
			}else{
				this.bindCloseTo(this.elements.overlay.querySelector(this.options.closeOnClickOf))
			}
		}

		window.onscroll =  ()=> {
			this.isOpen ? window.scrollTo(0, 0) : null
		};
	}

	bindCloseTo(element:HTMLElement){
		element.addEventListener('click',()=>{
			this.close()
		})
	}

	open(){

		this.elements.overlay.append(this.elements.popup)
		document.querySelector('body').append(this.elements.overlay)
		this.isOpen=true
	}

	close(){

		this.elements.overlay.remove()
		this.isOpen=false
	}

	private applyMediaQuerys(){

		if(this.options.overlayCss.mobile && this.options.overlayCss.desktop){

			if(window.innerWidth > 768){

				css(this.elements.overlay,this.options.overlayCss.desktop || {})

			}else if (window.innerWidth < 768){

				css(this.elements.overlay,this.options.overlayCss.mobile || {})
			}
		}

		if(this.options.popupCss.mobile && this.options.popupCss.desktop){

			if(window.innerWidth > 768){

				css(this.elements.popup,this.options.popupCss.desktop || {})

			}else if (window.innerWidth < 768){

				css(this.elements.popup,this.options.popupCss.mobile || {})
			}
		}


	}


	private build(){

		var overlay=document.createElement('DIV')
		overlay.setAttribute('pacifica-popup','true')
		var popup=document.createElement('DIV')
		popup.innerHTML=this.options.html

		css(overlay,this.overlayStyle)
		css(popup,this.popupStyle)
	 	this.elements={overlay:overlay,popup:popup}
	}
}

window.PacificaPopup=PacificaPopup
