import {LitElement, html, css} from 'lit';

export class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: grid;
        grid-template-columns: 1fr 1fr;
        border: solid 1px black;
        padding: 16px;
        max-width: 500px;
      }
      .divH{
        margin-top:15px;
      }
    `;
  }

  static get properties() {
    return {
      name: {type: String},
      count: {type: Number},
      nameList: {type: Array},
      list: {type: Array},
      showDetails: {type: Boolean},
      userDetails : {type: Object},
      indexOfItemToBeChanged : {type: Number}
    };
  }

  constructor() {
    super();
    this.name = 'Nia';
    this.count = 0;
    this.nameList = []
    this.newUsersObject = {};
    // this.nameList = [{firstName:'John', lastName:'Doe'}, {firstName:'Jane',lastName:'Doe'}, {firstName:'Chloé',lastName:'Dubois'},{firstName:'Nina',lastName:'Blanc'}]
    // this.nameList = ['John', 'Jane', 'Chloé','Nina']

  }
  
  render() {
    return html`
    <div>
      <h1>${this.sayHello(this.name)}!</h1>
      <!-- <button @mouseout=${this._onLeave} @click=${this._onClick} part="button">
        Click Count
      </button>
      <div class="divH">Number of clicks : ${this.count}</div> -->
      ${this.nameList.map((arrayList) => html `
      <div @click=${() => this.openDetails(arrayList)}>${arrayList.firstName}</div>`
      )}     
  </div>
  
  ${this.showDetails ? html `<div style="background:lightgray">
    <input placeholder='name' value = '${this.userDetails.firstName}' @change=${this.updateUser}></p>
    <input placeholder='email' value = '${this.userDetails.email}' @change=${this.updateUser}></p>
    <input placeholder='balance' value = '${this.userDetails.balance}' @change=${this.updateUser}></p>
    <input placeholder='password' value = '${this.userDetails.password}' @change=${this.updateUser}></p> 
    <div><button @click=${this.onSubmit}>Update</button></div>
  </div>`
  : ''}
  <div>   
    <input placeholder="New User Name"   
    id="clearI" class="clearInput"
     style="text-transform: capitalize"
      @change=${this.nameInput}
      >
    <input placeholder="New User Balance"  class="clearInput" @change=${this.lastNameInput}>
    <input placeholder="New User Mail"    class="clearInput" @change=${this.mailInput}>
    <button @click=${this.saveUSer}>Save</button>
  </div>
`;
  }
  
  async nameInput(event){
    // console.log(event.target.value)
    // const first = event.target.value.charAt(0).toUpperCase();
    const firstCRest = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1,event.target.value.length)
    // console.log(firstCRest)
    this.newUsersObject.firstName = firstCRest;
    console.log(0)
    
    // fetch('https://dummyapi.io/data/v1/user?page=9&limit=10', {
    //     headers: {
    //       'app-id': '62052a173d4e5a7f72c68a0c',
    //       // 'Content-Type': 'application/json',
    //     },
    //     // method: 'POST',
    //     // 'body': JSON.stringify({
    //     //   firstName: 'iakob',
    //     //   lastName: 'mirotadze',
    //     //   email: 'iakobi.mirotadze123@gmail.com'
    //     // })
    //   })
    
    console.log(1)
  }

  mailInput(event){
    // console.log(event.target.value)
    this.newUsersObject.email = event.target.value;
  }

  lastNameInput(event){
    // console.log(event.target.value)
    this.newUsersObject.lastName = event.target.value;

  }

  pswInput(event){
    // console.log(event.target.value)
    this.newUsersObject.password = event.target.value;

  }

  saveUSer(){
    console.log(this.newUsersObject)
    // this.nameList.push(this.newUsersObject)
    // this.nameList = [...this.nameList]
    // this.newUsersObject = {}
    fetch('https://dummyapi.io/data/v1/user/create', {
      headers: {
        'app-id': '62052a173d4e5a7f72c68a0c',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      'body': JSON.stringify(this.newUsersObject)
    })
  }

  updateUser(event){
    // console.log(event.target.value)
    // console.log(event.target.placeholder)
    const valueToChange = event.target.placeholder
    this.userDetails[valueToChange]= event.target.value;
    console.log(this.userDetails)
  }

  onSubmit() {
    this.nameList[this.indexOfUserToBeChanged] = this.userDetails;
    this.updateList()
  }

  async updateList() {
    // backend shi agzavnit updatis motxovnas
    this.nameList = [...this.nameList];
  }

  openDetails(userS){
    this.showDetails = false
    this.userDetails = userS

    setTimeout(()=> this.showDetails = true, 30)
    // შევამოწმოთ ყველა აითემზე თუ დაემთხვა აითემის სახელი, არჩეული იუზერის სახელს იმის ინდექსი შევინახო

    this.indexOfUserToBeChanged = this.nameList.findIndex((item) => {
       return this.userDetails.name === item.name
      })
  }

  notifyHello(item){
    window.alert("Salut " + item)
  }

  _onLeave(){
    this.count = 0;
  }
  _onClick() {
    this.count++;
    this.dispatchEvent(new CustomEvent('count-changed'));
  }

  sayHello(name) {
    return `Hello, ${name}`;
  }
}

window.customElements.define('my-element', MyElement);
