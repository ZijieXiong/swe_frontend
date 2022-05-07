import React, {useState} from 'react'
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js"
import axios from "axios"

export default function PaymentForm() {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElements(CardElement)

        })
    }
    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("https://localhost:4000/payment", {
                amount: 1000,
                id
            })
            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
            }
        } catch (error) {
            console.log("Error recieve", error)
        }
    } else  {
        console.log (error.message);
    }
    
    return (
        <div>


        </div>
    )
}