var vm = new Vue({
  el: '#vue_det',
  data: {
    states : ["Alaska", "Alabama", "Arkansas", "American Samoa", "Arizona", "California", "Colorado", "Connecticut", "District of Columbia",
      "Delaware", "Florida", "Georgia", "Guam", "Hawaii", "Iowa", "Idaho", "Illinois", "Indiana", "Kansas", "Kentucky", "Louisiana",
      "Massachusetts", "Maryland", "Maine", "Michigan", "Minnesota", "Missouri", "Mississippi", "Montana", "North Carolina",
      "North Dakota", "Nebraska", "New Hampshire", "New Jersey", "New Mexico", "Nevada", "New York", "Ohio", "Oklahoma", "Oregon",
      "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota",
      "Tennessee", "Texas", "Utah", "Virginia", "Virgin Islands", "Vermont", "Washington", "Wisconsin", "West Virginia", "Wyoming"],
    text : "-",
    value: "input a state name",
    showUl:false,
    list: []
  },
  methods: {

    search: function ()
    {
      this.text = "aaaaaaa";
    },
    showText:function ()
    {

      var result= []
      var target = "not found";
      var has = false;
      this.states.forEach(item => {
          var l = this.value.toLowerCase();
        if (item.toLowerCase().startsWith(l)) {
          if(this.value!=="input a state name"&&this.value!=="")
          {
            this.showUl = true;
            target = item;
            result.push(target);
          }

        }

      })
    return result;

    },
    tap:function (item)
    {
      this.value = item;
      async
      src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"

    }

    
  }
})
