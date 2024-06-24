class GetNeighborhoodsList {
	  constructor() {
		      this.neighborhoods = [];
		    }

	  addNeighborhood(neighborhood) {
		      this.neighborhoods.push(neighborhood);
		      return this.neighborhoods;
		    }
}

export default GetNeighborhoodsList;
