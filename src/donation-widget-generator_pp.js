// Paypal Donation Widget Generator v0.1
// http://www.paypal.com/cgi-bin/webscr?cmd=p/xcl/rec/donate-intro-outside
var paypal_id    = 'payment@example.com'      // your payal account 
var text         = 'Thanks for your Donation' // line item that donator is 'buying'
var allow_note   = true                       // whether donator can submit a note with their donation
// defaults for the Widget generator
var amount       = '5.00'
var language     = 'US'                       // language of the paypal pages only these values are allowed DE FR IT ES US 
var image_url    = 'http://www.paypal.com/en_US/i/btn/x-click-but21.gif'
var image_alt    = 'Make a donation through Paypal'
// these variables determine how the Donation Widget Generator appears
var amount_txt   = ' Amount of donation $US (blank value will allow user to enter any amount)'
var language_txt = ' Language of Paypal pages'
var img_url_txt  = ' Donate button image url'
var img_alt_txt  = ' Donate button alt text'
var return_txt   = ' Optional url donator will be sent back to after donation'
var widget_txt   = ''
var pretag       = '<p class="donationWidget">'
var endtag       = '</p>'

donationWidget_write()

function donationWidget_write()
  {
  document.write('<form id="donationWidget" onchange="donationWidget_generate()">'+pretag+'<input type="text" size="5" id="donationWidget_amount" value="'+amount+'" />'+amount_txt+endtag+'<div id="donationWidget_advanced" style="display:none;visibility:hidden">'+pretag+'<select id="donationWidget_language">')
  var languages = ['US', 'ES', 'DE', 'FR', 'IT']
  for (var i in languages)
    {
    if (languages[i]==language) { document.write('<option value="'+languages[i]+'" selected="selected">'+languages[i]+'</option>') }
    else {document.write('<option value="'+languages[i]+'">'+languages[i]+'</option>') }
    }
  document.write('</select>'+language_txt+endtag+
    pretag+'<input type="text" size="35" id="donationWidget_image_url" value="'+image_url+'" />'+img_url_txt+endtag+
    pretag+'<input type="text" size="35" id="donationWidget_image_alt" value="'+image_alt+'" />'+img_alt_txt+endtag+
    pretag+'<input type="text" size="35" id="donationWidget_return_url" />'+return_txt+endtag+'</div>'+
    pretag+'<input type="button" onclick="donationWidget_generate()" value="Generate Donation Widget" /> <input type="button" value="Show Advanced options" onclick="donationWidget_advanced_show()" />'+endtag+
    pretag+'<textarea id="donationWidget_text" wrap=off rows=14 cols=80></textarea>'+widget_txt+endtag+'</form>')
    donationWidget_generate()
  }
function donationWidget_widget_text()
  {
  var return_url=document.getElementById("donationWidget_return_url").value
  if (return_url) {var return_url_html='  <input type="hidden" name="return" value="'+return_url+'">\n  <input type="hidden" name="cancel_return" value="'+return_url+'">\n'}
  else {var return_url_html=''}
  if (allow_note) {var allow_note_html='  <input type="hidden" name="no_note" value="0">\n'}
  else {var allow_note_html='  <input type="hidden" name="no_note" value="1">\n'}
  return '<form action="https://www.paypal.com/cgi-bin/webscr" method="post">\n'+
    '  <input type="hidden" name="cmd" value="_xclick">\n'+
    '  <input type="hidden" name="business" value="'+paypal_id+'">\n'+
    '  <input type="hidden" name="item_name" value="'+text+'">\n'+
    allow_note_html+
    '  <input type="hidden" name="amount" value="'+document.getElementById("donationWidget_amount").value+'">\n'+
    '  <input type="hidden" name="lc" value="'+document.getElementById("donationWidget_language").value+'">\n'+
    '  <input type="hidden" name="currency_code" value="USD">\n'+
    '  <input type="hidden" name="no_shipping" value="0">\n'+
    '  <input type="hidden" name="tax" value="0">\n'+
    return_url_html+
    '  <input type="image" src="'+document.getElementById("donationWidget_image_url").value+'" border="0" name="submit" alt="'+document.getElementById("donationWidget_image_alt").value+'">\n'+
    '</form>\n'
  }
function donationWidget_generate()
  {
  document.getElementById("donationWidget_text").value=donationWidget_widget_text()
  }
function donationWidget_advanced_show()
  {
  document.getElementById("donationWidget_advanced").style.visibility="visible"
  document.getElementById("donationWidget_advanced").style.display="inline"
  }
