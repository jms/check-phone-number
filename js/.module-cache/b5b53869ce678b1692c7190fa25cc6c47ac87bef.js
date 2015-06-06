var CountryList = React.createClass({displayName: "CountryList",
  render: function() {
    var countryNodes = this.props.data.map(function(country){
      return(
        React.createElement("div", {className: "item", "data-value": "{country.cca2}"}, React.createElement("i", {className: "{cca2} flag"}), " ")
      );
    })
  }
});