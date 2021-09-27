import react from 'react';

class ModalCheckout extends react.Component{
    constructor(props){
        super(props)
        this.state={
            name: '',
            telp: '',
            city: '',
            address: '',
            note: '',
            delivery: null
        }
    }
    componentDidMount = () =>{
        if (JSON.parse(localStorage.getItem('Address'))){
            const address = JSON.parse(localStorage.getItem('Address'))
            this.setState({name: address.name,
                            telp: address.telephone,
                            city: address.city,
                            address: address.address,
                        note: address.note,
                    delivery: address.delivery})}
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: [e.target.value]})
    }
    submitAddress = () => {
        this.props.changeAddress(this.state.name,this.state.telp,this.state.city,this.state.address,this.state.note,this.props.delivery)
        window.location.href="Checkout";
    }
    render(){
        return(
    <div  id="checkoutNow_dialog" class="modal-dialog">
            <div class="checkoutNow-modal-inner">
                <button class="modal-x" onClick={() => this.props.closer()}><img src="images/x.svg"/></button>
                <div class="checkoutNow-modal-title">Choose Location</div>
                <button id="current_location" onclick="getLocation();" class="checkoutNow-modal-map"></button>
                    <div class="checkoutNow-modal-info-double">
                        <div class="checkoutNow-modal-info-name">
                            Recipient's Name
                            <input placeholder="JohnDoeExample" value={this.state.name} name="name" onChange={(e) => this.handleChange(e)}/>
                        </div>
                        <div class="checkoutNow-modal-info-telp">
                            Telp Number
                            <input placeholder="+62 021-2029-2932" value={this.state.telp} name="telp" onChange={(e) => this.handleChange(e)}/>
                        </div>
                    </div>
                    <div class="checkoutNow-modal-info-addres" >
                        City
                        <input placeholder="Opole" value={this.state.city} name="city" onChange={(e) => this.handleChange(e)}/>
                        <div class="checkoutNow-modal-info-smaller">Example : House, Company, Apartment</div>
                    </div>
                    <div class="checkoutNow-modal-info-address">
                        Address
                        <input placeholder="21 DistrictExample, Sun Resident" value={this.state.address} name="address" onChange={(e) => this.handleChange(e)}/>
                     </div>
                     <div class="checkoutNow-modal-info-address">
                        Note
                        <input placeholder="please do not use a doorbell because the kid is sleeping" value={this.state.note} name="note" onChange={(e) => this.handleChange(e)}/>
                     </div>
                     <div class="checkoutNow-modal-buttons">
                         <button class="checkoutNow-modal-button">Cancel</button>
                         <button class="checkoutNow-modal-button actived" onClick={() => this.submitAddress()}>Confirm</button>
                     </div>
            </div>
    </div>
        );
}}

export default ModalCheckout;