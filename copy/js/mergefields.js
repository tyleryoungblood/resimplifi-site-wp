var mergefields =
[ //############################################################################
  {'label':'header',        'value':'Buyer'},
  //############################################################################

    {'label':'subheader',                         'value':'Agency Representation'},
      {'label':'Agreement Commencement Date',     'value':'Listing Agreement Commencement Date|date_format:"F j, Y"'},
      {'label':'Agreement Expiration Date',       'value':'Listing Agreement Expiration Date|date_format:"F j, Y"'},
      {'label':'Agents Commission (estimate)%',   'value':'Company Commission Percent|number_format:2'},
      {'label':'Representation Term (months)',    'value':'Listing Agreement Term Months'},

    {'label':'subheader',         'value':'Search Requirements'},
      {'label':'Square Footage',  'value':'Search Square Footage'},
      {'label':'Property Type',   'value':'Search Property Type'},
      {'label':'Market/Subtype',  'value':'Search Market/Submarket'},
      {'label':'Parking Spaces',  'value':'Search Parking Spaces'},
      {'label':'Price',           'value':'Search Price|number_format:2'},

    {'label':'subheader',       'value':'Buyer (Primary Contact)'},
      {'label':'Full Name',     'value':'Primary Buyer Contact: Full Name'},
      {'label':'First Name',    'value':'Primary Buyer Contact: First Name'},
      {'label':'Last Name',     'value':'Primary Buyer Contact: Last Name'},
      {'label':'Title',         'value':'Primary Buyer Contact: Title'},
      {'label':'Department',    'value':'Primary Buyer Contact: Department'},
      {'label':'Email',         'value':'Primary Buyer Contact: Email'},
      {'label':'Fax',           'value':'Primary Buyer Contact: Business Fax'},
      {'label':'Phone',         'value':'Primary Buyer Contact: Business Phone'},
      {'label':'Mobile Phone',  'value':'Primary Buyer Contact: Mobile Phone'},

  //############################################################################
  {'label':'header',                            'value':'Seller'},
  //############################################################################

    {'label':'subheader',                       'value':'Agreement Details'},
      {'label':'Agreement Commencement Date',   'value':'Listing Agreement Commencement Date|date_format:"F j, Y"'},
      {'label':'Agreement Expiration Date',     'value':'Listing Agreement Expiration Date|date_format:"F j, Y"'},
      {'label':'Listing Term',                  'value':'Listing Agreement Term Months'},
      {'label':'Gross Listing Commission %',    'value':'Gross Commission Percentage|number_format:2'},
      {'label':'Sales Price',                   'value':'Transaction Size|number_format:2'},

  //############################################################################
  {'label':'header',                            'value':'Landlord'},
  //############################################################################

    {'label':'subheader',                       'value':'Agreement Details'},
      {'label':'Agreement Commencement Date',   'value':'Listing Agreement Commencement Date|date_format:"F j, Y"'},
      {'label':'Agreement Expiration Date',     'value':'Listing Agreement Expiration Date|date_format:"F j, Y"'},
      {'label':'Listing Term',                  'value':'Listing Agreement Term Months'},
      {'label':'Gross Listing Commission %',    'value':'Gross Commission Percentage|number_format:2'},
      {'label':'Listing Rental Rate $',         'value':'Search Yearly Square Foot Rate|number_format:2'},
      {'label':'Projected Rental Increase',     'value':'Search Yearly Square Foot Rate Increase|number_format:2'},
      {'label':'Projected Term (Years)',        'value':'Term Years'},

  //############################################################################
  {'label':'header',                                      'value':'Tenant'},
  //############################################################################

    {'label':'subheader',                                 'value':'Agency Representation'},
      {'label':'Agreement Commencement Date',             'value':'Listing Agreement Commencement Date|date_format:"F j, Y"'},
      {'label':'Agreement Expiration Date',               'value':'Listing Agreement Expiration Date|date_format:"F j, Y"'},
      {'label':'Listing Agreement Term (Months)',         'value':'Listing Agreement Term Months'},
      {'label':'Tenant Agents Commission (estimate)%',    'value':'Tenant Agent Commission|number_format:2'},
      {'label':'Representation Term (months)',            'value':'Listing Agreement Term Months'},
      {'label':'Improvement Allowance',                   'value':'Improvement Allowance|number_format:2'},

  //############################################################################
  {'label':'header',                        'value':'Property'},
  //############################################################################

    {'label':'subheader',                   'value':'Property Information'},
      {'label':'Property Type',             'value':'Search Property Type'},
      {'label':'Property Name',             'value':'Property: Property Name'},
      {'label':'Street Address',            'value':'Property: Address'},
      {'label':'City',                      'value':'Property: City'},
      {'label':'State',                     'value':'Property: State'},
      {'label':'Postal Code',               'value':'Property: Postal Code'},
      {'label':'County',                    'value':'Property: County'},
      {'label':'Country',                   'value':'Property: Country'},
      {'label':'Zoning',                    'value':'Property: Zoning'},
      {'label':'Tax ID Number',             'value':'Property: Tax ID Number'},
      {'label':'Owners Legal Name',         'value':'Property: Ownership Name (Legal Entity)'},
      {'label':'Parking Spaces Available',  'value':'Property: Parking Available'},
      {'label':'Parking Ratio',             'value':'Property: Parking Ratio|number_format:2'},
      {'label':'Description',               'value':'Property: Description'},
      {'label':'Total Building Size',       'value':'Property: Total Building Size'},
      {'label':'Number of Floors',          'value':'Property: Floors'},
      {'label':'Year Built',                'value':'Property: Year Built'},
      {'label':'Common Area Factor',        'value':'Property: Common Area Factor|number_format:2'},
      {'label':'Acreage',                   'value':'Property: Acreage|number_format:2'},

    {'label':'subheader',         'value':'Images'},
      {'label':'Primary Image',   'value':'Property: Image Primary Public'},
      {'label':'Secondary Image', 'value':'Property: Image Secondary Public'},
      {'label':'Tertiary Image',  'value':'Property: Image Tertiary Public'},

    {'label':'text',            'value':'Please follow directions <a href="https://www.webmerge.me/blog/embed-images-in-word-docx">here</a> and remember to append <code>|image:1:png</code> to the image placeholder. Your finished merge variable should look something like <code>{$Property_Image_Primary|image:1:png}</code>.'},
    {'label':'text',            'value':'View the linked image below in a new tab and modify the height/width parameters so that the image fits in your document. Once properly sized, right-click and copy/paste into your document.<br><br><a href="https://www.webmerge.me/images/image.php?width=300&amp;height=100&amp;type=png">https://www.webmerge.me/images/image.php?width=300&amp;height=100&amp;type=png</a>'},
    {'label':'text',            'value':'NEW METHOD: <code>{$Property_Image_Primary|insert_image:300:100}</code> where width = 300, height = 100.'},

  //############################################################################
  {'label':'header',        'value':'Transaction'},
  //############################################################################

    {'label':'subheader',                                 'value':'Suite Information'},
      {'label':'Suite Number',                            'value':'Suite'},
      {'label':'Suite Size',                              'value':'Suite Size'},
      {'label':'Total Building Size',                     'value':'Property: Total Building Size'},
      {'label':'Pro Rata Share Building Opex',            'value':'Pro Rata Share|number_format:2'},
      {'label':'Description of Demised Premises/Suite',   'value':'Suite Description'},

    {'label':'subheader',                                 'value':'Earnest Money'},
      {'label':'Earnest Money',                           'value':'Earnest Money (Sale)'},
      {'label':'Earnest Money Amount',                    'value':'Earnest Money Amount'},
      {'label':'Close Date ',                             'value':'Close Date|date_format:"F j, Y"'},
      {'label':'Due Diligence Period Expiration Date',    'value':'Due Diligence Period Expiration Date|date_format:"F j, Y"'},

    {'label':'subheader',                                 'value':'Commission Details'},
      {'label':'Gross Value of Transaction $',            'value':'Transaction Size|number_format:2'},
      {'label':'Gross Commission %',                      'value':'Gross Commission Percentage|number_format:2'},
      {'label':'Company Commission %',                    'value':'Company Commission Percent|number_format:2'},
      {'label':'Co-Broker Commission %',                  'value':'Co-Broker Commission Split|number_format:2'},
      {'label':'Gross Commission $',                      'value':'Gross Commission|number_format:2'},
      {'label':'Company Commission $',                    'value':'Company Commission Amount|number_format:2'},
      {'label':'Co-Broker Commission $',                  'value':'Outside Commission Amount|number_format:2'},
      {'label':'Commission to be paid by',                'value':'Commission To Be Paid By'},
      {'label':'Commission Notes',                        'value':'Commission Notes'},

    {'label':'subheader',                                 'value':'Residual Commission Details'},
      {'label':'Gross Residual Commission Dollars',        'value':'Gross Residual Commission Dollars'},
      {'label':'Gross Residual Commission Percent',        'value':'Gross Residual Commission Percent'},
      {'label':'Company Residual Commission Dollars',      'value':'Company Residual Commission Dollars'},
      {'label':'Company Residual Commission Percent',      'value':'Company Residual Commission Percent'},
      {'label':'Co-Broker Residual Commission Dollars',   'value':'Co Broker Residual Commission Dollars'},
      {'label':'Co-Broker Residual Commission Percent',    'value':'Co Broker Residual Commission Percent'},
      {'label':'Residual Commission First Mo Dollars',     'value':'Residual Commission First Mo Dollars'},
      {'label':'Residual Commission First Mo Percent',     'value':'Residual Commission First Mo Percent'},
      {'label':'Residual Commission Remaining Mo Dollars', 'value':'Residual Commission Remaining Mo Dollars'},
      {'label':'Residual Commission Remaining Mo Percent', 'value':'Residual Commission Remaining Mo Percent'},

    {'label':'subheader',                     'value':'LeaseTransaction Info'},
      {'label':'Lease Commencement Date',     'value':'Lease Commencement Date|date_format:"F j, Y"'},
      {'label':'Lease Expiration Date',       'value':'Lease Expiration Date|date_format:"F j, Y"'},
      {'label':'Lease Term (Months)',         'value':'Lease Term Months'},
      {'label':'Security Deposit (Yes/No)',   'value':'Security Deposit'},
      {'label':'Security Deposit Amount',     'value':'Security Deposit Amount'},
      {'label':'Security Deposit Held By',    'value':'Security Deposit Held By'},
      {'label':'Base Year',                   'value':'Base Year'},

  //############################################################################
  {'label':'header',        'value':'Contact'},
  //############################################################################

    {'label':'subheader',         'value':'Buyer Acount'},
      {'label':'Account Name',    'value':'Buyer Account: Account Name'},
      {'label':'Street Address',  'value':'Buyer Account: Billing Street'},
      {'label':'City',            'value':'Buyer Account: Billing City'},
      {'label':'State',           'value':'Buyer Account: Billing State Province'},
      {'label':'Zipcode',         'value':'Buyer Account: Billing Zip Postal Code'},
      {'label':'Country',         'value':'Buyer Account: Billing Country'},

    {'label':'subheader',         'value':'Buyer Contact (Primary)'},
      {'label':'Full Name',       'value':'Primary Buyer Contact: Full Name'},
      {'label':'First Name',      'value':'Primary Buyer Contact: First Name'},
      {'label':'Last Name',       'value':'Primary Buyer Contact: Last Name'},
      {'label':'Title',           'value':'Primary Buyer Contact: Title'},
      {'label':'Department',      'value':'Primary Buyer Contact: Department'},
      {'label':'Email',           'value':'Primary Buyer Contact: Email'},
      {'label':'Fax',             'value':'Primary Buyer Contact: Business Fax'},
      {'label':'Phone',           'value':'Primary Buyer Contact: Business Phone'},
      {'label':'Mobile Phone',    'value':'Primary Buyer Contact: Mobile Phone'},

    {'label':'subheader',         'value':'Seller Acount'},
      {'label':'Account Name',    'value':'Seller Account: Account Name'},
      {'label':'Street Address',  'value':'Seller Account: Billing Street'},
      {'label':'City',            'value':'Seller Account: Billing City'},
      {'label':'State',           'value':'Seller Account: Billing State Province'},
      {'label':'Zipcode',         'value':'Seller Account: Billing Zip Postal Code'},
      {'label':'Country',         'value':'Seller Account: Billing Country'},

    {'label':'subheader',     'value':'Seller Contact (Primary)'},
      {'label':'Full Name',       'value':'Primary Seller Contact: Full Name'},
      {'label':'First Name',      'value':'Primary Seller Contact: First Name'},
      {'label':'Last Name',       'value':'Primary Seller Contact: Last Name'},
      {'label':'Title',           'value':'Primary Seller Contact: Title'},
      {'label':'Department',      'value':'Primary Seller Contact: Department'},
      {'label':'Email',           'value':'Primary Seller Contact: Email'},
      {'label':'Fax',             'value':'Primary Seller Contact: Business Fax'},
      {'label':'Phone',           'value':'Primary Seller Contact: Business Phone'},
      {'label':'Mobile Phone',    'value':'Primary Seller Contact: Mobile Phone'},

    {'label':'subheader',         'value':'Landlord Acount'},
      {'label':'Account Name',    'value':'Landlord Account: Account Name'},
      {'label':'Street Address',  'value':'Landlord Account: Billing Street'},
      {'label':'City',            'value':'Landlord Account: Billing City'},
      {'label':'State',           'value':'Landlord Account: Billing State Province'},
      {'label':'Zipcode',         'value':'Landlord Account: Billing Zip Postal Code'},
      {'label':'Country',         'value':'Landlord Account: Billing Country'},

    {'label':'subheader',     'value':'Landlord Contact (Primary)'},
      {'label':'Full Name',       'value':'Primary Landlord Contact: Full Name'},
      {'label':'First Name',      'value':'Primary Landlord Contact: First Name'},
      {'label':'Last Name',       'value':'Primary Landlord Contact: Last Name'},
      {'label':'Title',           'value':'Primary Landlord Contact: Title'},
      {'label':'Department',      'value':'Primary Landlord Contact: Department'},
      {'label':'Email',           'value':'Primary Landlord Contact: Email'},
      {'label':'Fax',             'value':'Primary Landlord Contact: Business Fax'},
      {'label':'Phone',           'value':'Primary Landlord Contact: Business Phone'},
      {'label':'Mobile Phone',    'value':'Primary Landlord Contact: Mobile Phone'},

    {'label':'subheader',         'value':'Tenant Acount'},
      {'label':'Account Name',    'value':'Tenant Account: Account Name'},
      {'label':'Street Address',  'value':'Tenant Account: Billing Street'},
      {'label':'City',            'value':'Tenant Account: Billing City'},
      {'label':'State',           'value':'Tenant Account: Billing State Province'},
      {'label':'Zipcode',         'value':'Tenant Account: Billing Zip Postal Code'},
      {'label':'Country',         'value':'Tenant Account: Billing Country'},

    {'label':'subheader',     'value':'Tenant Contact (Primary)'},
      {'label':'Full Name',       'value':'Primary Tenant Contact: Full Name'},
      {'label':'First Name',      'value':'Primary Tenant Contact: First Name'},
      {'label':'Last Name',       'value':'Primary Tenant Contact: Last Name'},
      {'label':'Title',           'value':'Primary Tenant Contact: Title'},
      {'label':'Department',      'value':'Primary Tenant Contact: Department'},
      {'label':'Email',           'value':'Primary Tenant Contact: Email'},
      {'label':'Fax',             'value':'Primary Tenant Contact: Business Fax'},
      {'label':'Phone',           'value':'Primary Tenant Contact: Business Phone'},
      {'label':'Mobile Phone',    'value':'Primary Tenant Contact: Mobile Phone'},

    {'label':'subheader',     'value':'Co-Broker Acount'},
      {'label':'Account Name',    'value':'Co-Broker Account: Account Name'},
      {'label':'Street Address',  'value':'Co-Broker Account: Billing Street'},
      {'label':'City',            'value':'Co-Broker Account: Billing City'},
      {'label':'State',           'value':'Co-Broker Account: Billing State Province'},
      {'label':'Zipcode',         'value':'Co-Broker Account: Billing Zip Postal Code'},
      {'label':'Country',         'value':'Co-Broker Account: Billing Country'},

    {'label':'subheader',     'value':'Co-Broker Contact (Primary)'},
      {'label':'Full Name',       'value':'Co-Broker Contact: Full Name'},
      {'label':'First Name',      'value':'Co-Broker Contact: First Name'},
      {'label':'Last Name',       'value':'Co-Broker Contact: Last Name'},
      {'label':'Title',           'value':'Co-Broker Contact: Title'},
      {'label':'Department',      'value':'Co-Broker Contact: Department'},
      {'label':'Email',           'value':'Co-Broker Contact: Email'},
      {'label':'Fax',             'value':'Co-Broker Contact: Business Fax'},
      {'label':'Phone',           'value':'Co-Broker Contact: Business Phone'},
      {'label':'Mobile Phone',    'value':'Co-Broker Contact: Mobile Phone'},

    {'label':'subheader',     'value':'Created By (The user who created the record)'},
      {'label':'Full Name',       'value':'Created By: Full Name'},
      {'label':'First Name',      'value':'Created By: First Name'},
      {'label':'Last Name',       'value':'Created By: Last Name'},
      {'label':'Company Name',    'value':'Created By: Company Name'},
      {'label':'Street Address',  'value':'Created By: Street'},
      {'label':'City',            'value':'Created By: City'},
      {'label':'State',           'value':'Created By: State Province'},
      {'label':'Zip',             'value':'Created By: Zip Postal Code'},
      {'label':'Email',           'value':'Created By: Email'},
      {'label':'Phone',           'value':'Created By: Phone'},
      {'label':'Fax',             'value':'Created By: Fax'},
      {'label':'Cell',           'value':'Created By: Cell'},

  //############################################################################
  {'label':'header',        'value':'Date'},
  //############################################################################

    {'label':'subheader',                 'value':'Date Formats'},
      {'label':'Listing Commencement',    'value':'Listing Agreement Commencement Date|date_format:"F j, Y"'},
      {'label':'Listing Expiration',      'value':'Listing Agreement Expiration Date|date_format:"F j, Y"'},
      {'label':'Create Date',             'value':'Created By Created Date|date_format:"F j, Y"'},
      {'label':'Lease Commencement',      'value':'Lease Commencement Date'},
      {'label':'Lease Expiration',        'value':'Lease Expiration Date'},
      {'label':'Option to Renew',         'value':'Option to Renew'},
      {'label':'Option to Terminate',     'value':'Option to Terminate'},
      {'label':'Due Diligence',           'value':'Due Diligence Period Expiration Date'},
      {'label':'text',                    'value': '<code>|date_format\:"F j, Y"</code> produces March 1, 2016.'},
      {'label':'text',                    'value': '<code>|date_format\:"m/d/Y"</code> produces 03/01/2016.'},

  //############################################################################
  {'label':'header',        'value':'Rent Table'},
  //############################################################################

    {'label':'subheader',                 'value':'Rent Table'},
      {'label':'text',                    'value': 'Please copy/paste from the <a href="RentTableMerge.docx">Rent Table Document</a>.'}


];
