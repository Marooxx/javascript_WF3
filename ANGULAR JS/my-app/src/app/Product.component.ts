import { Component } from '@angular/core';
//partie décorateur
@Component({// on met les accolades pour signifier qu'il s'agit d'un objet//
    selector:'product-view',//on défnit un composant//
    //template = partie vue
    template:
    `       <div class="container">
            <h1>{{title}}</h1>
            <p>{{description}}</p>
            <p>{{price}} €</p>
            <hr>


            <button (click)= onClickMoins()> - </button>
            <span> {{quantity}}</span>
            <!-- on insère l'event et la fonction-->
            <button (click)= onClickPlus()> + </button>

            <hr>

            <p> Prix total :{{total_price}}€</p>

            <img src="{{image}}">

            <ul>
                <li *ngFor='let product of products'>{{product.name}}  <span>: {{product.price}} €</span></li>
                <!-- 'let' est équivalent de 'var'
                la boucle s'écrie *ngFor= let nomEntrée of nomVariableDéclarée-->

            </ul>
        </div>
        `,
        styles:[`
            li{
                list-style:none;
                color:blue;

            }
        `]

            
        // les ``(altG + 7) permettente d'injecter du html
    })

    //Nom du composant
    export class ProductComponent{
        title = "Playstation";
        description = "La PlayStation 4 (abrégée officiellement PS4) est une console de jeux vidéo de salon développée par Sony Computer Entertainment. Présentée le 20 février 2013 , elle succède à la PlayStation 3 et se place en concurrence avec la Xbox One de Microsoft et la Wii U de Nintendo, consoles concurrentes de huitième génération."
        image = "http://bestengine.humanoid.fr/uploads/products/sony-playstation-4.png";
        price = 299.99;
        quantity = 1;
        //bien redefinir les variables et fonctions
        total_price = this.price*this.quantity ;
        products = [
            {name : "Fifa 17", price: 49.99},
            {name:"casque VR" ,price:399.90},
            {name:"Manette",price:46.99},
        ];
        //on crée la fonction
        onClickPlus = function(){
            this.quantity++;
            //mon composant + la variable
            this.total_price =this.price*this.quantity;
        }

        onClickMoins = function(){
        this.quantity--;
        if(this.quantity<0) this.quantity=0;
        this.total_price =this.price*this.quantity;

        }
    }
