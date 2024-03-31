// This file contains the questions on the form

const FormQuestions = [
    {
        section: 1,
        pickup: [
            {
                id: "pickup_location",
                label: 'Location',
                type: 'text',
                hint: 'Location'
            },
            {
                id: "pickup_date",
                label: 'Date',
                type: 'date',
            },
            {
                id: "pickup_time",
                label: 'Time',
                type: 'time',
            }
        ],

        dropoff: [
            {
                id: "dropoff_location",
                label: 'Location',
                type: 'text',
                hint: 'Location'
            },
            {
                id: "dropoff_date",
                label: 'Date',
                type: 'date',
            },
            {
                id: "dropoff_time",
                label: 'Time',
                type: 'time',
            }
        ]
    },
    {
        section: 2,
        car: [
            {
                id: "sedan",
                img_src: './images/sedan.png',
                title: 'Sedan - ',
                price: 'CA$80.00 /day',
                learn_more: 'Smoke Free, 4 Doors, Automatic Transmission, Air Conditioning, 5 Seats, 1 Large Bag, 2 Small Bags'
            }
            ,
            {
                id: "suv",
                img_src: './images/suv.png',
                title: 'Suv - ',
                price: 'CA$100.00 /day',
                learn_more: 'Smoke Free, 4 Doors, Automatic Transmission, Air Conditioning, 5 Seats, 2 Large Bags, 2 Small Bags'
            },
            {
                id: "truck",
                img_src: './images/truck.png',
                title: 'Truck - ',
                price: 'CA$110.00 /day',
                learn_more: 'Smoke Free, 4 Doors, Automatic Transmission, Air Conditioning, 5 Seats, 1 Large Bag, 3 Small Bags'
            },
            {
                id: "minivan",
                img_src: './images/minivan.png',
                title: 'Minivan - ',
                price: 'CA$120.00 /day',
                learn_more: 'Smoke Free, 5 Doors, 7 Seats, Automatic Transmission, Air Conditioning, 3 Large Bags, 2 Small Bags'
            }
        ]
    },
    {
        section: 3,
        contactInfo: [
            {
                id: "name",
                label: 'Name',
                type: 'text',
            },
            {
                id: "phone",
                label: 'phone',
                type: 'phone',
                hint: 'Location'
            },
            {
                id: "email",
                label: 'Email',
                type: 'Email',
                hint: 'Location'
            }
        ],

        paymentInfo: [
            {
                id: "first_name",
                label: 'First name',
                type: 'text',
            },
            {
                id: "last_name",
                label: 'Last name',
                type: 'text',
            },
            {
                id: "card_number",
                label: 'Card number',
                type: 'number',
            },
            {
                id: "cvv",
                label: 'CVV',
                type: 'number',
            },
            {
                id: "billing_address",
                label: 'Billing address',
                type: 'text',
            }
        ]
    }
]


export default FormQuestions;