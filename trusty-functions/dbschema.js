// used purely for reference

let db = [
    users: [
        {
            userId: 'id',
            type: 2, // 1: Normal, 2: shelter, 3: seller, 4: vet
            name: 'SPCA',
            createdAt: '2019-03-15T11:46:01.018Z',
            email: 'rui.du.2000@gmail.com',
            password: '123',
            address: {
                streetAddress: '845 Sherbrooke St W',
                city: 'Montreal',
                province: 'Quebec',
                postal: 'H3A 0G4'
            },
            itemsInCart: [], // only normal users
            openingHours: [] // only shelters and vets
        }
    ],
    pets: [
        {
            petId: 'catId',
            name: 'Mimi',
            sex: Boolean, // m: true, f: false
            breed: 'ragdoll cat',
            age: 3,
            description: 'just oh so cute - pls adopt!',
            tags: ['Neutered', 'potty-trained', 'shy', 'friendly', 'energetic', 'playful', 'calm', 'plays catch', 'fluffy'],
            picture: 'picture_path',

            shelter_FK: 'shelterId'

        }
    ],
    adoptionForms: [
        {
            requestId: 'requestid',
            createdAt: admin.firestore.Timestamp.fromDate(new Date()),
            firstName: 'Janice',
            lastName: 'LovesPets',
            address: {
                streetAddress: '845 Sherbrooke St W',
                city: 'Montreal',
                province: 'Quebec',
                postal: 'H3A 0G4'
            },
            occupation: 'teacher',
            numAdults: 2,
            numChildren: 3,
            selfDescription: 'I love pets. Cats are cool.',
            phone: 1234567890,
            isMoving: Boolean,
            holidays: Boolean,
            houseType: 'townhouse',
            rent: Boolean,
            own: Boolean,
            permissionForPets: Boolean,
            status: 'pending review', // pending review, approved, rejected

            pet_FK: 'petId',
            user_FK: 'userId',
            shelter_FK: 'shelterUserId'
        }
    ],
    items: [
        {
            itemId: 'itemId',
            name: 'chew toy',
            tags: ['toys', 'dogs'], // 'cats', 'food', 'accessories', 'grooming', 'potty', 'beds', 'other'
            price: 12.99,
            delivery: Boolean,
            stock: 34,

            seller_FK: 'sellerUserId'
        }
    ]
]