var CountryList = React.createClass({displayName: "CountryList",
  render: function() {
    var countryNodes = this.props.data.map(function(){
      return(
        React.createElement("div", {className: "item", "data-value": "{}"}, React.createElement("i", {className: "{} flag"}), " ")
      );
    })
  }
});