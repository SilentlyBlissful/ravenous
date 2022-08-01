const apiKey = 'b9WQNFKnUdP6UaLjc90yanpNkqgosXz44R71wOzwtNO_h_ha3f6lhwnEI-bCZTtWQic8dlpaz7VK5sAAm6Pne4sgNEUCRk9IUdvUlLMLgqljuo1T8S37L2waMFDoYnYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business =>({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.address,
            city: business.city,
            state: business.state,
            zipCode: business.zipCode,
            category: business.category,
            rating: business.rating,
            reviewCount: business.reviewCount
        }));
      }
    });
  }
}

export default Yelp;