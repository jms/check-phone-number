var CountryDropdown = React.createClass({
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
      <div className="ui basic dropdown labeled search icon button">
        <input name="country_code" type="hidden" id="country_code"/>
        <i className="world icon"></i>
        <span className="text">Select Country</span>
          <CountryList data={this.state.data} />
      </div>
    );
  }
});

var CountryList = React.createClass({
  render: function () {
    var countryNodes = this.props.data.map(function (country, index) {
      var country_code = country.cca2.toLowerCase() + " flag ";
      return (
        <div key={index} className="item" data-cca2={country.cca2} data-value={ country.callingCode[0]}>
          <i className={country_code}></i> {country.name.common}</div>
      );
    });
    return (
      <div className="menu">
        {countryNodes}
      </div>
    );
  }
});

React.render(
  <CountryDropdown url="node_modules/world-countries/dist/countries.json"/>,
  document.getElementById('country'),
  function(){
    $('.ui.dropdown').dropdown();
  }
);