====== Paypal ======

  - NGO must have Paypal account.
  - Donator must have Paypal account, can instant register.
  - Personal paypal account either $0.30 and 4.9%(CC, Debit Card) or free if made from paypal or bank account.
  - Business paypal account 1.9-2.9% per transaction paid by NGO.

Info and signup for account here:
  https://www.paypal.com/cgi-bin/webscr?cmd=p/xcl/rec/donate-intro-outside


Steps to create html snippet:
   1. Log in to your PayPal account
   2. Click on the Merchant Services tab
   3. Click on the Donations link
   4. Specify the name, amount (optional; if you leave amount blank, your donor will be asked to choose a donation amount), and other details of the donation
   5. Add more optional information such as a customized button graphic and the ability to include a note with the donation
   6. Click Create Button Now and the Button Factory will generate customized HTML code
   7. Paste the HTML code on your website to create your Donate button


===== DYI =====
Paypal's website integration guide which explains all the form fields:

https://www.paypalobjects.com/WEBSCR-455-20070420-1/en_US/pdf/PP_WebsitePaymentsStandard_IntegrationGuide.pdf

HTML code from paypal:
  <form name="_xclick" action="https://www.paypal.com/cgi-bin/webscr" method="post">
    <input type="hidden" name="cmd" value="_xclick">
    <input type="hidden" name="business" value="me@mybiz.com">
    <input type="hidden" name="item_name" value="Team In Training">
    <input type="hidden" name="currency_code" value="USD">
    <input type="hidden" name="amount" value="25.00">
    <input type="image" src="http://www.paypal.com/en_US/i/btn/x-click-butcc-donate.gif" border="0" name="submit" alt="Make payments with PayPal - it's fast, free and secure!">
  </form>


This is email link:
  https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=njharman%40knoggin%2ecom&no_shipping=0&no_note=1&tax=0&currency_code=USD&lc=US&bn=PP%2dDonationsBF&charset=UTF%2d8

This is html link:
<form action="https://www.paypal.com/cgi-bin/webscr" method="post">
<input type="hidden" name="cmd" value="_xclick">
  <input type="hidden" name="business" value="payment@gimmenow.com">
  <input type="hidden" name="item_name" value="Donation">
  <input type="hidden" name="amount" value="5.00">
  <input type="hidden" name="no_note" value="0"> <!-- (whether  customer is allowed to enter a note or not) -->
  <input type="hidden" name="cancel_return" value="http://knoggin.com">
  <input type="hidden" name="return" value="http://www.knoggin.com/horde">
  <input type="image" src="https://www.paypal.com/en_US/i/btn/x-click-but21.gif" border="0" name="submit" alt="Make a Donation">
<input type="hidden" name="currency_code" value="USD">
<input type="hidden" name="lc" value="US"> <!--AU DE FR IT GB ES US -->
<input type="hidden" name="no_shipping" value="0">
<input type="hidden" name="tax" value="0">
<input type="hidden" name="bn" value="PP-DonationsBF">
</form>



====== Amazon Honor Payment System ======

  - NGO must have amazon account.
  - Seems NGO must have CC to validate during registration and a checking account to recieve donations.
  - NGO needs to create paypage on Amazon, can't be automated easily.
  - They have fundraiser "bar" to track donations to a certain $ goal.
  - Donator must have amazon account, can instant register or use 1-click.
  - $0.30 and 2.9% per transaction paid by NGO.

Info page:
  http://zme.amazon.com/exec/varzea/subst/fx/home.html

Page for NGO to register:
  http://zme.amazon.com/exec/varzea/fx-register/login


===== DYI =====

Sample paypage url:
  http://zme.amazon.com/exec/varzea/ts/my-pay-page/P37U5A6Z1RFBLO/103-0139396-4826217

Paybox optional can just go to url directly http://zme.amazon.com/exec/varzea/pay/T2X8VQY0PKXVRD
But hard to get that hash at end of url.

And the corresponding paybox:
  <img src="http://zme.amazon.com/exec/varzea/tipbox/AF7XFFY3U00T4/T2X8VQY0PKXVRD" usemap="#T2X8VQY0PKXVRD" border="0" alt="Amazon Honor System">
  <map name="T2X8VQY0PKXVRD">
  <area coords="13,64,108,117" href="http://zme.amazon.com/exec/varzea/pay/T2X8VQY0PKXVRD" alt="Click Here to Pay" target=_top>
  <area coords="13,133,108,145" href="http://zme.amazon.com/exec/varzea/subst/fx/help/how-we-know.html" alt="Learn More" target=_top>
  </map>


amazon ripped from http://www.randyrants.com/2004/01/sharpmt_21_beta.html

<a href="http://www.amazon.com/paypage/P2WICX8XHRBPZX"><img src="http://www.randyrants.com/images/but_amazon.gif" alt="Donations for SharpMT via Amazon!" border="0"/></a>

