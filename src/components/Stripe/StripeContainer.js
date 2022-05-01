import React from 'react'

const PUBLIC_KEY = ""; //Public key that will be used to enforce payments
const LoadStripe_Key = loadStripe(PUBLIC_KEY); //Loading the stripe public key 

export default function StripeContainer() {
    return ( 
        <Elements stripe = {LoadStripe_Key}>
            <PaymentForm />
            
        </Elements>
    )
}