const express = require('express');
const Generate = require('./Generate/Generate');
const app = express();

/*
const languageOption  = [ "yoruba", "hausa", "igbo"]
const genderOption = ["male", "female"]
const networkOption = [ "Mtn", "Glo", "Airtel", "9mobile"]

generate.config({
	language: "yoruba",
	gender: "male",
	network: "glo",
})

generate.title() // Mrs.

generate.name() // Temilade Abolade

generate.address() // 45, Alhaji Kazeem Street, Kaduna

generate.phoneNumber() // 09123456634

generate.email() // temilade.abolade@ymail.com

generate.states() // array of states in Nigeria

generate.lgas() // array of states in Nigeria

                                                  OVERPOWER PERSON AND PEOPLE METHOD 

------>    faker.people()
\
// array of person objects
[
{
  title: 'Engr.',
  firstName: 'Akintunde',
  lastName: 'Owoyele',
  fullName: 'Akintunde Owoyele',
  email: 'akintunde.owoyele@gmail.com',
  phone: '+2349093636382',
  address: '63, Ebubedike Uzoma Avenue, Awka'
}
{
  title: 'Mr.',
  firstName: 'Olayinka',
  lastName: 'Adedayo',
  fullName: 'Olayinka Adedayo',
  email: 'olayinka.adedayo@hotmail.fr',
  phone: '+2348189416772',
  address: 'Km 9, Lanre Ayotunde Crescent, Ilorin'
}
]

faker.peole(20) // returns 20 persons in the array

                                                  Returns just one object

faker.person() 

// object of person details
{
  title: 'Engr.',
  firstName: 'Akintunde',
  lastName: 'Owoyele',
  fullName: 'Akintunde Owoyele',
  email: 'akintunde.owoyele@gmail.com',
  phone: '+2349093636382',
  address: '63, Ebubedike Uzoma Avenue, Awka'
}
*/ 

app.get('/', (req, res) => {
  res.send(Generate.phoneNumber());
});

app.listen(process.env.PORT || 3000, () => console.log('Example app is listening on port 3000.'));
