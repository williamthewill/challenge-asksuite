# Run Project
Asksuite challenge.
> The challenge is to implement an api crawler to return available hotel room vacancies on the requested days.
> The api has only one `/buscar` route that returns a list of available rooms for the requested date.
> The api was developed with typescript following functional practices.
> The api was developed to suport extension to many scrappers and actualy there is a module to scrape any hotel that uses myreservations platform

## Examples from error message and success

This is the structure response from error
```
{
	"ok": false,
	"error": "InvalidInput",
	"debugInfo": [
		"Invalid value \"22102019\" supplied to key 'checkin' of type Integer",
		"Invalid value \"23102019\" supplied to key 'checkout' of type Integer"
	]
}
```
This is the structure response from success
```
{
	"ok": true,
	"rooms": [
		{
			"descriptionTitle": "Standard",
			"description": "Ideal para relaxar. Os quartos dispõem de diversos serviços para garantir uma estadia confortável e agradável. Todos os apartamentos Stan... ",
			"price": "R$ 750,50",
			"priceDetail": "Por Noite",
			"installments": "\nPague em até 5x\n",
			"images": [
				"https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=189952.jpg",
				"https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=152609.jpg",
				"https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=189950.jpg"
			]
		}
	]
}
```

Below are the steps of using api.

## Step 1 - Add node_modules
Create the .env file and copy the environments that are in .env.example and populate them
```
$ npm install
```
### or
```
$ yarn
```
## Step 2 - Transpile to js
```
$ yarn run tsc
```
## Step 3 - Start the Project
```
$ node dist/src/index
```
## Step 4
```
$ curl -d '{"checkin":22102019,"checkout":23102019}' -H "Content-Type: application/json" -X POST http://localhost:3000/buscar
```
# To Run tests
```
$ yarn run test
```

# To run with docker
To facilitate development, it is not required to pass environment variables with the docker, just to have created the .env file and populated its environment variables.

```
$ docker build --rm -t challenge-asksuite .
```
```
$ docker run -p 3000:3000 challenge-asksuite
```