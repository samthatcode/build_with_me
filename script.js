const imageBox = document.getElementById("img-box");

const apiKey = "4UIH49cits-C7dgg8U4RP_eTa--BAH2_YQhwNv8hiHo";

// endpoints
const requestOne = `https://api.unsplash.com/search/photos?page=1&per_page=20&query=cats&client_id=${apiKey}`;

const requestTwo = `https://api.unsplash.com/search/photos?page=1&per_page=20&query=expensive-cars&client_id=${apiKey}`;

// Random Images
const randomImages = `https://api.unsplash.com/search/photos?&query=random&client_id=${apiKey}`;

// fucntion to make request to the Unsplash api endpoint

const makeRequest = async (requestUrl) => {
    try {
        // Wait for the fetch to complete
        const response = await fetch(requestUrl);
        console.log(response)
        //  chack if the request is successful
        if (!response.ok) {
            throw new Error("Failed to fetch data from the API");
        }
        // Parse the response to json
        const data = await response.json();
        console.log('Data from the Api', data);

        data.results.forEach((imageGallery) => {
            // create images
            generateImage(imageGallery);
        });

    } catch (error) {
        //  catch errors from the request
        console.error("Error fecthing data:", error)
    }
}

//  Create an helper fucntion to generate image tag for each image in the incoming data

const generateImage = (imageGallery) => {
    const parentImageTag = document.createElement("div");

    const image = document.createElement('img');

    image.src = imageGallery.urls.regular;

    image.alt = imageGallery.alt_description;

    //  style the images

    image.style.margin = "10px";
    image.style.width = "300px";
    image.style.height = "200px";
    image.style.border = "1px solid red";
    image.style.borderRadius = "4px";

    parentImageTag.appendChild(image);
    imageBox.appendChild(parentImageTag);

}

makeRequest(requestOne);
makeRequest(requestTwo);
makeRequest(randomImages);