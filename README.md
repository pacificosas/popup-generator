# Popup generator

Generate and customize popups with javascript

## Usage

		var pop=new PacificaPopup({
			html:'<h1>Im the popup</h1><button>cerrar</button>',
			open:true,
			closeOnClickOf:'button',
			popupCss:{
				default:{
					background:'red',
					color:'white'
				},
				desktop:{
					width:'50%',
					height:'50%'
				},
				mobile:{
					width:'90%',
					height:'90%'
				}
			},
			overlayCss:{
				default:{},
				desktop:{},
				mobile:{}
			},
		})

## Options

- **html** : `string`  plain html content on the popup.

- **open** : `boolean` `optional` open popup in class initilization

- **closeOnClickOf** : `string` `optional` css selector of element inside the popup. when it have been click the popup will close.

- **overlayCss** : `javascript object` `optional`

- **popupCss** : `javascript object` `optional`

### overlayCss & popupCss

this options is to costomize the css of the overlay ona the popup in a responsive way if you want. they have 3 principal keys:
- default
- desktop
- mobile

this key contain css in js sintax.

**Example**
```
{
	...
	popupCss:{
		default:{
			fontSize:'2em',
			pading:'1em'
		},
		desktop:{
			width:'50%',
			height:'50%',
		}
		mobile:{
			width:'90%'
			minHeight:'50%'
		}
	}
}
```

## Methods

- **open()** `void` : add Popup to the DOM

- **close()** `void` : remove Popup from the DOM

- **bindCloseTo( HTMLElement )** `void` : create click event to a object that will close de popup.
