var campainJson = [{
    "id": "1",
    "campaign": "Text Whatsapp",
    "date": "2017-05-01",
    "days": "330 days ago",
    "lang": "US",
    "icon": "fa fa-whatsapp",
    },
  {
    "id": "2",
    "campaign": "نص واتس اب",
    "date": "2016-04-17",
    "days": "710 days ago",
    "lang": "JP",
    "icon": "fa fa-google-plus-official",
    },
  {
    "id": "3",
    "campaign": "Super Jewels Quest",
    "date": "2016-04-17",
    "days": "710 days ago",
    "lang": "CA, FR",
    "icon": "fa fa-twitter-square",
    },
  {
    "id": "4",
    "campaign": "Mole Slayer",
    "date": "2016-04-14",
    "days": "713 days ago",
    "lang": "FR",
    "icon": "fa fa-pinterest-square",
    },
  {
    "id": "5",
    "campaign": "Mancala Mix",
    "date": "2016-04-17",
    "days": "713 days ago",
    "lang": "CA,FR,JP",
    "icon": "fa fa-smile-o",
    }];

getCampaign();

// Get product form product json
function getCampaign() {
  var arr = [];
  for (let i = 0; i < campainJson.length; i++) {

    arr.push('<tr class="table-row" translate="no"><td class="col-date"><span class="date">'+ campainJson[i].date + '</span><span class="days">' + campainJson[i].days + '</span></td><td class="col-campaign"><i class="' + campainJson[i].icon +'" aria-hidden="true"></i><span class="txt-group"><span class="campaign-txt">'+ campainJson[i].campaign +'</span><span class="campaign-lang">'+ campainJson[i].lang +'</span></span></td><td class="col-view"><a class="link-txt" href="javascript:void(0)""><span class="fa-stack"><i class="fa fa-usd" aria-hidden="true"></i><i class="fa fa-plus"></i></span><span>VIEW PRICING</span></a></td><td class="col-action"><a class="link-txt" href="javascript:void(0)"><i class="fa fa-file-excel-o" aria-hidden="true"></i><span>CSV</span></a><a class="link-txt" href="javascript:void(0)"><i class="fa fa-signal" aria-hidden="true"></i><span>REPORT</span></a><a class="link-txt schedule-date" href="javascript:void(0)"><i class="fa fa-calendar" aria-hidden="true"></i> <input type="input" class="datepick" /></a></td></tr>');
  }
  document.getElementById("table_content").innerHTML = arr.join('');
}


$( function() {
      //$( "#datepicker" ).datepicker();
    $( ".datepick" ).datepicker({
      showOn: "button",
      buttonText: "SCHEDULE AGAIN",
      dateFormat: 'yy-mm-dd',
      todayHighlight: false,
      minDate: 0,
      onClose: function(dateText) {
        $(this).parents('.table-row').find('.col-date .date').html($(this).val());
      }
    });

    //Show modal
    $(".campaign-table").delegate(".col-date", "click", function(){
      var data = $(this).parents('.table-row');
      var modalData = '<div class="modal"><h2 class="text-center">Selected Value <span class="close"><i class="fa fa-times" aria-hidden="true"></i></span></h2><ul class="list-item"><li><label>Date: </label> <span>' + data.find('.date').html() +'</span></li><li><label>Campaign: </label><span>' + data.find('.col-campaign .campaign-txt').html() +'</span> </li></ul></div>'
      document.getElementById("modal_wrapper").innerHTML = modalData;
      $('.modal-wrapper').show();
    });

    $('.manage-campaign').delegate(".close", "click", function(){
      $('.modal-wrapper').hide();
    })

} );
