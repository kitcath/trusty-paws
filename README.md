# Trusty Paws

## Inspiration
We believe that every pet deserves to find a home.  Animal shelters have often had to euthanize animals due to capacity issues and lack of adoptions. Our objective with Trusty Paws is to increase the rate of adoptions of these animals by increasing the exposure of shelters to potential pet owners as well as to provide an accessible platform for users to browse and adopt their next best friend.
Trusty Paws also aims to be an online hub for all things related to your pet, from offering an online marketplace for pet products to finding a vet near you.

## What it does
Our vision for Trusty Paws is to create a platform that brings together all the players that contribute to the health and happiness of our pawed friends, while allowing users to support local businesses. Each user,  shelter,  seller, and veterinarian contributes to a different aspect of Trusty Paws.

**Users**:
Users are your everyday users who own pets or are looking to adopt pets. They will be able to access the marketplace to buy items for their pets, browse through each shelter's pet profiles to fill out adoption requests, and find the nearest pet clinic.

**Shelters**:
Shelters accounts will be able to create pet profiles for each of their animals that are up for adoption! Each pet will have its own profile that can be customized with pictures and other fields providing further information on them. The shelter receives an adoption request form each time an user applies to adopt one of their pets.

**Sellers**:
Sellers will be able to set up stores showing all of their product listings, which include, but are not limited to, food, toys, accessories, and many other. Our marketplace will provide the opportunity for local businesses that have been affected by Covid-19 to reach their target audience while abiding by health and safety guidelines. For users, it will be a convenient way to satisfy all the needs of their pet in one place. Finally, our search bar will allow users to search for specific items for a quick and efficient shopping experience.

**Veterinarians**:
Veterinarians will be able to set up a profile for their clinic, with all the pertinent information such as their opening hours, services provided, and location.


## How we built it
For the front-end, React., Bootstrap and Materialized CSS were used to acquire the visual effects of the current website. In fact, the very first step we undertook was to draft an initial prototype of the product on Figma to ensure all the requirements and required features were met. After a few iterations of redesigning, we each dove into developing the necessary  individual components, forms, and pages for the website. Once all components were completed, the next step was to route pages together in order to achieve a seamless navigation of the website.

We used Firebase within Node.Js to implement a framwork for the back-end. Using Firebase, we implemented a NoSQL database using Cloud Firestore. Data for users (all types), pets, products, and adoption forms along with their respective fields were stored as documents in their respective collections.

Finally, we used Google's Distance Matrix API to compute distances between two addresses and find the nearest services when necessary, such as the closest vet clinics or the closest shelters.

## Challenges we ran into

Although we were successful at accomplishing the major features of the website, we encountered many challenges throughout the weekend. As we started working on Trusty Paws, we realized that the initial implementation was not as user-friendly as we wanted it to be. We then decided to take a step back and to return to the initial design phase. Another challenge we ran into was that most of the team was unfamiliar with the development tools necessary for this project, such as Firebase, Node.Js, bootstrap, and redux.

## Accomplishments that we're proud of

We are proud that our team learned so much over the course of a few days.

## What's next for Trusty Paws
We want to keep improving our users' experience by optimizing the current features. We also want to improve the design and user friendliness of the interface.
