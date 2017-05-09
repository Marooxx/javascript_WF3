import { Component } from '@angular/core';

@Component({
  selector: 'add-contact',
  template:
  `
    <h1> formulaire</h1>
    <!-- Small modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-sm">Ajouter contact</button>

<div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
  <div class="modal-dialog modal-sm" role="document">
    <div class="modal-content">
    <form (ngSubmit)>
    <input type='text' placeholder='Prénom'>
    <input type='text' placeholder='Adresse'>
    <input type='text' placeholder='Code postale'>
    <input type='text' placeholder='Ville'>
    <input type='text' placeholder='Numéro Portable'>
    <button type='submit'></button>
    </form>

    </div>
  </div>
</div>



  `

  })

  export class contactFormcomponent{

  }
