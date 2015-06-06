var CountryDropdown = React.createClass({displayName: "CountryDropdown",
  getInitialState: function(){
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function () {
    return (
      React.createElement("div", {className: "ui basic dropdown labeled search icon button"}, 
        React.createElement("input", {name: "country", type: "hidden"}), 
        React.createElement("i", {className: "world icon"}), 
        React.createElement("span", {className: "text"}, "Select Country"), 
          React.createElement(CountryList, {data: this.state.data})
      )
    );
  }
});

var CountryList = React.createClass({displayName: "CountryList",
  render: function () {
    var countryNodes = this.props.data.map(function (country, index) {
      return (
        React.createElement("div", {className: "item", "data-value": "{country.cca2.toLowerCase()}"}, 
          React.createElement("i", {className: "{country.cca2.toLowerCase()} flag"}), " ", country.name.official)
      );
    });
    return (
      React.createElement("div", {className: "menu"}, 
        countryNodes
      )
    );
  }
});


React.render(
  React.createElement(CountryDropdown, {url: "node_modules/world-countries/dist/countries.json"}),
  document.getElementById('country'),
  function(){
    $('.ui.dropdown').dropdown();
  }
);