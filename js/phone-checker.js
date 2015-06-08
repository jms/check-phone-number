/**
 * Created by jms on 6/5/15.
 */

$(function () {
  $('.ui.dropdown').dropdown({
    action: 'activate',
    onChange: function (value, text, $selectedItem) {
      //console.info(value, text, $selectedItem);
      console.info('country code', $selectedItem.data('cca2'));
      window.cca2 = $selectedItem.data('cca2');
    }
  });

  var checkPhoneNumber = function () {
    // getting the country code and number
    var service_url = '/check-phone';
    var country_code = '+' + $('.ui.form').find('#country_code').val();
    var phone = $('.ui.form').find('#phone').val();
    var full_number = country_code + phone;
    var cca2 = window.cca2;

    console.info('phone number to check: ', country_code + phone, 'country:', cca2);

    var  number_data = {
      phone_number: full_number,
      country_code: cca2
    }

    $.ajax({
      url: service_url,
      method: 'POST',
      contentType: "application/json; charset=utf-8",
      dataType: 'json',
      data: JSON.stringify(number_data),
      success: function (data) {
        console.info(data);
        $('#response_data').html(JSON.stringify(data, undefined, 2));
        // put response on div.
      },
      error: function () {
        console.error(this.props.url, status, err.toString());
      }
    });

  };

  var rules = {
    country_code: {
      identifier: 'country_code',
      rules: [
        {
          type: 'empty',
          prompt: 'Please select your country'
        }
      ]
    },
    phone: {
      identifier: 'phone',
      //optional: true,
      rules: [
        {
          type: 'empty',
          prompt: 'Please enter your phone number'
        },
        {
          type: 'integer',
          prompt: 'Please enter only numbers'
        },
        {
          type: 'length[7]',
          prompt: 'Please enter a minimum of 7 digits number'
        },
        {
          type: 'maxLength[20]',
          prompt: 'Please enter a maximum of 20 digits number'
        }
      ]
    },
  };

  var focusFirstInvalidField = function () {
    $('.ui.form').find('div.field.error').first().find('input').focus();
  }

  var settings = {
    on: 'blur',
    //inline: 'true',
    onSuccess: checkPhoneNumber,
    onFailure: focusFirstInvalidField
  };

  $('.ui.form').form(rules, settings);

  $('div.ui.reset').on('click', function(){
    // reset form
    // clear response div.
    $('#response_data').html('');
  });

});
