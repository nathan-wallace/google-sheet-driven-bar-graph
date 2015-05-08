// JavaScript Document
var googleData ="https://spreadsheets.google.com/feeds/list/1TkRcxQ_IDq-24a1BdnXveLKfGi-5IbzQZsvzsxDmco0/od6/public/basic?hl=en_US&alt=json";

var percentStart = 0;

$.getJSON(googleData, function(data) {
  //first row "title" column
  msbPercent = data.feed.entry[0].title.$t;
  colPercent = data.feed.entry[1].title.$t;
  sfsPercent = data.feed.entry[2].title.$t;
  nhsPercent = data.feed.entry[3].title.$t;
  llPercent = data.feed.entry[4].title.$t;
  gotData();
  
  
  console.log(data);
  
}
);

function gotData(){
	  $('.msb-text').text(msbPercent);
	  $('.col-text').text(colPercent);
	  $('.sfs-text').text(sfsPercent);
	  $('.nhs-text').text(nhsPercent);
	  $('.ll-text').text(llPercent);
	  $('.msb').css('width', msbPercent+'%').attr('aria-valuenow', msbPercent);  
	  $('.col').css('width', colPercent+'%').attr('aria-valuenow', colPercent);  
	  $('.sfs').css('width', sfsPercent+'%').attr('aria-valuenow', sfsPercent);  
	  $('.nhs').css('width', nhsPercent+'%').attr('aria-valuenow', nhsPercent);  
	  $('.ll').css('width', llPercent+'%').attr('aria-valuenow', llPercent);  
}