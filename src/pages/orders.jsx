import { useState, useEffect, useRef } from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { OrdersHeader } from "../components/orders-header";
import { clearCartItems, getCartItems, getCartQuantity } from "../../data/cart";
import "./orders.css";
import "../media-queries/orders.css";
import "../media-queries/orders-headers.css";

export function Orders() {
  const [edit, setEdit] = useState(false);
  const [address, setAddress] = useState(false);
  const [contacts, setContacts] = useState(true);
  const [contactDetails, setContactDetails] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('Select Country');
  const [phone, setPhone] = useState('');
  const [payMethod, setPayMethod] = useState('Select your prefered payment method');
  const [houseAddress, setHouseAddress] = useState('');
  const [city, setCity] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [sendPay, setSendPay] = useState(false);
  const [confirmSpinner, setConfirmSpinner] = useState(false);

  const nameRef = useRef(null);
  const lastNameRef = useRef(null);
  const countryRef = useRef(null);
  const phoneRef = useRef(null);
  const paymentMethodRef = useRef(null);
  const houseAddressRef = useRef(null);
  const cityRef = useRef(null);
  const emailAddressRef = useRef(null);
  const landMarkRef = useRef(null);
  const spinnerRef = useRef(null);


  function enterfirstName(event){
    if(event.key === "Enter"){
      event.preventDefault();
      lastNameRef.current.focus();
    } 
  }

  function enterlastName(event){
    if(event.key === "Enter"){
      event.preventDefault();
      countryRef.current.focus();
    }
  }
  function enterCountry(event){
    if(event.key === "Enter"){
      event.preventDefault();
      emailAddressRef.current.focus();
    }
  }
  function enterEmail(event){
    if(event.key === "Enter"){
      event.preventDefault();
      houseAddressRef.current.focus();
    }
  }
  function enterAddress(event){
    if(event.key === "Enter"){
      event.preventDefault();
      phoneRef.current.focus();
    }
  }
  function enterPhone(event){
    if(event.key === "Enter"){
      event.preventDefault();
      cityRef.current.focus();
    }
  }
  function enterCity(event){
    if(event.key === "Enter"){
      event.preventDefault();
      landMarkRef.current.focus();
    }
  }
  function enterLandmark(event){
    if(event.key === "Enter"){
      event.preventDefault();
      paymentMethodRef.current.focus();
    }
  }

  function proceedCheckout(event){
    if(event.target === "Enter"){
      event.preventDefault();
      spinnerRef.current.focus();
      showSpinner();
    }
  }

  const [checkoutItems, setCheckoutItems] = useState(() => getCartItems());
  const cartCount = getCartQuantity(checkoutItems);
  const subtotalCents = checkoutItems.reduce(
    (total, item) =>
      total + Number(item.priceCents || 0) * Number(item.quantity || 0),
    0,
  );
  const discountCents = 660;
  const orderTotalCents = Math.max(subtotalCents - discountCents, 0);

  // Day js integration for date
  const currentDate = dayjs();
  const formatDate = currentDate.format("MMMM, D YYYY");

  const payDate = dayjs();
  const successDate = payDate.format("M/D/YYYY");
  const orderRef = crypto.randomUUID();
  const refNumber = Math.random();

  function getFirstName(event) {
    setFirstName(event.target.value);
  }

  function getLastName(event) {
    setLastName(event.target.value);
  }

  function getCountry(event) {
    setCountry(event.target.value);
  }

  function getPhone(event) {
    setPhone(event.target.value);
  }

  function getPaymentMethod(event) {
    setPayMethod(event.target.value);
  }

  function getAddress(event) {
    setHouseAddress(event.target.value);
  }

  function getCity(event) {
    setCity(event.target.value);
  }

  function showModal() {
    if (edit === false) {
      setEdit(true);
    } else {
      setEdit(false);
    }
  }

  function stayIn() {
    if (edit === true) {
      setEdit(false);
    } else {
      setEdit(true);
    }
  }

  function showAddress() {
    if (address === false) {
      setContacts(false);
      setAddress(true);
    }
  }

  function showContacts() {
    if (contacts === false) {
      setContacts(true);
      setAddress(false);
    }
  }

   function showSpinner(){
    if(firstName === ''
       || lastName === '' 
       || country === 'Select Country' 
       || phone === '' 
       || houseAddress === '' 
       || city === '' 
       || emailAddress === ''
       || payMethod === 'Select your prefered payment method'
      ){
      alert("please fill up required fields to proceed");
    } else {
      setSpinner(true);

      setTimeout(()=>{
        if(contactDetails === false){
          setContactDetails(true);
          setSpinner(false);
        }
      }, 2000);
    }

  }

  function makePayment(){
    if(cardNumber === '' || expiryDate === '' || cvv === ''){
      alert("please fill up required fields to proceed");
    } else {
      setConfirmSpinner(true);

      setTimeout(()=>{
      if(sendPay === false){
        setSendPay(true);
          setConfirmSpinner(false);
          setShowCheckoutModal(false);
        }
      }, 3000);
    }
  }

  function closePayment(){
    setSendPay(false);
  }

  function closeContactDetails() {
    if (contactDetails === true) {
      setContactDetails(false);
    }
  }

  function showCheckout() {
    if (showCheckoutModal === false) {
      setShowCheckoutModal(true);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function getEmail(event){
    setEmailAddress(event.target.value);
  }

  function getCardNumber(event){
    setCardNumber(event.target.value);
  }

  function getExpiryDate(event){
    setExpiryDate(event.target.value);
  }

  function getCvv(event){
    setCvv(event.target.value);
  }

  function handleContinueToShop() {
    clearCartItems();
    setCheckoutItems([]);
    setSendPay(false);
  }

  return (
    <>
      <title>Orders</title>

      {/* Edit Items Modal */}
      {edit && (
        <div className="editItems">
          <div className="editItems-Container">
            <h1>Are you sure you want to exit the checkout?</h1>
            <button onClick={stayIn}>STAY IN CHECKOUT</button>
            <Link to="/checkout">
              <button>EXIT CHECKOUT</button>
            </Link>
          </div>
        </div>
      )}

      {/* Confirm orders modal */}
      {contactDetails && (
        <section className="mainConfirmPayModal">
          <div className="confirmPayment-modal">
            <div className="confirmDescriptions">
              <h2>Comfirm your payment details</h2>
              <p>Quick and secure</p>
            </div>

            <div className="mainDetailsContainer">
              <div>
                <h1>Details</h1>

                <div className="detailsContainer">
                  <div className="description">
                    <div>Date:</div>
                    <div>Name:</div>
                    <div>Address:</div>
                    <div>Phone:</div>
                    <div>Payment Method:</div>
                  </div>

                  <div className="response">
                    <div>{formatDate}</div>
                    <div>
                      <div>
                        {firstName} {lastName}
                      </div>
                    </div>
                    <div>
                      {houseAddress}, {city}, {country}
                    </div>
                    <div>{phone}</div>
                    <div>{payMethod}</div>
                  </div>
                </div>
              </div>

              <div className="detailsAmount">
                <div>Total amount</div>
                <div>{`$${(orderTotalCents / 100).toFixed(2)}`}</div>
              </div>
            </div>

            <div className="confirmEdit">
              <button onClick={closeContactDetails}>Edit Details</button>
              <button
                onClick={() => {
                  showCheckout();
                  closeContactDetails();
                }}
              >
                Confirm Details
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Checkout Modal */}
      {showCheckoutModal && (
        <div
          style={{ visibility: "visible" }}
          className="paymentsModalContainer"
        >
          <div className="modal">
            <form className="form">
              <div className="payment--options">
                <button name="paypal" type="button">
                  <svg
                    xmlSpace="preserve"
                    viewBox="0 0 124 33"
                    height="33"
                    width="124"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    {/* PayPal paths unchanged */}
                    <path
                      d="M46.211,6.749h-6.839c-0.468,0-0.866,0.34-0.939,0.802l-2.766,17.537c-0.055,0.346,0.213,0.658,0.564,0.658  h3.265c0.468,0,0.866-0.34,0.939-0.803l0.746-4.73c0.072-0.463,0.471-0.803,0.938-0.803h2.165c4.505,0,7.105-2.18,7.784-6.5  c0.306-1.89,0.013-3.375-0.872-4.415C50.224,7.353,48.5,6.749,46.211,6.749z M47,13.154c-0.374,2.454-2.249,2.454-4.062,2.454  h-1.032l0.724-4.583c0.043-0.277,0.283-0.481,0.563-0.481h0.473c1.235,0,2.4,0,3.002,0.704C47.027,11.668,47.137,12.292,47,13.154z"
                      fill="#253B80"
                    ></path>
                    <path
                      d="M66.654,13.075h-3.275c-0.279,0-0.52,0.204-0.563,0.481l-0.145,0.916l-0.229-0.332  c-0.709-1.029-2.29-1.373-3.868-1.373c-3.619,0-6.71,2.741-7.312,6.586c-0.313,1.918,0.132,3.752,1.22,5.031  c0.998,1.176,2.426,1.666,4.125,1.666c2.916,0,4.533-1.875,4.533-1.875l-0.146,0.91c-0.055,0.348,0.213,0.66,0.562,0.66h2.95  c0.469,0,0.865-0.34,0.939-0.803l1.77-11.209C67.271,13.388,67.004,13.075,66.654,13.075z M62.089,19.449  c-0.316,1.871-1.801,3.127-3.695,3.127c-0.951,0-1.711-0.305-2.199-0.883c-0.484-0.574-0.668-1.391-0.514-2.301  c0.295-1.855,1.805-3.152,3.67-3.152c0.93,0,1.686,0.309,2.184,0.892C62.034,17.721,62.232,18.543,62.089,19.449z"
                      fill="#253B80"
                    ></path>
                    <path
                      d="M84.096,13.075h-3.291c-0.314,0-0.609,0.156-0.787,0.417l-4.539,6.686l-1.924-6.425  c-0.121-0.402-0.492-0.678-0.912-0.678h-3.234c-0.393,0-0.666,0.384-0.541,0.754l3.625,10.638l-3.408,4.811  c-0.268,0.379,0.002,0.9,0.465,0.9h3.287c0.312,0,0.604-0.152,0.781-0.408L84.564,13.97C84.826,13.592,84.557,13.075,84.096,13.075z"
                      fill="#253B80"
                    ></path>
                    <path
                      d="M94.992,6.749h-6.84c-0.467,0-0.865,0.34-0.938,0.802l-2.766,17.537c-0.055,0.346,0.213,0.658,0.562,0.658  h3.51c0.326,0,0.605-0.238,0.656-0.562l0.785-4.971c0.072-0.463,0.471-0.803,0.938-0.803h2.164c4.506,0,7.105-2.18,7.785-6.5  c0.307-1.89,0.012-3.375-0.873-4.415C99.004,7.353,97.281,6.749,94.992,6.749z M95.781,13.154c-0.373,2.454-2.248,2.454-4.062,2.454  h-1.031l0.725-4.583c0.043-0.277,0.281-0.481,0.562-0.481h0.473c1.234,0,2.4,0,3.002,0.704  C95.809,11.668,95.918,12.292,95.781,13.154z"
                      fill="#179BD7"
                    ></path>
                    <path
                      d="M115.434,13.075h-3.273c-0.281,0-0.52,0.204-0.562,0.481l-0.145,0.916l-0.23-0.332  c-0.709-1.029-2.289-1.373-3.867-1.373c-3.619,0-6.709,2.741-7.311,6.586c-0.312,1.918,0.131,3.752,1.219,5.031  c1,1.176,2.426,1.666,4.125,1.666c2.916,0,4.533-1.875,4.533-1.875l-0.146,0.91c-0.055,0.348,0.213,0.66,0.564,0.66h2.949  c0.467,0,0.865-0.34,0.938-0.803l1.771-11.209C116.053,13.388,115.785,13.075,115.434,13.075z M110.869,19.449  c-0.314,1.871-1.801,3.127-3.695,3.127c-0.949,0-1.711-0.305-2.199-0.883c-0.484-0.574-0.666-1.391-0.514-2.301  c0.297-1.855,1.805-3.152,3.67-3.152c0.93,0,1.686,0.309,2.184,0.892C110.816,17.721,111.014,18.543,110.869,19.449z"
                      fill="#179BD7"
                    ></path>
                    <path
                      d="M119.295,7.23l-2.807,17.858c-0.055,0.346,0.213,0.658,0.562,0.658h2.822c0.469,0,0.867-0.34,0.939-0.803  l2.768-17.536c0.055-0.346-0.213-0.659-0.562-0.659h-3.16C119.578,6.749,119.338,6.953,119.295,7.23z"
                      fill="#179BD7"
                    ></path>
                    <path
                      d="M7.266,29.154l0.523-3.322l-1.165-0.027H1.061L4.927,1.292C4.939,1.218,4.978,1.149,5.035,1.1  c0.057-0.049,0.13-0.076,0.206-0.076h9.38c3.114,0,5.263,0.648,6.385,1.927c0.526,0.6,0.861,1.227,1.023,1.917  c0.17,0.724,0.173,1.589,0.007,2.644l-0.012,0.077v0.676l0.526,0.298c0.443,0.235,0.795,0.504,1.065,0.812  c0.45,0.513,0.741,1.165,0.864,1.938c0.127,0.795,0.085,1.741-0.123,2.812c-0.24,1.232-0.628,2.305-1.152,3.183  c-0.482,0.809-1.096,1.48-1.825,2c-0.696,0.494-1.523,0.869-2.458,1.109c-0.906,0.236-1.939,0.355-3.072,0.355h-0.73  c-0.522,0-1.029,0.188-1.427,0.525c-0.399,0.344-0.663,0.814-0.744,1.328l-0.055,0.299l-0.924,5.855l-0.042,0.215  c-0.011,0.068-0.03,0.102-0.058,0.125c-0.025,0.021-0.061,0.035-0.096,0.035H7.266z"
                      fill="#253B80"
                    ></path>
                    <path
                      d="M23.048,7.667L23.048,7.667L23.048,7.667c-0.028,0.179-0.06,0.362-0.096,0.55  c-1.237,6.351-5.469,8.545-10.874,8.545H9.326c-0.661,0-1.218,0.48-1.321,1.132l0,0l0,0L6.596,26.83l-0.399,2.533  c-0.067,0.428,0.263,0.814,0.695,0.814h4.881c0.578,0,1.069-0.42,1.16-0.99l0.048-0.248l0.919-5.832l0.059-0.32  c0.09-0.572,0.582-0.992,1.16-0.992h0.73c4.729,0,8.431-1.92,9.513-7.476c0.452-2.321,0.218-4.259-0.978-5.622  C24.022,8.286,23.573,7.945,23.048,7.667z"
                      fill="#179BD7"
                    ></path>
                    <path
                      d="M21.754,7.151c-0.189-0.055-0.384-0.105-0.584-0.15c-0.201-0.044-0.407-0.083-0.619-0.117  c-0.742-0.12-1.555-0.177-2.426-0.177h-7.352c-0.181,0-0.353,0.041-0.507,0.115C9.927,6.985,9.675,7.306,9.614,7.699L8.05,17.605  l-0.045,0.289c0.103-0.652,0.66-1.132,1.321-1.132h2.752c5.405,0,9.637-2.195,10.874-8.545c0.037-0.188,0.068-0.371,0.096-0.55  c-0.313-0.166-0.652-0.308-1.017-0.429C21.941,7.208,21.848,7.179,21.754,7.151z"
                      fill="#222D65"
                    ></path>
                    <path
                      d="M9.614,7.699c0.061-0.393,0.313-0.714,0.652-0.876c0.155-0.074,0.326-0.115,0.507-0.115h7.352  c0.871,0,1.684,0.057,2.426,0.177c0.212,0.034,0.418,0.073,0.619,0.117c0.2,0.045,0.395,0.095,0.584,0.15  c0.094,0.028,0.187,0.057,0.278,0.086c0.365,0.121,0.704,0.264,1.017,0.429c0.368-2.347-0.003-3.945-1.272-5.392  C20.378,0.682,17.853,0,14.622,0h-9.38c-0.66,0-1.223,0.48-1.325,1.133L0.01,25.898c-0.077,0.49,0.301,0.932,0.795,0.932h5.791  l1.454-9.225L9.614,7.699z"
                      fill="#253B80"
                    ></path>
                  </svg>
                </button>

                <button name="apple-pay" type="button">
                  <svg
                    xmlSpace="preserve"
                    viewBox="0 0 512 210.2"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    {/* Apple Pay paths unchanged */}

                    <path
                      d="M93.6,27.1C87.6,34.2,78,39.8,68.4,39c-1.2-9.6,3.5-19.8,9-26.1c6-7.3,16.5-12.5,25-12.9  C103.4,10,99.5,19.8,93.6,27.1 M102.3,40.9c-13.9-0.8-25.8,7.9-32.4,7.9c-6.7,0-16.8-7.5-27.8-7.3c-14.3,0.2-27.6,8.3-34.9,21.2  c-15,25.8-3.9,64,10.6,85c7.1,10.4,15.6,21.8,26.8,21.4c10.6-0.4,14.8-6.9,27.6-6.9c12.9,0,16.6,6.9,27.8,6.7  c11.6-0.2,18.9-10.4,26-20.8c8.1-11.8,11.4-23.3,11.6-23.9c-0.2-0.2-22.4-8.7-22.6-34.3c-0.2-21.4,17.5-31.6,18.3-32.2  C123.3,42.9,107.7,41.3,102.3,40.9 M182.6,11.9v155.9h24.2v-53.3h33.5c30.6,0,52.1-21,52.1-51.4c0-30.4-21.1-51.2-51.3-51.2H182.6z   M206.8,32.3h27.9c21,0,33,11.2,33,30.9c0,19.7-12,31-33.1,31h-27.8V32.3z M336.6,169c15.2,0,29.3-7.7,35.7-19.9h0.5v18.7h22.4V90.2  c0-22.5-18-37-45.7-37c-25.7,0-44.7,14.7-45.4,34.9h21.8c1.8-9.6,10.7-15.9,22.9-15.9c14.8,0,23.1,6.9,23.1,19.6v8.6l-30.2,1.8  c-28.1,1.7-43.3,13.2-43.3,33.2C298.4,155.6,314.1,169,336.6,169z M343.1,150.5c-12.9,0-21.1-6.2-21.1-15.7c0-9.8,7.9-15.5,23-16.4  l26.9-1.7v8.8C371.9,140.1,359.5,150.5,343.1,150.5z M425.1,210.2c23.6,0,34.7-9,44.4-36.3L512,54.7h-24.6l-28.5,92.1h-0.5  l-28.5-92.1h-25.3l41,113.5l-2.2,6.9c-3.7,11.7-9.7,16.2-20.4,16.2c-1.9,0-5.6-0.2-7.1-0.4v18.7C417.3,210,423.3,210.2,425.1,210.2z"
                      id="XMLID_34_"
                    ></path>
                  </svg>
                </button>

                <button name="google-pay" type="button">
                  <svg
                    viewBox="0 0 80 39"
                    height="39"
                    width="80"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_134_34)">
                      {/* Google Pay paths unchanged */}

                      <path
                        fill="#5F6368"
                        d="M37.8 19.7V29H34.8V6H42.6C44.5 6 46.3001 6.7 47.7001 8C49.1001 9.2 49.8 11 49.8 12.9C49.8 14.8 49.1001 16.5 47.7001 17.8C46.3001 19.1 44.6 19.8 42.6 19.8L37.8 19.7ZM37.8 8.8V16.8H42.8C43.9 16.8 45.0001 16.4 45.7001 15.6C47.3001 14.1 47.3 11.6 45.8 10.1L45.7001 10C44.9001 9.2 43.9 8.7 42.8 8.8H37.8Z"
                      ></path>
                      <path
                        fill="#5F6368"
                        d="M56.7001 12.8C58.9001 12.8 60.6001 13.4 61.9001 14.6C63.2001 15.8 63.8 17.4 63.8 19.4V29H61V26.8H60.9001C59.7001 28.6 58 29.5 56 29.5C54.3 29.5 52.8 29 51.6 28C50.5 27 49.8 25.6 49.8 24.1C49.8 22.5 50.4 21.2 51.6 20.2C52.8 19.2 54.5 18.8 56.5 18.8C58.3 18.8 59.7 19.1 60.8 19.8V19.1C60.8 18.1 60.4 17.1 59.6 16.5C58.8 15.8 57.8001 15.4 56.7001 15.4C55.0001 15.4 53.7 16.1 52.8 17.5L50.2001 15.9C51.8001 13.8 53.9001 12.8 56.7001 12.8ZM52.9001 24.2C52.9001 25 53.3001 25.7 53.9001 26.1C54.6001 26.6 55.4001 26.9 56.2001 26.9C57.4001 26.9 58.6 26.4 59.5 25.5C60.5 24.6 61 23.5 61 22.3C60.1 21.6 58.8 21.2 57.1 21.2C55.9 21.2 54.9 21.5 54.1 22.1C53.3 22.6 52.9001 23.3 52.9001 24.2Z"
                      ></path>
                      <path
                        fill="#5F6368"
                        d="M80 13.3L70.1 36H67.1L70.8 28.1L64.3 13.4H67.5L72.2 24.7H72.3L76.9 13.4H80V13.3Z"
                      ></path>
                      <path
                        fill="#4285F4"
                        d="M25.9 17.7C25.9 16.8 25.8 15.9 25.7 15H13.2V20.1H20.3C20 21.7 19.1 23.2 17.7 24.1V27.4H22C24.5 25.1 25.9 21.7 25.9 17.7Z"
                      ></path>
                      <path
                        fill="#34A853"
                        d="M13.1999 30.5999C16.7999 30.5999 19.7999 29.3999 21.9999 27.3999L17.6999 24.0999C16.4999 24.8999 14.9999 25.3999 13.1999 25.3999C9.7999 25.3999 6.7999 23.0999 5.7999 19.8999H1.3999V23.2999C3.6999 27.7999 8.1999 30.5999 13.1999 30.5999Z"
                      ></path>
                      <path
                        fill="#FBBC04"
                        d="M5.8001 19.8999C5.2001 18.2999 5.2001 16.4999 5.8001 14.7999V11.3999H1.4001C-0.499902 15.0999 -0.499902 19.4999 1.4001 23.2999L5.8001 19.8999Z"
                      ></path>
                      <path
                        fill="#EA4335"
                        d="M13.2 9.39996C15.1 9.39996 16.9 10.1 18.3 11.4L22.1 7.59996C19.7 5.39996 16.5 4.09996 13.3 4.19996C8.3 4.19996 3.7 6.99996 1.5 11.5L5.9 14.9C6.8 11.7 9.8 9.39996 13.2 9.39996Z"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_134_34">
                        <rect width="80" height="38.1" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>

              <div className="separator">
                <hr className="line" />
                <p>or pay using credit card</p>
                <hr className="line" />
              </div>

              <div className="credit-card-info--form">
                <div className="input_container">
                  <label htmlFor="card_name" className="input_label">
                    Card holder full name
                  </label>
                  <input
                    id="card_name"
                    className="input_field"
                    type="text"
                    name="input-name"
                    value={`${firstName} ${lastName}`}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="input_container">
                  <label htmlFor="card_number" className="input_label">
                    Card Number
                  </label>
                  <input
                    onChange={getCardNumber}
                    value={cardNumber}
                    id="card_number"
                    className="input_field"
                    type="number"
                    name="card-number"
                    placeholder="0000 0000 0000 0000"
                  />
                </div>

                <div className="input_container">
                  <label className="input_label">Expiry Date / CVV</label>
                  <div className="split">
                    <input
                      onChange={getExpiryDate}
                      value={expiryDate}
                      className="expiryDate"
                      type="text"
                      name="expiry"
                      placeholder="01/23"
                    />
                    <input
                      onChange={getCvv}
                      value={cvv}
                      className="cardNumber"
                      type="number"
                      name="cvv"
                      placeholder="CVV"
                    />
                  </div>
                </div>
              </div>

              <button className="purchase--btn" type="button"
                onClick={()=>{
                 makePayment();
                }} 
                >
                {confirmSpinner && (
                  <span>
                    <img src="../../public/images/icons/loading-spinner.gif" alt="loading spinner" width={30} />
                  </span> 
                )}
                Make Payment
              </button>
            </form>
          </div>
        </div>
      )}

      {sendPay && (
        <section className="successConfirmModal">
          <div className="successMain">
            <div className="successImageCont">
              <img src="../../public/images/icons/original-17b2b7b1f13e997e74325f1209a5894a.gif"/>
              <div onClick={closePayment} className="closyy">
               <img src="../../public/images/icons/CLOSE-BLACK.svg" alt="closeModal" width={30} />
              </div>
              <div className="confidi">
                <h1>Payment Complete</h1>
                <div className="spannn">
                  <p><span>{firstName}</span> your payment has been completed successfully. A confrimation mail has been sent to <span>{emailAddress}</span></p>
                </div>
              </div>
            </div>

            <div className="orderCredentials">
              <h1>Order Details</h1>
              <div className="credentialsDetails">

                  <div className="credenSub">
                    <div>
                      ORDER REF
                    </div>
                    <div>
                      {orderRef}
                    </div>
                  </div>

                  <div className="credenSub">
                    <div>
                      ORDER DATE
                    </div>
                    <div>
                      {successDate}
                    </div>
                  </div>

                  <div className="credenSub">
                    <div>
                      PAYMENT TYPE
                    </div>
                    <div>
                      {payMethod}
                    </div>
                  </div>

                  <div className="credenSub">
                    <div>
                      INVOICE NO
                    </div>
                    <div>
                      {`N${refNumber}`}
                    </div>
                  </div>

              </div>
              <Link to="/shop">
               <button onClick={handleContinueToShop}>Continue to Shop</button>
              </Link>
            </div>
          </div>
        </section>
      )}

      <OrdersHeader />

      <main>
        <section className="checkoutMain">
          <div className="contactDetails">
            <div className="formSub">
              <h1>Delivery Options</h1>
              <div className="selectDelivery">
                <div className="selectDeliverySub">
                  <button
                    onClick={showContacts}
                    style={{
                      backgroundColor: contacts ? "grey" : "white",
                      color: contacts ? "white" : "grey",
                    }}
                  >
                    <img
                      src="images/icons/newdelivery.svg"
                      alt="deliveryvanIcon"
                    />
                    <p>Delivery Details</p>
                  </button>
                  <button
                    onClick={showAddress}
                    style={{
                      backgroundColor: address ? "grey" : "white",
                      color: address ? "white" : "grey",
                    }}
                  >
                    <img
                      src="images/icons/newlocation.svg"
                      alt="locationsIcon"
                    />
                    <p>Delivery Address</p>
                  </button>
                </div>
              </div>

              <div className="formField">
                {contacts && (
                  <div className="contacts">
                    <p>Contact Details</p>
                    <div>
                      <label>First Name <span>*</span></label>
                      <div>
                        <input
                          onKeyDown={enterfirstName}
                          ref={nameRef}
                          onChange={getFirstName}
                          value={firstName}
                          type="text"
                          name="first name"
                          inputMode="text"
                          placeholder="Enter First Name"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label>Last Name <span>*</span></label>
                      <div>
                        <input
                          onKeyDown={enterlastName}
                          ref={lastNameRef}
                          onChange={getLastName}
                          value={lastName}
                          type="text"
                          name="surname"
                          inputMode="text"
                          placeholder="Enter Last Name"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label>Country <span>*</span></label>
                      <select
                        onKeyDown={enterCountry}
                        ref={countryRef}
                        onChange={getCountry}
                        value={country}
                        name="Country"
                        id="Country"
                        required
                      >
                        <option>Select Country</option>
                        <option value="NG">Nigeria</option>
                        <option value="GB">United Kingdom</option>
                        <option value="US">United States</option>
                      </select>
                    </div>

                    <div>
                      <label>Email <span>*</span></label>
                      <div>
                        <input
                          onKeyDown={enterEmail}
                          ref={emailAddressRef}
                          onChange={getEmail}
                          value={emailAddress}
                          type="text"
                          name="Email"
                          inputMode="text"
                          placeholder="Enter Valid Email Address"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {address && (
                  <div className="closeDrop">
                    <p>Contact Address</p>
                    <div className="closeForm">
                      <div>
                        <label>Delivery Address <span>*</span></label>
                        <div>
                          <input
                            onKeyDown={enterAddress}
                            ref={houseAddressRef}
                            onChange={getAddress}
                            value={houseAddress}
                            type="text"
                            inputMode="text"
                            name="house address"
                            placeholder="Enter Delivery Address"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label>Phone Number <span>*</span></label>
                        <div>
                          <input
                            onKeyDown={enterPhone}
                            ref={phoneRef}
                            onChange={getPhone}
                            value={phone}
                            type="number"
                            name="phone"
                            inputMode="numeric"
                            placeholder="Enter Valid Phone Number"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label>City <span>*</span></label>
                        <div>
                          <input 
                            onKeyDown={enterCity}
                            ref={cityRef}
                            onChange={getCity}
                            value={city}
                            type="text"
                            inputMode="text"
                            name="city"
                            placeholder="Enter City"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label>Landmark (optional)</label>
                        <div>
                          <input
                            onKeyDown={enterLandmark}
                            ref={landMarkRef}
                            type="text"
                            inputMode="text"
                            name="city"
                            required
                            placeholder="Enter Closest Landmark"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="paymentOrder">
            <div className="yourOrder">
              <div className="suby">
                <h1>Selected Items</h1>
                <div className="yourOrderSub">
                  <p>Shopping Cart ({cartCount})</p>
                  <button onClick={showModal}>Edit Bag</button>
                </div>
              </div>

              <div className="orderedItems">
                {checkoutItems.map((cartItem) => {
                  return (
                    <div key={cartItem.id} className="checkoutTop">
                      <div className="checkoutImagee">
                        <img
                          src={`images/shopItems/${cartItem.Image}`}
                          alt="checkoutImage"
                          loading="lazy"
                        />
                      </div>
                      <div className="checkoutItems">
                        <b>{cartItem.itemDescription}</b>
                        <p>{`$${(cartItem.priceCents / 100).toFixed(2)}`}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="OrderSummaary">
                <div className="orderSummaary-Top">
                  <h1>Order Summary</h1>
                  <div className="orderfirst">
                    <div className="subtotaal">
                      <p>Subtotal</p>
                      <p>{`$${(subtotalCents / 100).toFixed(2)}`}</p>
                    </div>
                    <div className="discoount">
                      <p>Discount</p>
                      <p>{`-$${(discountCents / 100).toFixed(2)}`}</p>
                    </div>
                  </div>

                  <div className="orderSecoond">
                    <div className="orderTootal">
                      <p>Order total</p>
                      <p>{`$${(orderTotalCents / 100).toFixed(2)}`}</p>
                    </div>

                    <div className="orderDiscount">
                      <h4>Discounts included:</h4>
                      <p>
                        70% SALE{" "}
                        <span>{`-$${(discountCents / 100).toFixed(2)}`}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="paymentsSubmit">
              <div className="payments">
                <p>Payment Method</p>
                <div>
                  <img
                    src="images/payments/068BjcjwBw0snwHIq0KNo5m-15.webp"
                    alt="paymentsLogo"
                  />
                  <img
                    src="images/payments/apple-pay.webp"
                    alt="paymentsLogo"
                  />
                  <img src="images/payments/images.webp" alt="paymentsLogo" />
                  <img src="images/payments/monnify.webp" alt="paymentsLogo" />
                  <img src="images/payments/seampay.webp" alt="paymentsLogo" />
                  <img
                    src="images/payments/mastercard (1).webp"
                    alt="paymentsLogo"
                  />
                  <img src="images/payments/verve.webp" alt="paymentsLogo" />
                  <img src="images/payments/visa.webp" alt="paymentsLogo" />
                </div>
                <select
                  ref={paymentMethodRef}
                  onChange={getPaymentMethod}
                  value={payMethod}
                  className="selectFund"
                  name="payment method"
                  required
                >
                  <option>Select your prefered payment method</option>
                  <option>PayStack</option>
                  <option>AlatPay</option>
                  <option>Verve</option>
                  <option>MasterCard</option>
                  <option>Visa</option>
                </select>
              </div>

              <div className="submitOrder">
                <button
                  onKeyDown={proceedCheckout} 
                  ref={spinnerRef}
                  onClick={()=>{
                    showSpinner()
                  }}>
                  {spinner && (
                    <span>
                      <img src="../../public/images/icons/loading-spinner.gif" alt="loading spinner" width={30} />
                    </span> 
                  )}
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
