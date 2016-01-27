$(document).ready(function() {
    $('#loadingAnim').hide();
    $('#2013-2014_select').hide();
    $('#2014-2015_select').hide();
    $('#yearSelect').change(function() {
        if ($('#yearSelect').val() == "2013-2014") {
            $('#2014-2015_select').hide();
            $('#2015-2016_select').hide();
            $('#2013-2014_select').show();
            $('#2013-2014_select').change(function() {
                newsletterSelect();
            });
        }
        else if ($('#yearSelect').val() == "2014-2015") {
            $('#2013-2014_select').hide();
            $('#2015-2016_select').hide();
            $('#2014-2015_select').show();
            $('#2014-2015_select').change(function() {
                newsletterSelect();
            });
        }
        else if ($('#yearSelect').val() == "2015-2016") {
            $('#2013-2014_select').hide();
            $('#2014-2015_select').hide();
            $('#2015-2016_select').show();
            $('#2015-2016_select').change(function() {
                newsletterSelect();
            });
        }
        else {
            throw new Error("displayNewsletter(): Invalid year selected. How? I don't know.");
        }
    });
});

function newsletterSelect() {
    document.getElementById('loadingAnim').style.display = "block";
    $('#loadingAnim').show();
    removeNewsletter();
    displayNewsletter();
    $('#newsletter').on('load', function(){
        $('#loadingAnim').hide();
    });
}

function displayNewsletter() {
    var year = document.getElementById('yearSelect').value;  // String - year that was selected
    var newsletterNames_2013_2014 = [];
    var newsletterNames_2014_2015 = [];
    var newsletterNames_2015_2016 = [];
    var i;

    /* assigns newsletter name values to the empty array */
    for(i = 1; i < 27; i++) {  // array should be of length 26 because there were 26 newsletters
        newsletterNames_2013_2014[i-1] = "2013-2014_n" + i;
    }
    for (i = 1; i < 31; i++) {  // array should be of length 30 because there were 30 newsletters
        newsletterNames_2014_2015[i-1] = "2014-2015_n" + i;  // assigns to the index of [i-1] because array indexes start count at 0
    }
    for (i = 1; i < 17; i++) {  // array should be of length 16 because there were 16 newsletters
        newsletterNames_2015_2016[i-1] = "2015-2016_n" + i;  // assigns to the index of [i-1] because array indexes start count at 0
    }
    
    /* array of the links to the newsletter images hosted on Dropbox - links were shortened using Google url shortener */
    var newsletterLinks_2013_2014 = ["http://goo.gl/y2F7LZ", "http://goo.gl/fzoZRh", "http://goo.gl/cQn2ch", "http://goo.gl/vWP6GR", "http://goo.gl/XDQl6K",
            "http://goo.gl/3VVIv5", "http://goo.gl/fLQ5aW", "http://goo.gl/p5xTjX", "http://goo.gl/bLpjVM", "http://goo.gl/7E0t2U", "http://goo.gl/4gCmKV",
            "http://goo.gl/HzkEVA", "http://goo.gl/5d3l4Z", "http://goo.gl/GaThKp", "http://goo.gl/HPTa7y", "http://goo.gl/sRIUCX", "http://goo.gl/eYv8Mn",
            "http://goo.gl/j9oVtE", "http://goo.gl/CRvUdD", "http://goo.gl/3c6pPi", "http://goo.gl/JuPHv4", "http://goo.gl/15x8d8", "http://goo.gl/LILsct",
            "http://goo.gl/aWTSc9", "http://goo.gl/QAJsdb", "http://goo.gl/1yjNEK", "http://goo.gl/zg23l4",];

    var newsletterLinks_2014_2015 = ["https://goo.gl/7x9Sm5", "https://goo.gl/ifspwV", "https://goo.gl/JRXHkx", "https://goo.gl/wW4x0j", "https://goo.gl/jQkoqs",
            "https://goo.gl/HVbI9u", "https://goo.gl/kFKCDk", "https://goo.gl/yc8Y41", "https://goo.gl/BkG4yZ", "https://goo.gl/iEeoS7", "https://goo.gl/scgmcH",
            "https://goo.gl/vKNrwz", "https://goo.gl/0ZPY4T", "https://goo.gl/il05ki", "https://goo.gl/kVPkyQ", "https://goo.gl/7q8wGZ", "https://goo.gl/3oYemE",
            "https://goo.gl/DTlLJK", "https://goo.gl/qlW36K", "https://goo.gl/Je2AfE", "https://goo.gl/7qI14X", "https://goo.gl/Ov5o0E", "https://goo.gl/Jyv8d3",
            "https://goo.gl/OtmB7H", "https://goo.gl/9mePmL", "https://goo.gl/rQJ245", "https://goo.gl/K69emt", "https://goo.gl/PSxGvH", "https://goo.gl/ONXVKW",
            "http://www.vsa.neu.edu/wp-content/uploads/2015/04/vsaNewsletter_5-3-15.jpg"];

    var newsletterLinks_2015_2016 = 
        [
            "https://www.dropbox.com/s/8w6qecg0fhlyfin/Fall%20Newsletter%20%231.jpg?raw=1",
            "https://www.dropbox.com/s/vumskgw9ijddxlw/Fall%20Newsletter%20%232%20FINAL.jpg?raw=1",
            "https://www.dropbox.com/s/z64onf30rva2pe3/Fall%20Newsletter%20%233%20FINAL.jpg?raw=1",
            "https://www.dropbox.com/s/j6km67ibdtcocnj/Fall%20Newsletter%20%234%20final.jpg?raw=1",
            "https://www.dropbox.com/s/o029i27cdmhrpue/Fall%20Newsletter%20%235%20finall.jpg?raw=1",
            "https://www.dropbox.com/s/nu1b6gq9bdb0ah6/Fall%20Newsletter%20%236%20Final.jpg?raw=1",
            "https://www.dropbox.com/s/4sfmfnvhkn5f752/Fall%20Newsletter%20%237%20FINAL.jpg?raw=1",
            "https://www.dropbox.com/s/igaxitfhha56rga/Fall%20Newsletter%20%238%20final.jpg?raw=1",
            "https://www.dropbox.com/s/f67a22ncdng7uh3/Fall%20Newsletter%20%239%20final.jpg?raw=1",
            "https://www.dropbox.com/s/9jyltuk1hh0utxu/Fall%20Newsletter%20%2310%20FINAL.jpg?raw=1",
            "https://www.dropbox.com/s/kbhdaidne1ycuf7/Fall%20Newsletter%20%2311%20FINAL.jpg?raw=1",
            "https://www.dropbox.com/s/qch7dppmh49ts7k/Fall%20Newsletter%20%2312%20FINAL.jpg?raw=1",
            "https://www.dropbox.com/s/4bkdc4cm750t9bt/Fall%20Newsletter%20%2313%20FINAL.jpg?raw=1",
            "https://www.dropbox.com/s/zbx27oa422y2se4/Freshman%20Newsletter%20final.jpg?raw=1",
            "https://www.dropbox.com/s/vpj6c9h43hygpqz/Winter%20Newsletter%20%231.jpg?raw=1",
            "https://www.dropbox.com/s/u6mma90n3iap1xg/Winter%20Newsletter%20%232.jpg?raw=1"
        ];

    var time = <?php echo json_encode(time()); ?>;
    var newsletterEdition;
    var newsletterIndex;
    var newsletterImage;
    if (year == "2013-2014") {
        newsletterEdition = document.getElementById('2013-2014_select').value;  // String - edition of newsletter selected
        newsletterIndex = newsletterNames_2013_2014.indexOf(newsletterEdition);  // int - array index of newsletter edition
        newsletterImage = document.createElement('iframe');  // creates HTML iframe element and assigns to newsletterImage variable
        newsletterImage.setAttribute('id', "newsletter");  // sets the id of the iframe element
        newsletterImage.src = newsletterLinks_2013_2014[newsletterIndex];  // sets the source of image
        newsletterImage.setAttribute('width', "800");
        newsletterImage.setAttribute('height', "2000");
        newsletterImage.setAttribute('display', "block");
        document.getElementById('newsletterDiv').appendChild(newsletterImage);
    }
    else if (year == "2014-2015") {
        newsletterEdition = document.getElementById('2014-2015_select').value;  // String - edition of newsletter selected       
        newsletterIndex = newsletterNames_2014_2015.indexOf(newsletterEdition);  // int - array index of newsletter edition
        newsletterImage = document.createElement('img');  // creates HTML image element and assigns to newsletterImage variable
        newsletterImage.setAttribute('id', "newsletter");  // sets the id of the image element
        newsletterImage.src = newsletterLinks_2014_2015[newsletterIndex] + "?" + time;  // sets the source of image
        newsletterImage.setAttribute('alt', newsletterEdition);  // sets the 'alt' attribute of the image
        document.getElementById('newsletterDiv').appendChild(newsletterImage);
    }
    else if (year == "2015-2016") {
        newsletterEdition = document.getElementById('2015-2016_select').value;  // String - edition of newsletter selected       
        newsletterIndex = newsletterNames_2015_2016.indexOf(newsletterEdition);  // int - array index of newsletter edition
        newsletterImage = document.createElement('img');  // creates HTML image element and assigns to newsletterImage variable
        newsletterImage.setAttribute('id', "newsletter");  // sets the id of the image element
        newsletterImage.src = newsletterLinks_2015_2016[newsletterIndex] + "?" + time;  // sets the source of image
        newsletterImage.setAttribute('alt', newsletterEdition);  // sets the 'alt' attribute of the image
        document.getElementById('newsletterDiv').appendChild(newsletterImage);
    }
    else {
        throw new Error("displayNewsletter(): Invalid year selected. How? I don't know.");  // yeah idk how this would happen, but you never know
    }
}

function removeNewsletter() {
    var newsletterElement = document.getElementById('newsletter');
    var parentDiv = document.getElementById('newsletterDiv');

    /* checks if the image element of newsletter exists and removes the element if it does */
    if (newsletterElement == null) {
        return;
    }
    else {
        if (newsletterElement.nodeName === "IMG") {
        $('newsletterElement img').src = "";
            $('#newsletterElement img').removeAttr('src');
            $('#newsletterElement').empty();
        }
        else {
        $('#newsletterElement iframe').src = "";
            $('#newsletterElement iframe').removeAttr('src');
            $('#newsletterElement').empty();
        }
        parentDiv.removeChild(newsletterElement);
    }
}