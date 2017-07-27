

$(document).ready(function(){    
    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        draggable: true, // Choose whether you can drag to open on touch screens,
    });
    $('select').material_select();
    $('.tiles').masonry({
        itemSelector: '.tile',
        gutter: 0,
        fitWidth: true
    });
    setTimeout(function(){
        $('.tiles').css('opacity','1');
    },300);
    
    $('.modal').modal({complete: function() { 
        $('#location').text('--');
        $('#time').text('--');
        $('#date').text('--');
        $('#teacher').html('');
    }});
    $('.openme').click(function(){
        var className = $(this).find('.cardDesc').text().replace('CLASS','');
        var classContent = $(this).find('.cardContent').text();
        var html = '<option value="" disabled selected>Choose your session</option>';
        for (var item in sessionList[className]) {
            var newhtml = '<option value="'+item+'">'+sessionList[className][item]['DATE']+'</option>';
            html = html + newhtml;
        }
        $('#selectField').html(html);
        $('.name').text(' ' + className);
        $('.classDescModal').text(classContent);
        $('select').material_select();
        $('#modal1').modal('open');
    });
    $('#selectField').change(function(){
        var value = $(this).val();
        var className = $('.name').text();
        className = className.substr(1,className.length)
        var session = sessionList[className][value];
        
        $('#location').text(session['LOCATION']);
        $('#time').text(session['TIME']);
        $('#date').text(session['DATE']);
        $('#teacher').html(instructors[session['INSTRUCTOR']]);
        
    });
    
    
     var sessionList = {
        'Web Development': [
            {
                'INSTRUCTOR': 'Sidd Iyer',
                'DATE': 'Sunday, from Jan 7th - March 11th',
                'LOCATION': '73 West Portola Ave, Los Altos',
                'TIME': '4pm - 6pm'
            },
            {
               'INSTRUCTOR': 'Sidd Iyer',
                'DATE': 'Sunday, from Jun 10th - July 5th',
                'LOCATION': '73 West Portola Ave, Los Altos',
                'TIME': '4pm - 6pm'
            }
            
        ],
        'App Development': [
            {
                'INSTRUCTOR': 'Sahil Morchi',
                'DATE': 'Sunday, Jan 7th - March 11th',
                'LOCATION': '915 Mackenzie Drive, Sunnyvale',
                'TIME': '4pm - 6pm'
            },
            {
                'INSTRUCTOR': 'Sahil Morchi',
                'DATE': 'Sunday, from Jun 10th - July 5th',
                'LOCATION': '915 Mackenzie Drive, Sunnyvale',
                'TIME': '4pm - 6pm'
            }
           
        ],
        'Game Development': [
            {
                'INSTRUCTOR': 'Sahil Morchi',
                'DATE': 'Sunday, Jan 7th - March 11th',
                'LOCATION': 'Los Altos High School, Room 702',
                'TIME': '4pm - 6pm'
            },
            {
                'INSTRUCTOR': 'Sahil Morchi',
                'DATE': 'Everyday, from Jun 10th - July 5th',
                'LOCATION': 'Mountain View High School, Room 702',
                'TIME': '4pm-6pm'
            }
            
        ]
    }
    var instructors = {
        'Sidd Iyer' : '<div id="sidd" class="hoverable pointer chip"> <img src="img/sidd.PNG" alt="Contact Person"> Sidd Iyer </div>',
        'Sahil Morchi' : '<div id="sahil" class="hoverable pointer openme chip"> <img src="img/sahil.jpg" alt="Contact Person"> Sahil Morchi </div>',
    }
});
