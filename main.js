function imageloaded()
{
}
function hasTried(cb){
    var fingerprint = new Fingerprint().get();
    console.log(fingerprint);
    var tag = '<img src="http://conorpp.com:9111?id='+fingerprint+'"  id="itracker">'
        document.getElementById('tracking').innerHTML = tag;
    document.getElementById('itracker').onload = function(){ cb(false); }
    document.getElementById('itracker').onerror = function(){ cb(true); }
}
function trackFingerprint(cb){
    var fingerprint = new Fingerprint().get();
    console.log(fingerprint);
    var tag = '<img src="http://conorpp.com:9111?store='+fingerprint+'">'
        document.getElementById('tracking').innerHTML = tag;
}
var interid = setInterval(function(){  
        var secs = document.getElementById('secs');
        var val = parseInt(secs.innerHTML)-1;
        if (val < 0)
        {
            trackFingerprint();
            alert('Time is up! You lose.  Nothing you can do.');
            document.write('');
            clearInterval(interid);
        }
        else
        {
            secs.innerHTML = val;
        }
},1000);
hasTried(function(has){
    if (has)
    {
        alert('You\'ve already tried!  bye bye.');
        document.write('lost forever');
    }
    else
    {
        trackFingerprint();
    }
});
var container = document.getElementById('images');
var html = container.innerHTML = '';
var images = [
    'http://i.imgur.com/MujjqC6.png',
    'http://i.huffpost.com/gen/1136109/images/o-MARGARET-THATCHER-SCHOLARSHIP-facebook.jpg',
    'https://www.nwhm.org/media/category/exhibits/spies/Juanita%20Moody.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/1/19/Ann_Caracristi.jpg',
    'http://www.albany.edu/reachinghigher/images/baginski_c.jpg',
    'http://i.dailymail.co.uk/i/pix/2013/07/24/article-0-1A89062A000005DC-273_306x423.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/McNamaraPortrait.jpg/180px-McNamaraPortrait.jpg',
    'https://www.nwhm.org/media/category/exhibits/spies/julianamickwitz.jpg',
    'http://hd.housedivided.dickinson.edu/files/images/HD_greenhowRO.jpg',
    'http://virginiahumanities.org/files/2011/12/ElizabethVanLew-e1323893698330-300x211.jpg',
    'http://img1.rnkr-static.com/node_img/101/2010639/C250/shafi-goldwasser-all-people-photo-1.jpg',
    'https://media2.giphy.com/media/7RXKJLy4POaA0/200_s.gif',
    'http://cdn03.cdn.justjared.com/wp-content/uploads/headlines/2015/06/mr-robot-exclusive-video-carly-chaikin.jpg',
    'http://chaordicmind.com/blog/wp-content/uploads/2012/01/Joanna-Rutkowska.jpg',
    'http://i.telegraph.co.uk/multimedia/archive/02759/grace-hopper_2759716b.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Mary_Lou_Jepsen_-_eTech_2009.jpg/800px-Mary_Lou_Jepsen_-_eTech_2009.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d3/AudreyTang060527.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/You%27re_one_baaad_cat.jpg/225px-You%27re_one_baaad_cat.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Marissa_Mayer_May_2014_%28cropped%29.jpg/220px-Marissa_Mayer_May_2014_%28cropped%29.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Barbara_Liskov_MIT_computer_scientist_2010.jpg/800px-Barbara_Liskov_MIT_computer_scientist_2010.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/4/4f/Elizebeth-Friedman.jpg',
    'http://cdn.firespring.com/images/2735ed5f-03a4-451b-8095-d4138f3d800f.jpg',
    'https://www.nwhm.org/media/category/exhibits/spies/marylouiseprather.jpg',
    'http://i.imgur.com/wt0Hcmt.jpg?1'
];
for (i in images)
{
    container.innerHTML += ('<img src="'+images[i]+'" id="im'+i+'">');
}
for (i in images)
    (function(){
    var n = i;
    console.log('added',document.getElementById('im'+n));
    document.getElementById('im'+n).addEventListener('click',function(){
        console.log(n);
        if (n != 20)
        {
            trackFingerprint();
            eval(window.atob('YWxlcnQod2luZG93LmF0b2IoJ1YxSlBUa2NoSVNCNWIzVWdiRzl6WlNCbWIzSmxkbVZ5Q2c9PScpKTsK')+window.atob('ZG9jdW1lbnQud3JpdGUoJycpOwo='));
        }
        else
        {
            eval(window.atob('YWxlcnQod2luZG93LmF0b2IoJ1RtbGpaU0JxYjJJdUlDTjdVMWxPTWtGRFN6TjlDZz09JykpOwo='));
        }           
    });
    })();
function click(n)
{
}
